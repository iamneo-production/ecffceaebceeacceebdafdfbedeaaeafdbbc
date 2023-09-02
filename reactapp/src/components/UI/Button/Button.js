function Button(props){
    return(
        <button className={props.name} disabled={props.isdisabled}>{props.content}</button>
    )
}
export default Button;