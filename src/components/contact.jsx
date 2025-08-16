import React from 'react'
import { motion } from 'framer-motion'
export default function Contact() {
  return (
    <div>
      <section id="contact" className='bg-black pt-50 flex py-40 flex-col justify-center text-white/80 h-screen  px-4 md:px-8 lg:px-16'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.h2 
        initial={{y:40, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:.7, ease:"easeInOut"}}
        className="text-xl font-bold text-center mb-8 font-mono"><span className='text-red-500 '>04.</span> ¿Que sigue?</motion.h2>
        <motion.p
        initial={{y:40, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:.9, ease:"easeInOut"}}
         className="text-center text-3xl md:text-5xl font-bold mb-6">Hablemos.</motion.p>
        <motion.p
        initial={{y:40, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1.2, ease:"easeInOut"}}
         className="text-center text-xl mb-12  m-auto">Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres charlar, no dudes en contactarme.</motion.p>
        <motion.a
        initial={{y:40, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:.7, ease:"easeInOut"}}
          href='https://wa.me/+5354411364'
         id="contact"  className='px-6 py-3 rounded-lg hover:-translate-y-1 transition-transform duration-300 hover:bg-red-500 border-1 border-red-500 text-lg font-normal  text-red-500 hover:text-white '>Contáctame </motion.a>

      </div>
      </section>
    </div>
  )
}
