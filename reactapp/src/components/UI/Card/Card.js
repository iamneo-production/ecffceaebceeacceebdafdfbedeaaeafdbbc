import Button from "../Button/Button";
function Card(props){
    return(
        <div className="outerdiv">
            <h4>{props.question}</h4>
            <div style={{display: "flex"}}>
            <Button tag={props.key} answer={props.answer} choice="1" className="buttons" content={props.options.option1} isdisabled={props.isDisabled} onclick={props.correctAnswerMarkUpdate}/>
            <Button tag={props.key} answer={props.answer} choice="2" className="buttons" content={props.options.option2} isdisabled={props.isDisabled} onclick={props.correctAnswerMarkUpdate}/>
            <Button tag={props.key} answer={props.answer} choice="3" className="buttons" content={props.options.option3} isdisabled={props.isDisabled} onclick={props.correctAnswerMarkUpdate}/>
            <Button tag={props.key} answer={props.answer} choice="4" className="buttons" content={props.options.option4} isdisabled={props.isDisabled} onclick={props.correctAnswerMarkUpdate}/>
            </div>
        </div>
    )
}
export default Card;