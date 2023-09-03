function Button(props){
    return(
        <div>
        <button disabled={props.isdisabled} onClick={()=>{props.onclick(props.tag,props.content,props.answer)}}>{props.children}</button>
        </div>
    )
}
export default Button;