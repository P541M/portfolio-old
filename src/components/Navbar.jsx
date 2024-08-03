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

  return (
    <nav>
      <div
        className="fade-up fixed left-0 right-0 top-0 z-50 h-[95px] bg-bg"
        aria-label="Main Navigation"
      >
        <div className="mx-auto flex h-full max-w-[1250px] items-center justify-between px-20 text-text">
          <div
            onClick={() => (window.location.href = "/")}
            className="logo-container nav-link flex cursor-pointer flex-col items-start lg:items-center"
            aria-label="Homepage"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11"
            />
          </div>
          <ul className="flex items-center text-base font-semibold sm:text-lg md:text-lg lg:text-xl xl:text-xl">
            <li className="nav-link mx-5 my-2 transition-colors duration-500 ease-in-out hover:text-primary lg:my-5">
              <button onClick={handleOpenContactForm} aria-label="Get In Touch">
                Get In Touch
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
