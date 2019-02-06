import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const EmployeePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: white;
    padding: 100px 0;
`

const NavBar = styled.div`
    background: #67AB4C;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
`

const EmployeeImg = styled.img`
    border-radius: 10px;
`

const TipContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #282B2D;
    border-radius: 10px
    padding: 0 20px 20px;
`

function EmployeePage(props) {
        const employee = props.employeeList.find(employee =>
            `${employee.id}` === props.match.params.id
        )

        if (!employee) {
            return <h2>Loading item data...</h2>
        }

        return (
            <>
            <NavBar>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Logout</NavLink>
            </NavBar>
            <EmployeePageContainer>
                <EmployeeImg src={employee.photo_url} alt="server" />
                <h2>{employee.first_name}</h2>
                <TipContainer>
                {/* <p>${employee.price}</p> */}
                    <input 
                    type="text"
                    name="amount" 
                    onChange={props.handleChanges}
                    placeholder="Tip amount..."
                    />
                    <button onClick={e=> props.addTip(e, employee.id)}>Send Tip</button>
                </TipContainer>
            </EmployeePageContainer>
            </>
        )
    
}

export default EmployeePage;