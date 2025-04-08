import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faLaptopCode,
  faHandsHelping,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Navbar = ({ className }) => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero-section");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenContactForm = () => {
    setContactFormOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleCloseContactForm = () => {
    setContactFormOpen(false);
  };

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    } else {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: sectionId } });
      }
    }
  };

  // Handle section highlighting based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero-section",
        "timeline-section",
        "projects-section",
        "volunteer-section",
      ];
      const scrollPosition = window.scrollY + 300;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation from other pages
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(location.state.scrollTo);
      }
    }
  }, [location]);

  // Navigation links configuration
  const navLinks = [
    { id: "hero-section", icon: faHome, label: "Home" },
    { id: "timeline-section", icon: faBriefcase, label: "Timeline" },
    { id: "projects-section", icon: faLaptopCode, label: "Projects" },
    { id: "volunteer-section", icon: faHandsHelping, label: "Volunteer" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 transform rounded-full bg-white px-8 py-4 shadow-lg md:flex ${className}`}
        aria-label="Main Navigation"
      >
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => scrollToSection(link.id)}
                aria-label={link.label}
                className={`flex flex-col items-center transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-text hover:text-primary"
                }`}
              >
                <FontAwesomeIcon icon={link.icon} className="text-xl" />
                <span className="mt-1 text-xs font-medium">{link.label}</span>
                {activeSection === link.id && (
                  <span className="bg-primary absolute -bottom-2 left-1/2 h-1 w-6 -translate-x-1/2 transform rounded-full"></span>
                )}
              </button>
            </li>
          ))}

          <li className="bg-divider mx-1 h-8 w-px"></li>

          <li className="relative">
            <button
              onClick={handleOpenContactForm}
              aria-label="Contact"
              className="text-text hover:text-primary flex flex-col items-center transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              <span className="mt-1 text-xs font-medium">Contact</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-primary flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="absolute bottom-16 left-1/2 w-64 -translate-x-1/2 transform rounded-xl bg-white p-4 shadow-lg">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`flex w-full items-center rounded-lg px-4 py-2 transition-colors ${
                      activeSection === link.id
                        ? "bg-primary text-primary bg-opacity-10"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <FontAwesomeIcon icon={link.icon} className="mr-3" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={handleOpenContactForm}
                  className="hover:bg-secondary flex w-full items-center rounded-lg px-4 py-2 transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />
    </>
  );
};

export default Navbar;
