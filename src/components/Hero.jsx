import React from 'react'
import { motion } from 'framer-motion'
import { HERO_CONTENT } from '../constants'
import { RiDownloadLine } from '@remixicon/react'
import karanImage from "../assets/karanadam.jpg"


const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
}

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, //to aniamte children one by one
        }
    }
}

const imageVaraints = {
    hidden: { clipPath: "inset(0 50% 0 50%)" },
    visible: {
        clipPath: "inset(0 0% 0 0%)",
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        },
    }
}


const Hero = () => {
    return (
        <section>
            <div className='relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white'>
                <motion.div
                    className='w-full md:w-1/2 p-8'
                    initial='hidden'
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className='text-2xl md:text-3xl lg:text-5xl my-14'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.greeting}

                    </motion.h1>
                    <motion.p
                        className='text-xl md:text-2xl lg:text-4xl mb-4'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.introduction}

                    </motion.p>
                    <motion.p
                        className='text-xl md:text-2xl lg:text-4xl'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.description}

                    </motion.p>
                    <motion.a
                        className='bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 rounded-2xl flex w-fit gap-2 hover:bg-stone-200 hover:text-stone-600'
                        href={HERO_CONTENT.resumeLink}
                        download
                        rel='noopener noreferrer'
                        target='_blank'
                        variants={textVariants}
                    >
                        <RiDownloadLine />
                        {HERO_CONTENT.resumeLinkText}

                    </motion.a>
                </motion.div>
                <motion.div
                    className='w-full h-min md:w-1/2 p-8 lg:p-24'
                    initial="hidden"
                    animate="visible"
                    variants={imageVaraints}
                >
                    <img src={karanImage} alt="karan-adam" width={650} height={650} className='rounded-3xl' />

                </motion.div>
            </div>
        </section>
    )
}

export default Hero