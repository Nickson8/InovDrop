'use server'

import { NextResponse, NextRequest } from 'next/server';
import { connectToDB } from '@/app/lib/utils';
import { Contssss } from '@/app/lib/models';
import {v2 as cloudinary} from 'cloudinary';


cloudinary.config({ 
    cloud_name: 'dntylhu7k', 
    secure: true,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});





//ANALISE DO SCD
function tn(str) {
    // Initialize variables to store the largest sequence found
    let maxSequence = '';
    let currentSequence = '';
  
    // Regular expression to match sequences of digits
    const digitRegex = /\d+/g;
    
    // Iterate through all matches of digit sequences in the string
    let match;
    while ((match = digitRegex.exec(str)) !== null) {
      currentSequence = match[0]; // Get the matched sequence
      
      // Compare the length of the current sequence with the maximum found
      if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence; // Update maxSequence if longer sequence found
      }
    }
    
    return maxSequence; // Return the largest number sequence found
  }

function get_scd(text) {
    let noSpacesStr = text.replace(/ /g, '');
    let cleanStr = noSpacesStr.replace(/\./g, '');
    cleanStr = cleanStr.replace(/\—/g, '');
    cleanStr = cleanStr.replace(/\-/g, '');
    //console.log(`|\n|\n|\n${cleanStr}\n|\n|\n|`);

    let lines = cleanStr.split('\n');

    let linha_scd = lines[0];

    for(let line of lines) {
        if(tn(line).length > tn(linha_scd).length) {
            linha_scd = line;
        }
    }

    //console.log(`|\n|\n${linha_scd}  -->  ${tn(linha_scd).length}\n|\n|`);
    if(tn(linha_scd).length == 47 || tn(linha_scd).length == 48){
        return tn(linha_scd);
    } else if(tn(linha_scd).length == 50){
        return tn(linha_scd).substring(3);
    } else if(tn(linha_scd).length >= 51){
        return tn(linha_scd).slice(-47);
    }else{
        return 'Codigo nao encontrado';
    }

}





//ANALISE DA DUE DATE
//FUNCTION TO CHECK IF ALL ELEMENTS IN THE LIST ARE THE SAME
function check(list) {
    if (list.length <= 0) {
        return true;
    }
    return list.every(ele => ele === list[0]);
}

// FUNCTION TO FIND THE DUE DATE
function getDueDate(string) {
    const datePattern = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/;

    let words = string.split(' ');

    // Cleaning the list of words
    words = words.filter(x => x !== '' && x !== ' ');

    // Finding the date by Method 1 ('in')
    let dates = [];
    words.forEach((word, i) => {
        if (['Vencimento', 'vencimento', 'Vencinento', 'vencinento'].some(v => word.includes(v))) {
            words.slice(i).some(wor => {
                if (datePattern.test(wor)) {
                    dates.push(wor);
                    return true; // break the loop
                }
                return false;
            });
        }
    });

    // Finding the date by Method 2 ('==')
    if (!check(dates) || dates.length === 0) {
        dates = [];
        words.forEach((word, i) => {
            if (['Vencimento', 'vencimento', 'Vencinento', 'vencinento'].includes(word)) {
                words.slice(i).some(wor => {
                    if (datePattern.test(wor)) {
                        dates.push(wor);
                        return true; // break the loop
                    }
                    return false;
                });
            }
        });
    }

    // Checking if the date is valid
    if (check(dates) && dates.length > 0) {
        return dates[0];
    } else {
        return 'ERROR-DATE';
    }
}




//ANALISE DO TOTAL
// Function to remove unwanted characters
function rreplace(string, find, replace, n_occurrences) {
    /**
     * Given a string, find and replace the first n_occurrences
     * found from the right of the string.
     */
    let temp = string.split(find).reverse();
    for (let i = 0; i < n_occurrences; i++) {
        if (temp.length > 1) {
            temp[0] = temp[0] + replace + temp[1];
            temp.splice(1, 1);
        }
    }
    return temp.reverse().join('');
}

function get_total(string) {
    const value_pattern = /^[0-9]+.{1,25}\,[0-9]{1,2}$/;

    let words = string.split(' ');

    // Cleaning the list of words
    words = words.filter(x => x !== '' && x !== ' ');

    let valores = [];

    // Finding the value using Method 1
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.includes('Valor') || word.includes('valor')) {
            for (let j = i + 1; j < words.length; j++) {
                let wor = words[j];
                if (value_pattern.test(wor)) {
                    valores.push(wor);
                    break;
                }
            }
        }
    }

    // Finding the value using Method 2
    if (!check(valores) || valores.length === 0) {
        valores = [];
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word.includes('Pagar') || word.includes('pagar') || word.includes('Cobrado') || word.includes('cobrado')) {
                for (let j = i + 1; j < words.length; j++) {
                    let wor = words[j];
                    if (value_pattern.test(wor)) {
                        valores.push(wor);
                        break;
                    }
                }
            }
        }
    }

    // Removing the img file created
    // Note: In a browser environment, there is no direct equivalent to `os.remove(bill)`
    // You might need to handle file removal differently based on your use case

    // Checking if the value is valid
    if (check(valores) && valores.length !== 0) {
        let vv = valores[0];
        let vn = rreplace(vv, '.', '', vv.split('.').length - 1);
        vn = rreplace(vn, ',', '.', vn.split(',').length - 1);
        vn = parseFloat(vn).toFixed(2);
        return vn;
    } else {
        let vn = valores.map(x => rreplace(x, '.', '', x.split('.').length - 1));
        vn = vn.map(x => rreplace(x, ',', '.', x.split(',').length - 1));
        vn = parseFloat(Math.max(...vn.map(x => parseFloat(x)))).toFixed(2);
        return vn;
    }
}











export const POST = async (req, res) => {
    if (req.method === 'POST') {
        try {
        // Extract data from the request
        const data = await req.formData();
        const file = data.get('file');
        const idd = data.get('id');
        const urll = data.get('url');
        const text = data.get('text');

        //console.log(`Text:\n${text}`);


        // Check if a file was uploaded
        if (!file) {
            console.log('No file uploaded');
            return NextResponse.json({message: 'No file uploaded'})
        }



        // Perform file upload logic (similar to your existing upload function)
        //TRANSFORMANDO O TIPO 'File' EM TIPO 'ArrayBuffer'
        const bytes = await file.arrayBuffer()

        //PEGANDO O 'Buffer' DO 'ArrayBuffer' PARA CONSEGUIR SER LIDO PELA FUNÇÃO 'writeFile'

        //Handling the upload to Cloudinary
        try {
            connectToDB();
            const cloudBuffer = new Uint8Array(bytes);
        
            // Deletando o arquivo anterior
            if (urll != '') {
                const l = urll.split('/');
                const lll = l[l.length - 1];
                let nameUrl = lll.slice(0, -4);
                //console.log('Deleting resource:', nameUrl);
                await cloudinary.api.delete_resources([nameUrl], { type: 'upload', resource_type: 'image' });
            }
        
            const dados = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        reject(error);
                        return;
                    }
                    resolve(result);
                });
                uploadStream.end(cloudBuffer);
            });
        
            const url = dados.secure_url;
            console.log('Upload successful, URL:', url);
        
            await Contssss.findByIdAndUpdate(idd, { bol: url });
        } catch (err) {
            console.error('Error caught in try-catch:', err);
            throw new Error('Falhou ao fazer o upload do boleto');
        }

        //Extracting the information from the text
        let scd = get_scd(text);
        //console.log(scd);

        let dueDate = getDueDate(text);
        //console.log(dueDate);
        if(dueDate != 'ERROR-DATE'){
            let parts = dueDate.split("/");
            if(parts[2].length === 2){
                parts[2] = '20' + parts[2];
            }
            var dateObject = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
            //console.log(dateObject);
        }


        let total = get_total(text);
        //console.log(total);


        connectToDB();

        await Contssss.findByIdAndUpdate(idd, {scd:scd});
        if(dueDate != 'ERROR-DATE'){
            await Contssss.findByIdAndUpdate(idd, {due_date:dateObject});
        }
        if(total != -Infinity){
            await Contssss.findByIdAndUpdate(idd, {total:total});
        }

        // The recognized text is stored in the 'text' variable
        const ddd = '';

        return NextResponse.json({ ddd });
        
        } catch (error) {
        console.error('Error processing the request :( :', error);
        return NextResponse.json({message: 'Error processing the request', error})
        }
    } else {
        // Handle other HTTP methods if needed
        console.log(req.method)
        return NextResponse.json({ error: 'Method Not Alloweddddd' });
    }
};