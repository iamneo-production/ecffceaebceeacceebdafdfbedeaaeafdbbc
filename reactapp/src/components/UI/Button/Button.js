function Button(props){
    return(
        <div>
        <button disabled={props.isdisabled} onClick={()=>{props.onclick(props.qno,props.children,props.answer)}}>{props.children}</button>
        </div>
    )
}
export default Button;