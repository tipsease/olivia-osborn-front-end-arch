import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import SearchEmployeeView from './views/PatronLogin/SearchEmployeeView';
import EmployeePageView from "./views/PatronLogin/EmployeePageView";
import EmployeeProfileView from "./views/EmployeeLogin/EmployeeProfileView";
import { getEmployees } from "./store/actions";

class App extends React.Component {
    
    componentDidMount() {
        this.props.getEmployees()
    }
    render() {
        return (
            <div className="App">
            <Route 
                path="/login"
                component={LoginView}
            />
            <Route 
                path="/register"
                component={RegisterView}
            />
            <Route
                exact path="/"
                component={SearchEmployeeView}
            />
            <Route 
                path="/server:id" 
                component={EmployeePageView}
            />
            <Route
                path="/profile"
                component={EmployeeProfileView}
            />
          </div>
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
)(App);