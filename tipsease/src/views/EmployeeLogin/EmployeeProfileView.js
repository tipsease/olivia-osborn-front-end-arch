import React from "react";
import { connect } from "react-redux";
import { getEmployees } from "../../store/actions";
import EmployeeProfile from "../../components/EmployeeLogin/EmployeeProfile";

class EmployeeProfileView extends React.Component {
    state = {
        employeeList: []
    }

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <EmployeeProfile
            employeeList={this.props.employeeList}
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
        getEmployees
    }
)(EmployeeProfileView)