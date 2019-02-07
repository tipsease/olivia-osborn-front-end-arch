import React from "react";
import { connect } from "react-redux";
import EmployeePage from "../../components/EmployeePage/EmployeePage"
import { getEmployees, getTipList, updateTip } from "../../store/actions";


class EmployeePageView extends React.Component {
    state = {
        employeeList: [],
        tipData: {
            tippee_id: "",
            tipper_id: "94",
            amount: "",
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({tipData: {
            ...this.state.tipData,
            [e.target.name]: e.target.value
        }})
    }
    componentDidMount() {
        if (this.props.employeeList.length === 0) {
            this.props.getEmployees();
        }
        this.props.getTipList(5)
        const tipperId= localStorage.getItem("userId")
        this.setState({tipData: {...this.state.tipData, tippee_id: this.props.match.params.id, tipper_id: tipperId}})
    }

    addTip = (e, idx) => {
        e.preventDefault();
        console.log("adding tip", this.state.tipData.amount)
        this.props.updateTip(idx, this.state.tipData)
    }

    render() {
        console.log("employeelist", this.props.employeeList)
        if (!this.props.employeeList) return <p>loading data...</p>
        return (
            <EmployeePage
            employeeList={this.props.employeeList}
            match={this.props.match}
            addTip={this.addTip}
            handleChanges={this.handleChanges}
            employee={this.employee}
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
        getTipList,
        updateTip
    }
)(EmployeePageView);