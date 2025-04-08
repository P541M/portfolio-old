import React, { useState, useEffect } from "react";
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
  const [fadeClass, setFadeClass] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    if (isOpen) {
      setShowForm(true);
      setFadeClass("fade-in");
    } else {
      setFadeClass("fade-out");
      setTimeout(() => setShowForm(false), 500);
    }
  }, [isOpen]);

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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm ${fadeClass}`}
      aria-labelledby="contact-form-title"
      aria-modal="true"
      role="dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl sm:p-8">
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
            className="font-heading text-primary mb-2 text-2xl font-bold"
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
              className="text-text mb-1 block text-sm font-medium"
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
              className="border-divider focus:border-primary focus:ring-primary w-full rounded-lg border bg-white px-4 py-2 focus:outline-none focus:ring-1"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-text mb-1 block text-sm font-medium"
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
              className="border-divider focus:border-primary focus:ring-primary w-full rounded-lg border bg-white px-4 py-2 focus:outline-none focus:ring-1"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-text mb-1 block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-divider focus:border-primary focus:ring-primary w-full rounded-lg border bg-white px-4 py-2 focus:outline-none focus:ring-1"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 w-full rounded-lg px-6 py-2.5 text-center font-medium text-white shadow-sm transition-all duration-300"
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
            className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/P541M"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
          </a>

          <a
            href="https://twitter.com/psalmeleazar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
          </a>

          <a
            href="mailto:videna.psalmeleazar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
