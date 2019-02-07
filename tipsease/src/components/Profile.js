import React from "react";
import styled from "styled-components";

function Profile(props) {
    const employee = props.employeeList.find(employee =>
        `${employee.id}` === props.match.params.id
    )
    
    if (!employee) {
        return <h2>Loading employee data...</h2>
    }
    let startDate = new Date(employee.start_date);

    return (
        <div>
            <img src={employee.photo_url} alt="profile"/>
            <h2>{employee.first_name} {employee.last_name}</h2>
            <p>Working since {`${startDate.toDateString()}`}</p>         
        </div>
    )
}

export default Profile;