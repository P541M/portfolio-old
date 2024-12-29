import React from "react";

export default function Hero() {
  const handleOpenResume = () => {
    window.open(
      "https://docs.google.com/document/d/1kBwruy6PqMBp8PzX9IyazyiDdFTzdeTg/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true",
      "_blank",
    );
  };

  return (
    <section
      id="hero-section"
      className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center text-text transition-all duration-300 sm:px-8 md:px-16 lg:px-20"
      aria-labelledby="hero-title"
    >
      <h1
        id="hero-title"
        className="text-3xl font-bold text-text sm:text-4xl md:text-5xl lg:text-6xl"
      >
        PSALM ELEAZAR
      </h1>

      <p className="mt-3 max-w-[800px] text-base sm:text-lg md:text-xl lg:text-2xl">
        Software Engineering Student with a passion for{" "}
        <span className="text-primary">full-stack development</span> and{" "}
        <span className="text-primary">project management</span>.
      </p>

      <p className="mt-4 max-w-[800px] text-sm text-text sm:text-base md:text-lg lg:text-xl">
        Currently contributing as a{" "}
        <span className="text-primary">Website Project Lead</span> at the{" "}
        <a
          href="https://www.uoguelph.ca/arts"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-all duration-300 hover:text-primary"
        >
          University of Guelph, College of Arts
        </a>{" "}
        and open to opportunities that challenge me to build engaging digital
        experiences.
      </p>

      <button
        onClick={handleOpenResume}
        className="mt-8 rounded-full bg-primary px-6 py-3 text-bg shadow-md transition-all duration-300 hover:scale-105 hover:bg-bgContrast"
        aria-label="Open Resume"
      >
        View Resume
      </button>
    </section>
  );
}
