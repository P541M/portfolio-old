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

const volunteer = [
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
    <section
      id="volunteer-section"
      className="min-h-screen px-6 pb-20 pt-10 text-text sm:px-8 md:px-16 lg:px-20"
    >
      <h2 className="mb-4 text-center text-3xl font-bold text-primary">
        Volunteer
      </h2>
      <hr className="mb-4 border-divContrast" />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {volunteer.map(({ company, roles }, index) => (
          <article
            key={index}
            className="flex flex-col justify-between rounded-lg bg-bgContrast p-6 shadow-md"
          >
            <div>
              <h3 className="mb-4 text-xl font-semibold">{company}</h3>
              {roles.map(
                ({ title, icon: Icon, description, duration }, idx) => (
                  <div key={idx} className="mb-6">
                    <div className="mb-2 flex items-center">
                      <Icon className="mr-2 h-6 w-6 text-primary" />
                      <h4 className="text-lg font-medium">{title}</h4>
                    </div>
                    <p className="mb-1 text-base italic">{duration}</p>
                    <p className="text-base">{description}</p>
                  </div>
                ),
              )}
            </div>
            <div className="mt-4">
              {company === "BoscoBoys Distributors" && (
                <button
                  onClick={() => navigate("/boscoboys-distributors-wtr")}
                  className="rounded-full bg-primary px-6 py-3 text-bg shadow-md transition-all duration-300 hover:scale-105 hover:bg-bgContrast"
                >
                  View Work Term Report
                </button>
              )}
              {company === "University of Guelph, College of Arts" && (
                <button
                  onClick={() =>
                    navigate("/university-guelph-college-of-arts-wtr")
                  }
                  className="mt-2 rounded-full bg-primary px-6 py-3 text-bg shadow-md transition-all duration-300 hover:scale-105 hover:bg-bgContrast"
                >
                  View Work Term Report
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
