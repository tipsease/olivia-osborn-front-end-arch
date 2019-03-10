import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 25%;
  height: auto;
  border-radius: 10px;
`;

const Name = styled.h2`
  margin-bottom: 0;
`;

const Tagline = styled.p`
  margin: 0px 0px 20px;
`;

function Profile(props) {
  const employee = props.employeeList.find(
    employee => `${employee.id}` === props.match.params.id
  );

  if (!employee) {
    return <h2>Loading employee data...</h2>;
  }
  let startDate = new Date(employee.start_date);

  return (
    <StyledProfile>
      <ProfilePic src={employee.photo_url} alt="profile" />
      <Name>
        {employee.first_name} {employee.last_name}
      </Name>
      <p>Working since {`${startDate.toDateString()}`}</p>
      {employee.tagline && <Tagline>"{employee.tagline}"</Tagline>}
    </StyledProfile>
  );
}

Profile.propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object,
  getEmployees: PropTypes.func,
  handleChanges: PropTypes.func
};

export default Profile;
