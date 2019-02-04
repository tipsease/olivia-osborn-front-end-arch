import React from "react";
import styled from "styled-components";
import "./Login";

const RegisterCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 10% auto;
    padding-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
    background: lightgray;
    font-size: 1rem;
    border: 1px solid gray;
    width: 50%;
    &:hover {
        cursor: pointer;
        background: gray;
    }
`

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
                    name="firstName"
                />     
                <StyledInput
                    type="text"
                    placeholder="last name"
                    name="lastName"
                />                
                <StyledInput
                    type="text"
                    placeholder="email"
                    name="email"
                />             
                <StyledInput
                    type="password"
                    placeholder="password"
                    name="password"
                />  
                <StyledInput
                    type="password"
                    placeholder="confirm password"
                    name="confirmPassword"
                />
                <RadioInputs>
                    <input type="radio" name="register" value="employee"/> Employee
                    <input type="radio" name="register" value="patron"/> Patron
                </RadioInputs>                
                <Submit>Submit</Submit>         
            </StyledForm>
        </RegisterCard>
    )
}

export default Registration;