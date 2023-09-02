import Button from "../Button/Button";
function Banner(props){
    return(
        <div className="outerdiv">
            <p>props.question</p>
            {/* <Button tag={props.tag} choice="1" className="buttons" content={props.options[0]} isdisabled={props.disabled} onclick={props.setAns}/> */}
        </div>
    )
}