import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

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
`;
const LoginLogo = styled.img`
  height: 200px;
  width: auto;
  padding-bottom: 0;
`;

const LoginTitle = styled.h2`
  margin-top: 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 5px;
  margin-bottom: 5px;
`;

const Submit = styled.button`
  background: #67ab4c;
  padding: 10px 50px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  color: #282b2d;
  margin: 5px 0 20px;
  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;

const RadioInputs = styled.div`
  margin-bottom: 10px;
`;
class Registration extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "", //YOU MUST ALWAYS HAVE A UNIQUE EMAIL
    password: "",
    errorMsg: null,
    tipperBoolean: null
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignup = event => {
    event.preventDefault();

    axios
      .post("https://tipsease-backend.herokuapp.com/api/register", {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        tipperBoolean: this.state.tipperBoolean === "true" ? true : false
      })
      .then(res => {
        localStorage.setItem("jwt", res.data.token);

        this.props.history.push("/login");
      })
      .catch(err =>
        this.setState({
          errorMsg: "Whoops! You need a unique email to register!"
        })
      );
  };

  render() {
    return (
      <RegisterCard>
        <LoginLogo src={require("../../img/tipease4.png")} alt="" />
        <LoginTitle>Create an account:</LoginTitle>
        <StyledForm>
          <StyledInput
            type="text"
            placeholder="first name"
            name="first_name"
            onChange={this.handleChanges}
          />
          <StyledInput
            type="text"
            placeholder="last name"
            name="last_name"
            onChange={this.handleChanges}
          />
          <StyledInput
            type="text"
            placeholder="email"
            name="email"
            onChange={this.handleChanges}
          />
          <StyledInput
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChanges}
          />
          <RadioInputs>
            <input
              type="radio"
              name="tipperBoolean"
              value={false}
              onChange={this.handleChanges}
              defaultChecked
            />{" "}
            Employee
            <input
              type="radio"
              name="tipperBoolean"
              value={true}
              onChange={this.handleChanges}
            />{" "}
            Patron
          </RadioInputs>
          {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
          <Submit onClick={this.handleSignup}>Submit</Submit>
        </StyledForm>
        <Link to="/login" style={{ textDecoration: "none", color: "#282B2D" }}>
          Sign In
        </Link>
      </RegisterCard>
    );
  }
}

export default Registration;
