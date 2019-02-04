import React from "react";
import { connect } from "react-redux";
import SearchPage from "../../components/SearchPage/SearchPage";
import { getEmployees } from "../../store/actions";

class SearchEmployeeView extends React.Component {
    state = {
        employeeList: []
    }

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <SearchPage
            employeeList={this.props.employeeList}
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
)(SearchEmployeeView);