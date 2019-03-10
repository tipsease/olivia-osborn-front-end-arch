import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const EmployeePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  padding: 150px 0;
`;

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

const Logout = styled.div`
  margin: 0 20px;
  font-size: 1rem;
`;

const Title = styled.p`
  font-weight: bold;
  color: white;
  font-size: 2rem;
  margin-left: 20px;
`;

const Links = styled.div`
  display: flex;
`;

const ProfilePic = styled.img`
  max-width: 150px;
  width: 25%;
  height: auto;
  border-radius: 10px;
`;

const TipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
    height: 30px;
    font: 1rem;
    width: 200px;
    padding-left: 5px;
    border-radius 5px;
    border: 1px solid #282B2D;
    margin-bottom: 10px;
`;

const Submit = styled.button`
  background: #67ab4c;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  color: #282b2d;
  padding: 10px 30px;
  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;

const Name = styled.h2`
  margin-bottom: 10px;
`;

const Info = styled.p`
  margin: 0 0 10px;
`;

function EmployeePage(props) {
  const employee = props.employeeList.find(
    employee => `${employee.id}` === props.match.params.id
  );

  if (!employee) {
    return <h2>Loading data...</h2>;
  }

  let startDate = new Date(employee.start_date);

  return (
    <>
      <NavBar>
        <div>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Title>TipsEase</Title>
          </NavLink>
        </div>
        <Links>
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </NavLink>
          <Logout>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Log Out
            </NavLink>
          </Logout>
        </Links>
      </NavBar>
      <EmployeePageContainer>
        <ProfilePic src={employee.photo_url} alt="server" />
        <Name>
          {employee.first_name} {employee.last_name}
        </Name>
        <Info>Working since {`${startDate.toDateString()}`}</Info>
        <Info>"{employee.tagline}"</Info>
        <TipContainer>
          <StyledInput
            type="number"
            name="amount"
            onChange={props.handleChanges}
            placeholder="Tip amount..."
          />
          <Submit onClick={e => props.addTip(e, employee.id)}>Send Tip</Submit>
          {!props.error ? (
            props.tipAdded && (
              <p>
                ${props.amount} sent to {employee.first_name}!
              </p>
            )
          ) : (
            <p>{props.error}</p>
          )}
        </TipContainer>
      </EmployeePageContainer>
    </>
  );
}

EmployeePage.propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object,
  addTip: PropTypes.func,
  handleChanges: PropTypes.func,
  tipAdded: PropTypes.bool,
  amount: PropTypes.number
};

export default EmployeePage;
