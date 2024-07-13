import React, { useState } from "react";
import logo from "../assets/logo512.png";
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
    <div>
      <div className="z-50 fixed top-0 left-0 right-0 h-[95px] bg-bg fade-up">
        <div className="mx-auto max-w-[1250px] flex justify-between items-center h-full px-20 text-text">
          <div
            onClick={() => (window.location.href = "/")}
            className="logo-container nav-link flex flex-col items-start lg:items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11"
            />
          </div>

          <ul className="flex font-semibold items-center text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl">
            <li className="my-2 mx-5 lg:my-5 nav-link hover:text-primary transition-colors duration-500 ease-in-out">
              <button onClick={handleOpenContactForm}>Get In Touch</button>
            </li>
          </ul>
        </div>
      </div>
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />
    </div>
  );
};

export default Navbar;
