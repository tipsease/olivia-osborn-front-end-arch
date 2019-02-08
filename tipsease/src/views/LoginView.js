import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
// import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getUserType } from "../store/actions";

const LoginCard = styled.div`
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
    border-radius: 5px;
    color: #282B2D;
    margin: 5px 0 20px;
    &:hover {
        cursor: pointer;
        background: #86A38C;
    }
`

const RadioInputs = styled.div`
    margin-bottom: 10px;
`

// const SignUp = styled.button`
// background: white
// font-size: 1rem;
// border: white;
// margin-top: 20px;
// &:hover {
//     cursor: pointer;
//     color: #67AB4C;
// }
// `

class LoginView extends React.Component {
    state = {
        email: "",
        password: "",
        errorMsg: null,
        userType: "",
        tipperBoolean: null,
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const endpoint = "https://tipsease-backend.herokuapp.com/api/login"

        axios
            .post(endpoint, this.state)
            .then(response => {
                localStorage.setItem("jwt", response.data.token);
                localStorage.setItem("userId", response.data.user.id);
                localStorage.setItem("userType", response.data.user.role)
                this.setState({userType: localStorage.getItem("userType")})
                this.props.getUserType(this.state.userType)
                
                if (this.props.userType === "tipper") {
                    this.props.history.push("/")
                }
                if (this.props.userType === "tippee") {
                    this.props.history.push(`/profile/${localStorage.getItem("userId")}`)
                }
                console.log("it worked!!", response.data)
            })
            .catch(err => console.log(err));    
    }


    render() {
        return (
            <LoginCard>
                <LoginLogo src={require("../img/tipease4.png")} alt=""/>
                <LoginTitle>Login:</LoginTitle>
                <StyledForm> 
                    <StyledInput
                        type="text"
                        placeholder="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <StyledInput
                        type="text"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />       
                    <RadioInputs>
                        <input type="radio" name="tipperBoolean" value={false} onChange={this.handleInputChange} defaultChecked/> Employee
                        <input type="radio" name="tipperBoolean" value={true} onChange={this.handleInputChange} /> Patron
                    </RadioInputs>  
                    {/* {this.state.errorMsg && <p>{this.state.errorMsg}</p>} */}
                    <Submit onClick={this.handleSubmit}>Submit</Submit>         
                </StyledForm>
                <Link
                    to="/register"
                    style={{textDecoration: "none", color: "#282B2D"}}
                    >Sign Up</Link>
            </LoginCard>
        )
    }
}

const mapStateToProps = state => ({
    employeeList: state.employeeList,
    userType: state.userType
})

export default connect(
    mapStateToProps,
    {
        getUserType
    }
)(LoginView);

