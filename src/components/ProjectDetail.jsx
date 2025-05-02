import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt,
  faExternalLinkAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

// Import projects data from central store
import projects, { formatDate, getStatusColor } from "../data/projects";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // If project is not found, navigate back to projects
    if (!project && projectId) {
      navigate("/");
    }
  }, [project, projectId, navigate]);

  if (!project) {
    return null;
  }

  // Find related projects (up to 3) that use similar technologies
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .map((p) => {
      // Calculate how many technologies match
      const matchingTechs = p.technologies.filter((tech) =>
        project.technologies.includes(tech),
      ).length;
      return { ...p, matchingTechs };
    })
    .sort((a, b) => b.matchingTechs - a.matchingTechs)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-bg pb-16 pt-20 dark:bg-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to projects navigation */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary-dark dark:hover:text-primary-dark/80"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Home</span>
        </Link>
        {/* Project header */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-card-dark">
          {/* Project image */}
          <div className="relative h-64 w-full sm:h-80 md:h-96">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(project.state)}`}
                >
                  {project.state}
                </span>
                <span className="text-sm text-white/90">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {formatDate(project.date)}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                {project.title}
              </h1>
            </div>
          </div>
          {/* Project content */}
          <div className="p-6">
            {/* Description */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-text dark:text-text-dark">
                Project Overview
              </h2>
              <p className="leading-relaxed text-text/80 dark:text-text-dark/80">
                {project.description}
              </p>
            </div>
            {/* Technologies */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-text dark:text-text-dark">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm text-text dark:bg-secondary-dark dark:text-text-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Visit project */}
            {project.link && (
              <div className="mb-8 flex justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-center font-medium text-white transition-all hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90"
                >
                  <FontAwesomeIcon
                    icon={project.github ? faGithub : faExternalLinkAlt}
                  />
                  {project.github ? "View Code on GitHub" : "Visit Project"}
                </a>
              </div>
            )}
          </div>
        </div>
        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-text dark:text-text-dark">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="group flex flex-col overflow-hidden rounded-lg border border-divider bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-divider-dark dark:bg-card-dark"
                >
                  {/* Image with status badge */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(relatedProject.state)}`}
                      >
                        {relatedProject.state}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-2 line-clamp-1 text-lg font-bold text-text dark:text-text-dark">
                      {relatedProject.title}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-sm text-text/70 dark:text-text-dark/70">
                      {relatedProject.description}
                    </p>
                    {/* Tech tags */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1">
                        {relatedProject.technologies
                          .slice(0, 3)
                          .map((tech, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-secondary/70 px-2 py-0.5 text-xs text-text dark:bg-secondary-dark/70 dark:text-text-dark"
                            >
                              {tech}
                            </span>
                          ))}
                        {relatedProject.technologies.length > 3 && (
                          <span className="rounded-full bg-secondary/70 px-2 py-0.5 text-xs text-text dark:bg-secondary-dark/70 dark:text-text-dark">
                            +{relatedProject.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
