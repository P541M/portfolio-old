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
  // State
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero-section");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarState, setNavbarState] = useState({
    isScrolled: false,
    isVisible: true,
  });

  // Refs
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);
  const isInitialMount = useRef(true);
  const scrollTimer = useRef(null);
  const lastStateChange = useRef(Date.now());
  const touchDevice = useRef(false);

  // Router hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route is a work term report page
  const isWorkTermReport =
    location.pathname.includes("-wtr") ||
    location.pathname.includes("boscoboys-distributors") ||
    location.pathname.includes("university-guelph");

  // Detect touch device on mount
  useEffect(() => {
    touchDevice.current =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
  }, []);

  // Initial setup effect
  useEffect(() => {
    // Set initial state based on scroll position
    setNavbarState({
      isScrolled: window.scrollY > 10,
      isVisible: true,
    });

    // Don't allow navbar to hide for 2 seconds after mounting
    isInitialMount.current = true;
    const timer = setTimeout(() => {
      isInitialMount.current = false;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll handling effect with optimized performance
  useEffect(() => {
    // Helper functions for cleaner code
    const updateNavbarVisibility = (isVisible) => {
      // Don't update if visibility hasn't changed or if change is too frequent
      const now = Date.now();
      const timeSinceLastChange = now - lastStateChange.current;

      if (
        navbarState.isVisible === isVisible ||
        timeSinceLastChange < 200 // Prevent too frequent updates
      ) {
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

    // Optimized scroll handler with throttling
    const handleScroll = () => {
      // Clear any pending scroll timer
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }

      // Schedule the scroll handling
      scrollTimer.current = setTimeout(() => {
        const scrollY = window.scrollY;

        // Update scrolled state for styling
        updateNavbarScroll(scrollY > 10);

        // Skip visibility updates during initial mount period
        if (isInitialMount.current) {
          return;
        }

        // Calculate the delta only when needed
        const scrollDelta = scrollY - lastScrollY.current;

        // Handle visibility with different thresholds for different devices
        const scrollThreshold = touchDevice.current ? 15 : 8; // Higher threshold for touch to prevent accidental hiding

        // Only hide navbar when significantly scrolling down AND not near the top
        if (scrollDelta > scrollThreshold && scrollY > 120) {
          updateNavbarVisibility(false);
        }
        // Show navbar when significantly scrolling up OR near the top
        else if (scrollDelta < -scrollThreshold || scrollY < 50) {
          updateNavbarVisibility(true);
        }

        // Update active section (only on homepage)
        if (location.pathname === "/") {
          updateActiveSection(scrollY);
        }

        // Update the last scroll position
        lastScrollY.current = scrollY;
      }, 10); // Short timeout for responsive feel but still throttled
    };

    // Function to update active section based on scroll position
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

    // Add event listener with passive flag for performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function to remove listener
    return () => {
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, navbarState.isVisible, navbarState.isScrolled]);

  // Handle navigation from other pages
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        // Short delay to ensure DOM is ready
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveSection(location.state.scrollTo);
        }, 100);
      }
    }
  }, [location]);

  // Handle mobile menu close on navigation
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Ensure navbar is always visible when mobile menu is open
      setNavbarState((prev) => ({ ...prev, isVisible: true }));
    }
  }, [isMobileMenuOpen]);

  // Handlers
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

  // Navigation links configuration
  const navLinks = [
    { id: "hero-section", icon: faHome, label: "Home" },
    { id: "timeline-section", icon: faBriefcase, label: "Timeline" },
    { id: "projects-section", icon: faLaptopCode, label: "Projects" },
    { id: "volunteer-section", icon: faHandsHelping, label: "Volunteer" },
  ];

  // CSS classes with will-change optimization
  const navbarClasses = `
    fixed left-0 right-0 top-0 z-50 
    ${className || ""} 
    ${navbarState.isScrolled ? "bg-white/95 py-2 shadow-md backdrop-blur-sm" : "bg-transparent py-4"} 
    ${navbarState.isVisible ? "translate-y-0" : "-translate-y-full"}
    transition-all duration-300 will-change-transform
  `.trim();

  return (
    <>
      {/* Desktop Navigation - Top Fixed */}
      <nav
        ref={navbarRef}
        className={navbarClasses}
        aria-label="Main Navigation"
        style={{
          // Extra style to ensure hardware acceleration and prevent text blur
          backfaceVisibility: "hidden",
          transform: navbarState.isVisible
            ? "translateY(0)"
            : "translateY(-100%)",
        }}
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
            {/* Show navigation links only on homepage */}
            {!isWorkTermReport &&
              navLinks.map((link) => (
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
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="mr-2 text-sm"
                    />
                    {link.label}
                  </span>
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary"></span>
                  )}
                </button>
              ))}

            {/* On work term report pages, show a back button instead */}
            {isWorkTermReport && (
              <button
                onClick={() => navigate("/")}
                aria-label="Back to Home"
                className="group relative px-2 py-1 text-text hover:text-primary"
              >
                <span className="flex items-center font-medium">
                  <FontAwesomeIcon icon={faHome} className="mr-2 text-sm" />
                  Back to Home
                </span>
              </button>
            )}

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

      {/* Mobile Navigation Menu - Slide down panel */}
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
            {/* Show navigation links only on homepage for mobile menu too */}
            {!isWorkTermReport ? (
              navLinks.map((link) => (
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
              ))
            ) : (
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="flex w-full items-center rounded-lg px-4 py-3 transition-colors hover:bg-secondary"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-3" />
                  <span className="font-medium">Back to Home</span>
                </button>
              </li>
            )}
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
