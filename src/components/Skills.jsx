import SkillCard from "./SkillCard.jsx";

const skills = [
  { name: "HTML", icon: "🌐", level: "75%" },
  { name: "CSS", icon: "🎨", level: "70%" },
  { name: "JavaScript", icon: "⚡", level: "60%" },
  { name: "React", icon: "⚛️", level: "45%" }
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">WHAT I'M LEARNING</p>
        <h2>My Skills</h2>
        <p>Technologies I'm currently learning and improving.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;