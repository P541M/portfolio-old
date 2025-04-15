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
      className="relative flex min-h-screen items-center justify-center bg-bg"
      aria-labelledby="hero-title"
    >
      <div className="container px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Co-op Software Engineering Student @ UofG
            </p>
            <h1
              id="hero-title"
              className="mb-0 font-heading text-6xl font-bold tracking-tight text-text md:text-7xl"
            >
              <span className="text-primary">PSALM</span> ELEAZAR
            </h1>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <div className="order-2 flex flex-col justify-center md:order-1">
              <p className="mb-8 text-center text-text/80 md:text-left">
                Currently contributing as a{" "}
                <span className="font-medium text-primary">
                  Technology Research Analyst
                </span>{" "}
                at{" "}
                <a
                  href="https://www.bmo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-primary text-primary transition-colors duration-300 hover:border-primary/70 hover:text-primary/90"
                >
                  Bank of Montreal (BMO)
                </a>{" "}
                and open to opportunities that challenge me to build engaging
                digital experiences.
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button
                  onClick={handleOpenResume}
                  className="group flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary/90"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                  View Resume
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <button
                  onClick={handleOpenContactForm}
                  className="flex items-center justify-center rounded-full border border-primary/30 bg-transparent px-6 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary/5"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Contact Me
                </button>
              </div>
            </div>

            <div className="order-1 flex flex-col items-center justify-center md:order-2 md:items-end">
              <div className="mb-6 text-center md:text-right">
                <p className="mb-2 text-lg font-medium text-text">
                  Passionate about
                </p>
                <p className="text-3xl font-light text-primary">
                  Full-stack Development
                  <span className="mx-2 inline-block text-text">&</span>
                  Project Management
                </p>
              </div>

              <div className="mt-4 flex items-center justify-center space-x-5 md:justify-end">
                <a
                  href="https://www.linkedin.com/in/pevidena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/P541M"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                </a>
                <a
                  href="mailto:videna.psalmeleazar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
