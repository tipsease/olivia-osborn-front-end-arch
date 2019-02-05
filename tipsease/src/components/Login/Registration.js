import React from "react";
import styled from "styled-components";
import "./Login";
import { Link } from "react-router-dom"

const RegisterCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 10% auto;
    padding-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: white;
    border-radius: 10px;
`
const LoginLogo = styled.img`
    height: 200px;
    width: auto;
    padding-bottom: 0;
`

const LoginTitle = styled.h2`
    margin-top: 0;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    font-size: 1rem;
    padding: 5px;
    margin-bottom: 5px;
`

const Submit = styled.button`
    background: #67AB4C;    
    font-size: 1rem;
    border: 1px solid gray;
    width: 50%;
    border-radius: 5px;
    color: #282B2D    
    &:hover {
        cursor: pointer;
        background: #282B2D;
        color: #67AB4C;
    }
`

// const SignIn = styled.div`
// background: white
// font-size: 1rem;
// border: white;
// margin-top: 20px;
// &:hover {
//     cursor: pointer;
//     color: #67AB4C;
// }
// `

const RadioInputs = styled.div`
    margin-bottom: 10px;
`
function Registration(props) {
    return (
        <RegisterCard>
            <LoginLogo src={require("../../img/tipease4.png")} alt=""/>
            <LoginTitle>Create an account:</LoginTitle>
            <StyledForm>
                <StyledInput
                    type="text"
                    placeholder="first name"
                    name="name"
                    onChange={props.handleChanges}
                />     
                <StyledInput
                    type="text"
                    placeholder="profile pic"
                    name="imageUrl"
                    onChange={props.handleChanges}
                />                
                <StyledInput
                    type="number"
                    placeholder="price"
                    name="price"
                    onChange={props.handleChanges}
                />             
                <StyledInput
                    type="text"
                    placeholder="description"
                    name="description"
                    onChange={props.handleChanges}
                />  
                {/* <StyledInput
                    type="password"
                    placeholder="confirm password"
                    name="confirmPassword"
                    onChange={props.handleChanges}
                /> */}
                <RadioInputs>
                    <input type="radio" name="register" value="employee"/> Employee
                    <input type="radio" name="register" value="patron"/> Patron
                </RadioInputs>           
                <Submit onClick={e => props.registerEmployee(e)}>Submit</Submit>         
            </StyledForm>
                <Link
                to="/login"
                >Sign In</Link>

        </RegisterCard>
    )
}

export default Registration;