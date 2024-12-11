import { useNavigate } from "react-router-dom";

const SubjectButton = ({subject, img}) => {
    const navigate = useNavigate();
    return (
        <article className="flex subject-button" onClick={() => navigate(`/quiz/${subject}`)}>
            <img src={img} alt={subject} className="subject-icon"/>
            <h2>{subject}</h2>
            </article>
        
    )
}
export default SubjectButton;