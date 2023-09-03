import Button from "../Button/Button";
function Card(props){
    return(
        <div className="card">
            <h4>{props.question}</h4>
            <div className="options">
            <Button name="option" qno={props.qno} answer={props.answer} choice="1" className="buttons" isdisabled={props.isDisabled} onclick={props.correctAnswerMarkUpdate}>{props.options.option1}</Button>
            <Button name="option" qno={props.qno} answer={props.answer} choice="2" className="buttons" isdisabled={props.isDisabled} onclick={props.correctAnswerMarkUpdate}>{props.options.option2}</Button>
            <Button name="option" qno={props.qno} answer={props.answer} choice="3" className="buttons" isdisabled={props.isDisabled} onclick={props.correctAnswerMarkUpdate}>{props.options.option3}</Button>
            <Button name="option" qno={props.qno} answer={props.answer} choice="4" className="buttons" isdisabled={props.isDisabled} onclick={props.correctAnswerMarkUpdate}>{props.options.option4}</Button>
            </div>
        </div>
    )
}
export default Card;