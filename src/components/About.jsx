import './About.css';
import BYUI from "../assets/BYUI_blue.svg";
import ASU from "../assets/asu.svg";
import Diploma from "../assets/Diploma.jpg";
import VisitCounter from './VisitCounter';
//import RealTimeChat from './RealTimeChat';

const About = () => {
    return (
        <div className="about">
            <h1>Eric Mamani</h1>
            {/*<h3>Software Engineer | Math Nerd</h3>*/}

            <div className='auto-type'>
                <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=635BFF&center=true&vCenter=true&width=432&lines=Software+Engineer" loading='lazy' alt="Typing SVG" />
                <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=00B8FF&center=true&vCenter=true&width=435&lines=React+%7C+Java+%7C+Python" loading='lazy' alt="Typing SVG" />
                <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=00FFA3&center=true&vCenter=true&width=435&lines=Math+Nerd+%7C+Problem+Solver" loading='lazy' alt="Typing SVG" />
                {/*<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=FF61C3&center=true&vCenter=true&width=435&lines=Lifelong+Learner" loading='lazy' alt="Typing SVG" />*/}
            </div>
            <p>I'm a Computer Science graduate and Software Engineer who enjoys building scalable applications and solving challenging problems at the intersection of math and technology.</p>
<p>This summer, I’m interning at Amazon as a Software Development Engineer</p>

            <div id="about-me">
                {/*<div className='real-chat'>
                    <RealTimeChat />
                </div>*/}
                <div className='diploma'>
                    <p>Bachelor of Science in <u>Computer Science</u></p>
                    <p>🎓 Graduated(12/2024)</p>
                    <img src={Diploma} alt="Diploma" loading="lazy" />
                </div>
                <div className="grad-info">
                    <p>Bachelor of Science in <u>Computer Science</u></p>
                    <p>🎓 Graduated(12/2024)</p>
                    <p>Brigham Young University - Idaho</p>
                    <img src = {BYUI} loading='lazy' alt='School Logo BYU-I'/>
                    <p>Bachelor of Science in <u>Mathematics</u><br/>(In progress)</p>
                    <img src = {ASU} loading='lazy' alt='ASU logo'></img>
                </div>
            </div>
            <div>
                <VisitCounter />
            </div>
        </div>
    );
}
export default About;
// This is a simple About component that provides a brief introduction about the developer.