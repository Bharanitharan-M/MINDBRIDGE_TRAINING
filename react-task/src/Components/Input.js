function Input(props){
    console.log(props.err[props.id])
    return(
        <div className="from-group col-md-12">
            <label htmlFor={props.id}>{props.lable_name}</label>
            <input type={props.type} id={props.id} name={props.id} placeholder={props.placeholder} className="form-control" onChange={props.change} value={props.value[props.id]}/>
            <small>{props.err[props.id]}</small>
        </div>
    )
}
export default Input;