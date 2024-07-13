import React from "react";

const projects = [
  {
    title: "BoscoBoys Distributors",
    description: "Companies Revamped Website",
    state: "In development",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Fresh Start",
    description: "Twitter with 24 database.",
    state: "In development",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    state: "In development",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Project 4",
    description: "Description of project 4",
    state: "In development",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Project 5",
    description: "Description of project 5",
    state: "In development",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Project 6",
    description: "Description of project 6",
    state: "In development",
    link: "#",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
];

const experiences = [
  { title: "Experience 1", description: "Description of experience 1" },
  { title: "Experience 2", description: "Description of experience 2" },
  { title: "Experience 3", description: "Description of experience 3" },
];

const Content = () => {
  const handleNavigation = (link) => {
    window.location.href = link;
  };

  return (
    <div className="px-20 py-20 fade-up-two">
      {/* Projects here */}
      <section className="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(project.link)}
              className="bg-bgContrast p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-sm mb-4 fade-up"
              />
              <div className="text-sm sm:text-md md:text-md lg:text-lg xl:text-lg fade-up">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.state}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
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
