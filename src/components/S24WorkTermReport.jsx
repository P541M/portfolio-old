import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  LightBulbIcon,
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
    <div className="mt-16 flex justify-center px-20">
      <div id="s24-work-term-report" className="w-full px-16 pt-16">
        <button
          onClick={handleBack}
          className="mb-8 inline-flex items-center rounded-md bg-bgContrast px-5 py-3 text-sm text-text transition duration-300 ease-in-out hover:bg-primary hover:text-bgContrast"
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
            <LightBulbIcon className="ml-2 inline-block h-6 w-6 text-primary" />
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
              <AcademicCapIcon className="mr-4 inline-block h-5 w-5 text-primary" />
              Cross-functional collaboration with leadership to align business
              and technical goals.
            </li>
            <li className="flex items-center">
              <UserGroupIcon className="mr-4 inline-block h-5 w-5 text-primary" />
              Designing customer-focused, scalable web solutions.
            </li>
            <li className="flex items-center">
              <ClipboardDocumentListIcon className="mr-4 inline-block h-5 w-5 text-primary" />
              Optimizing database performance and streamlining data processes.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="mr-4 inline-block h-5 w-5 text-primary" />
              Automating business operations for improved efficiency.
            </li>
            <li className="flex items-center">
              <UserGroupIcon className="mr-4 inline-block h-5 w-5 text-primary" />
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
            <BuildingOfficeIcon className="ml-2 inline-block h-6 w-6 text-primary" />
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
            <BriefcaseIcon className="ml-2 inline-block h-6 w-6 text-primary" />
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
            company, increasing payroll processing efficiency by 87.5%.
            Additionally, I developed the Routeview system for newspaper
            distributors, a unique tool that optimized delivery routes and
            allowed for customer-specific requests, greatly enhancing
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
              <h4 className="text-xl font-semibold text-primary">
                Web Development
              </h4>
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
              <h4 className="text-xl font-semibold text-primary">
                Database & Cloud
              </h4>
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
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
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
              <h4 className="text-xl font-semibold text-primary">
                Programming Languages
              </h4>
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
              <h4 className="text-xl font-semibold text-primary">
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
              <h4 className="text-xl font-semibold text-primary">
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

        {/* Goals */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            Setting & Achieving Goals
            <ClipboardDocumentListIcon className="ml-2 inline-block h-6 w-6 text-primary" />
          </h3>

          {/* Goal 1 */}
          <div className="mt-8 rounded-lg bg-bgContrast p-6 shadow-md">
            <h4 className="text-xl font-semibold text-primary">
              Goal 1: Enhance Website Development Skills
            </h4>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              I aimed to improve my website development skills by leading the
              revamp of the company’s website. This involved analyzing the
              current website, gathering user feedback, and using modern web
              development technologies to enhance user experience and
              functionality.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Skills Developed:</strong> Frontend and backend web
              development, user experience design, problem-solving.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Outcome & Reflection:</strong> I successfully completed
              the website revamp, receiving positive feedback from users and
              stakeholders. The complexity of the multi-page web application
              with modern frameworks posed challenges, but overcoming them
              significantly improved my project management and problem-solving
              skills.
            </p>
          </div>

          {/* Goal 2 */}
          <div className="mt-8 rounded-lg bg-bgContrast p-6 shadow-md">
            <h4 className="text-xl font-semibold text-primary">
              Goal 2: Optimize Database Management
            </h4>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              My goal was to optimize the database structures for improved
              efficiency. I analyzed existing database systems, identified
              inefficiencies, and applied best practices in database management
              to enhance performance.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Skills Developed:</strong> Database management, data
              optimization, query performance improvement.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Outcome & Reflection:</strong> Successfully optimized the
              database structure, resulting in reduced query times and improved
              data management flexibility. While I achieved significant
              progress, future optimizations may require additional strategies
              to handle increased data loads.
            </p>
          </div>

          {/* Goal 3 */}
          <div className="mt-8 rounded-lg bg-bgContrast p-6 shadow-md">
            <h4 className="text-xl font-semibold text-primary">
              Goal 3: Automate Business Processes
            </h4>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              I sought to develop custom automation programs to streamline key
              business processes, including payroll and route optimization for
              newspaper distributors.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Skills Developed:</strong> Automation, software
              development, business analysis.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Outcome & Reflection:</strong> The automation programs
              successfully streamlined operations, improving payroll efficiency
              by 87.5%. This experience emphasized the importance of balancing
              usability with functionality when automating processes.
            </p>
          </div>

          {/* Goal 4 */}
          <div className="mt-8 rounded-lg bg-bgContrast p-6 shadow-md">
            <h4 className="text-xl font-semibold text-primary">
              Goal 4: Improve Team Collaboration & Financial Analysis
            </h4>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              A non-technical goal I set was to develop better collaboration
              skills by working with the business team on financial analysis
              tasks. I learned to analyze financial data and contribute to
              financial models.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Skills Developed:</strong> Financial analysis, teamwork,
              collaboration.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Outcome & Reflection:</strong> I completed financial tasks
              with accuracy and received positive feedback. This experience
              provided valuable insights into business operations and teamwork,
              which will be crucial for future roles.
            </p>
          </div>

          {/* Goal 5 */}
          <div className="mt-8 rounded-lg bg-bgContrast p-6 shadow-md">
            <h4 className="text-xl font-semibold text-primary">
              Goal 5: Improve Time Management
            </h4>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              My final goal was to enhance my time management skills. I used
              tools like Notion and traditional note-taking to organize and
              prioritize tasks effectively across multiple projects.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Skills Developed:</strong> Time management, task
              prioritization, personal organization.
            </p>
            <p className="mt-2 text-left text-lg leading-relaxed text-text">
              <strong>Outcome & Reflection:</strong> While I met deadlines and
              stayed organized, balancing multiple projects effectively remains
              a challenge. This goal highlighted the importance of continuous
              improvement in managing workload efficiently.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            Final Reflections & Takeaways
            <CheckCircleIcon className="ml-2 inline-block h-6 w-6 text-primary" />
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
            <HeartIcon className="ml-2 inline-block h-6 w-6 text-primary" />
          </h3>

          {/* Franklin Hamilton Donbosco */}
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            I would like to extend my heartfelt gratitude to Franklin Hamilton
            Donbosco, Founder and CEO of BoscoBoys Distributors, for giving me
            the opportunity to prove myself and for being an exceptional mentor
            throughout my internship. He consistently demonstrated remarkable
            leadership qualities—balancing vision, empathy, and
            decisiveness—that made him a leader I greatly admired. His
            unwavering support, guidance, and encouragement not only helped me
            grow as a professional but also fostered a sense of confidence in my
            own abilities. Over time, he became someone I deeply looked up to,
            setting a high standard of leadership and excellence that I will
            carry with me into my future career.
          </p>

          {/* Infenta Hamilton */}
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            I am deeply thankful to Infenta Hamilton, CFO, for her unwavering
            support, guidance, and warmth throughout my time at BoscoBoys. Not
            only did she offer invaluable insights into business operations and
            strategy, but she also fostered a comforting and welcoming
            environment, truly embodying a nurturing presence within the
            company. Her support made a significant impact on both my
            professional and personal growth, making it a pleasure to work with
            her.
          </p>

          {/* Ragul Ponniah */}
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            A special thanks to Ragul Ponniah, CTO, for consistently challenging
            me to push the boundaries of my technical abilities. His deep
            technical expertise and encouragement to take on complex tasks
            helped me develop new skills and grow as a software engineer.
            Ragul’s mentorship and drive for innovation were instrumental in
            shaping my understanding of the field and expanding my
            problem-solving abilities.
          </p>

          {/* Colleagues */}
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            I would also like to acknowledge my colleagues Lovepreet, Pratham,
            and Yukta for being fantastic teammates. Their positivity,
            collaboration, and camaraderie made the workplace enjoyable and
            productive, fostering a truly supportive work environment that I
            looked forward to every day.
          </p>

          {/* Entire BoscoBoys Team */}
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            Lastly, to the entire BoscoBoys team, your collective dedication,
            professionalism, and support made this experience truly
            unforgettable. The lessons I learned from many of you have had a
            profound impact on my growth, both professionally and personally,
            and will undoubtedly shape my future career.
          </p>
        </section>
      </div>
    </div>
  );
};

export default S24WorkTermReport;
