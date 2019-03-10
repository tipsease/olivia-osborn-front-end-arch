import axios from "axios";

export const FETCHING_EMPLOYEES_START = "FETCHING_EMPLOYEES_START";
export const FETCHING_EMPLOYEES_SUCCESS = "FETCHING_EMPLOYEES_SUCCESS";
export const FETCHING_EMPLOYEES_FAILURE = "FETCHING_EMPLOYEES_FAILURE";
export const ADDING_TIP_START = "ADDING_TIP_START";
export const ADDING_TIP_SUCCESS = "ADDING_TIP_SUCCESS";
export const ADDING_TIP_FAILURE = "ADDING_TIP_FAILURE";
export const FETCHING_TIP_DATA_START = "FETCHING_TIP_DATA_START";
export const FETCHING_TIP_DATA_SUCCESS = "FETCHING_TIP_DATA_SUCCESS";
export const FETCHING_TIP_DATA_FAILURE = "FETCHING_TIP_DATA_FAILURE";
export const FETCH_USER_TYPE = "FETCH_USER_TYPE";
export const FETCHING_PATRONS_START = "FETCHING_PATRONS_START";
export const FETCHING_PATRONS_SUCCESS = "FETCHING_PATRONS_SUCCESS";
export const FETCHING_PATRONS_FAILURE = "FETCHING_PATRONS_FAILURE";
export const EDITING_PROFILE_START = "EDITING_PROFILE_START";
export const EDITING_PROFILE_SUCCESS = "EDITING_PROFILE_SUCCESS";
export const EDITING_PROFILE_FAILURE = "EDITING_PROFILE_FAILURE";

export const getEmployees = () => dispatch => {
  dispatch({ type: FETCHING_EMPLOYEES_START });
  axios
    .get("https://tipsease-backend.herokuapp.com/api/tippees")
    .then(response => {
      dispatch({ type: FETCHING_EMPLOYEES_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_EMPLOYEES_FAILURE, payload: err });
    });
};

export const getTipList = id => dispatch => {
  dispatch({ type: FETCHING_TIP_DATA_START });
  axios
    .get(`https://tipsease-backend.herokuapp.com/api/tippees/${id}/tips/`)
    .then(response => {
      dispatch({ type: FETCHING_TIP_DATA_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_TIP_DATA_FAILURE, payload: err });
    });
};

export const updateTip = (id, tip) => dispatch => {
  dispatch({ type: ADDING_TIP_START });
  axios
    .post(`https://tipsease-backend.herokuapp.com/api/tippees/${id}/tips/`, tip)
    .then(response => {
      dispatch({ type: ADDING_TIP_SUCCESS, payload: response.data.tip });
    })
    .catch(err => {
      dispatch({ type: ADDING_TIP_FAILURE, payload: err });
    });
};

export const getPatrons = () => dispatch => {
  dispatch({ type: FETCHING_PATRONS_START });
  axios
    .post("https://tipsease.insanechaos.com/api/tippers")
    .then(response => {
      dispatch({ type: FETCHING_PATRONS_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_PATRONS_FAILURE, payload: err });
    });
};

export const updateEmployee = (id, updatedEmployee) => dispatch => {
  dispatch({ type: EDITING_PROFILE_START });
  axios
    .put(
      `https://tipsease-backend.herokuapp.com/api/tippees/${id}`,
      updatedEmployee
    )
    .then(response => {
      dispatch({ type: EDITING_PROFILE_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: EDITING_PROFILE_FAILURE, payload: err });
    });
};

export const getUserType = type => {
  return {
    type: FETCH_USER_TYPE,
    payload: type
  };
};
