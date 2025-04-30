import React, { useState, useEffect, useRef } from "react";
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
  const [navbarState, setNavbarState] = useState({
    isScrolled: false,
    isVisible: true,
  });

  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);
  const isInitialMount = useRef(true);
  const scrollTimer = useRef(null);
  const lastStateChange = useRef(Date.now());
  const touchDevice = useRef(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    touchDevice.current =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
  }, []);

  useEffect(() => {
    setNavbarState({
      isScrolled: window.scrollY > 10,
      isVisible: true,
    });
    isInitialMount.current = true;
    const timer = setTimeout(() => {
      isInitialMount.current = false;
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateNavbarVisibility = (isVisible) => {
      const now = Date.now();
      const timeSinceLastChange = now - lastStateChange.current;
      if (navbarState.isVisible === isVisible || timeSinceLastChange < 200) {
        return false;
      }
      lastStateChange.current = now;
      setNavbarState((prev) => ({ ...prev, isVisible }));
      return true;
    };

    const updateNavbarScroll = (isScrolled) => {
      if (navbarState.isScrolled !== isScrolled) {
        setNavbarState((prev) => ({ ...prev, isScrolled }));
        return true;
      }
      return false;
    };

    const handleScroll = () => {
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
      scrollTimer.current = setTimeout(() => {
        const scrollY = window.scrollY;
        updateNavbarScroll(scrollY > 10);
        if (isInitialMount.current) {
          return;
        }
        const scrollDelta = scrollY - lastScrollY.current;
        const scrollThreshold = touchDevice.current ? 15 : 8;
        if (scrollDelta > scrollThreshold && scrollY > 120) {
          updateNavbarVisibility(false);
        } else if (scrollDelta < -scrollThreshold || scrollY < 50) {
          updateNavbarVisibility(true);
        }
        if (location.pathname === "/") {
          updateActiveSection(scrollY);
        }
        lastScrollY.current = scrollY;
      }, 10);
    };

    const updateActiveSection = (scrollY) => {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, navbarState.isVisible, navbarState.isScrolled]);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveSection(location.state.scrollTo);
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setNavbarState((prev) => ({ ...prev, isVisible: true }));
    }
  }, [isMobileMenuOpen]);

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

  const navLinks = [
    { id: "hero-section", icon: faHome, label: "Home" },
    { id: "timeline-section", icon: faBriefcase, label: "Timeline" },
    { id: "projects-section", icon: faLaptopCode, label: "Projects" },
    { id: "volunteer-section", icon: faHandsHelping, label: "Volunteer" },
  ];

  const navbarClasses = `
    fixed left-0 right-0 top-0 z-50 
    ${className || ""} 
    bg-white/95 py-2 shadow-sm backdrop-blur-sm
    ${navbarState.isVisible ? "translate-y-0" : "-translate-y-full"}
    transition-all duration-300 will-change-transform
  `.trim();

  return (
    <>
      <nav
        ref={navbarRef}
        className={navbarClasses}
        aria-label="Main Navigation"
        style={{
          backfaceVisibility: "hidden",
          transform: navbarState.isVisible
            ? "translateY(0)"
            : "translateY(-100%)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero-section");
              }}
              className="font-heading text-xl font-bold text-primary"
            >
              PSALM ELEAZAR
            </button>
          </div>
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
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-text transition-all hover:bg-secondary/50 md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="h-5 w-5"
            />
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className={`fixed left-0 right-0 top-0 z-40 transform bg-white shadow-lg transition-transform duration-300 will-change-transform md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          paddingTop: "70px",
          backfaceVisibility: "hidden",
        }}
        aria-hidden={!isMobileMenuOpen}
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
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />
    </>
  );
};

export default Navbar;
