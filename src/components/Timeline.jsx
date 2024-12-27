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

const timeline = [
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

export default function Timeline() {
  const navigate = useNavigate();

  const navigateToReport = () => {
    navigate("/s24-work-term-report");
  };

  return (
    <section
      id="timeline-section"
      aria-labelledby="timeline-title"
      className="projects px-6 py-10 text-text sm:px-8 md:px-16 lg:px-20"
    >
      <h2
        id="timeline-title"
        className="mb-8 text-center text-3xl font-bold text-primary"
      >
        Timeline
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {timeline.map((timeline, index) => (
          <article
            key={index}
            className="rounded-lg bg-bgContrast p-6 shadow-md"
          >
            <header>
              <h3 className="mb-4 text-xl font-semibold text-text">
                {timeline.company}
              </h3>
            </header>

            {timeline.roles.map((role, idx) => (
              <div key={idx} className="mb-6">
                <div className="mb-2 flex items-center">
                  {React.createElement(role.icon, {
                    className: "mr-2 h-6 w-6 text-primary",
                    "aria-hidden": true,
                  })}
                  <h4 className="text-lg font-medium text-text">
                    {role.title}
                  </h4>
                </div>
                <span className="mb-2 block text-sm italic text-text">
                  {role.duration}
                </span>
                <p className="text-sm text-text">{role.description}</p>
              </div>
            ))}

            {timeline.company === "BoscoBoys Distributors" && (
              <div className="mt-4">
                <button
                  onClick={navigateToReport}
                  className="rounded-full bg-primary px-6 py-3 text-bg transition-transform duration-300 hover:scale-105 hover:bg-bgContrast"
                  aria-label="View Work Term Report"
                >
                  View Work Term Report
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
