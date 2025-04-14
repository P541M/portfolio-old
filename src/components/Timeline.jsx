import React from "react";
import {
  ChartBarIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  PencilIcon,
  FilmIcon,
  GlobeAltIcon,
  CogIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

const timeline = [
  {
    company: "Bank of Montreal (BMO)",
    roles: [
      {
        title: "Technology Research Analyst",
        icon: ServerIcon,
        description:
          "Translated business requirements into technical specifications and developed software solutions while evaluating new technologies for business applications.",
        duration: "May 2025 - Present",
      },
    ],
    hasWorkTermReport: false,
  },
  {
    company: "University of Guelph, College of Arts",
    roles: [
      {
        title: "Web Developer",
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
    hasWorkTermReport: true,
    reportPath: "https://p541m.github.io/f24-university-guelph-coa/",
  },
  {
    company: "BoscoBoys Distributors",
    roles: [
      {
        title: "Software Engineer Intern",
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
    hasWorkTermReport: true,
    reportPath: "https://p541m.github.io/s24-bosco-boys-distributors/",
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
    hasWorkTermReport: false,
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
    hasWorkTermReport: false,
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
        title: "Software Developer Intern",
        icon: CodeBracketIcon,
        description:
          "Assisted in the redesign of the company website, enhancing its usability and visual appeal.",
        duration: "Jan 2022 - May 2022",
      },
    ],
    hasWorkTermReport: false,
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
    hasWorkTermReport: false,
  },
];

export default function Timeline() {
  return (
    <section id="timeline-section" className="section-container min-h-screen">
      <h2 className="section-title">Professional Timeline</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {timeline.map(
          ({ company, roles, hasWorkTermReport, reportPath }, index) => (
            <article
              key={index}
              className="card group flex h-full flex-col overflow-hidden p-6"
            >
              <h3 className="mb-4 text-xl font-bold text-primary">{company}</h3>
              <div className="flex-grow">
                {roles.map(
                  ({ title, icon: Icon, description, duration }, idx) => (
                    <div key={idx} className="mb-6">
                      <div className="mb-2 flex items-center">
                        <Icon className="mr-2 h-5 w-5 text-primary" />
                        <h4 className="font-medium">{title}</h4>
                      </div>
                      <p className="mb-1 text-sm italic text-text/70">
                        {duration}
                      </p>
                      <p className="text-sm text-text/80">{description}</p>
                    </div>
                  ),
                )}
              </div>
              {hasWorkTermReport && (
                <div className="mt-4 border-t border-divider pt-4">
                  <a
                    href={reportPath}
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-lg bg-primary/10 px-4 py-2.5 font-medium text-primary transition-all duration-300 hover:bg-primary/20"
                  >
                    View Work Term Report
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </article>
          ),
        )}
      </div>
    </section>
  );
}
