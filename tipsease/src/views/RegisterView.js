import React from "react";
import { connect } from "react-redux";
import Registration from "../components/Login/Registration";
import { addEmployee } from "../store/actions"

class RegisterView extends React.Component {
    constructor() {
        super()
        this.state = {
            newEmployee: {
                firstName: "",
                profPic: "",
                price: null,
                description: "",
            }
        }
    }

    handleChanges = e => {
        this.setState({ newEmployee: {
            ...this.state.newEmployee,
            [e.target.name]: e.target.value
        }});
    }

    registerEmployee = e => {
        e.preventDefault();
        console.log("registering")
        console.log(this.state.newEmployee)
        this.props.addEmployee(this.state.newEmployee)
    }
    render() {
        return (
            <Registration
            handleChanges={this.handleChanges}
            registerEmployee={this.registerEmployee}
            />
        )
    }
}

const mapStateToProps = state => ({
    employeeList: state.employeeList
})

export default connect (
    mapStateToProps,
    {
        addEmployee
    }
)(RegisterView);