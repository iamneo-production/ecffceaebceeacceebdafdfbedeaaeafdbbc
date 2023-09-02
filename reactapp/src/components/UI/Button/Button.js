function Button(props){
    var val=props.isdisabled;
    return(
        <button className={props.name} {val==="true" ? "disabled" : ""}>{props.content}</button>
    )
}
export default Button;