import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faLaptopCode,
  faHandsHelping,
  faEnvelope,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Navbar = ({ className }) => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero-section");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  // Handle scroll events for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Determine if page is scrolled (for styling)
      setIsScrolled(scrollY > 20);

      // Handle navbar visibility based on scroll direction
      if (scrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsNavbarVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }

      // Update last scroll position
      setLastScrollY(scrollY);

      // Handle section highlighting based on scroll position
      const sections = [
        "hero-section",
        "timeline-section",
        "projects-section",
        "volunteer-section",
      ];

      const scrollPosition = scrollY + 300;

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
  }, [lastScrollY]);

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
      {/* Desktop Navigation - Top Fixed */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${className} ${
          isScrolled
            ? "bg-white/95 py-2 shadow-md backdrop-blur-sm"
            : "bg-transparent py-4"
        } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
        aria-label="Main Navigation"
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero-section");
              }}
              className="font-heading text-xl font-bold text-primary"
            >
              PSALM ELEAZAR
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                aria-label={link.label}
                className={`group relative px-2 py-1 ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-text hover:text-primary"
                }`}
              >
                <span className="flex items-center font-medium">
                  <FontAwesomeIcon icon={link.icon} className="mr-2 text-sm" />
                  {link.label}
                </span>
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary"></span>
                )}
              </button>
            ))}
            <button
              onClick={handleOpenContactForm}
              aria-label="Contact"
              className="flex items-center rounded-lg bg-primary px-4 py-2 text-white transition-all duration-300 hover:bg-primary/90"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-sm" />
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-text transition-all hover:bg-secondary/50 md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="h-5 w-5"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Slide down panel */}
      <div
        className={`fixed left-0 right-0 top-0 z-40 origin-top transform bg-white shadow-lg transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ paddingTop: "70px" }} // Space for the navbar
      >
        <div className="container mx-auto px-6 py-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${
                    activeSection === link.id
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-secondary"
                  }`}
                >
                  <FontAwesomeIcon icon={link.icon} className="mr-3" />
                  <span className="font-medium">{link.label}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={handleOpenContactForm}
                className="flex w-full items-center rounded-lg bg-primary px-4 py-3 text-white transition-colors hover:bg-primary/90"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                <span className="font-medium">Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />
    </>
  );
};

export default Navbar;
