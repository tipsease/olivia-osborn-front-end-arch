import axios from "axios";

export const FETCHING_EMPLOYEES_START = "FETCHING_EMPLOYEES_START";
export const FETCHING_EMPLOYEES_SUCCESS = "FETCHING_EMPLOYEES_SUCCESS";
export const FETCHING_EMPLOYEES_FAILURE = "FETCHING_EMPLOYEES_FAILURE";
export const UPDATING_TIP_START = "UPDATING_TIP_START";
export const UPDATING_TIP_SUCCESS = "UPDATING_TIP_SUCCESS";
export const UPDATING_TIP_FAILURE = "UPDATING_TIP_FAILURE";
export const ADDING_EMPLOYEE_START = "ADDING_EMPLOYEE_START";
export const ADDING_EMPLOYEE_SUCCESS = "ADDING_EMPLOYEE_SUCCESS";
export const ADDING_EMPLOYEE_FAILURE = "ADDING_EMPLOYEE_FAILURE";


export const getEmployees = () => dispatch => {
    dispatch({type: FETCHING_EMPLOYEES_START});
    axios
        .get("http://localhost:3333/items/")
        .then(response => {
            dispatch({type: FETCHING_EMPLOYEES_SUCCESS, payload: response.data})
        })
        .catch(err => {
            dispatch({type: FETCHING_EMPLOYEES_FAILURE, payload: err})
        })
}

export const updateTip = (idx, employee)=> dispatch => {
    dispatch({type: UPDATING_TIP_START});
    axios
        .put(`http://localhost:3333/items/${idx}`, employee)
        .then(response => {
            dispatch({type: UPDATING_TIP_SUCCESS, payload: response.data})
        })
        .catch(err => {
            dispatch({type: UPDATING_TIP_FAILURE, payload: err})
        })
}

export const addEmployee = employee => dispatch => {
    dispatch({type: ADDING_EMPLOYEE_START});
    axios
        .post("http://localhost:3333/items", employee)
        .then(response => {
            console.log("response", response)
            dispatch({type: ADDING_EMPLOYEE_SUCCESS, payload: response.data})
        })
        .catch(err => {
            console.log("err", err)
            dispatch({type: ADDING_EMPLOYEE_FAILURE, payload: err})
        })
}