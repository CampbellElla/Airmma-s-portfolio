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
      url: "https://business-website-brown.vercel.app/",
      title: "Business Website",
      tools: "HTML, CSS, JavaScript",
    },
    {
      image: "/project 3.png",
      url: "https://u-host-business-website-gp9f.vercel.app/",
      title: "First Web Page",
      tools: "HTML, JavaScript",
    },
    {
      image: "/project 4.png",
      url: "https://construction-psi-five.vercel.app/",
      title: "Cat Website",
      tools: "HTML, CSS",
    },
    {
      image: "/project 5.png",
      url: "https://react-socials.vercel.app/",
      title: "Social website",
      tools: "Vite + React",
    },
    {
      image: "/project 6.png",
      url: "https://mindful-eating-qja5.vercel.app/",
      title: "Nutritional website",
      tools: "Vite + React",
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
