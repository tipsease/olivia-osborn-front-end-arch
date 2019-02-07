import React from "react";

function EditProfileForm(props) {
    const employee = props.employeeList.find(employee =>
        `${employee.id}` === props.match.params.id
    )

    return (
        <div>
            <form>
                <input
                type="text"
                name="first_name"
                placeholder="first name"
                onChange={props.handleChanges}
                />
                <input
                type="text"
                name="last_name"
                placeholder="last name"
                onChange={props.handleChanges}
                />
                <input
                type="text"
                name="email"
                placeholder="email"
                onChange={props.handleChanges}
                />
                <input
                type="date"
                name="start_date"
                onChange={props.handleChanges}
                />
                <textarea
                rows="2"
                name="tagline"
                placeholder="tagline"
                onChange={props.handleChanges}
                />
                <button onClick={e => props.editEmployee(e, employee.id)}>Submit Changes</button>           
            </form>
        </div>
    )
}

export default EditProfileForm;