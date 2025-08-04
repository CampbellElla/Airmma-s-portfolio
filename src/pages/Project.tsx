//import React from "react";
import ProjectCard from "../ui/ProjectCard";

const Project = () => {
  const projects = [
    {
      image: "/project 1.png",
      url: "http://localhost:5174/",
      title: "A Form",
      tools: "React, Tailwind CSS, JavaScript, Vite",
    },
    {
      image: "/project 2.png",
      url: "http://127.0.0.1:5500/about.html",
      title: "Business Website",
      tools: "HTML, CSS, JavaScript",
    },
    {
      image: "/project 3.png",
      url: "http://127.0.0.1:5500/index.html",
      title: "Another Web Page",
      tools: "HTML, JavaScript",
    },
    {
      image: "/project 4.png",
      url: "http://127.0.0.1:5500/",
      title: "Cat Website",
      tools: "HTML, CSS",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-black via-gray-900 to-black px-6 py-12 flex flex-wrap justify-center gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Project;
