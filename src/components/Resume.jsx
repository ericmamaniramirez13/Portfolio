import './Resume.css';

const Resume = () => {
    return (
      <div className="resume-container">
        <iframe 
          src="EricMamaniPortfolio.pdf"
          type = "application/pdf" 
          width="100%" 
          height="710px"
          title="Eric Mamani Resume"
        ></iframe>
        <a href="EricMamaniPortfolio.pdf" target="_blank" rel="noopener noreferrer" download>
          <button>Download Resume</button>
        </a>

      </div>
    );
  };
  
  export default Resume;
  