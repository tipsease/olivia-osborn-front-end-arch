import React from "react";
import { Route } from "react-router-dom";

import LoginView from "./views/LoginView";
import Registration from "./components/Login/Registration";
import SearchEmployeeView from './views/PatronLogin/SearchEmployeeView';
import EmployeePageView from "./views/PatronLogin/EmployeePageView";
import EmployeeProfileView from "./views/EmployeeLogin/EmployeeProfileView";
// import { getEmployees } from "./store/actions";

class App extends React.Component {
    
    render() {
        return (
            <div className="App">
            <Route 
                path="/login"
                component={LoginView}
            />
            <Route 
                path="/register"
                component={Registration}
            />
            <Route
                exact path="/"
                component={SearchEmployeeView}
            />
            <Route 
                path="/server:id" 
                render={props => 
                    <EmployeePageView 
                    {...props}
                    // employeeList={this.props.employeeList}
                    />
                }
            />
            <Route
                path="/profile"
                component={EmployeeProfileView}
            />
          </div>
        )
    }
}

export default App