import React from "react";
import { useNavigate } from "react-router-dom";
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
} from "@heroicons/react/24/solid";

const timeline = [
  {
    company: "University of Guelph, College of Arts",
    roles: [
      {
        title: "Web Developer",
        icon: CogIcon,
        description:
          "Led the redesign and migration of the College of Arts websites, overseeing content updates, accessibility, and stakeholder coordination.",
        duration: "Jan 2025 - Present",
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
    reportPath: "/university-guelph-college-of-arts-wtr",
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
    reportPath: "/boscoboys-distributors-wtr",
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
  const navigate = useNavigate();

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
              <h3 className="text-primary mb-4 text-xl font-bold">{company}</h3>
              <div className="flex-grow">
                {roles.map(
                  ({ title, icon: Icon, description, duration }, idx) => (
                    <div key={idx} className="mb-6">
                      <div className="mb-2 flex items-center">
                        <Icon className="text-primary mr-2 h-5 w-5" />
                        <h4 className="font-medium">{title}</h4>
                      </div>
                      <p className="text-text/70 mb-1 text-sm italic">
                        {duration}
                      </p>
                      <p className="text-text/80 text-sm">{description}</p>
                    </div>
                  ),
                )}
              </div>

              {hasWorkTermReport && (
                <div className="border-divider mt-4 border-t pt-4">
                  <button
                    onClick={() => navigate(reportPath)}
                    className="bg-primary/10 text-primary hover:bg-primary/20 flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-medium transition-all duration-300"
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
                  </button>
                </div>
              )}
            </article>
          ),
        )}
      </div>
    </section>
  );
}
