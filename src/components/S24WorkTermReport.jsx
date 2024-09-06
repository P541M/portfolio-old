import React from "react";

const S24WorkTermReport = () => {
  return (
    <div className="mt-20 flex justify-center">
      <div id="s24-work-term-report" className="max-w-[800px] p-8">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Co-op Work Term Report
        </h2>

        {/* Abstract/Introduction */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Introduction
          </h3>
          <p className="mt-2 text-center text-gray-600">
            This report outlines my role as a Fullstack Developer & Business
            Analyst Intern at BoscoBoys Distributors, a leading logistics
            company. During my work term, I led multiple projects including a
            website revamp, business automation software development, and
            database optimization. The goal of this report is to reflect on the
            skills I acquired and the challenges I overcame.
          </p>
        </section>

        {/* Information about the Employer */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Employer Information
          </h3>
          <p className="mt-2 text-center text-gray-600">
            BoscoBoys Distributors is a logistics company specializing in
            delivery route optimization, payroll management, and business
            automation. Located in [Location], they utilize modern technologies
            to streamline operations for newspaper distributors. The company’s
            core focus is enhancing efficiency for clients through custom
            software solutions.
          </p>
        </section>

        {/* Goals & Learning Outcomes */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Goals & Learning Outcomes
          </h3>
          <ul className="mt-2 list-inside list-disc text-gray-600">
            <li>
              <strong>Goal 1:</strong> Enhance website development skills
              through leading the website revamp.
            </li>
            <p className="ml-6">
              Reflection: I successfully led the website revamp using React.js
              and ensured smooth collaboration with key stakeholders. The new
              interface was well received, and the improved user experience was
              key to achieving client satisfaction.
            </p>

            <li>
              <strong>Goal 2:</strong> Improve database management by optimizing
              existing structures.
            </li>
            <p className="ml-6">
              Reflection: Database performance improved significantly, reducing
              query times and enhancing the overall data management process.
              This optimization was key to streamlining daily business
              operations.
            </p>

            <li>
              <strong>Goal 3:</strong> Develop innovative programs to automate
              business operations.
            </li>
            <p className="ml-6">
              Reflection: I developed and implemented software for payroll
              automation and route sequencing, reducing manual work and
              increasing efficiency. The tools I created helped streamline
              complex tasks like driver route assignment and payroll processing.
            </p>
          </ul>
        </section>

        {/* Job Description */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Job Description
          </h3>
          <p className="mt-2 text-center text-gray-600">
            As a Fullstack Developer & Business Analyst Intern, I led multiple
            technical projects, including revamping the company's website using
            React and Node.js, optimizing database performance, and developing
            business software for payroll and route management. My
            responsibilities also involved working closely with stakeholders to
            gather business requirements and ensure smooth project execution.
          </p>
        </section>

        {/* Reflection on Challenges & Accomplishments */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Reflection on Challenges & Accomplishments
          </h3>
          <p className="mt-2 text-center text-gray-600">
            The biggest challenge during my work term was leading the
            development team while balancing multiple projects simultaneously.
            By applying effective project management strategies and utilizing
            agile methodologies, I successfully delivered each project on time.
            My technical knowledge, particularly in React and Node.js, was
            strengthened through real-world application, and my problem-solving
            skills were sharpened by overcoming obstacles during database
            optimizations.
          </p>
        </section>

        {/* Conclusions */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Conclusions
          </h3>
          <p className="mt-2 text-center text-gray-600">
            My experience at BoscoBoys Distributors was highly rewarding,
            offering me invaluable opportunities to grow both technically and
            professionally. The projects I worked on directly impacted the
            company’s efficiency and provided me with a deeper understanding of
            fullstack development and business operations. I would like my
            readers to take away that my technical skills and leadership
            abilities were enhanced during this internship, preparing me for
            future challenges in the field of software development.
          </p>
        </section>

        {/* Acknowledgments */}
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-700">
            Acknowledgments
          </h3>
          <p className="mt-2 text-center text-gray-600">
            I would like to express my gratitude to Franklin Hamilton Donbosco,
            Founder & CEO of BoscoBoys Distributors, for providing me with
            mentorship and support during my work term. I would also like to
            thank the CTO, CFO, and other team members for their collaboration,
            which was critical in successfully completing all projects.
          </p>
        </section>
      </div>
    </div>
  );
};

export default S24WorkTermReport;
