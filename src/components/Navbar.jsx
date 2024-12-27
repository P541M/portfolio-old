import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Taskbar = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const handleOpenContactForm = () => {
    setContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setContactFormOpen(false);
  };

  const handleScrollToCareer = () => {
    const careerSection = document.getElementById("experience-section");
    careerSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Taskbar */}
      <div
        className="fixed bottom-[5%] left-1/2 z-50 flex -translate-x-1/2 items-center justify-center rounded-2xl bg-bgContrast px-4 py-3 shadow-lg backdrop-blur-md"
        style={{ width: "fit-content" }}
        aria-label="Taskbar"
      >
        <ul className="flex items-center justify-center">
          <li className="group relative mx-4">
            <button
              onClick={handleScrollToHero}
              aria-label="Home"
              className="transform text-2xl text-text transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:text-primary"
            >
              <FontAwesomeIcon icon={faHome} />
            </button>
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded bg-primary px-3 py-1 text-xs text-bg opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-[-6px] group-hover:opacity-100">
              Home
            </span>
          </li>
          <li className="group relative mx-4">
            <button
              onClick={handleScrollToCareer}
              aria-label="Career"
              className="transform text-2xl text-text transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:text-primary"
            >
              <FontAwesomeIcon icon={faBriefcase} />
            </button>
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded bg-primary px-3 py-1 text-xs text-bg opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-[-6px] group-hover:opacity-100">
              Career
            </span>
          </li>
          <li className="group relative mx-4">
            <button
              onClick={handleOpenContactForm}
              aria-label="Contact"
              className="transform text-2xl text-text transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:text-primary"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded bg-primary px-3 py-1 text-xs text-bg opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-[-6px] group-hover:opacity-100">
              Contact
            </span>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />
    </div>
  );
};

export default Taskbar;
