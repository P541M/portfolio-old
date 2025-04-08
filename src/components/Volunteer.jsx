import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CodeBracketIcon,
  Cog6ToothIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";

const volunteer = [
  {
    company: "Google Developer Student Club | UofG",
    roles: [
      {
        title: "Hackathon Volunteer",
        icon: CodeBracketIcon,
        description:
          "Managed registration for 250+ participants, coordinated event logistics, and promoted hackathons through social media to ensure smooth operations.",
        duration: "May 2024",
      },
    ],
  },
  {
    company: "e-NABLE",
    roles: [
      {
        title: "Volunteer Prosthetic Assembler",
        icon: Cog6ToothIcon,
        description:
          "Collaborated with a team of 3-4 to assemble 3D printed prosthetic arms and legs, utilized various materials for texture enhancements, and developed foundational 3D printing skills.",
        duration: "Sep 2021 - Jun 2022",
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
];

export default function Volunteer() {
  const navigate = useNavigate();

  return (
    <section id="volunteer-section" className="section-container min-h-screen">
      <h2 className="section-title">Volunteer Experience</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {volunteer.map(({ company, roles }, index) => (
          <article
            key={index}
            className="card flex h-full flex-col p-6 hover:shadow-md"
          >
            <h3 className="text-primary mb-4 text-xl font-bold">{company}</h3>
            <div className="flex-grow">
              {roles.map(
                ({ title, icon: Icon, description, duration }, idx) => (
                  <div key={idx} className="mb-6">
                    <div className="mb-2 flex items-center">
                      <div className="bg-primary/10 mr-3 flex h-8 w-8 items-center justify-center rounded-full">
                        <Icon className="text-primary h-4 w-4" />
                      </div>
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
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="mailto:videna.psalmeleazar@gmail.com"
          className="bg-primary/10 text-primary hover:bg-primary group inline-flex items-center rounded-lg px-5 py-2.5 transition-all duration-300 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Interested in volunteering together? Contact me!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
    </section>
  );
}
