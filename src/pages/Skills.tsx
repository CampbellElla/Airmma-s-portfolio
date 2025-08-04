import { useState } from "react";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Experience from "./Experience";

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
      progress: "70%",
      color: "text-orange-500",
      bgColor: "bg-orange-500",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
      progress: "60%",
      color: "text-blue-400",
      bgColor: "bg-blue-400",
    },
    {
      icon: <SiJavascript />,
      title: "JavaScript",
      progress: "70%",
      color: "text-yellow-600",
      bgColor: "bg-yellow-600",
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
      progress: "30%",
      color: "text-blue-400",
      bgColor: "bg-blue-400",
    },
    {
      icon: <FaReact />,
      title: "React",
      progress: "40%",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind",
      progress: "30%",
      color: "text-orange-500",
      bgColor: "bg-orange-500",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Frontend");
  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <h2 className="text-5xl font-bold text-yellow-600 text-center mb-12">
        Skills
      </h2>
      <div className="flex justify-center items-center mb-8 gap-4">
        <button
          onClick={() => setActiveCategory("Frontend")}
          className={`px-4 py-2 rounded-full ${
            activeCategory === "Frontend"
              ? "bg-sky-700 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Frontend
        </button>

        <button
          onClick={() => setActiveCategory("Tools")}
          className={`px-4 py-2 rounded-full ${
            activeCategory === "Tools"
              ? "bg-purple-600 text-black"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Tools
        </button>
      </div>

      <div className="flex justify-center items-center rounded-md mx-auto mb-20 ">
        {activeCategory === "Frontend" && (
          <section className="text-4xl gap-6 grid lg:grid-cols-3 p-6 rounded-1g shadow-xl cursor-pointer">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <div className={skill.color}>{skill.icon}</div>
                {skill.title}
                <div className="w-full bg-gray-500 h-2 rounded-full gap-8 overflow-hidden">
                  <div
                    className={`${skill.bgColor} h-2 rounded-full`}
                    style={{ width: skill.progress }}
                  ></div>
                </div>
              </div>
            ))}
          </section>
        )}
        {activeCategory === "Tools" && (
          <div className="gap-8 p-8 rounded-1g shadow-xl text-4xl flex lg:flex-row flex-col cursor-pointer ">
            <div className="flex  flex-col items-center gap-2 hover:scale-105 transition-transform duration-300 ">
              <FaGithub className="text-white with shadow-[0_0_15px_#60a5fa]" />
              Github
            </div>
            <div className="flex  flex-col items-center gap-2 hover:scale-105 transition-transform duration-300">
              <VscVscode className="text-indigo-400" />
              Vscode
            </div>
            <div className="flex  flex-col items-center gap-2 transition-transform duration-300 ">
              <SiVercel className="text-gray-400 hover:text-gray-300 transition duration-300 " />
              Vercel
            </div>
          </div>
        )}
      </div>
      <div id="experience">
        <Experience />
      </div>
      <p className="text-center mt-12 italic text-yellow-400">
        Still Learning, always building
      </p>
    </div>
  );
};

export default Skills;
