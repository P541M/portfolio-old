import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt,
  faExternalLinkAlt,
  faSearch,
  faTags,
  faFilter,
  faInfoCircle,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

// Import all project images
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
import pimg14 from "../assets/pimg14.PNG";

// Project data
const projects = [
  {
    id: "disperse-boscoboys-distributors",
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
    id: "boscoboys-distributors",
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
    id: "waffles-or-pancakes",
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
    id: "password-generator",
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
    id: "verbatim",
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
    id: "echo",
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
    id: "vault",
    title: "V/\\ULT",
    description:
      "V/\\ULT is a cryptocurrency tracker designed to display information about the top six cryptocurrencies. As the main developer, I built both the frontend and backend using React, JavaScript, and Node.js, integrating various APIs to fetch real-time crypto data. The application features an about section and showcases yearly price changes, providing users with insightful financial information. Developed over two months, V/\\ULT enhanced my proficiency in API integration and full stack development. Future enhancements will focus on improving the visual appeal and polishing the user interface to offer a more engaging and informative experience.",
    state: "Discontinued",
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
    id: "portfolio-v1",
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
    id: "portfolio-v2",
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
    id: "evoria",
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
    id: "savory-sips",
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
    id: "metric-imperial",
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
    id: "extractify",
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
  {
    id: "kivo",
    title: "Kivo",
    description:
      "Kivo is an academic task management system designed to help students organize coursework, track assignments, and manage deadlines efficiently. As the lead developer, I created this full-stack application using Next.js, React, TypeScript, and Firebase for the backend. The application features automatic extraction of assignment details from uploaded course outlines using PDF parsing, semester management with intuitive organization of courses and assessments, calendar integration with exportable ICS files, and comprehensive deadline tracking with visual indicators for upcoming and overdue tasks. I implemented a robust authentication system with both email/password and Google authentication options, designed a clean, responsive UI with Tailwind CSS, and created a scalable Firebase architecture for secure data storage. This project significantly enhanced my skills in Next.js API routes, Firebase integration, PDF parsing, and building complex user interfaces with state management.",
    state: "In Development",
    link: "https://kivo-academic.vercel.app/",
    image: pimg14, // You'll need to add this image to your assets
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "Tailwind CSS",
      "PDF Parsing",
      "ICS Generation",
    ],
    date: "2025-02",
    github: false,
  },
];

const ProjectsComponent = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    status: "",
    tech: [],
  });
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const location = useLocation();

  // Reset filters when navigating back to projects from a project detail page
  useEffect(() => {
    if (location.pathname === "/") {
      // Optional: only reset if coming from a project page
      const comingFromProjectPage = location.state?.from === "project";
      if (comingFromProjectPage) {
        setSearchTerm("");
        setActiveFilters({ status: "", tech: [] });
      }
    }
  }, [location]);

  // Format date helper
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-").map(Number);
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

  // Sort by date (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date.replace("-", "/"));
    const dateB = new Date(b.date.replace("-", "/"));
    return dateB - dateA;
  });

  // Get all unique technologies and statuses
  const allTechnologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort();
  const allStatuses = [
    ...new Set(projects.map((project) => project.state)),
  ].sort();

  // Filter projects based on search and filters
  const filteredProjects = sortedProjects.filter((project) => {
    // Search filter
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    // Status filter
    const matchesStatus =
      activeFilters.status === "" || project.state === activeFilters.status;

    // Tech filter
    const matchesTech =
      activeFilters.tech.length === 0 ||
      activeFilters.tech.every((tech) => project.technologies.includes(tech));

    return matchesSearch && matchesStatus && matchesTech;
  });

  // Filter handling
  const toggleTechFilter = (tech) => {
    setActiveFilters((prev) => {
      const newTech = prev.tech.includes(tech)
        ? prev.tech.filter((t) => t !== tech)
        : [...prev.tech, tech];
      return { ...prev, tech: newTech };
    });
  };

  const setStatusFilter = (status) => {
    setActiveFilters((prev) => ({ ...prev, status }));
  };

  const clearFilters = () => {
    setActiveFilters({ status: "", tech: [] });
    setSearchTerm("");
  };

  // Status color helper
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

  // Project card component
  const ProjectCard = ({ project }) => (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-divider bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Image with status badge */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3">
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(project.state)}`}
          >
            {project.state}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <h3 className="line-clamp-1 text-lg font-bold text-text">
            {project.title}
          </h3>
          <div className="mt-1 flex items-center text-sm text-text/60">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
            <span>{formatDate(project.date)}</span>
          </div>
        </div>

        <p className="mb-3 line-clamp-2 text-sm text-text/70">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mb-4 mt-auto">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full bg-secondary/70 px-2 py-0.5 text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-full bg-secondary/70 px-2 py-0.5 text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
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
          <Link
            to={`/project/${project.id}`}
            className="rounded-lg border border-divider bg-white px-3 py-2 text-xs font-medium transition-all hover:bg-secondary/30"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
            Details
          </Link>
        </div>
      </div>
    </div>
  );

  // Filter component
  const FiltersSection = () => (
    <div className="mb-6">
      {/* Search and toggles */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-divider bg-white py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40"
          />
        </div>

        {/* Filter toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFiltersExpanded(!filtersExpanded)}
            className="flex items-center gap-1 rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-text transition-all hover:bg-secondary/80"
          >
            <FontAwesomeIcon icon={faFilter} className="text-text/70" />
            Filters
            {(activeFilters.status || activeFilters.tech.length > 0) && (
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                {activeFilters.tech.length + (activeFilters.status ? 1 : 0)}
              </span>
            )}
          </button>

          {(activeFilters.status || activeFilters.tech.length > 0) && (
            <button
              onClick={clearFilters}
              className="rounded-lg border border-divider px-3 py-2 text-sm text-text/70 hover:bg-secondary/30"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Expanded filters */}
      {filtersExpanded && (
        <div className="rounded-lg border border-divider bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-medium text-text">
              Project Status
            </h4>
            <div className="flex flex-wrap gap-2">
              {allStatuses.map((status) => (
                <button
                  key={status}
                  onClick={() =>
                    setStatusFilter(
                      activeFilters.status === status ? "" : status,
                    )
                  }
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    activeFilters.status === status
                      ? getStatusColor(status)
                      : "bg-secondary/50 text-text hover:bg-secondary"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center">
              <h4 className="text-sm font-medium text-text">Technologies</h4>
              <FontAwesomeIcon icon={faTags} className="ml-2 text-text/40" />
            </div>
            <div className="flex flex-wrap gap-2">
              {allTechnologies
                .slice(0, showAllTechnologies ? allTechnologies.length : 20)
                .map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTechFilter(tech)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      activeFilters.tech.includes(tech)
                        ? "bg-primary text-white"
                        : "bg-secondary/50 text-text hover:bg-secondary"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              {!showAllTechnologies && allTechnologies.length > 20 && (
                <button
                  onClick={() => setShowAllTechnologies(true)}
                  className="flex items-center rounded-full bg-secondary/30 px-3 py-1 text-xs text-text/70 hover:bg-secondary/50"
                >
                  +{allTechnologies.length - 20} more
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-1 h-3 w-3"
                  />
                </button>
              )}
              {showAllTechnologies && allTechnologies.length > 20 && (
                <button
                  onClick={() => setShowAllTechnologies(false)}
                  className="flex items-center rounded-full bg-secondary/30 px-3 py-1 text-xs text-text/70 hover:bg-secondary/50"
                >
                  Show less
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="ml-1 h-3 w-3"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Empty state
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4 h-16 w-16 text-text/30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="mb-2 text-lg font-medium text-text">No projects found</h3>
      <p className="text-text/60">Try adjusting your search or filters</p>
      <button
        onClick={clearFilters}
        className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
      >
        Clear all filters
      </button>
    </div>
  );

  // Main component render
  return (
    <section
      id="projects-section"
      className="section-container min-h-screen"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className="section-title">
        Projects
      </h2>

      {/* Filters */}
      <FiltersSection />

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </section>
  );
};

export default ProjectsComponent;
