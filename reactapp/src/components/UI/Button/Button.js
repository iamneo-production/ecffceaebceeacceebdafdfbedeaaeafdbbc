function Button(props){
    return(
        <div>
        <button className={props.name} disabled={props.isdisabled} onClick={()=>{props.onclick(props.qno,props.children,props.answer)}}>{props.children}</button>
        </div>
    )
}
export default Button;