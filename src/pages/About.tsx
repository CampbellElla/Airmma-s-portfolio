import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='min-h-screen w-full flex flex-row items-center px-20 py-20 bg-gradient-to-r from-black via-gray-900 justify-between text-white gap-12'> 
      <motion.div className='flex-1 max-w-xl'
      initial={{opacity: 0, x: -30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.8, ease: 'easeOut'}}>
      <h1 className='text-5xl font-bold mb-6 text-yellow-500'>About me</h1>
      <p className='text-1g mb-4 '>Hey! I'm <span className='font-semibold text-yellow-300'>Emmanuella</span>, a passionate front-end developer who loves turning ideas into real, interactive experiences.I enjoy building things that look good and feel good to use.</p>
      <p className='text-1g mb-4'>I'm a girl on a journey to explore, grow, and create fun and meaningful projects with a touch of good vibes.
          Whether it's designing, coding, or brainstorming, I'm all in.🚀
      </p>
      <p className='mb-4 text-yellow-400 italic'>Every moment is a fresh beginning.</p>


      <p className='text-m text-gray-400 mt-4'>I  love to code, vibe to music, and have meaningful conversations. React is my favorite stack, it's simple, powerful, and just... makes sense.😌💻
      </p>
      </motion.div>

      <div className='flex-1 flex justify-center items-center'>
        <img src="/Ella2.png" alt="aboutimage"  className='w-[800px] h-auto rounded-1g shadow-1g border-2 border-yellow-500 animate-pulse hover:scale-105 transition:transform duration-700 ease-in-ease-out'/>
      </div>
    </div>
    
    
  )
}

export default About