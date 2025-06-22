import { useState } from "react";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <h2 className="text-5xl font-bold text-yellow-500 text-center mb-12">
        Skills
      </h2>
      <div className="flex justify-center items-center mb-8 gap-4">
        <button
          onClick={() => setActiveCategory("Frontend")}
          className={`px-4 py-2 rounded-md ${
            activeCategory === "Frontend"
              ? "bg-sky-700 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Frontend
        </button>

        <button
          onClick={() => setActiveCategory("Tools")}
          className={`px-4 py-2 rounded-md ${
            activeCategory === "Tools"
              ? "bg-purple-600 text-black"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Tools
        </button>
      </div>

      <div className="flex justify-center items-center rounded-md mx-auto mb-20">
        {activeCategory === "Frontend" && (
          <section className="text-4xl gap-6 grid lg:grid-cols-3 p-6 rounded-1g shadow-xl cursor-pointer">
            <div className="flex  flex-col items-center gap-2">
              <FaHtml5 className="text-orange-500" />
              Html
              <div className="w-[60%] bg-gray-500 h-2 rounded-full oveflow-hidden">
                <div className="bg-orange-500 h-full rounded-full w-[70%]"></div>
              </div>
            </div>
            <div className="flex  flex-col items-center gap-2">
              <FaCss3Alt className="text-blue-500" />
              Css
              <div className="w-[60%] bg-gray-500 h-2 rounded-full">
                <div className="bg-blue-400 w-[80%] h-2 rounded-full"></div>
              </div>
            </div>
            <div className="flex  flex-col items-center gap-2">
              <SiJavascript className="text-yellow-400" />
              Javascript
              <div className="w-[60%] bg-gray-500 h-2 rounded-full">
                <div className="bg-yellow-300 w-[70%] h-2 rounded-full"></div>
              </div>
            </div>
            <div className="flex  flex-col items-center gap-2">
              <SiTypescript className="text-blue-400" />
              Typescipt
              <div className="w-[60%] bg-gray-500 h-2 rounded-full">
                <div className="bg-cyan-400 w-[30%] h-2 rounded-full"></div>
              </div>
            </div>
            <div className="flex  flex-col items-center gap-2">
              <FaReact className="text-cyan-400" />
              React
              <div className="w-[60%] bg-gray-500 h-2 rounded-full">
                <div className="bg-blue-300 w-[40%] h-2 rounded-full"></div>
              </div>
            </div>
            <div className="flex  flex-col items-center gap-2">
              <SiTailwindcss className="text-orange-500" />
              Taiwind Css
              <div className="w-[60%] bg-gray-500 h-2 rounded-full gap-8">
                <div className="bg-sky-400 w-[30%] h-2 rounded-full"></div>
              </div>
            </div>
          </section>
        )}
        {activeCategory === "Tools" && (
          <div className="gap-8 p-8 rounded-1g shadow-xl text-4xl flex lg:flex-row flex-col">
            <div className="flex  flex-col items-center gap-2">
              <FaGithub className="text-white with shadow-[0_0_15px_#60a5fa]" />
              Github
            </div>
            <div className="flex  flex-col items-center gap-2">
              <VscVscode className="text-indigo-400" />
              Vscode
            </div>
            <div className="flex  flex-col items-center gap-2">
              <SiVercel className="text-gray-400 hover:text-gray-300 transition duration-300" />
              Vercel
            </div>
          </div>
        )}
      </div>
      <p className="text-center mt-12 italic text-purple-600">
        Still Learning, always building
      </p>
    </div>
  );
};

export default Skills;
