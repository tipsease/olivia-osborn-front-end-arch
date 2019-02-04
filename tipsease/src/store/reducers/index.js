import {
    FETCHING_EMPLOYEES_START, 
    FETCHING_EMPLOYEES_SUCCESS, 
    FETCHING_EMPLOYEES_FAILURE,
    UPDATING_TIP_START,
    UPDATING_TIP_SUCCESS,
    UPDATING_TIP_FAILURE,
} from "../actions"

const initialState = {
    employeeList: [],
    isFetching: false,
    isUpdatingTip: false,
    error: null,
}

const employeeList = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_EMPLOYEES_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                employeeList: action.payload
            }
        case FETCHING_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case UPDATING_TIP_START:
            return {
                ...state,
                isUpdatingTip: true,
            }
        case UPDATING_TIP_SUCCESS:
            return {
                ...state,
                isUpdatingTip: false,
                employeeList: action.payload

            }
        case UPDATING_TIP_FAILURE:
            return {
                ...state,
                isUpdatingTip: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default employeeList;