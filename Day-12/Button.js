function Button(props){
    return(
       <center> <button id={props.id} onClick={props.click}>{props.btn_name}</button></center>
    )
}
export default Button;