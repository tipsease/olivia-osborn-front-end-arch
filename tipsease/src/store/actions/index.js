import axios from "axios";

export const FETCHING_EMPLOYEES_START = "FETCHING_EMPLOYEES_START";
export const FETCHING_EMPLOYEES_SUCCESS = "FETCHING_EMPLOYEES_SUCCESS";
export const FETCHING_EMPLOYEES_FAILURE = "FETCHING_EMPLOYEES_FAILURE";

export const getEmployees = () => dispatch => {
    dispatch({type: FETCHING_EMPLOYEES_START});
    axios
        .get("http://localhost:3333/items")
        .then(response => {
            console.log(response)
            dispatch({type: FETCHING_EMPLOYEES_SUCCESS, payload: response.data})
        })
        .catch(err => {
            console.log(err)
        })
}