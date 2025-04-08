import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import pimg from "../assets/pimg.PNG";
import pimg2 from "../assets/pimg2.PNG";
import pimg3 from "../assets/pimg3.PNG";
import pimg4 from "../assets/pimg4.PNG";
import pimg5 from "../assets/pimg5.PNG";
import pimg6 from "../assets/pimg6.PNG";
import pimg7 from "../assets/pimg7.PNG";
import pimg8 from "../assets/pimg8.PNG";
import pimg9 from "../assets/pimg9.PNG";
import pimg10 from "../assets/pimg10.PNG";
import pimg11 from "../assets/pimg11.PNG";
import pimg12 from "../assets/pimg12.PNG";
import pimg13 from "../assets/pimg13.PNG";

const projects = [
  {
    title: "Disperse | BoscoBoys Distributors",
    description:
      "Disperse | BoscoBoys Distributors is a payroll application I developed to accelerate payroll processing by automating calculations and minimizing human error. As the main software engineer, I independently handled both frontend and backend development using React, Node.js, and Express.js, integrating MongoDB for data management. The application reduced payroll financialization time by 75%, earning praise from key stakeholders including the CFO, CEO, and CTO. Completed within one month, this project enhanced my skills in data management and CRUD operations. Future enhancements include increased security measures and transitioning the app into a subscription-based SaaS model.",
    state: "Deployed",
    link: "https://bbd-disperse.vercel.app/",
    image: pimg12,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "JWT (jsonwebtoken)",
      "Bcrypt.js",
      "PDFKit",
      "Prettier",
      "ESLint",
    ],
    date: "2024-08",
    github: false,
  },
  {
    title: "BoscoBoys Distributors",
    description:
      "I undertook the revamp of the BoscoBoys Distributors website to modernize its design, correct spelling errors, and update outdated content. As the lead full stack developer, I managed both frontend and backend development, working independently over 2.5 months. Collaborating with the CEO and CFO for content, I overcame design challenges by drawing inspiration from contemporary websites. The redesigned site successfully increased traffic and received positive feedback from all stakeholders. Through this project, I enhanced my full stack development skills, website maintenance, and implementation of multilingual translations. Future plans include improving responsiveness to ensure optimal user experience across all devices.",
    state: "In Testing",
    link: "https://boscoboys.com/",
    image: pimg6,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "i18next",
      "Nodemailer",
      "Helmet",
      "ESLint",
      "Prettier",
      "Jest",
    ],
    date: "2024-06",
    github: false,
  },
  {
    title: "Waffles Or Pancakes?!",
    description:
      "Waffles Or Pancakes?! is a fun interactive web application designed to settle the age-old debate by allowing users to vote for their preference between pancakes and waffles. Developed in collaboration with Emily Chang, who handled frontend development and visual design, I managed the backend using React and Node.js. Within a week, we built a platform where users could cast their votes, which were then tallied in real-time. This project enhanced my teamwork skills and proficiency in version control through branch merging. Future improvements include making the site more responsive, adding dynamic features, and integrating social sharing options like Twitter to increase user engagement.",
    state: "Deployed",
    link: "https://waffles-or-pancakes-frontend.vercel.app/",
    image: pimg9,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "Prettier",
      "ESLint",
      "Jest",
    ],
    date: "2024-07",
    github: false,
  },
  {
    title: "Password Generator",
    description:
      "The Password Generator is a robust application designed to help users create secure passwords effortlessly. As the main developer, I handled both frontend and backend development using Angular and Node.js. A key feature of the app allows users to generate strong passwords and have them sent directly to their email via Nodemailer. Completed in one month, this project enhanced my skills in integrating email sending technologies and full stack development. Although the project is now discontinued, future enhancements would focus on securing the backend API to ensure user data protection and prevent unauthorized access.",
    state: "Discontinued",
    link: "https://github.com/P541M/password-generator",
    image: pimg10,
    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "TypeScript",
      "Nodemailer",
      "Prettier",
      "ESLint",
    ],
    date: "2024-08",
    github: true,
  },
  {
    title: "Verbatim",
    description:
      "Verbatim is a quote collection platform designed to showcase inspirational quotes from influential individuals in my life. As the main developer, I built both the frontend and backend using React, Node.js, and Express.js, integrating MongoDB for efficient data management. The application allows users to view and like their favorite quotes, as well as submit new ones for display. Developed within a week, Verbatim sharpened my skills in data handling and backend framework utilization. Although the project is discontinued, future enhancements would focus on refining the UI and improving the overall aesthetic to provide a more engaging user experience.",
    state: "Discontinued",
    link: "https://github.com/P541M/verbatim",
    image: pimg8,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "Font Awesome",
      "Prettier",
    ],
    date: "2024-07",
    github: true,
  },
  {
    title: "Echo",
    description:
      "Echo is an anonymous social platform where users can share their thoughts, with all posts automatically deleted after 24 hours. As the main developer, I developed both frontend and backend using React, Node.js, and Express.js, incorporating Firebase for real-time data handling. Over four months, I focused on creating a user-friendly interface and ensuring secure data management. Echo provided valuable insights into visualizing social media functionalities and effective data handling practices. Although development has been paused, future enhancements would aim to improve the visual UI, scale the application for a larger user base, and enhance marketing strategies to reach more users.",
    state: "Discontinued",
    link: "https://github.com/P541M/fresh-start",
    image: pimg,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Firebase",
      "Tailwind CSS",
      "Axios",
      "Prettier",
    ],
    date: "2024-05",
    github: true,
  },
  {
    title: "V/\\ULT",
    description:
      "V/\\ULT is a cryptocurrency tracker designed to display information about the top six cryptocurrencies. As the main developer, I built both the frontend and backend using React, JavaScript, and Node.js, integrating various APIs to fetch real-time crypto data. The application features an about section and showcases yearly price changes, providing users with insightful financial information. Developed over two months, V/\\ULT enhanced my proficiency in API integration and full stack development. Future enhancements will focus on improving the visual appeal and polishing the user interface to offer a more engaging and informative experience.",
    state: "Deployed",
    link: "https://p541m.github.io/crypto-tracker/",
    image: pimg7,
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Chart.js",
      "React Router",
      "Axios",
      "Tailwind CSS",
      "Prettier",
    ],
    date: "2024-07",
    github: false,
  },
  {
    title: "Personal Portfolio V1",
    description:
      "Personal Portfolio V1 marks my initial foray into web development, created to showcase my projects and skills. As the main developer, I built the frontend using React and Tailwind CSS, despite having little prior experience. Over just two days, I followed tutorials to guide my learning process, enabling me to construct a functional and visually appealing portfolio. This project not only allowed me to display my work effectively but also ignited my passion for frontend development. Personal Portfolio V1 served as a foundational step, establishing my proficiency with React and Tailwind, and setting the stage for future, more advanced projects.",
    state: "Deployed",
    link: "https://p541m.github.io/personal-portfolio/",
    image: pimg4,
    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "Tailwind CSS",
      "React Icons",
      "Prettier",
      "ESLint",
    ],
    date: "2024-05",
    github: false,
  },
  {
    title: "Personal Portfolio V2",
    description:
      "Personal Portfolio V2 is a minimalist redesign of my original portfolio, aimed at creating a clean and streamlined online presence. As the main frontend developer, I utilized React, JavaScript, HTML, and CSS to achieve a simple yet effective design within a single day. This project allowed me to explore minimalist design principles, focusing on essential elements to enhance user experience without unnecessary complexity. Although discontinued, future improvements would involve experimenting with different color palettes and further refining the design to better align with minimalist aesthetics, ensuring a visually appealing and user-friendly portfolio.",
    state: "Deployed",
    link: "https://p541m.github.io/personal-website/",
    image: pimg5,
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React Icons",
      "Prettier",
      "ESLint",
    ],
    date: "2024-06",
    github: false,
  },
  {
    title: "Evoria",
    description:
      "Evoria is a personalized fragrance selection platform driven by my passion for scents. As the main frontend developer, I built the application using React, JavaScript, HTML, and CSS, allowing users to select fragrances for their loved ones and receive personalized letters explaining their choices. Over two months, Evoria provided a unique, customized experience that resonated deeply with users, who appreciated its personal touch. While the project was relatively straightforward due to my existing frontend skills, future enhancements would include refining the UI, organizing user stories across multiple pages, and further personalizing the user experience to maintain its heartfelt appeal.",
    state: "Deployed",
    link: "https://p541m.github.io/evoria/",
    image: pimg11,
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React Icons",
      "Prettier",
      "ESLint",
    ],
    date: "2024-11",
    github: false,
  },
  {
    title: "Savory Sips",
    description:
      "Savory Sips is a personal sommelier application developed to recommend wines based on users' chosen dishes. As the main frontend developer, I utilized React, JavaScript, HTML, and CSS to create an intuitive interface where users can input a dish and receive tailored wine suggestions. Developed over two weeks, the project involved integrating external APIs to fetch wine recommendations, enhancing my skills in API utilization and frontend design. Future enhancements include removing API usage limits, further polishing the user interface, and revamping the overall page style to provide a more refined and user-friendly experience.",
    state: "Deployed",
    link: "https://p541m.github.io/savory-sips/",
    image: pimg2,
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "React Icons",
      "gh-pages",
    ],
    date: "2024-05",
    github: false,
  },
  {
    title: "Metric x Imperial",
    description:
      "Metric x Imperial is my inaugural project, designed as a simple conversion tool to translate measurements between metric and imperial units. As the sole developer, I crafted the frontend using HTML, CSS, and JavaScript, overcoming initial challenges by leveraging documentation and ChatGPT assistance. Completed in one week, this project was shared on LinkedIn, garnering constructive feedback and significantly enhancing my frontend development skills. Future enhancements involve expanding the range of measurements available, overhauling the user interface, and potentially migrating the project to React for improved functionality and scalability.",
    state: "Deployed",
    link: "https://p541m.github.io/metric-imperial-converter/",
    image: pimg3,
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "2023-06",
    github: false,
  },
  {
    title: "Extractify",
    description:
      "Extractify is a streamlined code extraction tool I developed to simplify preparing code for AI analysis. As the lead developer, I built this full-stack application using Next.js and React with Firebase for data persistence, integrating GitHub OAuth for secure repository access. The application enables users to extract properly formatted code from GitHub repositories or process local files entirely within the browser, ensuring privacy and security. Key features include repository history management with starring capabilities, branch-specific extraction, and a responsive design for all devices. This project strengthened my skills in OAuth implementation, Firebase database management, and client-side file processing while providing a practical solution for developers working with AI tools.",
    state: "Deployed",
    link: "https://www.extractifycode.com/",
    image: pimg13,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "OAuth",
      "Tailwind CSS",
      "GitHub API",
      "JavaScript",
      "Node.js",
      "HTML",
      "CSS",
    ],
    date: "2025-03",
    github: false,
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [isGridView, setIsGridView] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTech, setFilterTech] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [modalProject, setModalProject] = useState(null);

  // Sort projects by date (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    const [yearA, monthA] = a.date.split("-").map(Number);
    const [yearB, monthB] = b.date.split("-").map(Number);
    if (yearA !== yearB) {
      return yearB - yearA;
    }
    return monthB - monthA;
  });

  // Get all unique technologies for filter
  const allTechnologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort();

  // Filter projects based on search term, tech filter, and status
  const filteredProjects = sortedProjects.filter((project) => {
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech =
      filterTech.length === 0 ||
      filterTech.every((tech) => project.technologies.includes(tech));
    const matchesStatus = filterStatus === "" || project.state === filterStatus;
    return matchesSearch && matchesTech && matchesStatus;
  });

  const handleShowModal = (project) => {
    setModalProject(project);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTechFilterChange = (tech) => {
    setFilterTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const handleStatusFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "No Date";
    const [year, month] = dateStr.split("-").map(Number);
    if (isNaN(year) || isNaN(month) || month < 1 || month > 12 || year < 1000) {
      return "Invalid Date";
    }
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${monthNames[month - 1]} ${year}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Deployed":
        return "bg-accent text-white";
      case "In Testing":
        return "bg-yellow-500 text-white";
      case "In Development":
        return "bg-blue-500 text-white";
      case "Discontinued":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <section
      id="projects-section"
      className="section-container min-h-screen"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className="section-title">
        Projects
      </h2>
      {/* Filter and View Options */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full rounded-lg border border-divider bg-white px-4 py-2 pl-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* Status Filter */}
          <div className="w-full md:w-40">
            <select
              value={filterStatus}
              onChange={handleStatusFilterChange}
              className="w-full rounded-lg border border-divider bg-white px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">All Status</option>
              <option value="Deployed">Deployed</option>
              <option value="In Testing">In Testing</option>
              <option value="In Development">In Development</option>
              <option value="Discontinued">Discontinued</option>
            </select>
          </div>
        </div>
        {/* View Toggle */}
        <div className="flex items-center justify-end space-x-2">
          <button
            onClick={() => setIsGridView(true)}
            className={`rounded-lg p-2 ${
              isGridView ? "bg-primary text-white" : "bg-secondary text-text"
            }`}
            aria-label="Grid View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
          <button
            onClick={() => setIsGridView(false)}
            className={`rounded-lg p-2 ${
              !isGridView ? "bg-primary text-white" : "bg-secondary text-text"
            }`}
            aria-label="List View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Technology Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {allTechnologies.slice(0, 15).map((tech, index) => (
          <button
            key={index}
            onClick={() => handleTechFilterChange(tech)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              filterTech.includes(tech)
                ? "bg-primary text-white"
                : "bg-secondary text-text hover:bg-secondary/80"
            }`}
          >
            {tech}
          </button>
        ))}
        {allTechnologies.length > 15 && (
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm">
            +{allTechnologies.length - 15} more
          </span>
        )}
      </div>
      {/* Projects Display */}
      {isGridView ? (
        // Grid View
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="card group flex h-full flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3">
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(project.state)}`}
                  >
                    {project.state}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="line-clamp-1 text-lg font-bold">
                    {project.title}
                  </h3>
                </div>
                <div className="mb-3 flex items-center text-sm text-text/70">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                  <span>{formatDate(project.date)}</span>
                </div>
                <p className="mb-4 line-clamp-3 flex-grow text-sm">
                  {project.description}
                </p>
                {project.technologies && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-secondary px-2 py-0.5 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div className="mt-auto flex space-x-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-primary py-2 text-center text-xs font-medium text-white transition-all hover:bg-primary/90"
                  >
                    <FontAwesomeIcon
                      icon={project.github ? faGithub : faExternalLinkAlt}
                      className="mr-1"
                    />
                    {project.github ? "View Code" : "Visit Project"}
                  </a>
                  <button
                    onClick={() => handleShowModal(project)}
                    className="rounded-lg border border-divider bg-white px-3 py-2 text-xs font-medium transition-all hover:bg-secondary"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div className="space-y-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="card group flex flex-col overflow-hidden md:flex-row"
            >
              <div className="relative h-48 overflow-hidden md:h-auto md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
                />
                <div className="absolute right-3 top-3">
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(project.state)}`}
                  >
                    {project.state}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-text/70">
                    {formatDate(project.date)}
                  </span>
                </div>
                <p className="mb-4 line-clamp-2 text-sm">
                  {project.description}
                </p>
                {project.technologies && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 6).map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-secondary px-2 py-0.5 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-xs">
                          +{project.technologies.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div className="mt-auto flex space-x-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-primary px-4 py-2 text-center text-xs font-medium text-white transition-all hover:bg-primary/90"
                  >
                    <FontAwesomeIcon
                      icon={project.github ? faGithub : faExternalLinkAlt}
                      className="mr-1"
                    />
                    {project.github ? "View Code" : "Visit Project"}
                  </a>
                  <button
                    onClick={() => handleShowModal(project)}
                    className="rounded-lg border border-divider bg-white px-4 py-2 text-xs font-medium transition-all hover:bg-secondary"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {filteredProjects.length === 0 && (
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-4 h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mb-2 text-lg font-medium">No projects found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Project Details Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">{modalProject.title}</h3>
              <button
                onClick={handleCloseModal}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mb-4 flex justify-center">
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full rounded-lg object-contain"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div className="mb-4 flex items-center space-x-4">
              <span
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(modalProject.state)}`}
              >
                {modalProject.state}
              </span>
              <span className="flex items-center text-sm text-text/70">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                {formatDate(modalProject.date)}
              </span>
            </div>
            <div className="mb-6">
              <h4 className="mb-2 text-lg font-semibold">Description</h4>
              <p className="text-sm text-text/80">{modalProject.description}</p>
            </div>
            {modalProject.technologies && (
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-semibold">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {modalProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-secondary px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-end">
              <a
                href={modalProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary px-6 py-2 text-center font-medium text-white transition-all hover:bg-primary/90"
              >
                <FontAwesomeIcon
                  icon={modalProject.github ? faGithub : faExternalLinkAlt}
                  className="mr-2"
                />
                {modalProject.github ? "View Code on GitHub" : "Visit Project"}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
