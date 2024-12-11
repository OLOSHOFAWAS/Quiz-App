
import { useParams, useNavigate } from "react-router-dom";
import quizQuestions from "../assets/Data/Data.json";
import { useEffect, useState } from "react";
import Option from "./Components/Option";
import htmlIcon from "../assets/images/html-icon.webp";
import cssIcon from "../assets/images/css-icon.webp";
import jsIcon from "../assets/images/javascript-icon.webp";
import accessIcon from "../assets/images/accessibility.webp";


    const iconObject = {
        HTML: htmlIcon,
        CSS: cssIcon,
        JavaScript: jsIcon,
        ReactJS: accessIcon
    }
    const optionObj = {A: 0, B: 1, C: 2, D: 3};

    const Questions =  () => {
        const params = useParams();
        const navigate = useNavigate();
        const questions = quizQuestions[params.subject];
        const [questionIndex, setQuestionIndex] = useState(0);
        const [currentActive, setCurrentActive] = useState("");
        const [score, setScore] = useState(0);

        const submitAnswer = () => {
            if (!currentActive) {
                return alert("Select an option");
            }
            const selectedOption = questions[questionIndex]["options"][optionObj[currentActive]];
            if (selectedOption === questions[questionIndex].answer) {
                setScore(currentScore => currentScore + 1);
            }
            if (questionIndex >= 9) {
           window.sessionStorage.setItem("score", score);
            window.sessionStorage.setItem("last_quiz", params.subject);
            return navigate("/result");
            }

            setQuestionIndex((currentIndex) => currentIndex + 1);
            setCurrentActive("");
        }

        useEffect(() => {
            window.sessionStorage.setItem("score", score);
            window.sessionStorage.setItem("last_quiz", params.subject);
        }, [])

    return (
        <main>
            <div className="flex question-header">
                <img src={iconObject[params.subject]} alt={"Accesibility"} className="subject-icon" />
                <p>{params.subject}</p>
            </div>

            <div className="flex"> 
                <section id="question">
                    {/* <p>Question 6 of 10</p> */}
                    <p>Question {questionIndex + 1} of 10</p>
                    <h3>{questions[questionIndex].question}</h3>
                    <div id="progress-bar">
                        <div style={{width: ((questionIndex + 1) * 10) + "%"}}></div>
                        </div>
                </section>
                <section>
                    <Option option={"A"} optionText={questions[questionIndex].options[0]}
                     setActive={setCurrentActive} 
                     active={currentActive}/>
                    <Option option={"B"} optionText={questions[questionIndex].options[1]} 
                    setActive={setCurrentActive}
                    active={currentActive}/>
                    <Option option={"C"} optionText={questions[questionIndex].options[2]} 
                    setActive={setCurrentActive} 
                    active={currentActive}/>
                    <Option option={"D"} optionText={questions[questionIndex].options[3]} 
                    setActive={setCurrentActive} 
                    active={currentActive}/>

                    
                        <button id="submit" onClick={submitAnswer}>{questionIndex < 9 ? "Submit Answer" : "Complete Quiz"}</button> 
                </section>
            </div>
        </main>
    )
}

export default Questions;