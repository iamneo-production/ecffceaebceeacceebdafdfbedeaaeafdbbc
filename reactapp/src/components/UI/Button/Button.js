function Button(props){
    return(
        <button className={props.name} disabled={props.isdisabled} onClick={()=>{props.onclick(props.tag-1,props.choice)}}>{props.content}</button>
    )
}
export default Button;