import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex items-center justify-center bg-bg py-10 text-text"
      aria-label="Footer"
    >
      <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">
        &copy; {new Date().getFullYear()} Psalm Eleazar G. Videna
      </div>
    </footer>
  );
};

export default Footer;
