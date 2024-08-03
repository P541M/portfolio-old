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

  useEffect(() => {
    if (isOpen) {
      setShowForm(true);
      setFadeClass("fade-in-background");
    } else {
      setFadeClass("fade-out-background");
      setTimeout(() => setShowForm(false), 500); // Duration of the fade-out animation
    }
  }, [isOpen]);

  if (!showForm) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ${fadeClass}`}
    >
      <div className="fade-up relative w-full max-w-md rounded-md bg-bg p-10 shadow-md">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
        <div className="mb-4 flex items-center">
          <h2 className="text-base font-semibold sm:text-lg md:text-lg lg:text-xl xl:text-xl">
            Get In Touch
          </h2>
        </div>
        <p className="mb-4 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
          Have a project in mind? Have a general inquiry? Let's talk.
        </p>
        <form
          action="https://getform.io/f/rbeqzqgb"
          method="post"
          className="flex flex-col"
        >
          <div className="mb-4 flex flex-col">
            <label
              className="my-2 block text-sm font-medium sm:text-base md:text-base lg:text-lg xl:text-lg"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border bg-bgContrast px-3 py-2"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              className="my-2 block text-sm font-medium sm:text-base md:text-base lg:text-lg xl:text-lg"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full rounded-md border bg-bgContrast px-3 py-2"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              className="my-2 block text-sm font-medium sm:text-base md:text-base lg:text-lg xl:text-lg"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="w-full rounded-md border bg-bgContrast px-3 py-2"
              rows="4"
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
        <div className="mt-10 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/yi-ning-cen"
            target="_blank"
            rel="noopener noreferrer"
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
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-6 w-6 text-primary duration-500 ease-in-out hover:text-bgContrast"
            />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-6 w-6 text-primary duration-500 ease-in-out hover:text-bgContrast"
            />
          </a>
          <a
            href="mailto:2020yicen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
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
