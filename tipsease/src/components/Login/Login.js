import React from "react";
import styled from "styled-components";

const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 10% auto;
    padding-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #EEF1E3;

`
const LoginLogo = styled.img`
    height: 200px;
    width: auto;
    margin-bottom: 0;
`

const LoginTitle = styled.h2`
    margin-top: 0;
`

const StyledInput = styled.input`
    font-size: 1rem;
    padding: 5px;
    margin-bottom: 5px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Submit = styled.button`
    background: #67AB4C;
    font-size: 1rem;
    border: 1px solid gray;
    width: 50%;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        background: hsl(132,14%,58%);
    }
`

const SignUp = styled.button`
background: #EEF1E3;
font-size: 1rem;
border: white;
margin-top: 20px;
&:hover {
    cursor: pointer;
    color: hsl(132,14%,58%);
}
`

function Login(props) {
    return (
        <LoginCard>
            <LoginLogo src={require("../../img/tipease4.png")} alt=""/>
            <LoginTitle>Login:</LoginTitle>
            <StyledForm>
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
                <Submit>Submit</Submit>         
            </StyledForm>
            <SignUp>Sign up</SignUp>
        </LoginCard>
    )
}

export default Login;