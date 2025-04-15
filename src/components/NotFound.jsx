import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-16">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-2 font-heading text-8xl font-bold text-primary">
          404
        </h1>

        <h2 className="mb-6 font-heading text-2xl font-semibold text-text">
          Page Not Found
        </h2>

        <p className="mb-3 text-text/70">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <p className="mb-8 text-sm text-primary/80">
          It might also be under construction. Check back later!
        </p>

        <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            to="/"
            className="group flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Back to Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
