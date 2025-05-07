import '../About.css';
import BYUI from "../assets/BYUI_blue.svg";
import Diploma from "../assets/Diploma.jpg";

const About = () => {
    return (
        <div className="about">
            <h1>Eric Mamani</h1>
            <h3>Software Engineer | Math Nerd</h3>

            <div className='auto-type'>
                <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=635BFF&center=true&vCenter=true&width=432&lines=Software+Engineer" loading='lazy' alt="Typing SVG" />
                <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=00B8FF&center=true&vCenter=true&width=435&lines=React+%7C+Java+%7C+Python+Developer" loading='lazy' alt="Typing SVG" />
                <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=00FFA3&center=true&vCenter=true&width=435&lines=Math+Nerd+%7C+Problem+Solver" loading='lazy' alt="Typing SVG" />
                <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=FF61C3&center=true&vCenter=true&width=435&lines=Lifelong+Learner" loading='lazy' alt="Typing SVG" />
            </div>
            <p>I'm a passionate software engineer with a strong foundation in computer science and mathematics. I love solving complex problems and building efficient solutions.</p>
            <p>Currently, I'm working as a Software Engineer Intern at Amazon, where I am gaining hands-on experience in software development and collaborating with talented teams.</p>
            <div id="about-me">
                <div className='diploma'>
                    <img src={Diploma} alt="Diploma" loading="lazy" />
                </div>
                <div className="grad-info">
                    <p>Bachelor of Science in <u>Computer Science</u></p>
                    <p>🎓 Graduated(07/2024)</p>
                    <p>Brigham Young University - Idaho</p>
                    <img src = {BYUI} loading='lazy' alt='School Logo BYU-I'/>
                </div>
            </div>
        </div>
    );
}
export default About;
// This is a simple About component that provides a brief introduction about the developer.