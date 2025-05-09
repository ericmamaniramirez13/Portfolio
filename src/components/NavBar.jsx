import { useState } from 'react';
import '../NavBar.css';
import "./About.jsx";
import About from './About.jsx';
import Experience from './Experience.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';


const Navbar = () => {
    const [view, setView] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const renderContent = () => {
        switch (view) {
            case 'about':
                return <h3 className="content">{<About />}</h3>;
            case 'experience':
                return <h3 className="content">{<Experience />}</h3>;
            case 'projects':
                return <h3 className="content">{<Projects />}</h3>;
            case 'skills':
                return <h3 className="content">{<Skills />}</h3>;
            case 'resume':
                return <h3 className="content">{<Resume />}</h3>;
            case 'contact':
                return <h3 className="content">{<Contact />}</h3>;
            default:
                return <h3 className="content">{<About />}</h3>;
        }
    }

  return (
    <>
        <nav className="navbar">
            <h1>Eric's Portfolio</h1>
            <div>
                <button className= "hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'X' : '☰'}
                </button>
            </div>
            <ul className={isOpen ? "open" : ""}>
                <li><button onClick = {() => {setView("about"); setIsOpen(false);}}>About</button></li>
                <li><button onClick = {() => {setView("experience"); setIsOpen(false);}}>Experience</button></li>
                <li><button onClick = {() => {setView("projects"); setIsOpen(false);}}>Projects</button></li>
                <li><button onClick = {() => {setView("skills"); setIsOpen(false);}}>Skills</button></li>
                <li><button onClick = {() => {setView("resume"); setIsOpen(false);}}>Resume</button></li>
                <li><button onClick = {() => {setView("contact"); setIsOpen(false);}}>Contact</button></li>
            </ul>
        </nav>
        <div className = "display-area">
            {renderContent()}
        </div>
    </>
  );
};

export default Navbar;
