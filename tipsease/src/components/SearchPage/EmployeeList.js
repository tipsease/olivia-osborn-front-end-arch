import React from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "./EmployeeCard";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledEmployeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 50px;
`;

function EmployeeList(props) {
  return (
    <StyledEmployeeList>
      {props.employees.map(employee => (
        <Link
          to={`/server${employee.id}`}
          key={employee.id}
          style={{ textDecoration: "none" }}
        >
          <EmployeeCard employee={employee} />
        </Link>
      ))}
    </StyledEmployeeList>
  );
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object)
};

export default EmployeeList;
