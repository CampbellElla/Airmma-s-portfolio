import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='min-h-screen w-full bg-gradient-to-r from-black via-gray-900 to-black flex flex-row items-center px-20 py-20 justify-between text-white'>
            <motion.div className='text-left max-w-xl space-y-6'
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}}>
            <h1 className='text-4xl font-bold mt-4'>Hello, My Name is,</h1>
            <h2 className='text-6xl font-bold mt-4 whitespace-nowrap'>Emmanuella Campbell</h2>
            <p className='text-5xl text-gray-600 mt-4 mb-8'><span className='text-yellow-500 text-6xl'>~</span>Frontend Developer</p>
                <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.6, duration: 0.8}}>
                <Link to="/about" className='inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition duration-300'>
            Know Me
            </Link>
            </motion.div>
            </motion.div>

            <motion.div className='flex justify-center'
            animate={{ y: [0, -20, 0]}}
            transition={{duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}>
            <img src="/Ella2.png" alt="Profile"  className='w-[1200px] rounded-xl shadow-2xl object-contain'/>
            </motion.div>
            
        </div>
    
  )
}

export default Hero