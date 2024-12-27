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
      id="hero-section"
      className="fade-up-two flex min-h-screen items-center justify-center px-20 text-center text-text"
      aria-labelledby="hero-title"
    >
      <div>
        <h1
          id="hero-title"
          className="fade-up-two text-3xl font-bold text-primary sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Psalm Eleazar Videna
        </h1>
        <p className="fade-up-two mt-4 max-w-[800px] text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <span className="font-semibold text-text">
            Software Engineering Student
          </span>{" "}
          specializing in{" "}
          <span className="font-bold text-primary">full-stack development</span>{" "}
          and <span className="font-bold text-primary">project management</span>
          .
        </p>
        <p className="fade-up-two mt-4 max-w-[800px] text-base sm:text-lg md:text-xl lg:text-2xl">
          Creating engaging and effective digital experiences in the{" "}
          <span className="italic">Greater Toronto Area</span>. Currently the{" "}
          <span className="font-bold text-primary">
            Website Redesign Coordinator
          </span>{" "}
          at the{" "}
          <a
            href="https://www.uoguelph.ca/arts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary italic underline"
          >
            College of Arts, University of Guelph
          </a>
          .
        </p>

        <button
          onClick={handleOpenResume}
          className="fade-up-three hover:bg-secondary mt-10 rounded-full bg-primary px-6 py-3 text-bg transition-transform duration-500 ease-in-out hover:scale-105"
          aria-label="Open Resume"
        >
          View Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
