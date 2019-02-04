import React, { Component } from "react";
// import RestaurantSearch from "./RestaurantSearch";
import EmployeeList from "./EmployeeList";

class SearchPage extends Component {


    render() {
        return (
            <div>
                {/* <SearchBar /> */}
                {/* <RestaurantSearch 
                restaurantList={this.props.restaurantList}
                /> */}
                <EmployeeList 
                employeeList={this.props.employeeList}
                />
            </div>
        )
    }
}

export default SearchPage;