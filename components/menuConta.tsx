'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
import { DelConta, Pagar, UpdateContaNP } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Tesseract from 'tesseract.js';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf.mjs';

GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;


type MConta = {
    img: string;
    name: string;
    scd: string;
    date: Date;
    total: Number;
    id:string;
    url:string;
}

const sleep = (delay: number | undefined) => new Promise((resolve) => setTimeout(resolve, delay))



const MenuConta: React.FC<MConta> = props => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //********************************************************************************************************************* */



  //Criando um useState para guardar o estado do 'upload'
  const [uploading, setUploading] = useState(false);
  //Criando um useState(do tipo 'File' com valor inicial null) para guardar or arquivo
  const [fileS, setFileS] = useState<File | null>(null)





  //Função para pegar os dados do arquivo
  const getData =  async (file: File | null) => {
    //Var para resultado da analise
    let res1 = 'Analise Falhou!'
    let res2: String | undefined = 'error'

    //Mundando o estado do 'uploading'
    setUploading(true);
    setIsOpen(false);


    Swal.fire({
      title: "O Arquivo está sendo analizado",
      timer:20000,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        Swal.fire({title:res1, text:res2 === 'error' ? 'Mas o arquivo foi anexado, recarregue a página para acessa-lo' : '', icon:res2 as undefined});
        //Mudando o estado do 'update'
        setUploading(false);
        //setIsOpen(true);
      }
    });



    //Criando o FormData que será enviado para ser analisado no backend
    var fm = new FormData();

    //Verificando se ha arquivo (isso tmb irá tirar o valor de 'null' da variavel para que ela possa ser lida
    if (!file) return 0;

    //TRANSFORMANDO O TIPO 'File' EM TIPO 'ArrayBuffer'
    const bytes = await file.arrayBuffer()

    //PEGANDO O 'Buffer' DO 'ArrayBuffer' PARA CONSEGUIR SER LIDO PELA FUNÇÃO 'writeFile'
    const buffer = Buffer.from(bytes)

    //Extraindo o texto do PDF
    //const worker = await Tesseract.recognize("eng", 1, {workerPath: "./node_modules/tesseract.js/src/worker-script/node/index.js", corePath: "./node_modules/tesseract.js-core/index.js"});

    // Convert PDF Buffer to Image for Tesseract.js
    const pdf = await getDocument(URL.createObjectURL(file)).promise;
    let pdfText = '';
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 2 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    if(context){
      await page.render({ canvasContext: context, viewport }).promise;
    }
    const imageData = context?.getImageData(0, 0, canvas.width, canvas.height);
    if (imageData && imageData.data) {
      const datai = imageData.data;
      const threshold = 235; // You can adjust this value as needed

      for(let i = 0; i < datai.length; i += 4) {
          const brightness = 0.34 * datai[i] + 0.5 * datai[i + 1] + 0.16 * datai[i + 2];
          const value = brightness >= threshold ? 255 : 0;
          datai[i] = value;
          datai[i + 1] = value;
          datai[i + 2] = value;
      }

      context?.putImageData(imageData, 0, 0);
    } else {
        console.error('Image data is undefined or null');
    }

    // Convert canvas to data URL
    /*const dataURL = canvas.toDataURL('image/png');

    // Create a link element
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas-image.png';

    // Append the link to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);*/


    const text = await Tesseract.recognize(canvas, 'por').then(({ data: { text } }) => text);

    pdfText = text;
    //console.log(`TextC:\n${pdfText}`);


    //Colocando o arquivo no FormData
    fm.append('file', file);
    fm.append('id', props.id);
    fm.append('url', props.url);
    fm.append('text', pdfText);

    //Enviando o arquivo para ser analisado pelo programa python
    await axios.post('/api/UploadDef', fm, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(async (response) => {
      const data = response.data;
      router.refresh();
      res1 = 'Analise Concluida!'
      res2 = 'success'
      const nl = Swal.getTimerLeft() as Number
      Swal.increaseTimer(-nl+50)

    })
    
    
  }




  //Função para salvar o arquivo recebido na 'dropbox' na variavel fileS
  const onDrop = useCallback(async (files: File[]) => {
    setFileS(files[0]);

  }, [])

  //Criando o parametro da lib dropzone
  const dropzone = useDropzone({
    onDrop,
    accept: {
        'application/pdf': ['.pdf'],
    },
  })

  //Executando a função 'getData' toda fez que o arquivo muda
  React.useEffect(() => {
    if (fileS) {
        getData(fileS);
    }
  }, [fileS]);


  //********************************************************************************************************************* */


  const PagarAction = (formData : FormData) => {
    Pagar(formData);
    router.refresh();
  }


  //********************************************************************************************************************* */

  const DelAction = (formData : FormData) => {
    Swal.fire({
      title: "Quer mesmo deletar essa conta?",
      icon: 'warning',
      showDenyButton: false,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: "Deletar conta",
      confirmButtonColor: 'red',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        DelConta(formData);
        router.refresh();
        Swal.fire("Deletada", "", "success");
      }
    });

  }

  //********************************************************************************************************************* */


  const icon_path = `/icon_contas/${props.img}.png`
  var stl_sub_container = 'w-full border-b border-gray-400 pt-2 flex flex-row items-center bg-gray-50 relative'
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  

  return (
    <div className='flex flex-col items-center justify-center w-full'>

      <div className={stl_sub_container} onClick={toggleMenu} style={{ cursor: 'pointer' }}>
        {(today.getTime() - props.date.getTime() > 86400000) ? <span className='pl-2'><Image src='/alert_icon.png' alt="Conta Vencida!" width={22} height={27} /></span> : null}
        <span className='pl-2'><Image src={icon_path} alt="" width={22} height={27} /></span>
        <p className='pl-1 text-md'>{props.name}</p>
        <p className='absolute right-72 text-sm'>{`${props.date.getUTCDate()}/${props.date.getUTCMonth()+1}/${props.date.getUTCFullYear()}`}</p>
        <p className='absolute right-20 text-sm'>{`R$ ${props.total.toLocaleString('pt-BR')}`}</p>
        <span className='absolute right-8'><Image src="/arrow_head_down.png" alt="" width={13} height={13} /></span>
      </div>



      <div className='w-full'>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='flex w-full justify-center'
            >
              <div className='relative bg-gray-100 w-full max-w-[1080px] h-[190px] pt-2 border rounded-md border-gray-200 shadow-md'>

                <div className='p-2 flex flex-col w-full'>
                  
                  <form action={DelAction} className='absolute top-5 right-5'>
                      <input type="hidden" name='id' value={props.id} />
                      <input type="hidden" name='url' value={props.url} />
                      <input type="hidden" name='curl' value='' />

                      <button className='bg-red-600 p-1 w-16 text-center rounded text-white'>
                      Deletar
                      </button>
                  </form>

                  <div className='space-y-0 w-full'>
                      {/*DIV QUE CONTEM OS DADOS DO ARQUIVO*/}
                      <div className='space-y-3 flex flex-col w-full'>
                        <form action={UpdateContaNP} className='space-y-1'>

                            <input type="hidden" name='id' value={props.id} />
                            <input type="hidden" name='pag' value={'false'} />

                            <div className='flex flex-row w-full space-x-1'>
                              <label className='font-bold text-sm'>Nome: </label>
                              <input type='text' name='name' defaultValue={props.name} className='w-[345px] bg-transparent text-sm'></input>
                            </div>

                            <div className='flex flex-row w-full space-x-1'>
                              <label className='font-bold text-sm'>Codigo de Barras: </label>
                              <input type='text' name='scd' defaultValue={props.scd} className='w-[380px] bg-transparent text-sm'></input>
                            </div>

                            <div className='flex flex-row w-full space-x-1'>
                              <label className='font-bold text-sm'>Data de Vencimento: </label>
                              <p className='text-sm'>{`${props.date.getUTCDate()}/${props.date.getUTCMonth()+1}/${props.date.getUTCFullYear()}`}</p>
                              <input type='date' name='due_date' className='w-[18%] rounded-md border border-gray-500 text-sm' ></input>
                            </div>

                            <div className='flex flex-row w-full space-x-1'>
                              <label className='font-bold text-sm'>Total: </label>
                              <input type='number' step='0.01' name='total' defaultValue={`${props.total}`} className='w-fit bg-transparent text-sm'></input>
                            </div>

                            <p><span className='font-bold text-sm'>Boleto: </span><a href={props.url} className='underline underline-offset-2 text-sm text-sky-700 hover:text-sky-600' target="_blank" >Link para o boleto</a></p>

                            <button
                            className='absolute top-4 right-[165px] bg-indigo-600 p-1 w-fit text-center rounded text-white'>
                            Salvar alterações
                            </button>

                        </form>

                      </div>
                  </div>



                  {/*DIV DA DROPZONE*/}
                  <div 
                      {...dropzone.getRootProps()} 
                      className={`absolute right-3 top-[60px] flex w-[300px] h-[100px] rounded-lg border-dashed border-4 border-gray-600 bg-gray-700 hover:border-gray-500 ${dropzone.isDragActive ? "border-sky-600" : "border-gray-600"}  hover:bg-gray-600 transition-all`}
                      >
                          <label htmlFor='dropzone-file' className='cursor-pointer w-full h-full'>
                              <div className='flex flex-col items-center justify-center pt-5 pb-6 w-full h-full'>
                                  <p className='mb-2 text-gray-400 text-lg'>
                                      <span className='font-bold'>{uploading ? 'Uploading...' : 'Envie o Arquivo'}</span>
                                  </p>
                                  <p className='text-gray-400 text-sm'>PDF</p>
                              </div>
                          </label>
                          <input {...dropzone.getInputProps()} className='hidden' type='file' />

                  </div>



                  <div className='absolute top-5 right-[80px] pr-5 flex flex-row'>
                      <form action={PagarAction}>
                          <input type="hidden" name='id' value={props.id} />
                          <input type="hidden" name='type' value={props.img} />
                          <input type="hidden" name='name' value={props.name} />

                          <button
                          className='bg-green-600 p-1 text-center rounded text-white'>
                          Pagar
                          </button>
                      </form>

                  </div>

                  



                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    
    </div>
  );
}

export default MenuConta