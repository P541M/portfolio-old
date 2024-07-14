import React from "react";
import pimg from "../assets/pimg.PNG"; // Import the local image
import pimg2 from "../assets/pimg2.PNG"; // Import the local image
import pimg3 from "../assets/pimg3.PNG"; // Import the local image
import pimg4 from "../assets/pimg4.PNG"; // Import the local image
import pimg5 from "../assets/pimg5.PNG"; // Import the local image
import pimg6 from "../assets/pimg6.PNG"; // Import the local image

const projects = [
  {
    title: "BoscoBoys Distributors",
    description: "New company website.",
    state: "In Development",
    link: "https://www.boscoboysdistributors.com/",
    image: pimg6,
  },
  {
    title: "FreshStart",
    description: "Daily thoughts, wiped clean.",
    state: "Development Paused",
    link: "https://github.com/P541M/fresh-start",
    image: pimg,
  },
  {
    title: "Savory Sips",
    description: "Your personal sommelier.",
    state: "Deployed",
    link: "https://p541m.github.io/savory-sips/",
    image: pimg2,
  },
  {
    title: "Metric x Imperial",
    description: "Simple conversion tool.",
    state: "Deployed",
    link: "https://p541m.github.io/Metric-Imperial-Converter/",
    image: pimg3,
  },
  {
    title: "Personal Portfolio V1",
    description: "My first ever portfolio.",
    state: "Deployed",
    link: "https://p541m.github.io/personal-portfolio/",
    image: pimg4,
  },
  {
    title: "Personal Portfolio V2",
    description: "First take on a minimalist portfolio.",
    state: "Deployed",
    link: "https://p541m.github.io/personal-website/",
    image: pimg5,
  },
];

const experiences = [
  {
    company: "BoscoBoys Distributors",
    roles: [
      {
        title: "Fullstack Developer Intern",
        description:
          "Directed the overhaul of the company website and optimized database operations for improved efficiency.",
        duration: "May 2024 - Present",
      },
      {
        title: "Business Analyst Intern",
        description:
          "Identified pain points and streamlined business operations.",
        duration: "May 2024 - Present",
      },
    ],
  },
  {
    company: "MediaMatchup",
    roles: [
      {
        title: "Founder & CEO",
        description:
          "Founded and led a platform connecting creative professionals with clients, addressing freelancing challenges in the creative industry.",
        duration: "Jun 2021 - Aug 2023",
      },
    ],
  },
  {
    company: "Videna Visuals",
    roles: [
      {
        title: "Video Editor",
        description:
          "Collaborated with leading creators, contributing to content that garnered over 20+ million views across various platforms.",
        duration: "Jan 2017 - Jan 2023",
      },
      {
        title: "Graphic Designer",
        description:
          "Utilized creativity and technical skills to design compelling visual content for diverse projects.",
        duration: "Jan 2016 - Aug 2020",
      },
    ],
  },
  {
    company: "Im a Mortal",
    roles: [
      {
        title: "Podcast Sound Engineer Intern",
        description:
          "Edited all podcast audio and assisted in the publishing process, ensuring high-quality sound production and timely releases.",
        duration: "Jan 2022 - May 2022",
      },
    ],
  },
  {
    company: "Seeds of Diversity Canada",
    roles: [
      {
        title: "Video Editor",
        description:
          "Edited numerous interviews with leading individuals in the environmental field, ensuring high-quality production and compelling storytelling.",
        duration: "Jan 2022 - May 2022",
      },
      {
        title: "Frontend Developer Intern",
        description:
          "Assisted in the redesign of the company website, enhancing its usability and visual appeal.",
        duration: "Jan 2022 - May 2022",
      },
    ],
  },
  {
    company: "Hero Certified Burgers",
    roles: [
      {
        title: "Crew Member",
        description:
          "Worked in a fast-paced environment, providing efficient and friendly service to customers.",
        duration: "Jun 2019 - Aug 2019",
      },
    ],
  },
];

const Content = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Deployed":
        return "bg-green-500";
      case "In Development":
        return "bg-yellow-500";
      case "Pending Continuation":
        return "bg-red-500";
      case "Development Paused":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="px-20 fade-up-three">
      {/* Projects here */}
      <section className="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bgContrast p-16 rounded-md cursor-pointer group"
            >
              <div className="relative w-full pb-[56.25%] mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md transition-transform duration-300 group-hover:scale-102 fade-up-two"
                />
              </div>
              <div className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl fade-up-three">
                <p className="font-semibold">{project.title}</p>
                <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                  {project.description}
                </p>
                <div className="flex items-center">
                  <span
                    className={`rounded-full mr-2 ${
                      project.state === "Deployed"
                        ? "w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-2.5 xl:h-2.5"
                        : project.state === "In Development"
                        ? "w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-2.5 xl:h-2.5"
                        : project.state === "Development Paused"
                        ? "w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-2.5 xl:h-2.5"
                        : project.state === "Pending Continuation"
                        ? "w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-2.5 xl:h-2.5"
                        : "w-1.5 h-1.5"
                    } ${getStatusColor(project.state)}`}
                  ></span>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg italic">
                    {project.state}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="border-t border-gray-300 my-20 mx-20"></div>

      {/* Experiences here */}
      <section className="experiences my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-bgContrast p-16 rounded-md">
              <h3
                className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl mb-4 font-semibold fade-up"
                style={{ color: experience.color }}
              >
                {experience.company}
              </h3>
              {experience.roles.map((role, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-medium fade-up-two">
                    {role.title}
                  </h4>
                  <span className="block text-xs sm:text-sm md:text-sm lg:text-base xl:text-base text-text italic mb-2 fade-up-two">
                    {role.duration}
                  </span>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg fade-up-three">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;
