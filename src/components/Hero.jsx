import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[550px] text-text text-center fade-up px-20">
      <div>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl max-w-[800px] fade-up">
          Eleazar is a dedicated software engineering student based in the
          Greater Toronto Area. Specializing in fullstack development, he
          creates engaging and effective digital experiences. Currently, he is a
          Fullstack Developer & Business Analyst Intern at
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
      </div>
    </div>
  );
};

export default Hero;
