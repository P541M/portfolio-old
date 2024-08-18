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
  const [formStatus, setFormStatus] = useState(""); // New state for form status

  useEffect(() => {
    if (isOpen) {
      setShowForm(true);
      setFadeClass("fade-in-background");
    } else {
      setFadeClass("fade-out-background");
      setTimeout(() => setShowForm(false), 500);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, // Send user's name
          email, // Send user's email
          message, // Send user's message
        }),
      });

      if (response.status === 200) {
        setFormStatus("Message sent! I'll be in touch with you soon!"); // Set success message
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFormStatus("Failed to send email. Please try again."); // Set failure message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus(
        "An error occurred while sending your message. Please try again later.",
      ); // Set error message
    }
  };

  if (!showForm) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ${fadeClass}`}
      aria-labelledby="contact-form-title"
      aria-modal="true"
      role="dialog"
    >
      <div className="fade-up relative w-full max-w-md rounded-md bg-bg p-10 shadow-md">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close contact form"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
        <div className="mb-4 flex items-center">
          <h2
            id="contact-form-title"
            className="text-base font-semibold sm:text-lg md:text-lg lg:text-xl xl:text-xl"
          >
            Get In Touch
          </h2>
        </div>
        <p className="mb-4 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
          Have a project in mind? Have a general inquiry? Let's talk.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="name"
              className="my-2 block text-sm font-medium sm:text-base md:text-base lg:text-lg xl:text-lg"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border bg-bgContrast px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="email"
              className="my-2 block text-sm font-medium sm:text-base md:text-base lg:text-lg xl:text-lg"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border bg-bgContrast px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="message"
              className="my-2 block text-sm font-medium sm:text-base md:text-base lg:text-lg xl:text-lg"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border bg-bgContrast px-3 py-2"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-bgContrast px-4 py-2 text-text transition duration-500 ease-in-out hover:bg-primary hover:text-bg"
            >
              Submit
            </button>
          </div>
        </form>
        {formStatus && (
          <div className="mt-4 text-center text-sm text-green-500">
            {formStatus}
          </div>
        )}
        <div className="mt-10 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/pevidena/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-6 w-6 text-primary duration-500 ease-in-out hover:text-bgContrast"
            />
          </a>
          <a
            href="https://github.com/P541M"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-6 w-6 text-primary duration-500 ease-in-out hover:text-bgContrast"
            />
          </a>
          <a
            href="https://twitter.com/psalmeleazar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-6 w-6 text-primary duration-500 ease-in-out hover:text-bgContrast"
            />
          </a>
          <a
            href="mailto:videna.psalmeleazar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-6 w-6 text-primary duration-500 ease-in-out hover:text-bgContrast"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
