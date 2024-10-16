import React from "react";

const Hero = () => {
  const handleOpenResume = () => {
    window.open(
      "https://docs.google.com/document/d/1kBwruy6PqMBp8PzX9IyazyiDdFTzdeTg/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true",
      "_blank",
    );
  };

  return (
    <section
      className="fade-up-two flex h-[550px] items-center justify-center px-20 text-center text-text"
      aria-labelledby="hero-title"
    >
      <div>
        <p
          id="hero-title"
          className="fade-up-two mt-10 max-w-[800px] text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl"
        >
          Eleazar is a dedicated software engineering student based in the
          Greater Toronto Area. Specializing in full-stack development, project
          management, and artificial intelligence (AI), he creates engaging,
          effective, and intelligent digital experiences. Currently, he is a
          Website Redesign Coordinator at the{" "}
          <a
            href="https://www.uoguelph.ca/arts"
            target="_blank"
            rel="noopener noreferrer"
            className="italic hover:underline"
          >
            College of Arts, University of Guelph
          </a>
          .
        </p>

        <button
          onClick={handleOpenResume}
          className="fade-up-three mt-10 rounded-md bg-bgContrast px-4 py-2 text-text transition duration-500 ease-in-out hover:bg-primary hover:text-bg"
          aria-label="Open Resume"
        >
          Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
