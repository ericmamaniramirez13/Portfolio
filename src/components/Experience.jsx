import amazonLogo from '../assets/Amazon_logo.svg';
import paypalLogo from '../assets/PayPal_logo.svg';
import gmLogo from '../assets/GM_logo.svg';
import '../Experience.css';
const experiences = [
    {
      company: 'PayPal',
      logo: paypalLogo,
      role: 'Software Engineer Intern',
      time: 'Fall 2025 (Offer Extended)',
      description:
        'Will contribute to backend infrastructure and help streamline payment pipelines across scalable distributed systems.',
    },
    {
        company: 'Amazon',
        logo: amazonLogo,
        role: 'Software Engineer Intern',
        time: 'May 2025 - Present',
        description:
          "I'll work at Amazon in the store organizacion. Details are yet to be determined.",
      },
    {
      company: 'General Motors',
      logo: gmLogo,
      role: 'Software Engineer Intern',
      time: 'May 2024 – Oct 2024, Austin, TX',
      description:
        'Increased test coverage to 95% with Java + TestNG. Led full-stack development with React and Python. Agile team collaboration every sprint.',
    },
    {
        company: 'Amazon',
        logo: amazonLogo,
        role: 'Software Engineer Intern',
        time: 'May 2023 – July 2023, Tempe, AZ',
        description:
          'Developed a new UI using React, Angular, and AWS. Improved error feedback for deal validation, and implemented API integrations to automate backend checks.',
      },
  ];

const Experience = () => {
  return (
    <section className="experience-container">
      <h3>🚀 Work Experience</h3>
      {experiences.map((exp, idx) => (
        <div className="experience-card" key={idx}>
          <div className="text-section">
            <h3>{exp.role} @ {exp.company}</h3>
            <p className="exp-time">{exp.time}</p>
            {/*<p>{exp.description}</p>*/}
          </div>
          <div className="logo-section">
            <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
          </div>
        </div>
      ))}
    </section>
  );
}
export default Experience;