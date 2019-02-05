import React from "react";
import { NavLink } from "react-router-dom"
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


function SearchPage(props) {
    return (
        <div>
            <SearchBar>
                {/* <TopBarImg src={require("../../img/tipease4.png")} alt=""/> */}
                <SearchInput 
                type="text"
                placeholder="search"
                onChange={props.search}
                name="searchInput"
                />
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/login">Log Out</NavLink>
            </SearchBar>
            {/* <RestaurantSearch 
            restaurantList={this.props.restaurantList}
            /> */}
            <EmployeeList 
            employees = {
                props.filteredEmployees.length > 0 ? props.filteredEmployees : props.employeeList
            }
            />
        </div>
    )
}


export default SearchPage;

