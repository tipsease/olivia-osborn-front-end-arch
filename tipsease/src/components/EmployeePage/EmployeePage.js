import React from "react";
import TipForm from "./TipForm";

class EmployeePage extends React.Component {
    constructor(props) {
        super(props)
        this.employee = props.employeeList.find(employee =>
            `${employee.id}` === this.props.match.params.id
        )
    }

    render() {
        console.log(this.employee)
        return (
            <div>
                <img src={this.employee.photo_url} alt="server" />
                <h2>{this.employee.name}</h2>
                <TipForm/>
            </div>
        )
    }
}

export default EmployeePage;