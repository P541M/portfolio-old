import React from "react";
import { useNavigate } from "react-router-dom";

const S24WorkTermReport = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mt-16 flex justify-center px-8">
      <div
        id="s24-work-term-report"
        className="w-full max-w-[1200px] rounded-lg bg-bgContrast p-16 shadow-lg"
      >
        <button
          onClick={handleBack}
          className="mb-8 inline-flex items-center rounded-md bg-bgContrast px-5 py-3 text-sm text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-bg"
        >
          ← Back to Portfolio
        </button>

        <h2 className="mb-12 text-center text-4xl font-bold leading-snug text-text">
          Being a Fullstack Developer & Business Analyst at Boscoboys
          Distributors{" "}
        </h2>

        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            A Summer of Innovation at BoscoBoys
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            From May to August 2024, I worked as a Fullstack Developer &
            Business Analyst Intern at BoscoBoys Distributors. This experience
            challenged me both technically and professionally, allowing me to
            lead significant projects such as revamping the company website,
            optimizing database management, and automating key business
            processes.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Key Takeaways from the Internship
          </h3>
          <ul className="mt-4 list-inside list-disc text-lg leading-relaxed text-text">
            <li>
              <strong>Problem-solving:</strong> Through critical and creative
              thinking in technical tasks.
            </li>
            <li className="mt-2">
              <strong>Technological literacy:</strong> Developed through
              hands-on experience in database management and website
              development.
            </li>
            <li className="mt-2">
              <strong>Teamwork and collaboration:</strong> Enhanced while
              working on financial analysis and business projects.
            </li>
            <li className="mt-2">
              <strong>Efficiency through automation:</strong> Achieved by
              developing programs that streamlined business operations and
              reduced manual workload.
            </li>
            <li className="mt-2">
              <strong>Time management and personal organization:</strong>
              Strengthened by balancing multiple projects and deadlines
              effectively.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            BoscoBoys: Connecting Businesses, Bridging Distances
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            BoscoBoys Distributors, founded in 1998, is a family-owned logistics
            and distribution company headquartered in Toronto, Ontario, Canada.
            Originally established to manage newspaper distribution, BoscoBoys
            has since expanded into a full-service logistics provider, offering
            services such as freight shipping, warehousing, and supply chain
            management.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            The company remains committed to its roots in newspaper distribution
            while growing into a pivotal player in the logistics and trucking
            industry. BoscoBoys is dedicated to providing both B2B and B2C
            delivery solutions, prioritizing integrity, innovation, and customer
            satisfaction.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Project Goals & Reflections
          </h3>
          <ul className="mt-6 list-inside list-disc text-lg leading-relaxed text-text">
            <li>
              <strong>Goal 1:</strong> Lead the revamp of the company website to
              enhance user experience and functionality.
            </li>
            <p className="ml-6 mt-2">
              <strong>Reflection:</strong> Successfully completed the website
              revamp using React.js, creating a multi-page web application and
              improving user engagement. Positive feedback was received from
              both users and stakeholders.
            </p>

            <li className="mt-6">
              <strong>Goal 2:</strong> Improve database management by optimizing
              database structures for better performance.
            </li>
            <p className="ml-6 mt-2">
              <strong>Reflection:</strong> I reduced query times and
              transitioned the database to a more flexible structure,
              significantly improving data management and overall operational
              efficiency.
            </p>

            <li className="mt-6">
              <strong>Goal 3:</strong> Develop innovative programs to automate
              business operations, focusing on payroll automation and route
              sequencing.
            </li>
            <p className="ml-6 mt-2">
              <strong>Reflection:</strong> I developed tools for payroll
              automation and route sequencing, saving time and reducing errors
              in the process. These automation tools were well-received by the
              team.
            </p>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Key Contributions & Responsibilities
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            As a Fullstack Developer & Business Analyst Intern, I led several
            technical projects, including revamping the company website using
            React.js and Node.js, optimizing database performance, and
            automating payroll and delivery route management. My role also
            involved close collaboration with stakeholders to ensure successful
            project delivery.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Overcoming Challenges & Celebrating Achievements
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            One of the primary challenges I faced was managing multiple projects
            simultaneously. By implementing agile methodologies and strong
            project management skills, I successfully completed each project on
            time, sharpening my fullstack development skills and problem-solving
            capabilities.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Feedback from Leadership
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            According to my final evaluation from Franklin Hamilton Donbosco,
            CEO of BoscoBoys, I consistently delivered high-quality work with
            strong initiative and excellent judgment. My leadership and
            collaboration skills were recognized, with constructive feedback
            encouraging further leadership development.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Final Thoughts & Gratitude
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            My internship at BoscoBoys Distributors was a rewarding experience.
            I gained invaluable skills in fullstack development and business
            analysis, and I am grateful to Franklin Hamilton Donbosco and the
            entire BoscoBoys team for their support and mentorship.
          </p>
        </section>
      </div>
    </div>
  );
};

export default S24WorkTermReport;
