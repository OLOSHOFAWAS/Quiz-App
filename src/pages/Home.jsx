import htmlIcon from "../assets/images/html-icon.webp";
import cssIcon from "../assets/images/css-icon.webp";
import jsIcon from "../assets/images/javascript-icon.webp";
import accessIcon from "../assets/images/accessibility.webp";

import SubjectButton from "./Components/SubjectButton";
const Home = () => {
    return (
        <main className="flex">
            <section className="intro">
                <h1>Welcome to the <br/> <span>Frontend Quiz!</span></h1>
                <p>Pick a subject to get started.</p>
            </section>

            <section>
                <SubjectButton img={htmlIcon} subject={"HTML"} />
                <SubjectButton img={cssIcon} subject={"CSS"} />
                <SubjectButton img={jsIcon} subject={"JavaScript"} />
                <SubjectButton img={accessIcon} subject={"ReactJS"} />
            </section>
        </main>
    )
}
export default Home;