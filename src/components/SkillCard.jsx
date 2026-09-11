function SkillCard({ name, icon, level }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{level}</p>
      <div className="progress"><span style={{ width: level }}></span></div>
    </div>
  );
}

export default SkillCard;