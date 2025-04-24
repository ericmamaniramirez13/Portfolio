import React from 'react';
import '../NavBar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
    const [view, setView] = React.useState('home');

    const renderContent = () => {
        switch (view) {
            case 'home':
                return <h1 className="content">Welcome to Eric's Portfolio</h1>;
            case 'about':
                return <h1 className="content">About Me</h1>;
            case 'projects':
                return <h1 className="content">My Projects</h1>;
            case 'contact':
                return <h1 className="content">Contact Me</h1>;
            default:
                return <h1 className="content">Welcome to Eric's Portfolio</h1>;
        }
    }

  return (
    <>
        <nav className="navbar">
            <ul>
                <li><button onClick = {() => setView("home")}>Home</button></li>
                <li><button onClick = {() => setView("about")}>About</button></li>
                <li><button onClick = {() => setView("projects")}>Projects</button></li>
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
