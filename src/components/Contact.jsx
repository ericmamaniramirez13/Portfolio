import GitHub from '../assets/github_logo.svg';
import LinkedIn from '../assets/linkedin_logo.svg';

import '../Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h3>Contact Me</h3>
            <p>If you would like to get in touch, please reach out via email or connect with me on LinkedIn.</p>
            <p>Email: ericmamaniramirez13@gmail.com</p>
            <div className="contact-logos">
                <a href='https://github.com/ericmamaniramirez13' target='_blank' rel="noopener noreferrer">
                    <img src = {GitHub} />
                </a>
                <a href='https://www.linkedin.com/in/ericmamani/' target='_blank' rel="noopener noreferrer">
                    <img src = {LinkedIn} />
                </a>
            </div>
        </div>
    )
}
export default Contact;