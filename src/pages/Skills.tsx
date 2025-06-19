import React, { useState } from "react";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const [skill, setSkill] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <h2 className="text-5xl font-bold text-yellow-500 text-center mb-12">
        Skills
      </h2>

      <div className="inline-flex items-center bg-gray-600 rounded-md mx-auto mb-20">
        <span
          onClick={() => setSkill(true)}
          className={`${
            !skill
              ? "bg-yellow-600 text-black-600"
              : "hover:bg-white hover:text-black "
          } py-2 px-4 cursor-pointer rounded-md `}
        >
          Developer
        </span>
        <span
          onClick={() => setSkill(true)}
          className={`${
            skill
              ? "bg-yellow-600 text-black-600"
              : "hover:bg-white hover:text-black "
          } py-2 px-4 cursor-pointer rounded-md `}
        >
          Tailor
        </span>
      </div>

      {/* {!skill ? <Title} */}

      {/* {!skill ? (
        <section className="text-4xl gap-8 grid lg:grid-cols-4">
          <div className="flex  flex-col items-center gap-2">
            Html <FaHtml5 className="text-orange-500" />
          </div>
          <div className="flex  flex-col items-center gap-2">
            Css <FaCss3Alt className="text-blue-500" />
          </div>
          <div className="flex  flex-col items-center gap-2">
            Javascript <SiJavascript className="text-yellow-400" />
          </div>
          <div className="flex  flex-col items-center gap-2">
            Typescipt
            <SiTypescript className="text-blue-600" />
          </div>
          <div className="flex  flex-col items-center gap-2">
            React <FaReact className="text-cyan-400" />
          </div>
          <div className="flex  flex-col items-center gap-2">
            Taiwind Css <SiTailwindcss className="text-orange-500" />
          </div>
          <div className="flex  flex-col items-center gap-2">
            Github <FaGithub className="text-sky-400" />
          </div>
          <div className="flex  flex-col items-center gap-2">
            Vscode <VscVscode className="text-indigo-500" />
          </div>
        </section>
      ) : (
        <p>Fashion Loading....</p>
      )} */}
    </div>
  );
};

export default Skills;
