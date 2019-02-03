import React from "react";
import styled from "styled-components";

const StyledEmployee = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 250px;
    margin: 20px;
    padding-bottom: 20px;
`

const EmployeeImg = styled.img`
    width: 150px;
    height: 150px;
    padding-top: 20px;
`

const Name = styled.p`
    color: black;
    margin: 5px 0px 0px;
    font-weight: bold;

`

function EmployeeCard(props) {
    return (
        <StyledEmployee>
            <EmployeeImg src={props.employee.photo_url} alt=""/>
            <Name>{props.employee.name}</Name>
        </StyledEmployee>
    )
}

export default EmployeeCard;