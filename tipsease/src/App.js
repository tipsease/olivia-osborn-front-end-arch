import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import './App.css';
// import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
// import SearchPage from "./components/SearchPage/SearchPage";
// import EmployeePage from "./components/EmployeePage/EmployeePage";


function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

const restaurantList = require("./Restaurants.json").sort(compare)
const employeeList = require("./EmployeeData.json")

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurantList: restaurantList,
      employeeList: employeeList
  }
  }
  render() {
    return (
      <div className="App">
        {/* <Login/> */}
        <Registration/>
        {/* <Route
        exact path="/"
        render={props => (
          <SearchPage 
          {...props}
          restaurantList={this.state.restaurantList}
          employeeList={this.state.employeeList}
          />
        )}
        />
        <Route 
        path="/server:id" 
        render={props => (
          <EmployeePage 
          {...props}
          employeeList={this.state.employeeList}
          />
        )}
        /> */}
      </div>
    );
  }
}

export default App;
