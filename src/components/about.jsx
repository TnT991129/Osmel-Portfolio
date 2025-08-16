import React from 'react'
import { motion } from 'framer-motion'
import Portada from '../assets/photos/portada.png'

export default function About() {
  return (
    <>
        <div  id='about' className='bg-black flex justify-center items relative w-full px-5 h-screen py-50  '>
        <div className='flex md:w-4xl mt-20 gap-5 m-auto  justify-center  h-full'>

            <div className='z-20  w-full h-full flex flex-col px-2 justify-center items-start gap-2'>
                <div className='flex w-full items-center '>
                    <motion.h1  
                    initial={{y:40, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:.5, ease:"easeInOut"}}
                    className='text-xl font-mono p-1 w-1/2  bg-gradient-to-t font-bold from-white/25 to-white bg-clip-text text-transparent '>
                     <span className='text-red-500 '>01.</span>   Sobre Mi        

                    </motion.h1>   
                    <motion.div 
                    initial={{y:40, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:.7, ease:"easeInOut"}}
                    className='w-full hidden md:flex h-0.5 bg-white/15  rounded-xl'></motion.div>
                </div>
                 
                <motion.p 
                initial={{y:40, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:.7, ease:"easeInOut"}}
                className='text-white/60 p-1 text-md mt-4 '>
                    ¡Hola! Me llamo Osmel y disfruto creando contenido para internet. Mi interés por el desarrollo web empezó en 2023, cuando empezar a estudiar programacion de manera autodidactica. 
                    Avancé rápidamente hasta hoy. He tenido el privilegio de trabajar en una agencia de publicidad y marketing digital, una empresa emergente y trabajos aislados como freelancer. Mi enfoque principal estos días es crear productos y experiencias digitales accesibles e inclusivas para una variedad de clientes.
                    Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
                </motion.p>
                <ul id='skills' className='text-red-500 grid grid-cols-2 gap-x-14 gap-y-3 triangle-list text-md mt-4 p-1 list-disc pl-5'>
                    <motion.li
                    initial={{y:40, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:.7, ease:"easeInOut"}}
                    >HTML + CSS</motion.li>
                    <motion.li
                    initial={{y:40, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:.75, ease:"easeInOut"}}
                    >JS</motion.li>
                    <motion.li
                    initial={{y:40, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:.8, ease:"easeInOut"}}
                    >Python</motion.li>
                    <motion.li
                    initial={{y:40, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:.85, ease:"easeInOut"}}
                    >React</motion.li>
                    <motion.li
                    initial={{y:40, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:.85, ease:"easeInOut"}}
                    >Git</motion.li>
                    <motion.li
                    initial={{y:40, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:.9, ease:"easeInOut"}}
                    >Photoshop</motion.li>
                    <motion.li
                    initial={{y:40, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:.95, ease:"easeInOut"}}
                    >Illustrator</motion.li>
                </ul>

            </div>
            <div className='md:w-1/2 md:h-full md:static absolute z-0 justify-center right-0 top-30 items-center  '>
                <motion.img 
                initial={{x:40, opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:1.5, ease:"easeInOut"}}
                src={Portada} alt="Portada" className=' object-cover rounded-lg  h-100' />
            </div>
        </div>
        </div>
    </>
  )
}
