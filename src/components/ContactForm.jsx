import React, { useState, useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = ({ isOpen, onClose }) => {
  const [showForm, setShowForm] = useState(isOpen);
  const [opacity, setOpacity] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const modalRef = useRef(null);
  const fadeTimer = useRef(null);

  // Handle modal opening and closing with CSS transitions
  useEffect(() => {
    if (isOpen) {
      // Open the modal
      document.body.style.overflow = "hidden"; // Prevent scrolling
      setShowForm(true);

      // Start with opacity 0, then animate to 1 after a small delay
      setOpacity(0);
      setTimeout(() => {
        setOpacity(1);
      }, 10);

      // Focus handling - optional but improves accessibility
      if (modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusableElements.length) {
          setTimeout(() => {
            focusableElements[0].focus();
          }, 50);
        }
      }
    } else if (showForm) {
      // Close the modal with timing
      // Clear any existing timers
      if (fadeTimer.current) clearTimeout(fadeTimer.current);

      // Animate opacity to 0
      setOpacity(0);

      // Set a timer to remove the component after transition completes
      fadeTimer.current = setTimeout(() => {
        setShowForm(false);
        document.body.style.overflow = ""; // Re-enable scrolling
      }, 300); // Match your transition duration
    }

    // Cleanup function
    return () => {
      if (fadeTimer.current) {
        clearTimeout(fadeTimer.current);
      }
    };
  }, [isOpen, showForm]);

  // Handle click outside of modal to close
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Processing...");
    try {
      const response = await fetch(
        "https://portfolio-backend-drab-one.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        },
      );
      if (response.status === 200) {
        setFormStatus("Message sent! I'll be in touch with you soon!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFormStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus(
        "An error occurred while sending your message. Please try again later.",
      );
    }
  };

  if (!showForm) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
      aria-labelledby="contact-form-title"
      aria-modal="true"
      role="dialog"
      onClick={handleBackdropClick}
      style={{
        opacity: opacity,
        transition: "opacity 0.3s ease",
      }}
    >
      <div
        ref={modalRef}
        className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl sm:p-8"
        style={{
          transform: opacity === 1 ? "translateY(0)" : "translateY(10px)",
          transition: "transform 0.3s ease",
          willChange: "transform",
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-100"
          aria-label="Close contact form"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
        <div className="mb-6 text-center">
          <h2
            id="contact-form-title"
            className="mb-2 font-heading text-2xl font-bold text-primary"
          >
            Get In Touch
          </h2>
          <p className="text-text/70">
            Have a project in mind or just want to say hello? Let's talk.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-text"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-divider bg-white px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-text"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-divider bg-white px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-text"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-divider bg-white px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-2.5 text-center font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary/90"
          >
            Send Message
          </button>
        </form>
        {formStatus && (
          <div
            className={`mt-4 text-center text-sm ${
              formStatus === "Processing..."
                ? "text-yellow-600"
                : formStatus.includes("error") || formStatus.includes("Failed")
                  ? "text-red-600"
                  : "text-accent"
            }`}
          >
            {formStatus}
          </div>
        )}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/pevidena/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/P541M"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/psalmeleazar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
          </a>
          <a
            href="mailto:videna.psalmeleazar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
