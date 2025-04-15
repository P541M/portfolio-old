import React, { useState, useEffect, useRef } from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = ({ isOpen, onClose }) => {
  const [showForm, setShowForm] = useState(isOpen);
  const [opacity, setOpacity] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameInputRef = useRef(null);
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
      // Focus handling for accessibility
      if (nameInputRef.current) {
        setTimeout(() => {
          nameInputRef.current.focus();
        }, 50);
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

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle click outside of modal to close
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email address"
          : "";
      case "message":
        return value.trim().length < 10
          ? "Message must be at least 10 characters"
          : "";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the field value
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);

    // Clear any previous form status
    if (formStatus) setFormStatus("");

    // Validate the field if it was previously in error
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFieldErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateField("name", name);
    const emailError = validateField("email", email);
    const messageError = validateField("message", message);

    // Update error states
    setFieldErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    // If any errors exist, don't submit
    if (nameError || emailError || messageError) {
      return;
    }

    setIsSubmitting(true);
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
        setFieldErrors({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus(
        "An error occurred while sending your message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
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
              ref={nameInputRef}
              placeholder="Your name"
              value={name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full rounded-lg border ${
                fieldErrors.name ? "border-red-500" : "border-divider"
              } bg-white px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
              required
              minLength="2"
              maxLength="100"
              aria-invalid={fieldErrors.name ? "true" : "false"}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
            {fieldErrors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-500">
                {fieldErrors.name}
              </p>
            )}
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
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full rounded-lg border ${
                fieldErrors.email ? "border-red-500" : "border-divider"
              } bg-white px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
              required
              maxLength="100"
              aria-invalid={fieldErrors.email ? "true" : "false"}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
            />
            {fieldErrors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-500">
                {fieldErrors.email}
              </p>
            )}
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
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full rounded-lg border ${
                fieldErrors.message ? "border-red-500" : "border-divider"
              } bg-white px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
              rows="4"
              required
              minLength="10"
              maxLength="1000"
              aria-invalid={fieldErrors.message ? "true" : "false"}
              aria-describedby={
                fieldErrors.message ? "message-error" : undefined
              }
            ></textarea>
            {fieldErrors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-500">
                {fieldErrors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary px-6 py-2.5 text-center font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/70"
          >
            {isSubmitting ? (
              <>
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="mr-2 animate-spin"
                />
                Sending...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Send Message
              </>
            )}
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
            role="alert"
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
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </a>
          <a
            href="https://github.com/P541M"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </a>
          <a
            href="https://twitter.com/psalmeleazar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </a>
          <a
            href="mailto:videna.psalmeleazar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
