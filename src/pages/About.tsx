import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen w-full flex lg:flex-row  flex-col items-center px-20 py-20 bg-gradient-to-r from-black via-gray-900 justify-between text-white gap-12">
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-6 text-yellow-500">
          About me
        </h1>
        <p className="lg:text-1g text-xl mb-4 ">
          Hey! I'm{" "}
          <span className="font-semibold text-yellow-300">Emmanuella</span>, a
          passionate Front-end Developer who genuinely loves turning cool ideas
          into delightful, interactive and digital experiences. My focus is on
          building interfaces that are not just visually engaging but also
          incredibly intuitive to use. I'm always eager to explore new tech,
          create impactful projects, and bring a positive, collaborative energy
          to every challenge.
        </p>
        <p className="text-1g text-xl mb-4">
          I'm a girl on a journey to explore, grow, and create fun and
          meaningful projects with a touch of good vibes. Whether it's
          designing, coding, or brainstorming, I'm all in.🚀
        </p>
        <p className="mb-4 text-xl text-yellow-400 italic">
          Every moment is a fresh beginning like they say (My favourite quote)
        </p>

        <p className="text-xl text-gray-400 mt-4">
          I love to code, vibe to music, and have meaningful conversations, and
          My go-to framework? Definitely React....(its logic and power I enjoy
          building things that look good and feel good to use.)😌💻
        </p>
      </motion.div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src="/Ella2.png"
          alt="aboutimage"
          className="w-[800px] h-auto rounded-1g shadow-1g border-2 border-yellow-500 animate-pulse hover:scale-105 transition:transform duration-700 ease-in-ease-out"
        />
      </div>
    </div>
  );
};

export default About;
