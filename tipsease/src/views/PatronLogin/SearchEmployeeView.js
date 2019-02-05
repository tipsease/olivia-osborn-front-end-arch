import React from "react";
import { connect } from "react-redux";
import SearchPage from "../../components/SearchPage/SearchPage";
import { getEmployees, updateTip } from "../../store/actions";

class SearchEmployeeView extends React.Component {
    state = {
        employeeList: [],
        filteredEmployees: [],
    }

    componentDidMount() {
        this.props.getEmployees();
    }
    
    search = e => {
        const searchedEmployee = this.props.employeeList.filter(employee => {
            return employee.name.toLowerCase().includes(e.target.value) && employee;
            }
        );
        this.setState({filteredEmployees: searchedEmployee})
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
                    filteredEmployees={this.state.filteredEmployees}
                    search={this.search}
                    handleSearch={this.handleSearch}
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