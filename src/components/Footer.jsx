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
      {/* Condensed Footer Content */}
      <div className="mx-auto max-w-screen-md px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Left Column */}
          <div>
            <Link
              to="/"
              className="mb-4 inline-block font-heading text-xl font-bold text-primary"
            >
              PSALM ELEAZAR
            </Link>
            <p className="mb-4 text-sm text-text/70">
              Technology Research Analyst at BMO with a passion for full-stack
              development and project management.
            </p>
            <div className="space-y-1 text-sm text-text/60">
              <p className="flex items-center">
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

          {/* Right Column */}
          <div>
            <h3 className="mb-4 font-medium text-text">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  href: "https://www.linkedin.com/in/pevidena/",
                  icon: faLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/P541M",
                  icon: faGithub,
                  label: "GitHub",
                },
                {
                  href: "https://twitter.com/psalmeleazar",
                  icon: faTwitter,
                  label: "Twitter",
                },
                {
                  href: "mailto:videna.psalmeleazar@gmail.com",
                  icon: faEnvelope,
                  label: "Email",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-divider/40">
        <div className="mx-auto flex max-w-screen-md flex-col items-center justify-between px-4 py-4 sm:flex-row sm:px-6">
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
