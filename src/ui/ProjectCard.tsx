import { FaExternalLinkAlt } from "react-icons/fa";

//import React from "react";
interface ProjectCardProps {
  image: string;
  url: string;
  title: string;
  tools: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  url,
  title,
  tools,
}) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg group relative transition-transform transform hover:scale-105 w-full max-w-md">
      <div className="relative">
        <img src={image} alt="project" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full text-sm hover:bg-yellow-600 flex gap-4 items-center"
          >
            VISIT WEBSITE <FaExternalLinkAlt className="h-6" />
          </a>
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-sm text-yellow-500">Tools Used: {tools}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
