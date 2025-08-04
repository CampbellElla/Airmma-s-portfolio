import { motion } from "framer-motion";
const experienceData = [
  {
    year: "2020 - 2025",
    text: "Studied Fashion design This period shaped my creative eye and sense of structure, which later influenced my approach to UI and frontend development.",
    bgColor: "bg-red-500",
    borderColor: "border-red-500",
  },
  {
    year: "2023 - 2024",
    text: "Started exploring web development through HTML & CSS while still studying fashion. Built small projects and watched tutorials consistently.",
    bgColor: "bg-green-500",
    borderColor: "border-green-500",
  },
  {
    year: "2024 - 2025",
    text: "Learned JavaScript, Tailwind, and React. I spent more time on frontend projects and embraced the world of component-based design.",
    bgColor: "bg-blue-500",
    borderColor: "border-blue-500",
  },
  {
    year: "2024 - 2025",
    text: "Built freelance and personal projects. Improved on responsiveness, clean UI, and real-world project experience using GitHu and Vercel.",
    bgColor: "bg-yellow-400 text-black",
    borderColor: "border-yellow-400",
  },
  {
    year: "2025- 2025",
    text: "Started formal training in software development with a focus on JavaScript, React, and TypeScript. Currently building a stronger coding foundation.",
    bgColor: "bg-gray-500",
    borderColor: "border-gray-500",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="py-16 px-4 md:px-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-16">
        Education And Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* center line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-yellow-600 transform -translate-x-1/2 z-0" />

        {experienceData.map((item, index) => {
          const isLeft = index % 2 !== 0;

          return (
            <div
              key={index}
              className="relative mb-12 flex items-center w-full"
            >
              {/* card */}
              <div
                className={`w-1/2 px-4 ${
                  isLeft ? "order-1 text-left" : "order-2 text-right"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`p-4 rounded-lg shadow-md ${item.bgColor}`}
                >
                  <h3 className="font-bold text-lg">{item.year}</h3>
                  <p className="text-sm mt-2">{item.text}</p>
                </motion.div>
              </div>

              {/* dot */}
              <div
                className="z-10 w-6 h-6 bg-black border-4 rounded-full border-white absolute left-1/2 transform -translate-x-1/2"
                style={{ borderColor: item.borderColor }}
              />

              {/* empty spacing for layout */}
              <div className={`w-1/2 ${isLeft ? "order-2" : "order-1"}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
