function Button(props){
    return(
        <div>
        <button id={props.id} onClick={()=>{props.onclick(props.tag,props.content,props.answer)}} disabled={props.isdisabled} >{props.content}</button>
        {/* <button disabled={props.isdisabled} onClick={()=>{props.onclick(props.tag,props.content,props.answer)}}>{props.content}</button> */}
        </div>
    )
}
export default Button;