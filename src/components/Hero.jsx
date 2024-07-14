import React from "react";
import resumePDF from "../assets/Resume.pdf"; // Adjust the path to your resume PDF

const Hero = () => {
  const handleOpenResume = () => {
    window.open(resumePDF, "_blank");
  };

  return (
    <div className="flex justify-center items-center h-[550px] text-text text-center fade-up-two px-20">
      <div>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl max-w-[800px] fade-up-two mt-10">
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
          className="mt-10 px-4 py-2 bg-bgContrast text-text rounded-md hover:bg-primary hover:text-bg transition duration-500 ease-in-out fade-up-three"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
