import React from "react";

function EmployeePage(props) {
        const employee = props.employeeList.find(employee =>
            `${employee.id}` === props.match.params.id
        )

        return (
            <div>
                <img src={employee.imageUrl} alt="server" />
                <h2>{employee.name}</h2>
                <p>{employee.price}</p> 
                <div>
                    <label>Custom Tip:</label>
                    <input 
                    type="number"
                    name="price" //will be "tip" later on
                    onChange={props.handleChanges}
                    />
                    <button onClick={e=> props.addTip(e, employee.id)}>Send Tip</button>
                </div>
            </div>
        )
    
}

export default EmployeePage;