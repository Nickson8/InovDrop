'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { logOut } from '@/app/lib/actions';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

var stl_but = 'flex flex-row space-x-2 items-center justify-center md:justify-start md:px-4 w-11/12 py-3 rounded-lg bg-indigo-800 bg-opacity-20 hover:bg-indigo-700 transition-all'

const SideNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div 
    className='md:w-60 bg-indigo-950 h-screen flex-1 fixed md:flex text-white'>
        <div className='flex flex-col space-y-6 w-full pt-10'>

            <Link href='/contas' className='flex flex-row items-center justify-center md:justify-start md:px-6'>
                <p className='text-2xl'><span className='font-bold'>INOV</span>drop</p>
            </Link>

            <div className='pt-10'>

                <div className='px-2 py-2'>
                    <Link href='/contas/contas_a_pagar' className={stl_but}>
                        <span><Icon icon='carbon:document' width={22} height={22}></Icon></span>
                        <p className='text-md'>À Pagar</p>
                    </Link>
                </div>

                <div className='px-2 py-2'>
                    <Link href='/contas/pagas' className={stl_but}>
                        <span><Icon icon='uiw:pay' width={21} height={21}></Icon></span>
                        <p className='text-md'>Pagas</p>
                    </Link>
                </div>

                <div className=''>


                    <div className='px-7 py-2 flex flex-row hover:text-indigo-300' onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                        <p className='text-md'>Contas <span className='text-xs'>\/</span></p>
                    </div>


                    <AnimatePresence>
                    {isOpen && (
                        <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='flex w-full justify-center'
                        >
                            <div className=''>
                            
                                <div className='px-1 py-2'>
                                    <Link href='/contas/fixas' className={stl_but}>
                                        <span><Icon icon='uil:bill' width={22} height={22}></Icon></span>
                                        <p className='text-md'>Fixas</p>
                                    </Link>
                                </div>

                                <div className='px-1 py-2'>
                                    <Link href='/contas/variadas' className={stl_but}>
                                        <span><Icon icon='tdesign:bill' width={22} height={22}></Icon></span>
                                        <p className='text-md'>Variadas</p>
                                    </Link>
                                </div>

                                <div className='px-1 py-2'>
                                    <Link href='/contas/fornecedores' className={stl_but}>
                                        <span><Icon icon='solar:box-broken' width={22} height={22}></Icon></span>
                                        <p className='text-md'>Fornecedores</p>
                                    </Link>
                                </div>

                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>



                </div>



                <form action={logOut} className='absolute bottom-2 right-2 px-2 py-2'>
                    <button className='flex flex-row space-x-2 items-center justify-center md:justify-start md:px-4 w-36 py-3 rounded-lg bg-indigo-800 bg-opacity-20 hover:bg-red-500 transition-all'>
                        <p className='text-md'>Encerrar Sessão</p>
                    </button>
                </form>

                
            </div>




        </div>
    </div>
  )
}

export default SideNav