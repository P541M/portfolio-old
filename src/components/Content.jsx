import React from "react";
import {
  ChartBarIcon,
  CodeBracketIcon,
  MicrophoneIcon,
  ComputerDesktopIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  PencilIcon,
  FilmIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
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
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "BoscoBoys Distributors",
    description: "New company website.",
    state: "In Testing",
    link: "https://boscoboys.com/",
    image: pimg6,
  },
  {
    title: "Waffles Or Pancakes?!",
    description: "Literally, waffles or pancakes.",
    state: "Deployed",
    link: "https://waffles-or-pancakes-frontend.vercel.app/",
    image: pimg9,
  },
  {
    title: "Password Generator",
    description: "The strongest password generator.",
    state: "In Development",
    link: "https://github.com/P541M/password-generator-frontend",
    image: pimg10,
  },
  {
    title: "Echo",
    description: "Your voice, your echo.",
    state: "Paused Development",
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
    title: "Verbatim",
    description: "Collection of quotes.",
    state: "In Testing",
    link: "https://verbatim-frontend.vercel.app/",
    image: pimg8,
  },
  {
    title: "CRYPTo EL1Te",
    description: "Showcasing the top cryptos.",
    state: "In Testing",
    link: "https://p541m.github.io/crypto-tracker/",
    image: pimg7,
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
    company: "College of Arts, University of Guelph",
    roles: [
      {
        title: "Website Redesign Coordinator",
        icon: GlobeAltIcon,
        description:
          "Led the redesign of the College of Arts website at the University of Guelph, improving user experience and ensuring accessibility compliance.",
        duration: "Sept 2024 - Present",
      },
    ],
  },
  {
    company: "BoscoBoys Distributors",
    roles: [
      {
        title: "Fullstack Developer Intern",
        icon: ComputerDesktopIcon,
        description:
          "Directed the overhaul of the company website and optimized database operations for improved efficiency.",
        duration: "May 2024 - August 2024",
      },
      {
        title: "Business Analyst Intern",
        icon: ChartBarIcon,
        description:
          "Analyzed and optimized business workflows to increase operational efficiency and reduce costs.",
        duration: "May 2024 - August 2024",
      },
    ],
  },
  {
    company: "MediaMatchup",
    roles: [
      {
        title: "Founder & CEO",
        icon: UserGroupIcon,
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
        icon: FilmIcon,
        description:
          "Collaborated with leading creators, contributing to content that garnered over 20+ million views across various platforms.",
        duration: "Jan 2017 - Jan 2023",
      },
      {
        title: "Graphic Designer",
        icon: PencilIcon,
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
        icon: MicrophoneIcon,
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
        icon: FilmIcon,
        description:
          "Edited numerous interviews with leading individuals in the environmental field, ensuring high-quality production and compelling storytelling.",
        duration: "Jan 2022 - May 2022",
      },
      {
        title: "Frontend Developer Intern",
        icon: CodeBracketIcon,
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
        icon: BuildingStorefrontIcon,
        description:
          "Worked in a fast-paced environment, providing efficient and friendly service to customers.",
        duration: "Jun 2019 - Aug 2019",
      },
    ],
  },
];

const Content = () => {
  const navigate = useNavigate();

  const navigateToReport = () => {
    navigate("/s24-work-term-report");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Deployed":
        return "bg-green-500";
      case "In Testing":
        return "bg-orange-500";
      case "In Development":
        return "bg-yellow-500";
      case "Temporarily Paused":
        return "bg-red-500";
      case "Paused Development":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="fade-up-three px-6 sm:px-8 md:px-16 lg:px-20">
      <section aria-labelledby="projects-title" className="projects">
        <h2 id="projects-title" className="sr-only">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer rounded-md bg-bgContrast p-16"
              aria-labelledby={`project-title-${index}`}
              aria-describedby={`project-description-${index}`}
            >
              <div className="relative mb-8 w-full pb-[56.25%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="fade-up-two absolute left-0 top-0 h-full w-full rounded-md object-cover shadow-md transition-transform duration-300 group-hover:scale-102"
                />
              </div>
              <div className="fade-up-three text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl">
                <p id={`project-title-${index}`} className="font-semibold">
                  {project.title}
                </p>
                <p
                  id={`project-description-${index}`}
                  className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg"
                >
                  {project.description}
                </p>
                <div className="flex items-center">
                  <span
                    className={`mr-2 h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 xl:h-2.5 xl:w-2.5 ${getStatusColor(
                      project.state,
                    )}`}
                  ></span>
                  <p className="text-sm italic sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {project.state}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="mx-20 my-20 border-t border-gray-300"></div>

      <section
        aria-labelledby="experiences-title"
        className="experiences my-20"
      >
        <h2 id="experiences-title" className="sr-only">
          Experiences
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <div key={index} className="rounded-md bg-bgContrast p-16">
              <h3 className="fade-up mb-4 text-base font-semibold sm:text-lg md:text-lg lg:text-xl xl:text-xl">
                {experience.company}
              </h3>

              {experience.roles.map((role, idx) => (
                <div key={idx} className="mb-4">
                  <div className="fade-up-two flex items-center">
                    {React.createElement(role.icon, {
                      className: "mr-2 h-5 w-5",
                    })}
                    <h4 className="text-sm font-medium sm:text-base md:text-base lg:text-lg xl:text-lg">
                      {role.title}
                    </h4>
                  </div>
                  <span className="fade-up-two mb-2 block text-xs italic text-text sm:text-sm md:text-sm lg:text-base xl:text-base">
                    {role.duration}
                  </span>
                  <p className="fade-up-three text-xs sm:text-sm md:text-sm lg:text-base xl:text-base">
                    {role.description}
                  </p>
                </div>
              ))}

              {experience.company === "BoscoBoys Distributors" && (
                <div className="fade-up-four mt-8 flex">
                  <button
                    onClick={navigateToReport}
                    className="rounded-lg border border-primary bg-bgContrast px-6 py-3 text-sm text-text transition duration-300 ease-in-out hover:bg-primary hover:text-bg"
                  >
                    View Work Term Report
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;
