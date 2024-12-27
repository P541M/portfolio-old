import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Navbar = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const handleOpenContactForm = () => {
    setContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setContactFormOpen(false);
  };

  const handleScrollToTimeline = () => {
    const timelineSection = document.getElementById("timeline-section");
    timelineSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="fixed bottom-[5%] left-1/2 z-50 flex -translate-x-1/2 items-center justify-center rounded-2xl bg-bgContrast/50 px-4 py-3 shadow-lg backdrop-blur-sm"
        style={{ width: "fit-content" }}
        aria-label="Navbar"
      >
        <ul className="flex items-center justify-center">
          <li className="group relative mx-4">
            <button
              onClick={handleScrollToHero}
              aria-label="Home"
              className="transform text-2xl text-text transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-primary"
            >
              <FontAwesomeIcon icon={faHome} />
            </button>
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded bg-primary px-3 py-1 text-sm text-bg opacity-0 transition-all duration-300 group-hover:translate-y-[-6px] group-hover:opacity-100">
              Home
            </span>
          </li>
          <li className="group relative mx-4">
            <button
              onClick={handleScrollToTimeline}
              aria-label="Timeline"
              className="transform text-2xl text-text transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-primary"
            >
              <FontAwesomeIcon icon={faBriefcase} />
            </button>
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded bg-primary px-3 py-1 text-sm text-bg opacity-0 transition-all duration-300 group-hover:translate-y-[-6px] group-hover:opacity-100">
              Timeline
            </span>
          </li>
          <li className="group relative mx-4">
            <button
              onClick={handleScrollToProjects}
              aria-label="Projects"
              className="transform text-2xl text-text transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-primary"
            >
              <FontAwesomeIcon icon={faProjectDiagram} />
            </button>
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded bg-primary px-3 py-1 text-sm text-bg opacity-0 transition-all duration-300 group-hover:translate-y-[-6px] group-hover:opacity-100">
              Projects
            </span>
          </li>

          {/* Vertical Divider */}
          <div className="mx-4 h-8 w-px bg-text"></div>

          <li className="group relative mx-4">
            <button
              onClick={handleOpenContactForm}
              aria-label="Contact"
              className="transform text-2xl text-text transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-primary"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded bg-primary px-3 py-1 text-sm text-bg opacity-0 transition-all duration-300 group-hover:translate-y-[-6px] group-hover:opacity-100">
              Contact
            </span>
          </li>
        </ul>
      </div>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />
    </div>
  );
};

export default Navbar;
