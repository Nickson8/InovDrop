import React from 'react'
import { MenuConta } from '@/components'
import { fetchContas } from '@/app/lib/data';


var stl_container = "shadow-md w-full h-full px-5 py-5 rounded-lg border border-gray-300 overflow-auto bg-gray-50 space-y-2"


const ContasAPagar = async () => {
  const contas = await fetchContas();
  const compareDates = (a: { due_date: number; }, b: { due_date: number; }) => a.due_date - b.due_date;

  let forTotal = 0;
  let fixTotal = 0;
  let varTotal = 0;

  contas.forEach((conta) => {
    if (conta.pag === false && conta.type ==='for') {
      forTotal += conta.total;
    }

    if (conta.pag === false && conta.type ==='fix') {
      fixTotal += conta.total;
    }

    if (conta.pag === false && conta.type ==='var') {
      varTotal += conta.total;
    }

  });


  return (
    <div className='overflow-hidden px-10'>

        <div className={stl_container}>
          <h1 className='pt-3 pb-0 text-5xl'>Contas a Pagar</h1>

          <div className='pt-5'>
            <div className='relative flex flex-row pb-5 border-2 border-gray-500 rounded-md'>
              <p className="pl-1 text-xl">Fornecedores</p>
              <p className='absolute top-0 right-[24%] font-bold'>Vencimento</p>
              <div className="absolute top-0 right-3 flex flex-col items-center px-2 h-fit w-fit">
                <p className="text-md font-bold">{`Total Fornecedores`}</p>
                <p className="text-md">{`R$ ${forTotal}`}</p>
              </div>
            </div>

            {contas.sort(compareDates).map((conta) => {
              if (conta.pag === false && conta.type ==='for') {
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

          <div className='relative pt-3'>
            <div className='relative flex flex-row pb-5 border-2 border-gray-500 rounded-md'>
              <p className="pl-1 text-xl">Fixas</p>
              <p className='absolute top-0 right-[24%] font-bold'>Vencimento</p>
              <div className="absolute top-0 right-3 flex flex-col items-center px-2 h-fit w-fit">
                <p className="text-md font-bold">{`Total Fixas`}</p>
                <p className="text-md">{`R$ ${fixTotal}`}</p>
              </div>
            </div>

            {contas.sort(compareDates).map((conta) => {
              if (conta.pag === false && conta.type ==='fix') {
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

          <div className='relative pt-3'>
            <div className='relative flex flex-row pb-5 border-2 border-gray-500 rounded-md'>
              <p className="pl-1 text-xl">Variadas</p>
              <p className='absolute top-0 right-[24%] font-bold'>Vencimento</p>
              <div className="absolute top-0 right-3 flex flex-col items-center px-2 h-fit w-fit">
                <p className="text-md font-bold">{`Total Variadas`}</p>
                <p className="text-md">{`R$ ${varTotal}`}</p>
              </div>
            </div>

            {contas.sort(compareDates).map((conta) => {
              if (conta.pag === false && conta.type ==='var') {
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

    </div>
  )
}

export default ContasAPagar