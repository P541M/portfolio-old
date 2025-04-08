import React from "react";
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
  return (
    <section id="volunteer-section" className="section-container min-h-screen">
      <h2 className="section-title">Volunteer Experience</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {volunteer.map(({ company, roles }, index) => (
          <article
            key={index}
            className="card flex h-full flex-col p-6 hover:shadow-md"
          >
            <h3 className="mb-4 text-xl font-bold text-primary">{company}</h3>
            <div className="flex-grow">
              {roles.map(
                ({ title, icon: Icon, description, duration }, idx) => (
                  <div key={idx} className="mb-6">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
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
          </article>
        ))}
      </div>
    </section>
  );
}
