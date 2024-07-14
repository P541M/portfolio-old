import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 ${fadeClass}`}
    >
      <div className="relative bg-bg p-10 rounded-md shadow-md w-full max-w-md fade-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
        <div className="flex items-center mb-4">
          <h2 className="font-semibold text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl">
            Get In Touch
          </h2>
        </div>
        <p className="mb-4 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
          Have a project in mind? Want to discuss something? Let's talk.
        </p>
        <form
          action="https://getform.io/f/rbeqzqgb"
          method="post"
          className="flex flex-col"
        >
          <div className="flex flex-col mb-4">
            <label
              className="block text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-medium my-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-md bg-bgContrast"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="block text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-medium my-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md bg-bgContrast"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="block text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-medium my-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="w-full px-3 py-2 border rounded-md bg-bgContrast"
              rows="4"
            ></textarea>
          </div>
          <div className="flex mt-4 justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-bgContrast text-text rounded-md hover:bg-primary hover:text-bg transition duration-500 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
