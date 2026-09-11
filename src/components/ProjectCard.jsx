function ProjectCard({ name, description, technology, icon }) {
  return (
    <article className="project-card">
      <div className="project-icon">{icon}</div>
      <p className="project-tech">{technology}</p>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href="#contact">View Project →</a>
    </article>
  );
}

export default ProjectCard;