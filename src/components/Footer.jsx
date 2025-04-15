import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowUp,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="border-t border-divider bg-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo and description */}
          <div className="col-span-1 lg:col-span-2">
            <Link
              to="/"
              className="mb-4 inline-block font-heading text-xl font-bold text-primary"
            >
              PSALM ELEAZAR
            </Link>
            <p className="mb-5 max-w-md text-sm text-text/70">
              Technology Research Analyst at BMO with a passion for Full-stack
              Development and Project Management.
            </p>

            {/* Contact Info */}
            <div className="text-sm text-text/60">
              <p className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a
                  href="mailto:videna.psalmeleazar@gmail.com"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  videna.psalmeleazar@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Toronto, Canada
              </p>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="mb-4 font-medium text-text">Connect</h3>
            <div className="mb-4 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/pevidena/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/P541M"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/psalmeleazar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
              </a>
              <a
                href="mailto:videna.psalmeleazar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-divider/40">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-4 sm:flex-row sm:px-6">
          <p className="mb-3 text-sm text-text/60 sm:mb-0">
            © {currentYear} Psalm Eleazar. All rights reserved.
          </p>
          <button
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
            }}
            className="flex items-center text-sm text-text/70 transition-colors duration-300 hover:text-primary"
          >
            <span className="mr-2">Back to top</span>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
