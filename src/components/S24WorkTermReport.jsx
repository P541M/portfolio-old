import React from "react";
import { useNavigate } from "react-router-dom";

const S24WorkTermReport = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mt-20 flex justify-center">
      <div id="s24-work-term-report" className="max-w-[800px] p-8">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-6 flex items-center text-blue-500 hover:underline"
        >
          ← Back
        </button>

        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Co-op Work Term Report
        </h2>

        {/* Abstract/Introduction */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Introduction
          </h3>
          <p className="mt-2 text-center text-gray-600">
            From May to August 2024, I had the opportunity to work as a
            Fullstack Developer & Business Analyst Intern at BoscoBoys
            Distributors. This role challenged me technically and
            professionally, allowing me to lead significant projects, such as
            revamping the company website, optimizing database management, and
            automating key business processes. This report reflects on my
            experiences, challenges, and growth throughout this internship.
          </p>
        </section>

        {/* Employer Information */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            About the Employer
          </h3>
          <p className="mt-2 text-center text-gray-600">
            BoscoBoys Distributors, founded in 1998, is a family-owned logistics
            and distribution company headquartered in Toronto, Ontario, Canada.
            Originally established to manage newspaper distribution in the
            Greater Toronto Area, BoscoBoys has since expanded its operations to
            encompass a broad range of services, including freight shipping,
            warehousing, and supply chain management.
          </p>
          <p className="mt-2 text-center text-gray-600">
            BoscoBoys remains committed to its roots in newspaper distribution
            but has grown into a pivotal player in the logistics and trucking
            industry. The company now offers both B2B and B2C delivery solutions
            while maintaining its focus on integrity, innovation, and customer
            satisfaction.
          </p>
        </section>

        {/* Goals & Reflections */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Goals & Reflections
          </h3>
          <ul className="mt-2 list-inside list-disc text-gray-600">
            <li>
              <strong>Goal 1:</strong> Lead the revamp of the company website to
              enhance user experience and functionality.
            </li>
            <p className="ml-6">
              <strong>Reflection:</strong> I successfully completed the website
              revamp using React.js, overcoming challenges in creating a
              multi-page web application for the first time. The new design
              resulted in increased user engagement, and I received positive
              feedback from both users and stakeholders.
            </p>

            <li>
              <strong>Goal 2:</strong> Improve database management by optimizing
              database structures to enhance performance.
            </li>
            <p className="ml-6">
              <strong>Reflection:</strong> Through my efforts, I reduced query
              times and transitioned the database to a more flexible structure.
              This significantly improved data management efficiency, making it
              easier to handle larger datasets and streamline operations.
            </p>

            <li>
              <strong>Goal 3:</strong> Develop innovative programs to automate
              business operations, focusing on payroll automation and route
              sequencing.
            </li>
            <p className="ml-6">
              <strong>Reflection:</strong> I automated several manual processes,
              including payroll and driver route assignments, saving time and
              reducing errors. The automation tools I created were highly
              praised for their usability and efficiency.
            </p>
          </ul>
        </section>

        {/* Job Description */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            My Role & Responsibilities
          </h3>
          <p className="mt-2 text-center text-gray-600">
            As a Fullstack Developer & Business Analyst Intern, I was
            responsible for leading several technical projects that directly
            impacted the company's efficiency. My work involved revamping the
            website using React.js and Node.js, optimizing database performance,
            and developing business software for automating payroll and delivery
            route management. I also worked closely with stakeholders to gather
            business requirements and ensure the successful execution of these
            projects.
          </p>
        </section>

        {/* Challenges & Accomplishments */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Challenges & Accomplishments
          </h3>
          <p className="mt-2 text-center text-gray-600">
            One of the biggest challenges I faced during this internship was
            managing multiple projects simultaneously. I applied agile
            methodologies and effective project management strategies to ensure
            each project was completed on time. Through these challenges, I
            significantly enhanced my skills in fullstack development,
            particularly in React.js, and improved my problem-solving abilities
            in database management.
          </p>
        </section>

        {/* Employer Evaluation & Feedback */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Employer Evaluation & Feedback
          </h3>
          <p className="mt-2 text-center text-gray-600">
            According to my final employer evaluation from Franklin Hamilton
            Donbosco, CEO of BoscoBoys Distributors, I consistently delivered
            high-quality work with attention to detail and organization. I was
            commended for my strong initiative, excellent judgment, and ability
            to work collaboratively within the team. The feedback encouraged me
            to further develop my written communication skills and explore
            leadership training for future roles.
          </p>
        </section>

        {/* Conclusions */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Conclusions & Acknowledgments
          </h3>
          <p className="mt-2 text-center text-gray-600">
            My time at BoscoBoys Distributors was incredibly rewarding, both
            personally and professionally. I would like to express my gratitude
            to the entire team, especially Franklin Hamilton Donbosco, for their
            mentorship and support. I am proud of the contributions I made to
            the company, and I look forward to applying the skills I have
            developed in future roles.
          </p>
        </section>
      </div>
    </div>
  );
};

export default S24WorkTermReport;
