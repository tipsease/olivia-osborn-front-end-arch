import React, { Component } from "react";
// import RestaurantSearch from "./RestaurantSearch";
import EmployeeList from "./EmployeeList";
import styled from "styled-components";

const SearchBar = styled.div`
    background: #86A38C;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
`
const SearchInput = styled.input`
    height: 30px;
    font: 1rem;
    width: 200px;
    padding-left: 5px;
    border-radius 5px;
    border: 1px solid #282B2D;
`

// const TopBarImg = styled.img`
//     height 50px;
//     width: auto;
//     margin: 0;
//     padding: 0 10px;
// `


class SearchPage extends Component {


    render() {
        return (
            <div>
                <SearchBar>
                    {/* <TopBarImg src={require("../../img/tipease4.png")} alt=""/> */}
                    <SearchInput
                    type="text"
                    placeholder="search"
                    />
                    <a href="http://localhost:3000/login">Log Out</a>
                </SearchBar>
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

