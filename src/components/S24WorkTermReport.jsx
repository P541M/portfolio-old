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
            Connecting Businesses, Bridging Distances - My Summer with BoscoBoys
            <LightBulbIcon className="ml-2 inline-block h-6 w-6" />
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            From May to August 2024, I had the privilege of interning at
            BoscoBoys Distributors, a family-owned logistics company based in
            Toronto. My role as a Fullstack Developer & Business Analyst allowed
            me to contribute to significant projects, including the revamp of
            the company's website and the automation of critical business
            processes.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            The most valuable lessons I gained from this internship, which I
            will carry into future professional roles, include:
          </p>
          <ul className="mt-4 space-y-4 text-lg leading-relaxed text-text">
            <li className="flex items-center">
              <AcademicCapIcon className="mr-4 inline-block h-5 w-5" />
              Cross-functional collaboration with leadership to align business
              and technical goals.
            </li>
            <li className="flex items-center">
              <UserGroupIcon className="mr-4 inline-block h-5 w-5" />
              Designing customer-focused, scalable web solutions.
            </li>
            <li className="flex items-center">
              <ClipboardDocumentListIcon className="mr-4 inline-block h-5 w-5" />
              Optimizing database performance and streamlining data processes.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="mr-4 inline-block h-5 w-5" />
              Automating business operations for improved efficiency.
            </li>
            <li className="flex items-center">
              <UserGroupIcon className="mr-4 inline-block h-5 w-5" />
              Enhancing professional communication and project management
              skills.
            </li>
          </ul>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            In this report, I will reflect on the projects I worked on, the
            skills I developed, and how this internship contributed to my growth
            as both a developer and a business analyst. My experience at
            BoscoBoys has been integral in shaping my future career goals, and I
            look forward to applying these learnings in future roles.
          </p>
        </section>

        {/* Employer Information */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            About BoscoBoys Distributors
            <BuildingOfficeIcon className="ml-2 inline-block h-6 w-6" />
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            BoscoBoys Distributors, founded in 1998, is a family-owned logistics
            and distribution company headquartered in Toronto, Ontario. The
            company initially focused on newspaper distribution but has since
            expanded its offerings to become a full-service logistics provider,
            including freight shipping, warehousing, and supply chain
            management.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            With a commitment to technological innovation, BoscoBoys leverages
            cutting-edge solutions in route optimization, database management,
            and automation to improve operational efficiency. The company's IT
            infrastructure integrates database management systems and advanced
            algorithms to streamline processes and reduce manual labor, aligning
            with modern computing science principles.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            BoscoBoys prides itself on a culture of integrity and innovation,
            driven by a strong leadership team led by Founder & CEO Franklin
            Hamilton Donbosco. Headquartered in the heart of Toronto, the
            company has remained dedicated to maintaining a balance between
            growth and customer-centric values.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            "Innovation and integrity are at the heart of what we do. Every
            client, whether a small business or a large corporation, is a
            stakeholder in our success." – Franklin Hamilton Donbosco, Founder &
            CEO, BoscoBoys Distributors.
          </p>
        </section>

        {/* Job Description */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            My Role at BoscoBoys
            <BriefcaseIcon className="ml-2 inline-block h-6 w-6" />
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            As a Fullstack Developer & Business Analyst Intern, I was
            responsible for a diverse range of tasks that required both
            technical proficiency and business acumen. One of my primary
            responsibilities was leading the full revamp of the company’s
            website. This involved managing the project from design to
            development, ensuring both robustness and an enhanced user
            experience.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            I collaborated closely with the CEO, CFO, CTO, and other key
            stakeholders to gather business requirements and feedback from end
            users. This required not only technical skills but also effective
            communication and project management abilities. I led teams to
            ensure efficient execution and applied structured methodologies,
            which helped streamline the development process.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            One of the most interesting aspects of my role was developing a
            custom payroll system that automated manual processes. This
            significantly improved accuracy and reduced overhead for the
            company. Additionally, I developed the Routeview system for
            newspaper distributors, a unique tool that optimized delivery routes
            and allowed for customer-specific requests, greatly enhancing
            operational efficiency and user satisfaction.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            The role required balancing technical development with business
            analysis. Understanding both the architecture and the business
            implications of decisions helped me deliver more value to the
            company and its stakeholders.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            During my internship at BoscoBoys, I gained hands-on experience with
            a wide range of technologies and tools:
          </p>

          <div className="mt-4 flex flex-col">
            <ul className="mt-2 flex space-x-4">
              <li className="flex items-center">
                <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                Learned on the job
              </li>
              <li className="flex items-center">
                <span className="mr-2 inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
                Learned in school
              </li>
              <li className="flex items-center">
                <span className="mr-2 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                Learned on my own
              </li>
            </ul>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-xl font-semibold">Web Development</h4>
              <ul className="mt-2 list-none text-lg leading-relaxed text-text">
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  React.js
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                  Svelte
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  Node.js
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                  PHP
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  Tailwind CSS
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  HTML5
                </li>
                <li className="flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  CSS3
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Database & Cloud</h4>
              <ul className="mt-2 list-none text-lg leading-relaxed text-text">
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  MongoDB
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                  DynamoDB
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  MySQL
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                  AWS
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  Vercel
                </li>
                <li className="flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                  WampServer
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Programming Languages</h4>
              <ul className="mt-2 list-none text-lg leading-relaxed text-text">
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  JavaScript
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                  TypeScript
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Version Control & Project Management
              </h4>
              <ul className="mt-2 list-none text-lg leading-relaxed text-text">
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  Git
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
                  Trello
                </li>
                <li className="flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                  Jira
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Collaboration & Productivity
              </h4>
              <ul className="mt-2 list-none text-lg leading-relaxed text-text">
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  Notion
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  Microsoft Word, Excel, Access
                </li>
                <li className="flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  Google Docs, Sheets
                </li>
              </ul>
            </div>
          </div>
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
