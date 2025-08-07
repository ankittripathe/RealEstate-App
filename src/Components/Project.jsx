import  { useEffect, useState } from "react";
import { assetsCollection, projectsData } from "../assets/assets";
import { motion } from "motion/react";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // useEffect function
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow); // cleanup funtion
  }, []);

  //(1) nextProject
  const nextProject = () => {
    if (currentIndex < projectsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  //(2) prevproject
  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(projectsData.length - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 px-6 md:px-20 lg:px-28 my-16 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-gray-500  lg:max-w-80 md:max-w-110 mx-auto text-center mb-8">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button onClick={prevProject} className="p-3 bg-gray-200 rounded mr-2">
          <img src={assetsCollection.left_arrow} alt="PreviousIcon" />
        </button>

        <button onClick={nextProject} className="p-3 bg-gray-200 rounded mr-2">
          <img src={assetsCollection.right_arrow} alt="NextIcon" />
        </button>
      </div>

      {/* Project slider container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 106) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full  md:w-1/2 lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />

              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-1 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800 text-center lg:text-start">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm text-center lg:text-start">
                    {project.price}{" "}
                    <span className="px-1">{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
