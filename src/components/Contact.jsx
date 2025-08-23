import { useState } from "react";
import { addDoc, collection} from "firebase/firestore";
import GitHub from '../assets/github_logo.svg';
import LinkedIn from '../assets/linkedin_logo.svg';
import Instagram from "../assets/instagram_logo.svg"
import './Contact.css';
import {db} from "../../database/FireBaseDB"

const Contact = () => {
    const[fullName, setFullName] = useState("");
    const[email, setEmail] = useState("");
    const[recruiter, setRecruiter] = useState(false);
    const[message, setMessage] = useState("");
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyBbZzpaVZKAfEGuR0M0nUeVOWH0NGND2G8",
  authDomain: "portfolio-8f36f.firebaseapp.com",
  projectId: "portfolio-8f36f",
  storageBucket: "portfolio-8f36f.firebasestorage.app",
  messagingSenderId: "137698751582",
  appId: "1:137698751582:web:01d365cd432e744eae30cf",
  measurementId: "G-G8SPD0Q3PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);*/
const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const docRef = await addDoc(collection(db, "contact"), {
            fullName: fullName,
            email: email,
            message: message,
            recruiter: recruiter,
        });
        alert("Message sent! 🚀");
        console.log("Document written widh id: ", docRef.id);
        setFullName("")
        setEmail("")
        setRecruiter(false)
        setMessage("")
    } catch (e) {
        console.error("Error adding document: ", e)
    }
};

    return (
        <section className="contact-container">
            <div className="contact-glow-card glow-card">
                <div className="contact-content">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="full-name">Name: </label>
                            <input type="text" id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input id="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                        </div>
                        <div>
                            <label htmlFor="recruiter-check">Are you a Recruiter? : </label>
                            <input type="checkbox" id="recruiter-check" checked={recruiter} onChange={(e) => setRecruiter(e.target.checked)}/>
                        </div>
                        <div>
                            <label htmlFor="contact-message">Message: </label>
                            <textarea id="contact-message" required value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <div className="contact-submit-button">
                            <button type="submit">SUBMIT</button>
                        </div>
                        <div className="contact-logos">
                            <a href='https://github.com/ericmamaniramirez13' target='_blank' rel="noopener noreferrer">
                                <img src = {GitHub} />
                            </a>
                            <a href='https://www.instagram.com/ericmamani13/' target='_blank' rel="noopener noreferrer">
                                <img src = {Instagram} />
                            </a>
                            <a href='https://www.linkedin.com/in/ericmamani/' target='_blank' rel="noopener noreferrer">
                                <img src = {LinkedIn} />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;
