import React from "react";
import { connect } from "react-redux";
import SearchPage from "../../components/SearchPage/SearchPage";
import { getEmployees, updateTip } from "../../store/actions";

class SearchEmployeeView extends React.Component {
    state = {
        employeeList: []
    }

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <div>
                {this.props.isFetching && (
                    <h4>Wait while we fetch your data...</h4>
                )}
                {this.props.employeeList && (
                    <SearchPage
                    employeeList={this.props.employeeList}
                    />
                )}
                {this.props.error && (
                    <h4>{this.props.error}</h4>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    employeeList: state.employeeList,
    isFetching: state.isFetching,
    error: state.error
})
export default connect(
    mapStateToProps,
    { 
        getEmployees,
        updateTip
    }
)(SearchEmployeeView);