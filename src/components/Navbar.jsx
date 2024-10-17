import React, { useState } from "react";
import logo from "../assets/logo.png";
import ContactForm from "./ContactForm";

const Navbar = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const handleOpenContactForm = () => {
    setContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setContactFormOpen(false);
  };

  const handleLogoClick = () => {
    window.location.href = "https://p541m.github.io/portfolio/";
  };

  const handleScrollToCareer = () => {
    const careerSection = document.getElementById("experience-section");
    careerSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div
        className="fade-up fixed left-0 right-0 top-0 z-50 h-[60px] backdrop-blur-lg sm:h-[70px] md:h-[75px]"
        aria-label="Main Navigation"
      >
        <div className="mx-auto flex h-full max-w-[1250px] items-center justify-between px-6 text-text sm:px-10 md:px-16">
          <div
            onClick={handleLogoClick}
            className="logo-container nav-link flex cursor-pointer flex-col items-start lg:items-center"
            aria-label="Homepage"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10"
            />
          </div>

          <ul className="flex items-center text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
            <li className="nav-link mx-3 my-2 transition-colors duration-500 ease-in-out hover:text-primary sm:mx-5">
              <button onClick={handleScrollToCareer} aria-label="Career">
                Career
              </button>
            </li>
            <li className="nav-link mx-3 my-2 transition-colors duration-500 ease-in-out hover:text-primary sm:mx-5">
              <button onClick={handleOpenContactForm} aria-label="Contact">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />
    </nav>
  );
};

export default Navbar;
