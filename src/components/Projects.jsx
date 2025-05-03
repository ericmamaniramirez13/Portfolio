

const Projects = () => {




    return (
        <section id="projects" className="projects-section">
  <h2>Projects</h2>
  
  <div className="projects-list">

    <div className="project-card">
      <h3>RideNow - Uber Clone</h3>
      <p><strong>Tech Stack:</strong> React Native, Firebase, Google Maps API</p>
      <p className="project-description">
        Built a fully functional Uber-like app allowing users to request rides, track drivers live, and handle payments securely. Integrated real-time updates using Firebase and deployed to Android devices.
      </p>
      <a href="https://youruberclone.com" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
      <a href="https://github.com/yourgithub/ridenow" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
    </div>

    <div className="project-card">
      <h3>MathMaster - Adaptive Learning Platform</h3>
      <p><strong>Tech Stack:</strong> Next.js, Prisma, TailwindCSS</p>
      <p className="project-description">
        Developed an adaptive learning system similar to Knewton, dynamically adjusting question difficulty based on user performance. Built authentication, data visualization, and admin dashboards.
      </p>
      <a href="https://mathmaster.com" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
      <a href="https://github.com/yourgithub/mathmaster" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
    </div>

  </div>
</section>
    )
}

export default Projects;