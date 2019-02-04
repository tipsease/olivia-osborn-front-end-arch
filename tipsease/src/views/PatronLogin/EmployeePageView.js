import React from "react";
import { connect } from "react-redux";
import EmployeePage from "../../components/EmployeePage/EmployeePage"
import { getEmployees } from "../../store/actions";

class EmployeePageView extends React.Component {
    state = {
        employeeList: []
    }

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <EmployeePage
            employeeList={this.props.employeeList}
            match={this.props.match}
            />
        )
    }
}

const mapStateToProps = state => ({
    employeeList: state.employeeList 
})
export default connect(
    mapStateToProps,
    { 
        getEmployees
    }
)(EmployeePageView);