import React from "react";
import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const S24WorkTermReport = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mt-8 flex justify-center px-4 sm:mt-12 sm:px-8 md:mt-16 md:px-16 lg:mt-20 lg:px-20">
      <div
        id="s24-work-term-report"
        className="w-full px-6 sm:px-8 md:px-12 lg:px-16"
      >
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
            My Summer with BoscoBoys
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
              <AcademicCapIcon className="mr-4 inline-block h-5 w-5 text-text" />
              Cross-functional collaboration with leadership to align business
              and technical goals.
            </li>
            <li className="flex items-center">
              <UserGroupIcon className="mr-4 inline-block h-5 w-5 text-text" />
              Designing customer-focused, scalable web solutions.
            </li>
            <li className="flex items-center">
              <ClipboardDocumentListIcon className="mr-4 inline-block h-5 w-5 text-text" />
              Optimizing database performance and streamlining data processes.
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="mr-4 inline-block h-5 w-5 text-text" />
              Automating business operations for improved efficiency.
            </li>
            <li className="flex items-center">
              <UserGroupIcon className="mr-4 inline-block h-5 w-5 text-text" />
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
            BoscoBoys Distributors: Connecting Businesses, Bridging Distances
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
            Responsibilities, Technologies, and Impact at BoscoBoys
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

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div>
              <h4 className="my-2 text-xl font-semibold text-text">
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
              <h4 className="my-2 text-xl font-semibold text-text">
                Database & Cloud
              </h4>
              <ul className="mt-2 list-none text-lg leading-relaxed text-text">
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  MongoDB
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                  AWS DynamoDB
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-3 inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
                  MySQL
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
              <h4 className="my-2 text-xl font-semibold text-text">
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
              <h4 className="my-2 text-xl font-semibold text-text">
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
              <h4 className="my-2 text-xl font-semibold text-text">
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
            Goals, Challenges, and Achievements
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Goal 1 */}
            <div className="rounded-lg bg-bgContrast p-6 shadow-md">
              <h4 className="text-xl font-semibold text-text">
                Goal 1: Enhance Website Development Skills
              </h4>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                The primary goal was to lead the complete revamp of the
                company’s website to improve its performance, design, and user
                experience. This involved a detailed analysis of the current
                website, conducting user surveys, and implementing modern
                frontend and backend technologies.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                Challenges included managing cross-functional feedback from
                business, design, and engineering teams, ensuring scalability,
                and maintaining a focus on mobile responsiveness. I also focused
                on enhancing the accessibility of the site for diverse user
                needs.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Skills Developed:</strong> Frontend and backend web
                development, user experience design, accessibility, mobile-first
                development, cross-functional collaboration.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Results:</strong> The website overhaul was completed
                successfully, with a 20% increase in page load speed and a 30%
                improvement in user engagement metrics, as indicated by heatmaps
                and feedback. The new design garnered positive feedback from
                stakeholders, and the project management approach significantly
                honed my leadership and problem-solving abilities.
              </p>
            </div>

            {/* Goal 2 */}
            <div className="rounded-lg bg-bgContrast p-6 shadow-md">
              <h4 className="text-xl font-semibold text-text">
                Goal 2: Optimize Database Management
              </h4>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                This goal was centered on improving the company’s database
                performance. I analyzed the existing database structure,
                identified inefficiencies, and implemented optimization
                strategies to reduce query times and improve data management
                efficiency.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                A key challenge was balancing the need for faster performance
                with the complexity of handling larger data sets without
                compromising data integrity and security.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Skills Developed:</strong> Data optimization, database
                indexing, query performance improvement, scalability, and
                database security.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Results:</strong> The optimized database structure led
                to a 40% reduction in query times and improved the company’s
                ability to scale its data operations. The enhancements also
                provided greater flexibility in managing large data sets,
                preparing the company for future growth.
              </p>
            </div>

            {/* Goal 3 */}
            <div className="rounded-lg bg-bgContrast p-6 shadow-md">
              <h4 className="text-xl font-semibold text-text">
                Goal 3: Automate Business Processes
              </h4>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                One of my primary goals was to develop custom automation
                solutions for key business processes. I focused on automating
                the payroll system and optimizing the delivery route system for
                newspaper distributors.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                Automating manual tasks posed a challenge in ensuring that the
                solutions integrated seamlessly with existing systems while also
                improving accuracy and reducing overhead costs.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Skills Developed:</strong> Automation scripting, process
                optimization, software integration, business analysis.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Results:</strong> The payroll automation system resulted
                in an 87.5% improvement in processing efficiency, while the
                route optimization system decreased delivery times by 15%. These
                solutions not only reduced manual errors but also streamlined
                day-to-day operations significantly.
              </p>
            </div>

            {/* Goal 4 */}
            <div className="rounded-lg bg-bgContrast p-6 shadow-md">
              <h4 className="text-xl font-semibold text-text">
                Goal 4: Improve Team Collaboration & Financial Analysis
              </h4>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                A non-technical goal focused on enhancing my ability to
                collaborate with different teams, particularly on financial
                analysis tasks. This involved working closely with the finance
                team to analyze business performance and contribute to
                decision-making processes.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                The challenge lay in understanding complex financial data and
                translating it into actionable insights that supported the
                company's broader goals.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Skills Developed:</strong> Financial data analysis,
                collaboration, teamwork, decision-making.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Results:</strong> By completing key financial analysis
                tasks, I provided insights that led to better resource
                allocation and cost management. The experience deepened my
                understanding of the financial side of business operations and
                strengthened my collaboration skills.
              </p>
            </div>

            {/* Goal 5 */}
            <div className="rounded-lg bg-bgContrast p-6 shadow-md">
              <h4 className="text-xl font-semibold text-text">
                Goal 5: Improve Time Management
              </h4>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                Managing multiple projects at once was a major focus, so I set
                out to improve my time management skills. Using tools like
                Notion and traditional note-taking methods, I worked to better
                organize tasks and meet deadlines more efficiently.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                The biggest challenge was prioritizing tasks across different
                domains—technical development, business analysis, and project
                management—while maintaining a high standard of work.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Skills Developed:</strong> Time management, task
                prioritization, personal productivity, and organizational
                skills.
              </p>
              <p className="mt-2 text-left text-lg leading-relaxed text-text">
                <strong>Results:</strong> Although I met all deadlines and
                improved my overall organizational skills, I continue to refine
                my approach to managing complex workloads. This experience has
                taught me the importance of adaptability and continuous
                improvement in time management.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            Reflections on Growth and Future Aspirations
          </h3>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            My internship at BoscoBoys was not just an opportunity to apply what
            I had learned—it was an environment that challenged me to grow,
            innovate, and contribute in meaningful ways. Through projects like
            revamping the website and automating key business processes, I made
            tangible improvements that enhanced the company's operational
            efficiency. These accomplishments helped me develop a deeper
            understanding of how technology can drive business success.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            One of the most valuable aspects of this experience was the blend of
            technical development and business analysis. I strengthened my
            ability to balance coding with strategic thinking, ensuring that
            every technical solution aligned with business goals. Whether
            optimizing databases, improving payroll systems, or enhancing
            customer-facing interfaces, I consistently aimed to deliver
            solutions that would have lasting value for the company.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            The skills I honed in fullstack development, database management,
            and process automation have not only boosted my confidence as a
            developer but have also prepared me for future roles that require a
            strong balance of technical and business acumen. This experience has
            shaped my professional identity, reinforcing my passion for creating
            impactful, user-centered technology solutions.
          </p>
          <p className="mt-4 text-left text-lg leading-relaxed text-text">
            As I move forward, I am excited to build on these learnings,
            applying both the technical expertise and collaborative skills I
            developed at BoscoBoys to future challenges. This internship has
            laid a solid foundation for my career, and I look forward to
            contributing to future projects with the same level of enthusiasm
            and dedication.
          </p>
        </section>

        {/* Acknowledgments */}
        <section className="mb-12">
          <h3 className="mb-6 text-left text-3xl font-semibold text-text">
            Gratitude & Mentorship: The People Behind My Growth
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
