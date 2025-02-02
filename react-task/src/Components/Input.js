function Input(props){
    return(
        <div className="from-group col-md-12">
            <label htmlFor={props.id}>{props.lable_name}</label>
            <input type={props.type} id={props.id} name={props.id} placeholder={props.placeholder} className="form-control"/>
            <small></small>
        </div>
    )
}
export default Input;