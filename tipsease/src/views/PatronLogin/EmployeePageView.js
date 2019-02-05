import React from "react";
import { connect } from "react-redux";
import EmployeePage from "../../components/EmployeePage/EmployeePage"
import { getEmployees, updateTip } from "../../store/actions";


class EmployeePageView extends React.Component {
    state = {
        employeeList: [],
        tippedEmployee: {
            name: "",
            id: null,
            imageUrl: "",
            description: "",
            price: null,
            shipping: ""
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({tippedEmployee: {
            ...this.state.tippedEmployee,
            [e.target.name]: e.target.value
        }})
    }
    componentDidMount() {
        if (this.props.employeeList.length === 0) {
            this.props.getEmployees();
        }
    }

    

    addTip = (e, idx) => {
        e.preventDefault();
        console.log("adding tip")
        this.props.updateTip(idx, this.state.tippedEmployee)
    }

    render() {
        return (
            <EmployeePage
            employeeList={this.props.employeeList}
            match={this.props.match}
            addTip={this.addTip}
            handleChanges={this.handleChanges}
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
        getEmployees,
        updateTip
    }
)(EmployeePageView);