import React from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "./EmployeeCard";
import styled from "styled-components";

const StyledEmployeeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`


function EmployeeList(props) {
    return (
        <StyledEmployeeList>
            {props.employeeList.map(employee => (
                <Link 
                to={`/server${employee.id}`} 
                key={employee.id} 
                style={{textDecoration: "none"}}>
                    <EmployeeCard employee={employee}/>
                </Link>
            ))}
        </StyledEmployeeList>
    )
}

export default EmployeeList;