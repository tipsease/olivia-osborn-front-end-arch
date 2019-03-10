import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 5px;
  margin-bottom: 5px;
  width: 80%;
`;

const DateInput = styled.input`
  box-sizing: border-box;
  color: gray;
  font-size: 1rem;
  font-family: Helvetica;
  width: 87%;
`;

const TextBox = styled.textarea`
  width: 84%;
  margin: 5px 0;
  font-size: 1rem;
  font-family: Helvetica;
  padding-left: 5px;
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

function EditProfileForm(props) {
  const employee = props.employeeList.find(
    employee => `${employee.id}` === props.match.params.id
  );

  return (
    <EditForm>
      <StyledInput
        type="text"
        name="first_name"
        placeholder="first name"
        onChange={props.handleChanges}
        value={props.updatedEmployee.first_name}
      />
      <StyledInput
        type="text"
        name="last_name"
        placeholder="last name"
        onChange={props.handleChanges}
        value={props.updatedEmployee.last_name}
      />
      <StyledInput
        type="text"
        name="email"
        placeholder="email"
        onChange={props.handleChanges}
        value={props.updatedEmployee.email}
      />
      <DateInput type="date" name="start_date" onChange={props.handleChanges} />
      <TextBox
        rows="5"
        name="tagline"
        placeholder="tagline"
        onChange={props.handleChanges}
        value={props.updatedEmployee.tagline}
      />
      <TextBox
        rows="2"
        name="photo_url"
        placeholder="photo url"
        onChange={props.handleChanges}
        value={props.updatedEmployee.photo_url}
      />
      <Submit onClick={e => props.editEmployee(e, employee.id)}>
        Submit Changes
      </Submit>
    </EditForm>
  );
}

EditProfileForm.propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object,
  editEmployee: PropTypes.func,
  handleChanges: PropTypes.func
};

export default EditProfileForm;
