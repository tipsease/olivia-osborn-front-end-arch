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
export const FETCHING_TIP_DATA_START = "FETCHING_TIP_DATA_START";
export const FETCHING_TIP_DATA_SUCCESS = "FETCHING_TIP_DATA_SUCCESS";
export const FETCHING_TIP_DATA_FAILURE = "FETCHING_TIP_DATA_FAILURE";


export const getEmployees = () => dispatch => {
    dispatch({type: FETCHING_EMPLOYEES_START});
    axios
        .get("https://tipsease-backend.herokuapp.com/api/tippees")
        .then(response => {
            dispatch({type: FETCHING_EMPLOYEES_SUCCESS, payload: response.data})
        })
        .catch(err => {
            dispatch({type: FETCHING_EMPLOYEES_FAILURE, payload: err})
        })
}

export const getTipList = idx => dispatch => {
    dispatch({type: FETCHING_TIP_DATA_START});
    axios
        .get(`https://tipsease-backend.herokuapp.com/api/tippees/${idx}/tips/`)
        .then(response => {
            console.log("response", response)
            dispatch({type: FETCHING_TIP_DATA_SUCCESS, payload: response.data})
        })
        .catch(err => {
            dispatch({type: FETCHING_TIP_DATA_FAILURE, payload: err})
        })
} 

export const updateTip = (idx, tip)=> dispatch => {
    dispatch({type: UPDATING_TIP_START});
    axios
        .post(`https://tipsease-backend.herokuapp.com/api/tippees/${idx}/tips/`, tip)
        .then(response => {
            console.log(response.data)
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