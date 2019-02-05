import React from "react";

function EmployeeProfile(props) {
    const employee = props.employeeList.find(employee =>
        `${employee.id}` === props.match.params.id
    )
    
    if (!employee) {
        return <h2>Loading item data...</h2>
    }

    return (
        <img src={props.employeeList[1].imageUrl} alt={require("../../img/anon-user.jpg")}/>
    )
}

export default EmployeeProfile