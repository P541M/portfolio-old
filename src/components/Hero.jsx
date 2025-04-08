import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  const handleOpenResume = () => {
    window.open(
      "https://docs.google.com/document/d/1kBwruy6PqMBp8PzX9IyazyiDdFTzdeTg/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true",
      "_blank",
    );
  };

  const handleOpenContactForm = () => {
    const contactButton = document.querySelector('[aria-label="Contact"]');
    if (contactButton) {
      contactButton.click();
    }
  };

  return (
    <section
      id="hero-section"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center sm:px-8 md:px-16 lg:px-20"
      aria-labelledby="hero-title"
    >
      <div className="animate-fade-in mx-auto max-w-4xl">
        <h1
          id="hero-title"
          className="font-heading text-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-primary">PSALM</span> ELEAZAR
        </h1>

        <p className="text-text/80 mx-auto mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl">
          Software Engineering Student with a passion for{" "}
          <span className="text-primary font-medium">
            full-stack development
          </span>{" "}
          and{" "}
          <span className="text-primary font-medium">project management</span>.
        </p>

        <p className="text-text/70 mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Currently contributing as a{" "}
          <span className="text-primary font-medium">Web Developer</span> at the{" "}
          <a
            href="https://www.uoguelph.ca/arts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary underline transition-all duration-300"
          >
            University of Guelph, College of Arts
          </a>{" "}
          and open to opportunities that challenge me to build engaging digital
          experiences.
        </p>

        <div className="mt-8 flex items-center justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/pevidena/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/P541M"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
          </a>
          <a
            href="mailto:videna.psalmeleazar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button
            onClick={handleOpenResume}
            className="btn-primary group w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
            View Resume
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            onClick={handleOpenContactForm}
            className="btn-secondary w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
