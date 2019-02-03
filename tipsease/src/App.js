import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
// import Login from "./components/Login/Login";
import SearchPage from "./components/SearchPage/SearchPage";
import EmployeePage from "./components/EmployeePage/EmployeePage";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login/> */}
        <Route exact path="/" component={SearchPage} />
        <Route path ="/server:id" component={EmployeePage} />
      </div>
    );
  }
}

export default App;
