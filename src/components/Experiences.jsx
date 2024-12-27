import React from "react";
import { useNavigate } from "react-router-dom";
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
        title: "Full Stack Developer Intern",
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
        title: "Front End Developer Intern",
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

export default function Experiences() {
  const navigate = useNavigate();

  const navigateToReport = () => {
    navigate("/s24-work-term-report");
  };

  return (
    <section
      id="experience-section"
      aria-labelledby="experiences-title"
      className="experiences my-20"
    >
      <h2 id="experiences-title" className="sr-only">
        Experiences
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <div key={index} className="rounded-md bg-bgContrast p-16">
            <h3 className="mb-4 text-base font-semibold sm:text-lg md:text-lg lg:text-xl xl:text-xl">
              {experience.company}
            </h3>

            {experience.roles.map((role, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex items-center">
                  {React.createElement(role.icon, {
                    className: "mr-2 h-5 w-5",
                  })}
                  <h4 className="text-sm font-medium sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {role.title}
                  </h4>
                </div>
                <span className="mb-2 block text-xs italic text-text sm:text-sm md:text-sm lg:text-base xl:text-base">
                  {role.duration}
                </span>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base">
                  {role.description}
                </p>
              </div>
            ))}

            {experience.company === "BoscoBoys Distributors" && (
              <div className="mt-8 flex">
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
  );
}
