import { useState } from "react";
import React from 'react'
import { motion } from 'framer-motion'
export default function Experience() {
    
    const [activeTab, setActiveTab] = useState("BDMedia");

    const experiences = {
    BDMedia: {
      title: "BD Media",
      subtitle: "[18/01/2024 - 3/04/2024 ]",
      items: [
        "Desempeñando el cargo de desarrollador web affinandos mis conocimientos basicos de HTML, CSS y JS.",
        "Desarrolle proyectos como la web de BDMedia, una empresa de creacion de sitios webs para empresas y pequeños negocios.",
        "Colaboré en la creación de sitios web responsivos y accesibles como Clident.",
      ],
    },
    TAMERDIGITAL: {
      title: "TAMERDIGITAL",
      subtitle: "[2/07/2024 - 20/12/2024]",
      items: [
        "Durante mi experiencia en una empresa de marketing digital, me especialicé en la creación de contenido estratégico para redes sociales, desarrollando reels y publicaciones atractivas para diversos negocios. Mi labor se enfocó en transmitir de forma creativa la identidad de cada marca, optimizando su presencia en plataformas como Instagram y Facebook, y contribuyendo al crecimiento de su comunidad y alcance orgánico. Este trabajo me permitió combinar habilidades creativas y conocimientos en tendencias digitales para generar resultados medibles y fortalecer la imagen de las empresas con las que colaboré."
      ],
    },
    "Elian Coutino": {
      title: "Elian Coutino",
      subtitle: "[4/12/2024 - 26/01/2025]",
      items: [
        "Fui contratado como desarrollador front-end para dar vida a un proyecto personal, participando en todo el proceso de construcción de la interfaz con React y Tailwind CSS. Durante esta experiencia, no solo apliqué mis conocimientos técnicos, sino que también adquirí nuevas habilidades en diseño responsivo, optimización de componentes y buenas prácticas de desarrollo. El proyecto me permitió trabajar de forma autónoma, resolver retos creativos y entregar una solución visualmente atractiva y funcional que reflejara la visión del cliente.",
      ],
    },
    FortuneCode: {
      title: "FortuneCode",
      subtitle: "[3/01/2025 - 15/05/2025]",
      items: [
        "Trabajé como programador front-end en una empresa, donde puse en práctica mis conocimientos en React para el desarrollo de interfaces modernas y dinámicas. Durante esta experiencia también di mis primeros pasos en React Native, explorando el desarrollo de aplicaciones móviles y fortaleciendo mi comprensión del ecosistema JavaScript. Esta etapa me permitió mejorar mis habilidades técnicas, adaptarme a flujos de trabajo colaborativos y aportar soluciones eficientes a los proyectos del equipo.",
      ],
    },
    
  };
  return (
    <div id="exp"  className="bg-black w-full h-screen flex flex-col justify-center items-center ">
      <div  className=" items-center  flex max-w-4xl  ">
        <div className="flex items-center gap-1 md:w-4xl">
        <motion.h2
        
        initial={{y:40, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:.7, ease:"easeInOut"}}
         className="text-xl w-md mb-0 bg-gradient-to-t font-semibold font-mono from-white/25 to-white bg-clip-text text-transparent"> <span className="text-red-500 px-1">02.</span>Dónde he trabajado? </motion.h2>
        <motion.div
        initial={{y:40, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:.9, ease:"easeInOut"}}
         className='w-full h-0.5 bg-white/15 hidden md:flex  rounded-xl'></motion.div>

        </div>
      </div>
      
      <section className="flex gap-5 md:flex-row  flex-col justify-center max-w-4xl mx-auto px-4 py-6">
      {/* Barra lateral de botones */}
      <motion.div
      initial={{x:-40, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:.7, ease:"easeInOut"}}
       className="w-auto md:w-36 grid grid-cols-2 md:flex flex-col gap-2 pb-2 md:pb-0">
        {Object.keys(experiences).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 whitespace-nowrap rounded-lg text-left md:text-center transition-colors ${
              activeTab === key
                ? "bg-gradient-to-tr from-red-500 to-black/25 text-white hover:bg-red-600"
                : "bg-white/70 hover:bg-gray-200"
            }`}
          >
            {key}
          </button>
        ))}
      </motion.div>

      {/* Contenido dinámico */}
      <motion.div
      initial={{x:40, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:.7, ease:"easeInOut"}}
      
       className="flex-1 ">
        
        <div  className=" h-64 p-6 rounded-lg shadow-sm">
          <h3 className="text-4xl font-mono font-bold text-red-500">
            {experiences[activeTab].title}
            {experiences[activeTab].subtitle && (
              <span className="block text-sm text-white mt-1">
                {experiences[activeTab].subtitle}
              </span>
            )}
          </h3>

          {experiences[activeTab].period && (
            <p className="text-white text-sm mt-1">
              {experiences[activeTab].period}
            </p>
          )}

          <ul className="mt-4 text-sm md:text-lg space-y-3 triangle-list list-disc pl-5">
            {experiences[activeTab].items.map((item, index) => (
              <li key={index} className="text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
    </div>
  )
}
