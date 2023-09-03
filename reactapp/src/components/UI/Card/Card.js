import Button from "../Button/Button";
function Card(props){
    return(
        <div className="outerdiv">
            <h4>{props.question}</h4>
            <div style={{display: "flex"}}>
            <Button tag={props.tag} choice="1" className="buttons" content={props.options[0]} isdisabled={props.isDisabled} onclick={props.setAns}/>
            <Button tag={props.tag} choice="2" className="buttons" content={props.options[1]} isdisabled={props.isDisabled} onclick={props.setAns}/>
            <Button tag={props.tag} choice="3" className="buttons" content={props.options[2]} isdisabled={props.isDisabled} onclick={props.setAns}/>
            <Button tag={props.tag} choice="4" className="buttons" content={props.options[3]} isdisabled={props.isDisabled} onclick={props.setAns}/>
            </div>
        </div>
    )
}
export default Card;