import Input from "./Input"
import Button from "./Button";
function Form(props){
    return(
        <form className="form_layout" key={"form"}>
            {props.filed_attribute.map((element)=>
                <Input id={element.id} lable_name={element.label_name} type={element.type} placeholder={element.placeholder}/>
            )}
            <Button id={"submit"} click={props.click} btn_name={props.btn_name}/>
            <Button id={"update"} btn_name={props.btn_upname} click={props.update_btn}/>
        </form>
    )
}
export default Form;