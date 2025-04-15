import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="border-t border-divider bg-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Logo and description */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="mb-3 font-heading text-xl font-bold text-primary"
            >
              PSALM ELEAZAR
            </Link>
            <p className="text-center text-sm text-text/70 md:text-left">
              Technology Research Analyst at BMO with a passion for Full-stack
              Development and Project Management.
            </p>
          </div>

          {/* Column 2: Navigation links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-3 font-medium text-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-text/70 transition-colors duration-300 hover:text-primary"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      document
                        .getElementById("hero-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-text/70 transition-colors duration-300 hover:text-primary"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      document
                        .getElementById("timeline-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-text/70 transition-colors duration-300 hover:text-primary"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      document
                        .getElementById("projects-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-text/70 transition-colors duration-300 hover:text-primary"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      document
                        .getElementById("volunteer-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-3 font-medium text-text">Connect</h3>
            <div className="mb-4 flex space-x-3">
              <a
                href="https://www.linkedin.com/in/pevidena/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/P541M"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/psalmeleazar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
              </a>
              <a
                href="mailto:videna.psalmeleazar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
              </a>
            </div>
            <p className="text-sm text-text/60">
              <a
                href="mailto:videna.psalmeleazar@gmail.com"
                className="transition-colors duration-300 hover:text-primary"
              >
                videna.psalmeleazar@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-divider/40 pt-4 text-center">
          <p className="text-sm text-text/60">
            © {currentYear} Psalm Eleazar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
