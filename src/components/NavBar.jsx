import React from 'react';
import '../NavBar.css'; // Assuming you have a CSS file for styling
import "./About.jsx";
import About from './About.jsx';
import Experience from './experience.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';


const Navbar = () => {
    const [view, setView] = React.useState('home');

    const renderContent = () => {
        switch (view) {
            case 'about':
                return <h3 className="content">{<About />}</h3>;
            case 'experience':
                return <h3 className="content">{<Experience />}</h3>;
            case 'projects':
                return <h3 className="content">My Projects</h3>;
            case 'skills':
                return <h3 className="content">Skills</h3>;
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
            <ul>
                <li><button onClick = {() => setView("about")}>About</button></li>
                <li><button onClick = {() => setView("experience")}>Experience</button></li>
                <li><button onClick = {() => setView("projects")}>Projects</button></li>
                <li><button onClick = {() => setView("skills")}>Skills</button></li>
                <li><button onClick = {() => setView("resume")}>Resume</button></li>
                <li><button onClick = {() => setView("contact")}>Contact</button></li>
            </ul>
        </nav>
        <div className = "display-area">
            {renderContent()}
        </div>
    </>
  );
};

export default Navbar;
