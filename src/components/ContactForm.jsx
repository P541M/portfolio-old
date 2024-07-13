import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ContactForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="relative bg-bg p-10 rounded-md shadow-md w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-xl mb-4">Get In Touch</h2>
        <form
          action="https://getform.io/f/rbeqzqgb"
          method="post"
          className="flex flex-col"
        >
          <div className="flex flex-col mb-4">
            <label className="block text-sm mb-2" htmlFor="name">
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
            <label className="block text-sm mb-2" htmlFor="email">
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
            <label className="block text-sm mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded-md bg-bgContrast"
              rows="4"
            ></textarea>
          </div>
          <div className="flex mt-4 justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-bgContrast text-text rounded-md hover:bg-primary hover:text-bg transition duration-300 ease-in-out"
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
