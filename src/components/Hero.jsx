import React from "react";
import resumePDF from "../assets/Resume.pdf"; // Adjust the path to your resume PDF

const Hero = () => {
  const handleOpenResume = () => {
    window.open(resumePDF, "_blank");
  };

  return (
    <div className="fade-up-two flex h-[550px] items-center justify-center px-20 text-center text-text">
      <div>
        <p className="fade-up-two mt-10 max-w-[800px] text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl">
          Eleazar is a dedicated software engineering student based in the
          Greater Toronto Area. Specializing in fullstack development, he
          creates engaging and effective digital experiences. Currently, he is a
          Fullstack Developer & Business Analyst Intern at{" "}
          <a
            href="https://www.boscoboysdistributors.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="italic"
          >
            BoscoBoys Distributors
          </a>
          .
        </p>
        <button
          onClick={handleOpenResume}
          className="fade-up-three mt-10 rounded-md bg-bgContrast px-4 py-2 text-text transition duration-500 ease-in-out hover:bg-primary hover:text-bg"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
