import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    name: "Smart Bus Ride System",
    description: "A system designed to show bus seat availability and crowd information before the bus arrives.",
    technology: "HTML • CSS • JavaScript",
    icon: "🚌"
  },
  {
    name: "Retail Sales Forecasting",
    description: "A project that analyzes retail sales data and predicts future sales.",
    technology: "Python • Data Science",
    icon: "📊"
  },
  {
    name: "Student Skill Hub",
    description: "A React website where students can showcase their skills, learning and projects.",
    technology: "React • CSS",
    icon: "🎓"
  },
  {
    name: "Portfolio Website",
    description: "A personal website to present learning, projects and contact information.",
    technology: "HTML • CSS • JavaScript",
    icon: "💻"
  }
];

function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="section section-blue">
      <div className="section-heading">
        <p className="eyebrow">MY WORK</p>
        <h2>Projects</h2>
        <p>A few projects from my learning journey.</p>
      </div>

      <div className="projects-grid">
        {projects.slice(0, showMore ? 4 : 2).map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <button className="primary-btn show-more" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}

export default Projects;