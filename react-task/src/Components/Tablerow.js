import Button from "./Button";
function Tablerow(props){
    return(
        <tr key={props.table_data.id}>
            <td>{props.table_data.id}</td>
            <td>{props.table_data.fname}</td>
            <td>{props.table_data.age}</td>
            <td>{props.table_data.mail}</td>
            <td><Button click={()=> props.edit_btn(props.table_data.id)} btn_name={"Edit"} id={"edit_btn"}/> <br />
                <Button click={()=> props.del_btn(props.table_data.id)} btn_name={"Delete"} id={"del_btn"}/></td>
        </tr>
    )
}
export default Tablerow;
