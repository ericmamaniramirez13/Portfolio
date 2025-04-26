import '../Resume.css';

const Resume = () => {
    return (
      <div className="resume-container">
        <object data="src/assets/EricMamaniPortfolio2025.pdf" type="application/pdf" width="100%" height="980"></object>
        <a href="src/assets/EricMamaniPortfolio2025.pdf" target="_blank" rel="noopener noreferrer" download>
          <button>Download Resume</button>
        </a>
        <p>Click the button below to download my resume.</p>
      </div>
    );
  };
  
  export default Resume;