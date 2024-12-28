import React, { useState } from "react";
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
  },
  {
    title: "Password Generator",
    description:
      "The Password Generator is a robust application designed to help users create secure passwords effortlessly. As the main developer, I handled both frontend and backend development using Angular and Node.js. A key feature of the app allows users to generate strong passwords and have them sent directly to their email via Nodemailer. Completed in one month, this project enhanced my skills in integrating email sending technologies and full stack development. Although the project is now discontinued, future enhancements would focus on securing the backend API to ensure user data protection and prevent unauthorized access.",
    state: "Discontinued",
    link: "https://github.com/P541M/password-generator-frontend",
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
  },
  {
    title: "Verbatim",
    description:
      "Verbatim is a quote collection platform designed to showcase inspirational quotes from influential individuals in my life. As the main developer, I built both the frontend and backend using React, Node.js, and Express.js, integrating MongoDB for efficient data management. The application allows users to view and like their favorite quotes, as well as submit new ones for display. Developed within a week, Verbatim sharpened my skills in data handling and backend framework utilization. Although the project is discontinued, future enhancements would focus on refining the UI and improving the overall aesthetic to provide a more engaging user experience.",
    state: "Discontinued",
    link: "https://verbatim-frontend.vercel.app/",
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
  },
  {
    title: "V/\\ULT",
    description:
      "V/\\ULT is a cryptocurrency tracker designed to display information about the top six cryptocurrencies. As the main developer, I built both the frontend and backend using React, JavaScript, and Node.js, integrating various APIs to fetch real-time crypto data. The application features an about section and showcases yearly price changes, providing users with insightful financial information. Developed over two months, V/ULT enhanced my proficiency in API integration and full stack development. Future enhancements will focus on improving the visual appeal and polishing the user interface to offer a more engaging and informative experience.",
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
  },
  {
    title: "Personal Portfolio V2",
    description:
      "Personal Portfolio V2 is a minimalist redesign of my original portfolio, aimed at creating a clean and streamlined online presence. As the main frontend developer, I utilized React, JavaScript, HTML, and CSS to achieve a simple yet effective design within a single day. This project allowed me to explore minimalist design principles, focusing on essential elements to enhance user experience without unnecessary complexity. Although discontinued, future improvements would involve experimenting with different color palettes and further refining the design to better align with minimalist aesthetics, ensuring a visually appealing and user-friendly portfolio.",
    state: "Discontinued",
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
  },
  {
    title: "Metric x Imperial",
    description:
      "Metric x Imperial is my inaugural project, designed as a simple conversion tool to translate measurements between metric and imperial units. As the sole developer, I crafted the frontend using HTML, CSS, and JavaScript, overcoming initial challenges by leveraging documentation and ChatGPT assistance. Completed in one week, this project was shared on LinkedIn, garnering constructive feedback and significantly enhancing my frontend development skills. Future enhancements involve expanding the range of measurements available, overhauling the user interface, and potentially migrating the project to React for improved functionality and scalability.",
    state: "Deployed",
    link: "https://p541m.github.io/Metric-Imperial-Converter/",
    image: pimg3,
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "2023-06",
  },
];

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({});

  const getStatusColor = (status) => {
    switch (status) {
      case "Deployed":
        return "bg-green-500";
      case "In Testing":
        return "bg-orange-500";
      case "In Development":
        return "bg-yellow-500";
      case "Paused Development":
        return "bg-blue-500";
      case "Discontinued":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleToggleProject = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "No Date Provided";

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

  const sortedProjects = [...projects].sort((a, b) => {
    const [yearA, monthA] = a.date.split("-").map(Number);
    const [yearB, monthB] = b.date.split("-").map(Number);

    if (yearA !== yearB) {
      return yearB - yearA;
    }
    return monthB - monthA;
  });

  return (
    <section
      id="projects-section"
      aria-labelledby="projects-title"
      className="min-h-screen px-6 pb-20 pt-10 text-text sm:px-8 md:px-16 lg:px-20"
    >
      <h2
        id="projects-title"
        className="mb-8 text-center text-3xl font-bold text-primary"
      >
        Projects
      </h2>

      <div>
        {sortedProjects.map((project, index) => (
          <div key={project.title}>
            <button
              onClick={() => handleToggleProject(index)}
              className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold transition-all duration-300 hover:text-primary"
              aria-expanded={expandedProjects[index]}
              aria-controls={`project-details-${index}`}
            >
              <span>{project.title}</span>
              <div className="flex items-center">
                <span className="text-md mr-2 text-primary">
                  {formatDate(project.date)}
                </span>
                <span
                  className={`transform transition-all duration-300 ${
                    expandedProjects[index] ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
            </button>

            <div
              id={`project-details-${index}`}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedProjects[index]
                  ? "max-h-screen translate-y-0 opacity-100"
                  : "max-h-0 translate-y-4 opacity-0"
              }`}
            >
              <div className="pb-4">
                <div className="mt-2 flex flex-col md:flex-row md:items-start md:space-x-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 h-auto w-full rounded-md shadow-md md:mb-0 md:w-1/2"
                  />
                  <div className="md:w-1/2">
                    <h4 className="font-semibold text-primary">
                      Project Description:
                    </h4>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                      {project.description}
                    </p>

                    <h4 className="mt-2 font-semibold text-primary">
                      Project Status:
                    </h4>
                    <div className="mb-2 flex items-center">
                      <span
                        className={`mr-2 h-2 w-2 rounded-full ${getStatusColor(
                          project.state,
                        )}`}
                      ></span>
                      <p className="text-sm italic sm:text-base md:text-base lg:text-lg xl:text-lg">
                        {project.state}
                      </p>
                    </div>

                    {project.technologies?.length > 0 && (
                      <div className="mt-2">
                        <h4 className="font-semibold text-primary">
                          Technologies Used:
                        </h4>
                        <ul className="flex flex-wrap gap-2 pt-1">
                          {project.technologies.map((tech, idx) => (
                            <li
                              key={idx}
                              className="rounded-md bg-primary px-2 py-1 text-base text-bg"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-8">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-primary px-6 py-3 text-center text-bg shadow-md transition-all duration-300 hover:scale-105 hover:bg-bgContrast"
                        aria-label={`Visit Project: ${project.title}`}
                      >
                        Visit Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {index < sortedProjects.length - 1 && (
              <hr className="my-4 border-bgContrast" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
