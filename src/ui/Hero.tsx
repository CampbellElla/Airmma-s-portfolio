import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-black via-gray-900 to-black flex flex-col lg:flex-row items-center px-20 py-20 justify-between">
      <motion.div
        className="text-center lg:text-left max-w-xl space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="lg:text-4xl text-2xl font-bold mt-4 text-white">
          Hello, My Name is,
        </h1>
        <h2 className="lg:text-6xl text-2xl font-bold mt-4 whitespace-nowrap text-white">
          Emmanuella Campbell
        </h2>
        <p className="lg:text-5xl text-3xl text-gray-600 mt-4 mb-8 text-white">
          <Link
            to="Skills"
            className="text-yellow-600 lg:text-6xl text-4xl cursor-pointer"
          >
            ~
          </Link>
          Frontend Developer
        </p>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/about"
            className=" bg-yellow-600 text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition duration-300 whitespace-nowrap"
          >
            Know Me
          </Link>
          <a
            href="https://www.linkedin.com/in/emmanuella-campbell-9199ba376?"
            target="blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/CampbellElla"
            target="blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition duration-300"
          >
            <FaGithub />
          </a>
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
