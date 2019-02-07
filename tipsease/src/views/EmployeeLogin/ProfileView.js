import React from "react";
import { connect } from "react-redux";
import { getEmployees, getPatrons, updateEmployee } from "../../store/actions";
import Profile from "../../components/Profile";
import EditProfileForm from "../../components/EditProfileForm";


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

    onChange = e => {
        this.setState({updatedEmployee: {
            ...this.state.updatedEmployee,
            [e.target.name]: e.target.value
        }})
    }

    editEmployee = (e, id) => {
        e.preventDefault();
        this.props.updateEmployee(id)
    }

    render() {
        console.log("rendering")
        return (
            <div>
                {this.props.employeeList && (
                <Profile 
                employeeList={this.props.employeeList}
                getEmployees={this.props.getEmployees}
                />
                )}
                <EditProfileForm
                employeeList={this.props.employeeList}
                editEmployee={this.editEmployee}
                />
            </div>
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