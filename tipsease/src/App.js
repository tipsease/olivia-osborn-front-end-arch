import React from "react";
import { Route } from "react-router-dom";
import LoginView from "./views/Login/LoginView";
import RegisterView from "./views/Login/RegisterView";
import SearchEmployeeView from "./views/PatronLogin/SearchEmployeeView";
import EmployeePageView from "./views/PatronLogin/EmployeePageView";
import ProfileView from "./views/EmployeeLogin/ProfileView";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/employees" component={SearchEmployeeView} />
        <Route path="/server:id" component={EmployeePageView} />
        <Route path="/profile/:id" component={ProfileView} />
      </div>
    );
  }
}

export default App;
