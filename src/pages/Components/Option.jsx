
const Option = ({option, optionText, setActive, active}) => {
    return (
        <article className={"flex option-button " + (active === option ? "active" : "")} onClick={() => setActive(option)}>
            <p>{option}</p>
            <h3>{optionText}</h3>
        </article>
    )
}
export default Option;