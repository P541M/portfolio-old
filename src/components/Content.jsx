import React from "react";

const projects = [
  {
    title: "BoscoBoys Distributors",
    description: "Newly Revamped Website",
    state: "In development",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "FreshStart",
    description: "Twitter with 24 database.",
    state: "In development",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Savory Sips",
    description: "Your personal sommelier",
    state: "Deployed",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Metric x Imperial",
    description: "Description of project 4",
    state: "Deployed",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Personal Portfolio V1",
    description: "My first ever portfolio",
    state: "Deployed",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Personal Portfolio V1.5",
    description: "An incomplete portfolio of mine",
    state: "Deployed",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
];

const experiences = [
  { title: "Experience 1", description: "Description of experience 1" },
  { title: "Experience 2", description: "Description of experience 2" },
  { title: "Experience 3", description: "Description of experience 3" },
  { title: "Experience 4", description: "Description of experience 4" },
  { title: "Experience 5", description: "Description of experience 5" },
  { title: "Experience 6", description: "Description of experience 6" },
];

const Content = () => {
  const handleNavigation = (link) => {
    window.location.href = link;
  };

  return (
    <div className="px-20 fade-up-two">
      {/* Projects here */}
      <section className="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(project.link)}
              className="bg-bgContrast p-16 rounded-sm cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-sm mb-8 shadow-sm transition-transform duration-300 group-hover:scale-103"
                />
              </div>
              <div className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg fade-up">
                <p className="font-semibold">{project.title}</p>
                <p>{project.description}</p>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base italic">
                  {project.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-gray-300 my-20 mx-20"></div>

      {/* Experiences here */}
      <section className="experiences mt-20">
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-bgContrast p-6">
              <h3 className="text-sm sm:text-md md:text-md lg:text-lg xl:text-lg mb-4 fade-up">
                {experience.title}
              </h3>
              <p className="text-sm sm:text-md md:text-md lg:text-lg xl:text-lg mb-4 fade-up">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;
