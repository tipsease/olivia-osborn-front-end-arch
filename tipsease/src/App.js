import React from "react";
import { Route } from "react-router-dom";

import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import SearchEmployeeView from './views/PatronLogin/SearchEmployeeView';
import EmployeePageView from "./views/PatronLogin/EmployeePageView";
import EmployeeProfileView from "./views/EmployeeLogin/EmployeeProfileView";

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
                component={RegisterView}
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