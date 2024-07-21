import { MenuConta } from "@/components";
import { fetchContas } from '@/app/lib/data';
import Image from 'next/image'


function condToday(date) {
  const today = new Date()
  if ((date < today.getTime()) && (date - today.getTime() > -86400000)){
    return true;
  } else {
    return false;
  }
}

export default async function Contas() {
  var stl_container_home = "relative shadow-md w-full h-full px-5 py-2 rounded-lg border border-gray-300 overflow-auto bg-gray-50 space-y-0"
  var stl_sub_container = 'w-full border-b border-gray-400 pt-2 flex flex-row items-center bg-gray-50 relative'

  const contas = await fetchContas();

  const today = new Date()
  today.setHours(0, 0, 0, 0) //86400000

  var venTotal = 0;
  var vnTotal = 0;

  // Calculate total
  contas.forEach((conta) => {
    if (condToday(conta.due_date.getTime()) && conta.pag ===false) {
      venTotal += conta.total;
    }

    if ((conta.due_date.getTime() - today.getTime() + 86400000 < 0) && conta.pag ===false) {
      vnTotal += conta.total;
    }

  });


  return (
    <div className="relative space-y-4">

      <div className='px-10 w-[900px] min-w-[300px] h-[320px]'>

        <div className={stl_container_home}>
          <div className="flex flex-row space-x-5 pb-3">
            <h1 className="text-3xl">Vencimentos do dia</h1>
            <div className="flex flex-col items-center absolute top-4 right-10 px-2 h-fit w-fit border-2 border-gray-500 rounded-md">
              <p className="text-md">{`Total do dia`}</p>
              <p className="text-md">{`R$ ${venTotal.toLocaleString('pt-BR')}`}</p>
            </div>
          </div>

          <p className="text-lg">Fornecedores</p>
          {contas.reverse().map((conta) => {
            if (condToday(conta.due_date.getTime()) && conta.type ==='for' && conta.pag ===false) {
              return (
              <MenuConta
                key={conta.id}
                img={conta.type}
                name={conta.name ? conta.name : 'Sem Nome'}
                scd={conta.scd ? conta.scd : 'Sem Codigo de Barras'}
                date={conta.due_date ? conta.due_date : new Date(10, 10, 5)}
                total={conta.total ? conta.total : 0}
                id={conta.id}
                url={conta.bol}
              />
              );
              } else {
              return null;
              }
          })}

          <p className="pt-2 text-lg">Fixas</p>
          {contas.reverse().map((conta) => {
            if (condToday(conta.due_date.getTime()) && conta.type ==='fix' && conta.pag ===false) {
              return (
              <MenuConta
                key={conta.id}
                img={conta.type}
                name={conta.name ? conta.name : 'Sem Nome'}
                scd={conta.scd ? conta.scd : 'Sem Codigo de Barras'}
                date={conta.due_date ? conta.due_date : new Date(10, 10, 5)}
                total={conta.total ? conta.total : 0}
                id={conta.id}
                url={conta.bol}
              />
              );
              } else {
              return null;
              }
          })}

          <p className="pt-2 text-lg">Variadas</p>
          {contas.reverse().map((conta) => {
            if (condToday(conta.due_date.getTime()) && conta.type ==='var' && conta.pag ===false) {
              return (
              <div key='9384093580358'>
                <MenuConta
                  key={conta.id}
                  img={conta.type}
                  name={conta.name ? conta.name : 'Sem Nome'}
                  scd={conta.scd ? conta.scd : 'Sem Codigo de Barras'}
                  date={conta.due_date ? conta.due_date : new Date(10, 10, 5)}
                  total={conta.total ? conta.total : 0}
                  id={conta.id}
                  url={conta.bol}
                />
              </div>
              );
              } else {
              return null;
              }
          })}

        </div>

      </div>

      <div className='px-10 w-[900px] min-w-[300px] h-[320px]'>

        <div className={stl_container_home}>
          <div className="flex flex-row space-x-5 pb-3">
            <h1 className="text-3xl">Contas Vencidas</h1>
            <div className="flex flex-col items-center absolute top-4 right-10 px-2 h-fit w-fit border-2 border-gray-500 rounded-md">
              <p className="text-md">{`Total`}</p>
              <p className="text-md">{`R$ ${vnTotal.toLocaleString('pt-BR')}`}</p>
            </div>
          </div>

          <p className="text-lg">Fornecedores</p>
          {contas.reverse().map((conta) => {
            if (conta.due_date.getTime() - today.getTime() + 86400000 < 0 && conta.type ==='for' && conta.pag ===false) {
              return (
              <MenuConta
                key={conta.id}
                img={conta.type}
                name={conta.name ? conta.name : 'Sem Nome'}
                scd={conta.scd ? conta.scd : 'Sem Codigo de Barras'}
                date={conta.due_date ? conta.due_date : new Date(10, 10, 5)}
                total={conta.total ? conta.total : 0}
                id={conta.id}
                url={conta.bol}
              />
              );
              } else {
              return null;
              }
          })}

          <p className="pt-2 text-lg">Fixas</p>
          {contas.reverse().map((conta) => {
            if (conta.due_date.getTime() - today.getTime() + 86400000 < 0 && conta.type ==='fix' && conta.pag ===false) {
              return (
              <MenuConta
                key={conta.id}
                img={conta.type}
                name={conta.name ? conta.name : 'Sem Nome'}
                scd={conta.scd ? conta.scd : 'Sem Codigo de Barras'}
                date={conta.due_date ? conta.due_date : new Date(10, 10, 5)}
                total={conta.total ? conta.total : 0}
                id={conta.id}
                url={conta.bol}
              />
              );
              } else {
              return null;
              }
          })}

          <p className="pt-2 text-lg">Variadas</p>
          {contas.reverse().map((conta) => {
            if (conta.due_date.getTime() - today.getTime() + 86400000 < 0 && conta.type ==='var' && conta.pag ===false) {
              return (
              <MenuConta
                key={conta.id}
                img={conta.type}
                name={conta.name ? conta.name : 'Sem Nome'}
                scd={conta.scd ? conta.scd : 'Sem Codigo de Barras'}
                date={conta.due_date ? conta.due_date : new Date(10, 10, 5)}
                total={conta.total ? conta.total : 0}
                id={conta.id}
                url={conta.bol}
              />
              );
              } else {
              return null;
              }
          })}
        </div>

      </div>

      <div className='absolute top-0 right-20 w-[320px] min-w-[300px] h-[430px]'>

        <div className={stl_container_home}>
          <div className="flex flex-row space-x-5 pb-3">
            <h1 className="text-xl">Vencimentos dos proximos 3 dias</h1>
          </div>

          {contas.reverse().map((conta) => {
            if ( conta.due_date.getTime() > today.getTime() && conta.due_date.getTime() <= today.getTime() + (3 * 24 * 60 * 60 * 1000)  && conta.pag ===false) {
              return (
              <div key='32905840958095' className={stl_sub_container}>
                <span className='pl-2'><Image src={`/icon_contas/${conta.type}.png`} alt="" width={20} height={22} /></span>
                <p className='pl-1 text-xs font-semibold'>{conta.name}<span className='font-normal'> -</span></p>
                <p className='pl-1 text-xs'>{`${conta.due_date.getUTCDate()}/${conta.due_date.getUTCMonth()+1}/${conta.due_date.getUTCFullYear()}`}</p>
              </div>
              );
              } else {
              return null;
              }
          })}
        </div>

      </div>


      <div className='absolute bottom-0 right-20 w-[320px] min-w-[300px] h-[180px]'>

        <div className={stl_container_home}>
          <p className="text-lg">Legenda</p>
          <div className="flex flex-col space-y-2 pt-3">
            <div className="flex flex-row space-x-1">
              <span className='pl-2'><Image src={`/icon_contas/fix.png`} alt="" width={22} height={27} /></span>
              <p className="text-sm">Contas Fixas</p>
            </div>
            <div className="flex flex-row space-x-1">
              <span className='pl-2'><Image src={`/icon_contas/var.png`} alt="" width={22} height={27} /></span>
              <p className="text-sm">Contas Variadas</p>
            </div>
            <div className="flex flex-row space-x-1">
              <span className='pl-2'><Image src={`/icon_contas/for.png`} alt="" width={22} height={27} /></span>
              <p className="text-sm">Contas de Fornecedores</p>
            </div>
          </div>
        </div>

      </div>
      

    </div>

  )
}
