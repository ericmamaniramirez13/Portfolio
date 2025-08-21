import '../components/Projects.css'
import "../GlowEffect.css"

const projects = [
  {
  title: "Chat Bot",
  description : "Integrate AI as a chat agent to some application 🚀",
  link : "https://github.com/ericmamaniramirez13/ChatBots",
  },
  {
  title: "Website Creation - WDD230",
  description : "This project was part of a class WDD-230 at BYU - Idaho 🚀",
  link : "https://ericmamaniramirez13.github.io/wdd230/chamber/index.html",
  },
  {
    title: "Sorting Visualizer",
    description : "This project helps visualize different types of sorting algorithms 🚀",
    link : "https://ericmamaniramirez13.github.io/final_project_eric_mamani/",
   },
   {
    title: "Author's Style Text Generator",
    description : "This project takes some text as input and generates text with the author's style 🚀",
    link : "https://colab.research.google.com/gist/ericmamaniramirez13/50afda4e6635bf04d8b8f6cd5c15a7a2/word_generator_with_punctuation.ipynb?fbclid=IwAR1UpalctsMCvqGV6YpOuVUkaMH5peV2Uyhs9Ulyr01omL6JqqTH-Uky7Wc#scrollTo=KpyHjSPy2CFM",
   },
   {
    title: "Math App - Team Project",
    description : "Creation of a mobile math application for math students in primary level 🚀",
    link : "https://github.com/josh-wassum/Study-Flashcards",
   },
   {
    title: "Portfolio - React Vite App",
    description : "Creation of my own portfolio with React - Vite 🚀",
    link : "https://github.com/ericmamaniramirez13/Portfolio",
   },
]

const Projects = () => {
    return (
      <section className="projects-grid">
      { projects.map((proj, x) => (
              <div className="projects-glow-card glow-card" key={x}>
                <div className="card-content">
                  <h2>{proj.title}</h2>
                  <p>{proj.description}</p>
                  <a href={proj.link} className="card-button" target='_blank' rel='noopener noreferrer'>View Project</a>
                </div>
              </div> 
                                  )
                      )
      }
    </section>
    )
}

export default Projects;