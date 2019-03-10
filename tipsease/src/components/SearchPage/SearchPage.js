import React from "react";
import { NavLink } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import styled from "styled-components";
import PropTypes from "prop-types";

const NavBar = styled.div`
  background: #67ab4c;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SearchInput = styled.input`
    height: 30px;
    font: 1rem;
    width: 200px;
    padding-left: 5px;
    border-radius 5px;
    border: 1px solid white;
`;

const Logout = styled.div`
  margin-right: 20px;
  font-size: 1rem;
`;

const Title = styled.p`
  font-weight: bold;
  color: white;
  font-size: 2rem;
  margin-left: 20px;
`;

function SearchPage(props) {
  return (
    <div>
      <NavBar>
        <div>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Title>TipsEase</Title>
          </NavLink>
        </div>
        <div>
          <SearchInput
            type="text"
            placeholder="search"
            onChange={props.search}
            name="searchInput"
          />
        </div>
        <div>
          <Logout>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Log Out
            </NavLink>
          </Logout>
        </div>
      </NavBar>
      <EmployeeList
        employees={
          props.filteredEmployees.length > 0
            ? props.filteredEmployees
            : props.employeeList
        }
      />
    </div>
  );
}

SearchPage.propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredEmployees: PropTypes.arrayOf(PropTypes.object),
  search: PropTypes.func,
  handleSearch: PropTypes.func
};

export default SearchPage;
