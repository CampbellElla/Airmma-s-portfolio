import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-black via-gray-900 to-black flex flex-col lg:flex-row items-center px-20 py-20 justify-between text-white">
      <motion.div
        className="text-center lg:text-left max-w-xl space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="lg:text-4xl text-2xl font-bold mt-4">
          Hello, My Name is,
        </h1>
        <h2 className="lg:text-6xl text-2xl font-bold mt-4 whitespace-nowrap">
          Emmanuella Campbell
        </h2>
        <p className="lg:text-5xl text-3xl text-gray-600 mt-4 mb-8">
          <Link
            to="Skills"
            className="text-yellow-600 lg:text-6xl text-4xl cursor-pointer"
          >
            ~
          </Link>
          Frontend Developer
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/about"
            className="inline-block bg-yellow-600 text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition duration-300"
          >
            Know Me
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <img
          src="/Ella2.png"
          alt="Profile"
          className="lg:w-[1200px] w-[1800px] h-auto rounded-xl shadow-2xl object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
