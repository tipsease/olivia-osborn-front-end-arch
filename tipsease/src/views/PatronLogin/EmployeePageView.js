import React from "react";
import { connect } from "react-redux";
import EmployeePage from "../../components/EmployeePage/EmployeePage"
import { getEmployees, getTipList, updateTip } from "../../store/actions";


class EmployeePageView extends React.Component {
    state = {
        employeeList: [],
        // tippedEmployee: {
        //     name: "",
        //     id: null,
        //     imageUrl: "",
        //     description: "",
        //     price: null,
        //     shipping: ""
        // }
        tipData: {
            tippee_id: "5",
            tipper_id: "94",
            amount: "",
            date: "1544895356010"
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
    }

    addTip = (e, idx) => {
        e.preventDefault();
        console.log("adding tip", this.state.tipData.amount)
        this.props.updateTip(idx, this.state.tipData)
    }

    render() {
        console.log(this.props.employeeList)
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