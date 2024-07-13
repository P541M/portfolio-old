import React from "react";
import logo from "../assets/logo512.png";

const Navbar = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="z-50 fixed top-0 left-0 right-0 h-[95px] transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-[1250px] flex justify-between items-center h-full px-4 text-l text-text">
        <div
          onClick={() => handleNavigation("/")}
          className="logo-container mx-5 nav-link flex flex-col items-start lg:items-center lg:ml-0 cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-11 w-11" // Adjust the size as needed
          />
        </div>

        <ul className="flex font-semibold items-center text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl">
          <li className="my-2 mx-5 lg:my-5 nav-link hover:text-primary">
            <button onClick={() => handleNavigation("/contact")}>
              Get In Touch
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
