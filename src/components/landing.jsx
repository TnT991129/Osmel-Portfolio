import React from 'react'
import Portada from '../assets/photos/portada 2.png'
import { motion } from 'framer-motion'
import Linkeding from '/icons/linkeding.png' 
import Instagram from '/icons/icons-instagram.png'
import Github from '/icons/github.png'
export default function Landing() {
  return (
    <>
      <div id='home' className='w-full px-0 h-screen bg-black '>
        <div className='relative w-full h-full flex items-center justify-center border-15 '>
          <div className='flex flex-col items-start  justify-center h-full  md:x-30   pt-90 py-20 z-20  '>
          <motion.p 
            initial={{x:-20, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1.1, ease:"easeInOut"}}
            className='text-xl md:text-2xl  max-w-2xl font-mono  text-red-500   text-left px-4'>
              Hola, mi nombre es
            </motion.p>
            <motion.h1
            initial={{x:-20, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, ease:"easeInOut"}}
            
             className='text-6xl px-2 md:text-8xl font-bold mb-4 '> <span className='bg-gradient-to-t from-white/25 to-white bg-clip-text text-transparent'>Osmel</span>  <span className='bg-gradient-to-tr from-red-500 to-black/15  bg-clip-text text-transparent'>Rubido</span>  </motion.h1>
            <motion.p 
            initial={{x:-20, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1.1, ease:"easeInOut"}}
            className='text-xl mb-15 max-w-xl font-mono text-white/45  text-left px-4'>
              Desarrollador y Diseñador Web con experiencia en la creación de sitios webs modernos y atractivos. Me apasiona crear experiencias digitales que sean tanto funcionales como visualmente impactantes.
            </motion.p>
            <a href='../assets/CV_Osmel_Rubido.docx' download="CV_Osmel_Rubido.docx">
            <div className='flex  items-center gap-10 mb-8 px-4 z-80'>
              <motion.bottom
              initial={{x:-20, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1.5, ease:"easeInOut"}}
               className='cursor-pointer font-bold p-3 border-1 font-mono  border-white/25 rounded-b-lg hover:rounded-t-lg hover:bg-white/10  text-red-500 text-xl '> Descargar CV</motion.bottom>
              
            </div>
            </a>
          </div>
          <div  className='md:static absolute right-0 top-0 '>
            <motion.img
            initial={{x:20, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, ease:"easeInOut"}}
             src={Portada} alt="Portada" className=' w-full blur-xs sm:blur-none h-200 object-cover overflow-hidden  ' />
          </div>

          <motion.div
          initial={{y:40, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.5, ease:"easeInOut"}}
           className=' lg:block fixed hidden bottom-20 left-13 z-50'>
           
            <a href='https://www.instagram.com/osmel_r.g' className='text-white/45 duration-100 ease-in-out  '>
              <img className='w-8 h-8 hover:scale-105 my-6' src={Instagram}/>
            </a>
            <a href='#' className='text-white/45 duration-100 ease-in-out  '>
              <img className='w-8 h-8 hover:scale-105 my-6' src={Linkeding}/>
            </a>
            <a href='https://www.github.com/TnT991129' className='text-white/45 duration-100 ease-in-out  '>
              <img className='w-8 h-8 hover:scale-105 my-6' src={Github}/>
            </a>
            <div className='flex h-xs w-1 bg-red-500'></div>
          </motion.div>
          
        </div>
        <div className='fixed rotate-90 items-center gap-3 hidden bottom-20 right-0 text-red-500 xl:flex z-50'>
            <h2 className='text-lg'>osmel.rubido@gmail.com</h2>
            <div className='w-xs h-1 bg-red-500'></div>
          </div>
      </div>
          

    </>
  )
}
