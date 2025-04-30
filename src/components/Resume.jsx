import '../Resume.css';

const Resume = () => {
    return (
      <div className="resume-container">
        <embed src="EricMamaniPortfolio.pdf" type="application/pdf" width="100%" height="710px">
        </embed>
        <a href="EricMamaniPortfolio.pdf" target="_blank" rel="noopener noreferrer" download>
          <button>Download Resume</button>
        </a>
        <p>Click the button above to download my resume.</p>
      </div>
    );
  };
  
  export default Resume;