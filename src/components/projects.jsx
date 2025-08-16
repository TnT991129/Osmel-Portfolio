import React from 'react'
import FC from '../assets/photos/FortuneCode.png'
import DP from '../assets/photos/DwellingPlus.png'
import BD from '../assets/photos/BDMedia.png'
import P1 from '../assets/photos/Web-Practica.png'
import P2 from '../assets/photos/Web-Practica2.png'
import CL from '../assets/photos/Clident.jpg'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
    const [hovered, setHovered] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    
    const projects = [
        {
            title: 'FortuneCode',
            description: 'FortuneCode es una empresa especializada en el diseño y desarrollo de sitios web profesionales para empresas de todos los tamaños. ',
            image: FC,
            tech: 'React',
            url: 'https://fortunecode-dev.github.io/portfolio/',
            featured: true
        },
        {
            title: 'DwellingPlus',
            description: 'Sitio Web moderno y minimalista para DwellingPlus, una empresa especializada en el diseño y construcción de viviendas de alta gama.',
            image: DP,
            tech: 'React-Native',  
            url: 'https://dwellingplus.vercel.app/',
            featured: true
        },
        {
            title: 'BDMedia',
            description: 'Una empresa de creacion de sitios webs para empresas y pequeños negocios.',
            image: BD,
            tech: 'Html CSS JS',
            url: 'https://bdmedia.vercel.app/',
            featured: false
        },
        {
            title: 'Home Práctica React',
            description: 'Proyecto de practica para afianzar mis conocimientos de React.',
            image: P1,
            tech: 'React',
            url: 'https://web-practica-react.vercel.app/',
            featured: false
        },
        {
            title: 'Quantum Marketing Práctica React',
            description: 'Proyecto de practica para afianzar mis conocimientos de React.',
            image: P2,
            tech: 'React',
            url: 'https://web-practica-react-2.vercel.app/',
            featured: false
        },
        {
            title: 'Clident',
            description: 'Sitio web para una clinica dental española.',
            image: CL,
            tech: 'HTML CSS JS',
            url: 'https://web-practica-react-2.vercel.app/',
            featured: false
        },
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section id="projects" className="py-20 px-6 md:px-8 lg:px-16 bg-black text-white/80">
            <div className="max-w-4xl mx-auto">
                <motion.h2 
                initial={{y:40, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:.7, ease:"easeInOut"}}
                className="text-xl  font-bold font-mono mb-12 text-white/80">
                    <span className="text-red-500 font-mono text-xl px-1">03.</span>Algunas cosas que he construido
                </motion.h2>
                
                {/* Featured Projects */}
                {featuredProjects.map((project, index) => (
                    <div key={index} className={`mb-32 group ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <motion.div 
                            initial={{y:40, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:.9, ease:"easeInOut"}}
                            className={`lg:w-1/2 relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <div className="relative overflow-hidden rounded transition-all duration-500 group-hover:-translate-y-1">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-auto rounded opacity-80 group-hover:opacity-20 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-red-700/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                                            <span className="text-white/85 text-lg font-bold">View Project →</span>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                            <motion.div 
                            initial={{x:40, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{duration:1, ease:"easeInOut"}}
                            className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8 lg:order-2' : 'lg:pr-8 lg:order-1'}`}>
                                <h3 className="text-red-500 text-sm font-mono mb-2">Proyecto Destacado</h3>
                                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white/85 hover:text-red-500 transition-colors">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                </h4>
                                <p className="bg-white/15 p-4 rounded mb-6 text-white/95 shadow-lg">
                                    {project.description}
                                </p>
                                <div className={`flex flex-wrap gap-4 text-xs font-mono text-red-500 mb-4 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                                    {project.tech.split(' ').map((t, i) => (
                                        <span key={i}>[{t}]</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}

                {/* Show More Button */}
                <div className="flex justify-center mt-12 mb-8">
                    <button
                        onClick={() => setShowAllProjects(!showAllProjects)}
                        className="px-8 py-3 border border-red-500 hover:-translate-y-1 transition-transform duration-300 text-red-500 font-mono hover:bg-red-500 hover:text-white rounded"
                    >
                        {showAllProjects ? 'Ocultar' : 'Ver mas'}
                    </button>
                </div>

                {/* Other Projects Grid - Conditionally Rendered */}
                {showAllProjects && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {otherProjects.map((project, index) => (
                            <div 
                                key={index} 
                                className="bg-white/10 rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-lg"
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <div className="relative">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                                        />
                                        {hovered === index && (
                                            <div className="absolute inset-0 bg-red-700/85 bg-opacity-90 flex items-center justify-center">
                                                <span className="text-white/80 font-bold">View Project →</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-white/95 hover:text-red-500 transition-colors">
                                                {project.title}
                                            </h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-white/80 mb-4 text-sm">{project.description}</p>
                                        <div className="flex flex-wrap gap-3 text-xs font-mono text-red-500">
                                            {project.tech.split(' ').map((t, i) => (
                                                <span key={i}>[{t}]</span>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}