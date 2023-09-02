function Button(props){
    return(
        <button className={props.name} disabled={props.isdisabled} onClick={()=>{props.Setans(props.tag-1,"4")}}>{props.content}</button>
    )
}
export default Button;