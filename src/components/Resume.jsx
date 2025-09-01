import './Resume.css';

const Resume = () => {
    return (
      <div className="resume-container">
        <div className="resume-display">
          <object 
            data="EricMamaniPortfolio.pdf#toolbar=0&navpanes=0&scrollbar=0" 
            type="application/pdf" 
            width="100%" 
            height="653px"
          >
            <p>Your browser doesn't support PDF viewing. <a href="EricMamaniPortfolio.pdf" target="_blank">Click here to view the resume</a></p>
          </object>
        </div>
        <a href="EricMamaniPortfolio.pdf" target="_blank" rel="noopener noreferrer" download>
          <button>Download Resume</button>
        </a>
      </div>
    );
  };
  
  export default Resume;
  