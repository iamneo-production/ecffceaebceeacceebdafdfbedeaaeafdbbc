function Button(props){
    return(
        <button disabled={props.isdisabled} onClick={()=>{props.onclick(props.tag,props.content,props.answer)}}>{props.content}</button>
    )
}
export default Button;