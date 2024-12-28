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
  CogIcon,
} from "@heroicons/react/24/solid";

const timeline = [
  {
    company: "University of Guelph, College of Arts",
    roles: [
      {
        title: "Website Project Lead",
        icon: CogIcon,
        description:
          "Led the redesign and migration of the College of Arts websites, overseeing content updates, accessibility, and stakeholder coordination.",
        duration: "Jan 2025 - Apr 2025",
      },
      {
        title: "Website Redesign Coordinator",
        icon: GlobeAltIcon,
        description:
          "Assisted with the College of Arts website redesign, managing content updates and platform migration while ensuring accessibility.",
        duration: "Sep 2024 - Dec 2024",
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
        duration: "May 2024 - Aug 2024",
      },
      {
        title: "Business Analyst Intern",
        icon: ChartBarIcon,
        description:
          "Analyzed and optimized business workflows to increase operational efficiency and reduce costs.",
        duration: "May 2024 - Aug 2024",
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

  return (
    <section
      id="timeline-section"
      className="min-h-screen px-6 pb-20 pt-10 text-text sm:px-8 md:px-16 lg:px-20"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-primary">
        Timeline
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {timeline.map(({ company, roles }, index) => (
          <article
            key={index}
            className="rounded-lg bg-bgContrast p-6 shadow-md"
          >
            <h3 className="mb-4 text-xl font-semibold">{company}</h3>
            {roles.map(({ title, icon: Icon, description, duration }, idx) => (
              <div key={idx} className="mb-6">
                <div className="mb-2 flex items-center">
                  <Icon className="mr-2 h-6 w-6 text-primary" />
                  <h4 className="text-lg font-medium">{title}</h4>
                </div>
                <p className="mb-1 text-base italic">{duration}</p>
                <p className="text-base">{description}</p>
              </div>
            ))}
            {company === "BoscoBoys Distributors" && (
              <button
                onClick={() => navigate("/s24-work-term-report")}
                className="mt-2 rounded-full bg-primary px-6 py-3 text-bg shadow-md transition-all duration-300 hover:scale-105 hover:bg-bgContrast"
              >
                View Work Term Report
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
