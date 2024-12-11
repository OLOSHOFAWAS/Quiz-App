// import Option from "./Components/Option";
import htmlIcon from "../assets/images/html-icon.webp";
import cssIcon from "../assets/images/css-icon.webp";
import jsIcon from "../assets/images/javascript-icon.webp";
import accessIcon from "../assets/images/accessibility.webp";
import { useNavigate } from "react-router-dom";

const iconObject = {
    HTML: htmlIcon,
    CSS: cssIcon,
    JavaScript: jsIcon,
    ReactJs: accessIcon
}

const Result = () => {
    const navigate = useNavigate();

    const subject = window.sessionStorage.getItem("last_quiz");
    const score = window.sessionStorage.getItem("score");

    return (
        <main>
        <div className="flex question-header">
                <img src={iconObject[subject]} alt={"subject"} className="subject-icon" />
                <p>{subject}</p>
            </div>

            <div className="flex">
                <section className="intro">
                    <h1>Quiz Completed <br/> <span>You Scored...</span></h1>
                </section>

                <section id="result">
                    <div>
                    <div className="flex question-header">
                    <img src={iconObject[subject]} alt={"subject"} className="subject-icon" />
                <p>{subject}</p>
                    </div>
                    <h1>{score}</h1>
                    <p>Out of 10</p>
                    </div>
                    <button id="submit" onClick={() => navigate("/")}>Play Again</button>
                </section>
            </div>
            </main>
    )
}
export default Result;