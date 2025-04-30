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
      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Left Column - About */}
          <div>
            <Link
              to="/"
              className="mb-3 inline-block font-heading text-xl font-bold text-primary"
            >
              PSALM ELEAZAR
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-text/80">
              Technology Research Analyst at BMO with a passion for full-stack
              development and project management.
            </p>
          </div>

          {/* Middle Column - Contact Info */}
          <div>
            <h3 className="mb-4 font-medium text-text">Contact</h3>
            <div className="space-y-2 text-sm text-text/70">
              <p className="flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-3 text-primary"
                />
                <a
                  href="mailto:videna.psalmeleazar@gmail.com"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  videna.psalmeleazar@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-3 text-primary"
                />
                Toronto, Canada
              </p>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div>
            <h3 className="mb-4 font-medium text-text">Connect</h3>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright and Back to Top */}
      <div className="border-t border-divider/40 bg-secondary/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-6 py-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-text/60">
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
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <span>Back to top</span>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
