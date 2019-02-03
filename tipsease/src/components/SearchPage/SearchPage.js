import React, { Component } from "react";
import RestaurantSearch from "./RestaurantSearch";
import EmployeeList from "./EmployeeList";

function compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

const restaurantList = require("../../Restaurants.json").sort(compare)
const employeeList = require("../../EmployeeData.json")

class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurantList: restaurantList,
            employeeList: employeeList
        }
    }

    render() {
        return (
            <div>
                {/* <SearchBar /> */}
                <RestaurantSearch 
                restaurantList={this.state.restaurantList}
                />
                <EmployeeList 
                employeeList={this.state.employeeList}
                />
            </div>
        )
    }
}

export default SearchPage;