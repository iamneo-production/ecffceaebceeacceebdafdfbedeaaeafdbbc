import Button from "../Button/Button";
function Banner(props){
    return(
        <div className="outerdiv">
            <p>{props.question}</p>
            <div style={{display: "flex"}}>
            <Button tag={props.tag} choice="1" className="buttons" content={props.options[0]} isdisabled={props.disabled} onclick={props.setAns}/>
            <Button tag={props.tag} choice="2" className="buttons" content={props.options[1]} isdisabled={props.disabled} onclick={props.setAns}/>
            <Button tag={props.tag} choice="3" className="buttons" content={props.options[2]} isdisabled={props.disabled} onclick={props.setAns}/>
            <Button tag={props.tag} choice="4" className="buttons" content={props.options[3]} isdisabled={props.disabled} onclick={props.setAns}/>
            </div>
        </div>
    )
}
export default Banner;