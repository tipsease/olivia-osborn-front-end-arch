import React from "react";
import { NavLink } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import styled from "styled-components";


const NavBar = styled.div`
    background: #67AB4C;
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

const Logout = styled.div`
    position: absolute;
    right: 30px;
`


function SearchPage(props) {
    return (
        <div>
            <NavBar>
                {/* <TopBarImg src={require("../../img/tipease4.png")} alt=""/> */}
                <SearchInput 
                type="text"
                placeholder="search"
                onChange={props.search}
                name="searchInput"
                />
                <Logout>
                    <NavLink 
                    to="/login"
                    style={{textDecoration: "none", color: "#282B2D"}}
                    >Log Out</NavLink>
                </Logout>

            </NavBar>
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

