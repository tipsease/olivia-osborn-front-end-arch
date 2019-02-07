import React from "react";
import { connect } from "react-redux";
import { getEmployees, getPatrons, updateEmployee } from "../../store/actions";
import Profile from "../../components/Profile";
import EditProfileForm from "../../components/EditProfileForm";
import styled from "styled-components";

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
`

class ProfileView extends React.Component {
    state = {
        updatedEmployee: {
            first_name: "",
            last_name: "",
            email: "",
            start_date: null,
            tagline: ""
        }
    }

    componentDidMount() {
        this.props.getEmployees()
    }

    handleChanges = e => {
        this.setState({updatedEmployee: {
            ...this.state.updatedEmployee,
            [e.target.name]: e.target.value
        }})
    }

    editEmployee = (e, id) => {
        e.preventDefault();
        this.props.updateEmployee(id, this.state.updatedEmployee)
    }

    render() {
        console.log("rendering")
        return (
            <EmployeeContainer>
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
                />
            </EmployeeContainer>
        )
    }
}

const mapStateToProps = state => ({
    employeeList: state.employeeList,
    userType: state.userType,
    isFetchingEmployees: state.isFetchingEmployees
})

export default connect (
    mapStateToProps,
    {
        getEmployees,
        getPatrons,
        updateEmployee,
    }
)(ProfileView)