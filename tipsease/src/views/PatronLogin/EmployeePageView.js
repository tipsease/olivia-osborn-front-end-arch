import React from "react";
import { connect } from "react-redux";
import EmployeePage from "../../components/EmployeePage/EmployeePage"
import { getEmployees, getTipList, updateTip } from "../../store/actions";

class EmployeePageView extends React.Component {
    state = {
        employeeList: [],
        tipData: {
            tippee_id: "",
            tipper_id: "",
            amount: null,
        },
        tipAdded: false,
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            tipAdded: false,
            tipData: {
            ...this.state.tipData,
            [e.target.name]: e.target.value
        }})
    }

    componentDidMount() {
        if (this.props.employeeList.length === 0) {
            this.props.getEmployees();
        }
        this.props.getTipList(this.props.match.params.id)
        const tipperId= localStorage.getItem("userId")
        this.setState({tipData: {...this.state.tipData, tippee_id: this.props.match.params.id, tipper_id: tipperId}, tipAdded: false})
    }

    addTip = (e, idx) => {
        e.preventDefault();
        if (this.state.tipData.amount) {
            this.props.updateTip(idx, this.state.tipData)
        }
        this.setState({tipAdded: true})
    }

    render() {
        return (
            <>
                <EmployeePage
                employeeList={this.props.employeeList}
                match={this.props.match}
                addTip={this.addTip}
                handleChanges={this.handleChanges}
                employee={this.employee}
                isUpdatingTip={this.props.isUpdatingTip}
                error={this.props.error}
                tipAdded={this.state.tipAdded}
                amount={this.state.tipData.amount}
                />
            </>
        )
    }
}

const mapStateToProps = state => ({
    employeeList: state.employeeList,
    isUpdatingTip: state.isUpdatingTip,
    error: state.error
})
export default connect(
    mapStateToProps,
    { 
        getEmployees,
        getTipList,
        updateTip,
    }
)(EmployeePageView);