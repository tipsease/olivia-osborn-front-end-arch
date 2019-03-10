import React from "react";
import { connect } from "react-redux";
import { getEmployees, getPatrons, updateEmployee } from "../../store/actions";
import Profile from "../../components/Profile/Profile";
import EditProfileForm from "../../components/Profile/EditProfileForm";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  padding: 100px;
  width: 60%;
  margin: 100px auto;
`;

const NavBar = styled.div`
  background: #67ab4c;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Title = styled.p`
  font-weight: bold;
  color: white;
  font-size: 2rem;
  margin-left: 20px;
`;

const Logout = styled.div`
  margin-right: 20px;
  font-size: 1rem;
`;

class ProfileView extends React.Component {
  state = {
    updatedEmployee: {
      first_name: "",
      last_name: "",
      email: "",
      start_date: null,
      tagline: "",
      photo_url: ""
    }
  };

  componentDidMount() {
    this.props.getEmployees();
  }

  handleChanges = e => {
    this.setState({
      updatedEmployee: {
        ...this.state.updatedEmployee,
        [e.target.name]: e.target.value
      }
    });
  };

  editEmployee = (e, id) => {
    e.preventDefault();
    this.props.updateEmployee(id, this.state.updatedEmployee);
  };

  render() {
    return (
      <EmployeeContainer>
        <NavBar>
          <div>
            <Title>TipsEase</Title>
          </div>
          <div>
            <Logout>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Log Out
              </NavLink>
            </Logout>
          </div>
        </NavBar>
        {this.props.employeeList && (
          <Profile
            employeeList={this.props.employeeList}
            getEmployees={this.props.getEmployees}
            match={this.props.match}
            handleChanges={this.handleChanges}
          />
        )}
        <EditProfileForm
          employeeList={this.props.employeeList}
          editEmployee={this.editEmployee}
          match={this.props.match}
          handleChanges={this.handleChanges}
          updatedEmployee={this.state.updatedEmployee}
        />
      </EmployeeContainer>
    );
  }
}

const mapStateToProps = state => ({
  employeeList: state.employeeList,
  userType: state.userType,
  isFetchingEmployees: state.isFetchingEmployees
});

export default connect(
  mapStateToProps,
  {
    getEmployees,
    getPatrons,
    updateEmployee
  }
)(ProfileView);
