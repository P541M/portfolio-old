import React, { useState } from "react";
import pimg from "../assets/pimg.PNG";
import pimg2 from "../assets/pimg2.PNG";
import pimg3 from "../assets/pimg3.PNG";
import pimg4 from "../assets/pimg4.PNG";
import pimg5 from "../assets/pimg5.PNG";
import pimg6 from "../assets/pimg6.PNG";
import pimg7 from "../assets/pimg7.PNG";
import pimg8 from "../assets/pimg8.PNG";
import pimg9 from "../assets/pimg9.PNG";
import pimg10 from "../assets/pimg10.PNG";
import pimg11 from "../assets/pimg11.PNG";
import pimg12 from "../assets/pimg12.PNG";

const projects = [
  {
    title: "Disperse | BoscoBoys Distributors",
    description: "Payroll app.",
    state: "Deployed",
    link: "https://bbd-disperse.vercel.app/",
    image: pimg12,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "JWT (jsonwebtoken)",
      "Bcrypt.js",
      "PDFKit",
      "Prettier",
      "ESLint",
    ],
  },
  {
    title: "BoscoBoys Distributors",
    description: "Developed a new company website from scratch.",
    state: "In Testing",
    link: "https://boscoboys.com/",
    image: pimg6,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "i18next",
      "Nodemailer",
      "Helmet",
      "ESLint",
      "Prettier",
      "Jest",
    ],
  },
  {
    title: "Waffles Or Pancakes?!",
    description: "Literally, waffles or pancakes.",
    state: "Deployed",
    link: "https://waffles-or-pancakes-frontend.vercel.app/",
    image: pimg9,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "Prettier",
      "ESLint",
      "Jest",
    ],
  },
  {
    title: "Password Generator",
    description: "The strongest password generator.",
    state: "Discontinued",
    link: "https://github.com/P541M/password-generator-frontend",
    image: pimg10,
    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "TypeScript",
      "Nodemailer",
      "Prettier",
      "ESLint",
    ],
  },
  {
    title: "Verbatim",
    description: "Collection of quotes.",
    state: "Discontinued",
    link: "https://verbatim-frontend.vercel.app/",
    image: pimg8,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "Font Awesome",
      "Prettier",
    ],
  },
  {
    title: "Echo",
    description: "Your voice, your echo.",
    state: "Discontinued",
    link: "https://github.com/P541M/fresh-start",
    image: pimg,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Firebase",
      "Tailwind CSS",
      "Axios",
      "Prettier",
    ],
  },
  {
    title: "V/\\ULT",
    description: "Showcasing the top crypto.",
    state: "Deployed",
    link: "https://p541m.github.io/crypto-tracker/",
    image: pimg7,
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Chart.js",
      "React Router",
      "Axios",
      "Tailwind CSS",
      "Prettier",
    ],
  },
  {
    title: "Personal Portfolio V1",
    description: "Deployed",
    state: "Deployed",
    link: "https://p541m.github.io/personal-portfolio/",
    image: pimg4,
    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "Tailwind CSS",
      "React Icons",
      "Prettier",
      "ESLint",
    ],
  },
  {
    title: "Personal Portfolio V2",
    description: "Discontinued",
    state: "Deployed",
    link: "https://p541m.github.io/personal-website/",
    image: pimg5,
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React Icons",
      "Prettier",
      "ESLint",
    ],
  },
  {
    title: "Evoria",
    description: "A passion project showcasing my love for fragrances.",
    state: "Deployed",
    link: "https://p541m.github.io/evoria/",
    image: pimg11,
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React Icons",
      "Prettier",
      "ESLint",
    ],
  },
  {
    title: "Savory Sips",
    description: "Your personal sommelier.",
    state: "Deployed",
    link: "https://p541m.github.io/savory-sips/",
    image: pimg2,
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "React Icons",
      "gh-pages",
    ],
  },
  {
    title: "Metric x Imperial",
    description: "Simple conversion tool.",
    state: "Deployed",
    link: "https://p541m.github.io/Metric-Imperial-Converter/",
    image: pimg3,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({});

  const getStatusColor = (status) => {
    switch (status) {
      case "Deployed":
        return "bg-green-500";
      case "In Testing":
        return "bg-orange-500";
      case "In Development":
        return "bg-yellow-500";
      case "Paused Development":
        return "bg-blue-500";
      case "Discontinued":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleToggleProject = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="projects-section"
      aria-labelledby="projects-title"
      className="min-h-screen px-6 pb-20 pt-10 text-text sm:px-8 md:px-16 lg:px-20"
    >
      <h2
        id="projects-title"
        className="mb-8 text-center text-3xl font-bold text-primary"
      >
        Projects
      </h2>

      <div className="">
        {projects.map((project, index) => (
          <div key={project.title}>
            <button
              onClick={() => handleToggleProject(index)}
              className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold transition hover:text-primary focus:outline-none"
            >
              <span>{project.title}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  expandedProjects[index] ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedProjects[index]
                  ? "max-h-screen translate-y-0 opacity-100"
                  : "max-h-0 translate-y-4 opacity-0"
              }`}
            >
              <div className="pb-4">
                <div className="mt-2 flex flex-col md:flex-row md:items-start md:space-x-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 h-auto w-full rounded-md shadow-md md:mb-0 md:w-1/2"
                  />
                  <div className="md:w-1/2">
                    <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                      {project.description}
                    </p>
                    <div className="my-2 flex items-center">
                      <span
                        className={`mr-2 h-2 w-2 rounded-full ${getStatusColor(
                          project.state,
                        )}`}
                      ></span>
                      <p className="text-sm italic sm:text-base md:text-base lg:text-lg xl:text-lg">
                        {project.state}
                      </p>
                    </div>

                    {project.technologies?.length > 0 && (
                      <div className="mt-2">
                        <h4 className="font-semibold text-primary">
                          Technologies Used:
                        </h4>
                        <ul className="flex flex-wrap gap-2 pt-1">
                          {project.technologies.map((tech, idx) => (
                            <li
                              key={idx}
                              className="rounded-md bg-primary px-2 py-1 text-sm text-bg"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text underline transition-all hover:text-primary"
                      >
                        Visit Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {index < projects.length - 1 && (
              <hr className="my-4 border-bgContrast" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
