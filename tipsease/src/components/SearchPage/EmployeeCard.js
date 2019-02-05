import React from "react";
import styled from "styled-components";

const StyledEmployee = styled.div`
    width: 250px;
    margin: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    border: 1px solid #282B2D;
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
    text-align: center;
`

function EmployeeCard(props) {
    return (
        <StyledEmployee>
            <EmployeeImg src={props.employee.imageUrl} alt=""/>
            <Name>{props.employee.name}</Name>
        </StyledEmployee>
    )
}

export default EmployeeCard;