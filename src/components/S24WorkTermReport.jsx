import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  LightBulbIcon,
  TrophyIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
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

        <h2 className="mb-12 text-left text-4xl font-bold leading-snug text-text">
          My Journey as a Fullstack Developer & Business Analyst Intern at
          BoscoBoys
        </h2>

        {/* Introduction */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            Key Insights and Learnings
            <LightBulbIcon className="ml-2 inline-block h-6 w-6" />
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            From May to August 2024, I had the privilege of interning at
            BoscoBoys Distributors, a dynamic logistics and distribution
            company. As a Fullstack Developer & Business Analyst, I contributed
            to several technical and business projects aimed at streamlining
            operations.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            My key reflections from this internship, which I will carry into
            future roles, include:
          </p>
          <ul className="mt-4 space-y-4 text-lg leading-relaxed text-text">
            <li className="flex items-center">
              <AcademicCapIcon className="mr-4 inline-block h-5 w-5" />
              Balancing technical development with business analysis.
            </li>
            <li className="flex items-center">
              <UserGroupIcon className="mr-4 inline-block h-5 w-5" />
              Improving user experience through website development.
            </li>
            <li className="flex items-center">
              <ClipboardDocumentListIcon className="mr-4 inline-block h-5 w-5" />
              Optimizing database structures for efficiency and scalability.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="mr-4 inline-block h-5 w-5" />
              Implementing automation to streamline business processes.
            </li>
            <li className="flex items-center">
              <UserGroupIcon className="mr-4 inline-block h-5 w-5" />
              Collaboration across teams to achieve project goals.
            </li>
          </ul>
        </section>

        {/* Employer Information */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            About BoscoBoys Distributors
            <BuildingOfficeIcon className="ml-2 inline-block h-6 w-6" />
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            BoscoBoys Distributors, founded in 1998, is a family-owned logistics
            and distribution company headquartered in Toronto, Ontario.
            Initially established to manage newspaper distribution, the company
            has since grown into a full-service logistics provider, offering
            services such as freight shipping, warehousing, and supply chain
            management.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            BoscoBoys’ integration of cutting-edge technology, including route
            optimization and database management, has been essential in
            maintaining its competitive edge. Their focus on automating
            logistics processes and optimizing warehouse management leverages
            computing technologies to streamline operations.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            "Innovation and integrity are at the heart of what we do. Every
            client, whether a small business or a large corporation, is a
            stakeholder in our success." – Franklin Hamilton Donbosco, Founder &
            CEO, BoscoBoys Distributors.
          </p>
        </section>

        {/* Project Goals & Reflections */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            Setting & Achieving Project Goals
            <ClipboardDocumentListIcon className="ml-2 inline-block h-6 w-6" />
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

        {/* Job Description */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            My Role at BoscoBoys
            <BriefcaseIcon className="ml-2 inline-block h-6 w-6" />
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            As a Fullstack Developer & Business Analyst Intern, my role combined
            both technical and business responsibilities. I led the full revamp
            of the company’s website using React.js and Node.js, from design to
            development, ensuring both technical robustness and an enhanced user
            experience.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            I worked closely with the CEO, CFO, and other stakeholders to gather
            business requirements and feedback from end users. Additionally, I
            led scrum teams to ensure smooth execution of code production and
            design, adhering to agile methodologies.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            One of the notable projects was the development of a custom payroll
            system, automating manual processes, improving accuracy, and
            reducing overhead. Another key development was the Routeview system
            for newspaper distributors, which included features such as delivery
            route sequencing and handling specific customer requests.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            Final Reflections & Takeaways
            <CheckCircleIcon className="ml-2 inline-block h-6 w-6" />
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            My internship at BoscoBoys was an invaluable experience. The
            projects I worked on not only benefited the company but also helped
            me grow as a professional. The skills I gained in fullstack
            development, database management, and business process automation
            will be crucial in my career development.
          </p>
        </section>

        {/* Acknowledgments */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            Acknowledgments
            <HeartIcon className="ml-2 inline-block h-6 w-6" />
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
