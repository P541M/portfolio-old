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
          Fullstack Developer & Business Analyst Internship at BoscoBoys
          Distributors
        </h2>

        {/* Introduction */}
        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Introduction
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            From May to August 2024, I interned at BoscoBoys Distributors as a
            Fullstack Developer & Business Analyst. During this time, I was
            involved in a wide array of projects, from revamping the company
            website to optimizing their database structures. My primary takeaway
            from this experience was learning to balance both technical and
            business-oriented responsibilities, a skill I believe will shape my
            future career in software development and business analysis.
          </p>
        </section>

        {/* Employer Information */}
        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            About BoscoBoys Distributors
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            BoscoBoys Distributors is a family-owned logistics company
            headquartered in Toronto, Ontario. Established in 1998, the company
            initially focused on newspaper distribution but has since expanded
            its services to include freight shipping, warehousing, and supply
            chain management. BoscoBoys is known for its commitment to
            innovation and customer satisfaction, and during my time there, I
            saw firsthand how technology plays a pivotal role in streamlining
            their operations.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            The company has made significant strides in integrating new
            technologies into its logistics processes. From automating route
            sequences to improving warehouse management through database
            optimization, BoscoBoys continuously seeks to modernize its services
            to maintain its competitive edge in the industry.
          </p>
        </section>

        {/* Job Description */}
        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Job Description
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            As a Fullstack Developer & Business Analyst, my role was
            multifaceted. I was responsible for leading the revamp of the
            company website using React.js and Node.js, optimizing database
            structures with PostgreSQL, and automating key business processes
            like payroll and delivery route optimization. I also worked closely
            with the business team, using Excel and financial data to provide
            insights that guided business strategies. This combination of
            technical and business responsibilities was crucial in helping me
            grow both as a developer and an analyst.
          </p>
        </section>

        {/* Project Goals & Reflections */}
        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Goals & Reflections
          </h3>
          <ul className="mt-6 list-inside list-disc text-lg leading-relaxed text-text">
            <li>
              <strong>Goal 1:</strong> Revamp the company website to improve
              user experience and functionality.
            </li>
            <p className="ml-6 mt-2">
              <strong>Reflection:</strong> Leading the website revamp was both
              exciting and challenging. Initially, I struggled with the complex
              React framework, but through systematic learning and collaboration
              with my team, I was able to successfully create a multi-page web
              application that significantly enhanced user engagement. The
              website received positive feedback from both users and
              stakeholders, marking this as one of my key achievements during
              the internship.
            </p>

            <li className="mt-6">
              <strong>Goal 2:</strong> Optimize the company’s database
              structures for better performance and scalability.
            </li>
            <p className="ml-6 mt-2">
              <strong>Reflection:</strong> Optimizing the company’s database was
              a technical challenge. I revised query codes, removed redundant
              elements, and restructured the database to make it more flexible.
              This optimization not only improved query times but also allowed
              the company to store and manage data more efficiently. Reflecting
              on this project, I learned valuable skills in database management
              that will be useful in future projects.
            </p>

            <li className="mt-6">
              <strong>Goal 3:</strong> Automate business processes, including
              payroll and route optimization.
            </li>
            <p className="ml-6 mt-2">
              <strong>Reflection:</strong> I developed custom programs to
              automate payroll and optimize delivery routes. This automation
              saved the company hours of manual work each week and reduced
              errors in payroll processing. Working on this project allowed me
              to apply creative problem-solving skills and demonstrated the
              impact of automation on business efficiency.
            </p>
          </ul>
        </section>

        {/* Overcoming Challenges & Achievements */}
        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Overcoming Challenges & Achievements
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            One of the primary challenges I faced was balancing multiple
            projects while meeting tight deadlines. Using agile methodologies, I
            was able to manage my time effectively and complete tasks on
            schedule. Another challenge was implementing complex solutions like
            the automation programs without compromising on ease of use. In
            overcoming these obstacles, I honed my problem-solving abilities and
            gained confidence in my technical and project management skills.
          </p>
        </section>

        {/* Mentorship Lessons */}
        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Mentorship Lessons
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            I was fortunate to receive mentorship from Franklin Hamilton
            Donbosco, the CEO of BoscoBoys, who guided me on leadership and
            project management. His advice on balancing technical skills with
            interpersonal relationships proved invaluable. Additionally, working
            closely with my team gave me a deeper understanding of how
            collaboration drives success in business projects.
          </p>
        </section>

        {/* Feedback from Leadership */}
        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Feedback from Leadership
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            According to my final evaluation, I consistently delivered
            high-quality work and demonstrated a strong initiative. My
            contributions were recognized by the CEO, Franklin Hamilton
            Donbosco, who praised my leadership skills and suggested further
            developing my written communication abilities for future roles.
          </p>
        </section>

        {/* Acknowledgments */}
        <section className="mb-12">
          <h3 className="mb-6 text-center text-3xl font-semibold text-text">
            Acknowledgments
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            I would like to thank Franklin Hamilton Donbosco for his mentorship
            and the entire BoscoBoys team for their support throughout my
            internship. I am also grateful to the University of Guelph Co-op
            team for providing me with the opportunity to participate in such an
            enriching work term experience.
          </p>
        </section>
      </div>
    </div>
  );
};

export default S24WorkTermReport;
