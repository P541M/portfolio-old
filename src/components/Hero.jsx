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
      className="flex min-h-screen flex-col"
      aria-labelledby="hero-title"
    >
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
        {/* Left Section - Colorful Background */}
        <div className="flex flex-col items-center justify-center px-6 py-16 md:h-screen md:items-end md:py-0">
          <div className="max-w-md md:mr-8 md:text-right">
            <h1
              id="hero-title"
              className="mb-4 font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl"
            >
              <span className="text-primary">PSALM</span> ELEAZAR
            </h1>

            <p className="mb-8 text-lg text-text/80 sm:text-xl">
              Software Engineering Student with a passion for{" "}
              <span className="font-medium text-primary">
                full-stack development
              </span>{" "}
              and{" "}
              <span className="font-medium text-primary">
                project management
              </span>
              .
            </p>

            <div className="mb-6 flex justify-center space-x-4 md:justify-end">
              <a
                href="https://www.linkedin.com/in/pevidena/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/P541M"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
              </a>
              <a
                href="mailto:videna.psalmeleazar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="flex flex-col items-center justify-center px-6 py-16 md:h-screen md:items-start md:py-0">
          <div className="max-w-md md:ml-8">
            <p className="mb-6 text-lg text-text/70">
              Currently contributing as a{" "}
              <span className="font-medium text-primary">Web Developer</span> at
              the{" "}
              <a
                href="https://www.uoguelph.ca/arts"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-primary transition-colors duration-300 hover:text-primary"
              >
                University of Guelph, College of Arts
              </a>{" "}
              and open to opportunities that challenge me to build engaging
              digital experiences.
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                onClick={handleOpenResume}
                className="group flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary/90"
              >
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                View Resume
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
              <button
                onClick={handleOpenContactForm}
                className="flex items-center justify-center rounded-lg bg-secondary px-6 py-3 font-medium text-text transition-all duration-300 hover:bg-secondary/80"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
