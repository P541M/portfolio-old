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
// Import projects data from central store
import projects, { formatDate, getStatusColor } from "../data/projects";

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

  // Project card component
  const ProjectCard = ({ project }) => (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-divider bg-white shadow-sm transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
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
                className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        {/* Actions */}
        <div className="flex gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-primary py-2 text-center text-xs font-medium text-white transition-all duration-300 hover:bg-primary/90 group-hover:shadow-md"
            >
              <FontAwesomeIcon
                icon={project.github ? faGithub : faExternalLinkAlt}
                className="mr-1"
              />
              {project.github ? "View Code" : "Visit Project"}
            </a>
          )}
          <Link
            to={`/project/${project.id}`}
            className={`${project.link ? "" : "flex-1"} rounded-lg border border-divider px-3 py-2 text-center text-xs font-medium transition-all duration-300 hover:bg-primary/5 group-hover:shadow-md`}
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
          {filteredProjects.map((project) => (
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
