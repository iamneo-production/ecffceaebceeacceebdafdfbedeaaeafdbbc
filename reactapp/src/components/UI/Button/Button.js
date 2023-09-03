function Button(props){
    return(
        <button disabled={props.isdisabled} onClick={()=>{props.onclick(props.tag-1,props.answer)}}>{props.content}</button>
    )
}
export default Button;