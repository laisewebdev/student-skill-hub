function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MY STUDENT HUB 👋</p>
        <h1>Hi, I'm <span>Aani</span></h1>
        <h2>B.Sc IT Student & Future Full Stack Developer 🚀</h2>
        <p className="hero-text">
          I'm currently learning HTML, CSS, JavaScript and React.
          I enjoy learning new technologies and building useful websites.
        </p>

        <div className="hero-buttons">
          <a className="primary-btn" href="#skills">Explore Skills</a>
          <a className="secondary-btn" href="#projects">View Projects</a>
        </div>

        <div className="mini-stats">
          <div><strong>4+</strong><span>Skills Learning</span></div>
          <div><strong>4</strong><span>Projects</span></div>
          <div><strong>100%</strong><span>Learning</span></div>
        </div>
      </div>

      <div className="hero-card">
        <div className="avatar">👩‍💻</div>
        <div className="status"><span></span> Currently Learning</div>
        <h3>Learn • Build • Grow</h3>
        <p>HTML • CSS • JavaScript • React</p>
        <div className="code-box">
          <span>&lt;Student</span> <b>SkillHub</b> <span>/&gt;</span>
        </div>
      </div>
    </section>
  );
}

export default Home;