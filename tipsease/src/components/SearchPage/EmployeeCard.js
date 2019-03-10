import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledEmployee = styled.div`
  width: 250px;
  margin: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background: lightgray;
  }
`;

const EmployeeImg = styled.img`
  width: 110px;
  height: 120px;
  padding-top: 20px;
`;

const Name = styled.p`
  margin: 5px 0px 0px;
  font-weight: bold;
  text-align: center;
`;

function EmployeeCard(props) {
  return (
    <StyledEmployee>
      <EmployeeImg src={props.employee.photo_url} alt="" />
      <Name>{props.employee.first_name}</Name>
      <Name>{props.employee.last_name}</Name>
    </StyledEmployee>
  );
}

EmployeeCard.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeCard;
