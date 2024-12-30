import React, { useState } from "react";
import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/s24/me.jpeg";
import image2 from "../assets/s24/work.jpeg";
import image3 from "../assets/s24/disperse.PNG";
import image4 from "../assets/s24/bosco.PNG";

const goals = [
  {
    title: "Lead Complete Website Revamp for UX and Performance",
    description: `The primary goal was to lead the complete revamp of the company’s website to improve its performance, design, and user experience. This involved a detailed analysis of the current website, conducting user surveys, and implementing modern frontend and backend technologies.`,
    challenges: `Challenges included managing cross-functional feedback from business, design, and engineering teams, ensuring scalability, and maintaining a focus on mobile responsiveness. I also focused on enhancing the accessibility of the site for diverse user needs.`,
    skills: `Frontend and backend web development, user experience design, accessibility, mobile-first development, cross-functional collaboration.`,
    results: `The website overhaul was completed successfully, with a 20% increase in page load speed and a 30% improvement in user engagement metrics, as indicated by heat maps and feedback. The new design garnered positive feedback from stakeholders, and the project management approach significantly honed my leadership and problem-solving abilities.`,
  },
  {
    title: "Optimize Database Structure for Faster Performance",
    description: `This goal was centered on improving the company’s database performance. I analyzed the existing database structure, identified inefficiencies, and implemented optimization strategies to reduce query times and improve data management efficiency. Additionally, we migrated the database to a more scalable solution, which required adjusting all functions responsible for fetching data to ensure seamless integration and support for future growth.`,
    challenges: `A major challenge was understanding the old database, as limited documentation made this process more difficult. Additionally, balancing the need for faster performance with the complexity of managing larger data sets, while maintaining data integrity and security, added further complexity.`,
    skills: `Data optimization, database indexing, query performance improvement, scalability, and database security.`,
    results: `The optimized database structure led to a 40% reduction in query times and improved the company’s ability to scale its data operations.`,
  },
  {
    title: "Automate Payroll and Delivery Routes for Efficiency",
    description: `Early on, I noticed significant improvements could be made to the payroll system, which was highly manual and inefficient. I saw an opportunity to automate much of the process, and it quickly became a personal goal to ensure a new, automated payroll system was implemented. Additionally, I focused on optimizing the delivery route system for newspaper distributors to further streamline operations.`,
    challenges: `Automating manual tasks posed a challenge in ensuring that the solutions integrated seamlessly with existing systems while also improving accuracy and reducing overhead costs. The biggest challenge, however, was understanding and gathering the requirements needed to develop better solutions that truly addressed the company's needs.`,
    skills: `Automation scripting, process optimization, software integration, business analysis.`,
    results: `The payroll automation system resulted in an 87.5% improvement in processing efficiency, while the route optimization system decreased delivery times by 15%.`,
  },
  {
    title: "Improve Team Collaboration and Financial Insights",
    description: `A non-technical goal focused on enhancing my ability to collaborate with different teams, particularly on financial analysis tasks. This involved working closely with the finance team to analyze business performance and contribute to decision-making processes. Additionally, I aimed to ensure that all teams were effectively communicating their concerns and passing on messages clearly, fostering transparency across the entire team.`,
    challenges: null,
    skills: `Financial data analysis, collaboration, teamwork, decision-making.`,
    results: `By completing key financial analysis tasks, I provided insights that led to better resource allocation and cost management.`,
  },
  {
    title: "Enhance Time Management Skills Across Multiple Projects",
    description: `Managing multiple projects at once was a major focus, so I set out to improve my time management skills. Using tools like Notion and traditional note-taking methods, I worked to better organize tasks and meet deadlines more efficiently.`,
    challenges: null,
    skills: `Time management, task prioritization, personal productivity, and organizational skills.`,
    results: `Although I met all deadlines and improved my overall organizational skills, I continue to refine my approach to managing complex workloads.`,
  },
];

const S24BoscoBoysDistributors = () => {
  const navigate = useNavigate();
  const [expandedGoals, setExpandedGoals] = useState({});

  const handleBack = () => {
    navigate(-1);
  };

  const handleToggleGoal = (index) => {
    setExpandedGoals((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      id="boscoboys-distributors-wtr"
      className="min-h-screen px-6 pb-20 pt-10 text-text transition-all duration-300 sm:px-8 md:px-16 lg:px-20"
    >
      <div className="mb-8">
        <button
          onClick={handleBack}
          className="inline-block rounded-full bg-primary px-6 py-3 text-center text-bg shadow-md transition-all duration-300 hover:scale-105 hover:bg-bgContrast"
        >
          Back to Portfolio
        </button>
      </div>

      <h1 className="text-center text-4xl font-bold leading-snug text-text">
        My Journey as a Fullstack Developer & Business Analyst Intern at
        BoscoBoys
      </h1>

      <p className="mb-4 mt-3 text-left text-lg text-text">
        This report highlights my experiences as a Fullstack Developer &
        Business Analyst Intern at BoscoBoys Distributors. Through various
        projects, I gained valuable insights, developed new skills, and
        contributed to impactful solutions that improved the company's
        operations.
      </p>
      {/* Introduction */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          My Summer with BoscoBoys
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg">
          From May to August 2024, I had the privilege of interning at BoscoBoys
          Distributors, a family-owned logistics company based in Toronto. My
          role as a Fullstack Developer & Business Analyst allowed me to
          contribute to significant projects, including the revamp of the
          company's website and the automation of critical business processes.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          The most valuable lessons I gained from this internship, which I will
          carry into future professional roles, include:
        </p>
        <div className="mb-6 grid grid-cols-1 gap-6 rounded-md bg-bgContrast p-6 text-lg text-text shadow-md md:grid-cols-2">
          <ul className="space-y-4">
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
          </ul>

          <ul className="space-y-4">
            <li className="flex items-center">
              <CheckCircleIcon className="mr-4 inline-block h-5 w-5 text-text" />
              Automating business operations for improved efficiency.
            </li>
            <li className="flex items-center">
              <UserGroupIcon className="mr-4 inline-block h-5 w-5 text-text" />
              Enhancing professional communication and project management
              skills.
            </li>
            <li className="flex items-center">
              <LightBulbIcon className="mr-4 inline-block h-5 w-5 text-text" />
              Developing innovative solutions for business challenges.
            </li>
          </ul>
        </div>

        <p className="text-left text-lg text-text">
          In this report, I will reflect on the projects I worked on, the skills
          I developed, and how this internship contributed to my growth as both
          a developer and a business analyst. My experience at BoscoBoys has
          been integral in shaping my future career goals, and I look forward to
          applying these learnings in future roles.
        </p>
      </section>

      {/* Images Section */}
      <section className="mb-20">
        <div className="mx-auto flex max-w-3xl justify-between gap-10">
          {/* Image 1 */}
          <div className="flex flex-col items-center">
            <img
              src={image1}
              alt="A snapshot of the development process"
              className="h-80 w-80 rounded-md object-cover shadow-md"
            />
            <p className="mt-4 text-center text-base text-text">
              Me in front of the headquarters on my last day at BoscoBoys
              Distributors.
            </p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center">
            <img
              src={image2}
              alt="Team collaboration during the project"
              className="h-80 w-80 rounded-md object-cover shadow-md"
            />
            <p className="mt-4 text-center text-base text-text">
              My workspace while working on responsive design for the newly
              revamped website.
            </p>
          </div>
        </div>
      </section>

      {/* Employer Information */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          BoscoBoys Distributors: Connecting Businesses, Bridging Distances
        </h2>

        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          BoscoBoys Distributors, founded in 1998, is a family-owned logistics
          and distribution company headquartered in Toronto, Ontario. The
          company initially focused on newspaper distribution but has since
          expanded its offerings to become a full-service logistics provider,
          including freight shipping, warehousing, and supply chain management.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          With a commitment to technological innovation, BoscoBoys leverages
          cutting-edge solutions in route optimization, database management, and
          automation to improve operational efficiency. The company's IT
          infrastructure integrates database management systems and advanced
          algorithms to streamline processes and reduce manual labor, aligning
          with modern computing science principles.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          BoscoBoys prides itself on a culture of integrity and innovation,
          driven by a strong leadership team led by Founder & CEO Franklin
          Hamilton Donbosco. Headquartered in the heart of Toronto, the company
          has remained dedicated to maintaining a balance between growth and
          customer-centric values.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          "Innovation and integrity are at the heart of what we do. Every
          client, whether a small business or a large corporation, is a
          stakeholder in our success." – Franklin Hamilton Donbosco, Founder &
          CEO.
        </p>
      </section>

      {/* Job Description */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Responsibilities, Technologies, and Impact at BoscoBoys
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          As a Fullstack Developer & Business Analyst Intern, I was responsible
          for a diverse range of tasks that required both technical proficiency
          and business acumen. One of my primary responsibilities was leading
          the full revamp of the company’s website. This involved managing the
          project from design to development, ensuring both robustness and an
          enhanced user experience.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          I collaborated closely with the CEO, CFO, CTO, and other key
          stakeholders to gather business requirements and feedback from end
          users. This required not only technical skills but also effective
          communication and project management abilities. I led teams to ensure
          efficient execution and applied structured methodologies, which helped
          streamline the development process.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          One of the most interesting aspects of my role was developing a custom
          payroll system that automated manual processes. This significantly
          improved accuracy and reduced overhead for the company, increasing
          payroll processing efficiency by 87.5%. Additionally, I developed the
          Routeview system for newspaper distributors, a unique tool that
          optimized delivery routes and allowed for customer-specific requests,
          greatly enhancing operational efficiency and user satisfaction.
        </p>

        {/* Web Apps Images Section */}
        <section className="my-6">
          <div className="flex justify-between gap-14 px-5">
            {/* Web App 1 */}
            <div className="flex flex-col items-center">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <a
                  href="https://www.boscoboys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image4}
                    alt="Web App 1 Interface"
                    className="h-full w-full rounded-md object-cover shadow-md transition-all duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <p className="mt-8 text-center text-base text-text">
                The newly revamped website for BoscoBoys Distributors!
                (Currently in testing; deployment soon.)
              </p>
            </div>

            {/* Web App 2 */}
            <div className="flex flex-col items-center">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <a
                  href="https://bbd-disperse.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image3}
                    alt="Web App 1 Interface"
                    className="h-full w-full rounded-md object-cover shadow-md transition-all duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <p className="mt-8 text-center text-base text-text">
                Disperse, a custom payroll app for newspaper distribution.
              </p>
            </div>
          </div>
        </section>

        <p className="mb-4 text-left text-lg text-text">
          The role required balancing technical development with business
          analysis. Understanding both the architecture and the business
          implications of decisions helped me deliver more value to the company
          and its stakeholders. During my internship at BoscoBoys, I gained
          hands-on experience with a wide range of technologies and tools:
        </p>

        <div className="mb-4 flex flex-col rounded-md bg-bgContrast p-6 text-lg shadow-md">
          <ul className="flex space-x-6">
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

        <div className="mb-4 grid grid-cols-1 rounded-md bg-bgContrast p-6 shadow-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text">
              Website Development
            </h3>
            <ul className="mt-2 list-none text-lg text-text">
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

          <div className=" ">
            <h3 className="mb-4 text-xl font-semibold text-text">
              Database & Cloud
            </h3>
            <ul className="mt-2 list-none text-lg text-text">
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

          <div className=" ">
            <h3 className="mb-4 text-xl font-semibold text-text">
              Programming Languages
            </h3>
            <ul className="mt-2 list-none text-lg text-text">
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

          <div className=" ">
            <h3 className="mb-4 text-xl font-semibold text-text">
              Version Control/Project Management
            </h3>
            <ul className="mt-2 list-none text-lg text-text">
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

          <div className=" ">
            <h3 className="mb-4 text-xl font-semibold text-text">
              Collaboration & Productivity
            </h3>
            <ul className="mt-2 list-none text-lg text-text">
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
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Goals, Challenges, and Achievements
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          Throughout my internship, I set out to achieve specific goals that
          would push me to grow both technically and professionally. Each goal
          presented its own set of challenges, ultimately leading to significant
          achievements that helped shape my overall experience. You can expand
          each goal below to read more deeply about the challenges I faced, the
          skills I developed, and the outcomes achieved.
        </p>
        <div>
          {goals.map((goal, index) => (
            <div key={index}>
              <button
                onClick={() => handleToggleGoal(index)}
                className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold transition-all duration-300 hover:text-primary"
                aria-expanded={expandedGoals[index]}
                aria-controls={`goal-details-${index}`}
              >
                <span>{goal.title}</span>
                <div className="flex items-center">
                  <span
                    className={`transform transition-transform duration-300 ${
                      expandedGoals[index] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>

              <div
                id={`goal-details-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedGoals[index]
                    ? "max-h-screen translate-y-0 opacity-100"
                    : "max-h-0 translate-y-4 opacity-0"
                }`}
              >
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-primary">
                    Goal Description:
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {goal.description}
                  </p>

                  {goal.challenges && (
                    <>
                      <h3 className="mt-2 text-lg font-semibold text-primary">
                        Goal Challenges:
                      </h3>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                        {goal.challenges}
                      </p>
                    </>
                  )}

                  <h3 className="mt-2 text-lg font-semibold text-primary">
                    Skills Developed:
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {goal.skills}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-primary">
                    Results:
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {goal.results}
                  </p>
                </div>
              </div>
              {/* Divider between goals */}
              {index < goals.length - 1 && (
                <hr className="my-4 border-bgContrast" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Reflections on Growth and Future Aspirations
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          My internship at BoscoBoys was not just an opportunity to apply what I
          had learned—it was an environment that challenged me to grow,
          innovate, and contribute in meaningful ways. Through projects like
          revamping the website and automating key business processes, I made
          tangible improvements that enhanced the company's operational
          efficiency. These accomplishments helped me develop a deeper
          understanding of how technology can drive business success.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          One of the most valuable aspects of this experience was the blend of
          technical development and business analysis. I strengthened my ability
          to balance coding with strategic thinking, ensuring that every
          technical solution aligned with business goals. Whether optimizing
          databases, improving payroll systems, or enhancing customer-facing
          interfaces, I consistently aimed to deliver solutions that would have
          lasting value for the company.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          The skills I honed in fullstack development, database management, and
          process automation have not only boosted my confidence as a developer
          but have also prepared me for future roles that require a strong
          balance of technical and business acumen. This experience has shaped
          my professional identity, reinforcing my passion for creating
          impactful, user-centered technology solutions.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          As I move forward, I am excited to build on these learnings, applying
          both the technical expertise and collaborative skills I developed at
          BoscoBoys to future challenges. This internship has laid a solid
          foundation for my career, and I look forward to contributing to future
          projects with the same level of enthusiasm and dedication.
        </p>
      </section>

      {/* Acknowledgments */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Gratitude & Mentorship: The People Behind My Growth
        </h2>
        <hr className="mb-4 border-bgContrast" />

        {/* Franklin Hamilton Donbosco */}
        <p className="mb-4 text-left text-lg text-text">
          I would like to extend my heartfelt gratitude to Franklin Hamilton
          Donbosco, Founder and CEO of BoscoBoys Distributors, for giving me the
          opportunity to prove myself and for being an exceptional mentor
          throughout my internship. He consistently demonstrated remarkable
          leadership qualities—balancing vision, empathy, and decisiveness—that
          made him a leader I greatly admired. His unwavering support, guidance,
          and encouragement not only helped me grow as a professional but also
          fostered a sense of confidence in my own abilities. Over time, he
          became someone I deeply looked up to, setting a high standard of
          leadership and excellence that I will carry with me into my future
          career.
        </p>

        {/* Infenta Hamilton */}
        <p className="mb-4 text-left text-lg text-text">
          I am deeply thankful to Infenta Hamilton, CFO, for her unwavering
          support, guidance, and warmth throughout my time at BoscoBoys. Not
          only did she offer invaluable insights into business operations and
          strategy, but she also fostered a comforting and welcoming
          environment, truly embodying a nurturing presence within the company.
          Her support made a significant impact on both my professional and
          personal growth, making it a pleasure to work with her.
        </p>

        {/* Ragul Ponniah */}
        <p className="mb-4 text-left text-lg text-text">
          A special thanks to Ragul Ponniah, CTO, for consistently challenging
          me to push the boundaries of my technical abilities. His deep
          technical expertise and encouragement to take on complex tasks helped
          me develop new skills and grow as a software engineer. Ragul’s
          mentorship and drive for innovation were instrumental in shaping my
          understanding of the field and expanding my problem-solving abilities.
        </p>

        {/* Colleagues */}
        <p className="mb-4 text-left text-lg text-text">
          I would also like to acknowledge my colleagues Lovepreet, Pratham, and
          Yukta for being fantastic teammates. Their positivity, collaboration,
          and camaraderie made the workplace enjoyable and productive, fostering
          a truly supportive work environment that I looked forward to every
          day.
        </p>

        {/* Entire BoscoBoys Team */}
        <p className="mb-4 text-left text-lg text-text">
          Lastly, to the entire BoscoBoys team, your collective dedication,
          professionalism, and support made this experience truly unforgettable.
          The lessons I learned from many of you have had a profound impact on
          my growth, both professionally and personally, and will undoubtedly
          shape my future career.
        </p>
      </section>
    </div>
  );
};

export default S24BoscoBoysDistributors;
