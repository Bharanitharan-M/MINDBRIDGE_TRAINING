import Tablerow from "./Tablerow";
function Table(props) {
    return (
        <div className="table_layout" key="form">
            <table className="table" key="table">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Mail Id</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {props.table_data.map(element=> <Tablerow table_data={element} del_btn={props.del_btn} edit_btn={props.edit_btn}/>)}
                </tbody>
            </table>
        </div>
    )
}
export default Table;