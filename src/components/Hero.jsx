import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
      className="relative flex min-h-[calc(100vh-64px)] items-center justify-center bg-bg pt-16 dark:bg-bg-dark md:min-h-screen md:pt-0"
      aria-labelledby="hero-title"
    >
      <div className="container px-6 py-6 md:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative mb-8 text-center md:mb-12">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary dark:text-primary-dark md:text-sm">
              Co-op Software Engineering Student @ UofG
            </p>
            <h1
              id="hero-title"
              className="mb-0 font-heading text-4xl font-bold tracking-tight text-text dark:text-text-dark md:text-6xl lg:text-7xl"
            >
              <span className="text-primary dark:text-primary-dark">PSALM</span>{" "}
              ELEAZAR
            </h1>
            <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-primary-dark/30 md:mt-4"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <div className="order-2 flex flex-col justify-center md:order-1">
              <p className="mb-6 text-center text-sm text-text/80 dark:text-text-dark/80 md:mb-8 md:text-left md:text-base">
                Currently contributing as a{" "}
                <span className="font-medium text-primary dark:text-primary-dark">
                  Technology Research Analyst
                </span>{" "}
                at{" "}
                <a
                  href="https://www.bmo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-primary text-primary transition-colors duration-300 hover:border-primary/70 hover:text-primary/90 dark:border-primary-dark dark:text-primary-dark dark:hover:border-primary-dark/70 dark:hover:text-primary-dark/90"
                >
                  Bank of Montreal (BMO)
                </a>{" "}
                and open to opportunities that challenge me to build engaging
                digital experiences.
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button
                  onClick={handleOpenResume}
                  className="group flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 md:px-6 md:py-3 md:text-base"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                  View Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleOpenContactForm}
                  className="flex items-center justify-center rounded-full border border-primary/30 bg-transparent px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/5 dark:border-primary-dark/30 dark:text-primary-dark dark:hover:bg-primary-dark/5 md:px-6 md:py-3 md:text-base"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Contact Me
                </button>
              </div>
            </div>
            <div className="order-1 flex flex-col items-center justify-center md:order-2 md:items-end">
              <div className="mb-4 text-center md:mb-6 md:text-right">
                <p className="mb-1 text-base font-medium text-text dark:text-text-dark md:mb-2 md:text-lg">
                  Passionate about
                </p>
                <p className="text-xl font-light text-primary dark:text-primary-dark md:text-3xl">
                  Full-stack Development
                  <span className="mx-2 inline-block text-text dark:text-text-dark">
                    &
                  </span>
                  Project Management
                </p>
              </div>
              <div className="mt-3 flex items-center justify-center space-x-4 md:mt-4 md:justify-end md:space-x-5">
                <a
                  href="https://www.linkedin.com/in/pevidena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white dark:bg-card-dark dark:text-primary-dark dark:hover:bg-primary-dark md:h-10 md:w-10"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-4 w-4 transition-colors duration-300 group-hover:text-white md:h-5 md:w-5"
                  />
                </a>
                <a
                  href="https://github.com/P541M"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white dark:bg-card-dark dark:text-primary-dark dark:hover:bg-primary-dark md:h-10 md:w-10"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-4 w-4 transition-colors duration-300 group-hover:text-white md:h-5 md:w-5"
                  />
                </a>
                <a
                  href="https://twitter.com/psalmeleazar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="group flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white dark:bg-card-dark dark:text-primary-dark dark:hover:bg-primary-dark md:h-10 md:w-10"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="h-4 w-4 transition-colors duration-300 group-hover:text-white md:h-5 md:w-5"
                  />
                </a>
                <a
                  href="mailto:videna.psalmeleazar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="group flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white dark:bg-card-dark dark:text-primary-dark dark:hover:bg-primary-dark md:h-10 md:w-10"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-4 w-4 transition-colors duration-300 group-hover:text-white md:h-5 md:w-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
