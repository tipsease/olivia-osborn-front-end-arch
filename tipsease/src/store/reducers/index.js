import {
    FETCHING_EMPLOYEES_START, 
    FETCHING_EMPLOYEES_SUCCESS, 
    FETCHING_EMPLOYEES_FAILURE,
    FETCHING_TIP_DATA_START,
    FETCHING_TIP_DATA_SUCCESS,
    FETCHING_TIP_DATA_FAILURE,
    UPDATING_TIP_START,
    UPDATING_TIP_SUCCESS,
    UPDATING_TIP_FAILURE,
    // ADDING_EMPLOYEE_START,
    // ADDING_EMPLOYEE_SUCCESS,
    // ADDING_EMPLOYEE_FAILURE,
    FETCH_USER_TYPE,
    FETCHING_PATRONS_START,
    FETCHING_PATRONS_SUCCESS,
    FETCHING_PATRONS_FAILURE,
    EDITING_PROFILE_FAILURE,
    EDITING_PROFILE_START,
    EDITING_PROFILE_SUCCESS
} from "../actions"

const initialState = {
    employeeList: [],
    tipList: [],
    isFetchingEmployees: false,
    isFetchingTips: false,
    isUpdatingTip: false,
    isAddingEmployee: false,
    isFetchingPatrons: false,
    isEditingEmployee: false,
    patronsList: [],
    error: null,
    userType: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_EMPLOYEES_START:
            return {
                ...state,
                isFetchingEmployees: true
            }
        case FETCHING_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isFetchingEmployees: false,
                employeeList: action.payload
            }
        case FETCHING_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetchingEmployees: false,
                error: action.payload
            }
        case FETCHING_TIP_DATA_START:
            return {
                ...state,
                isFetchingTips: true
            }
        case FETCHING_TIP_DATA_SUCCESS:
            return {
                ...state,
                isFetchingTips: false,
                tipList: action.payload
            }
        case FETCHING_TIP_DATA_FAILURE:
            return {
                ...state,
                isFetchingTips: false,
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
                tipList: [...state.tipList, action.payload]
            }
        case UPDATING_TIP_FAILURE:
            return {
                ...state,
                isUpdatingTip: false,
                error: action.payload
            }
        case FETCH_USER_TYPE:
            return {
                ...state,
                userType: action.payload
            }
        case FETCHING_PATRONS_START:
            return {
                ...state,
                isFetchingPatrons: true
            }
        case FETCHING_PATRONS_SUCCESS:
            return {
                ...state,
                isFetchingPatrons: false,
                patronsList: action.payload
            }
        case FETCHING_PATRONS_FAILURE:
            return {
                ...state,
                isFetchingPatrons: false,
                error: action.payload
            }
        case EDITING_PROFILE_START:
            return {
                ...state,
                isEditingEmployee: true
            }
        case EDITING_PROFILE_SUCCESS:
            return {
                ...state,
                isEditingEmployee: false,
                employeeList: action.payload
            }
        case EDITING_PROFILE_FAILURE:
            return {
                ...state,
                isEditingEmployee: false,
                error: action.payload
            }
        // case ADDING_EMPLOYEE_START:
        //     return {
        //         ...state,
        //         isAddingEmployee: true
        //     }
        // case ADDING_EMPLOYEE_SUCCESS:
        //     return {
        //         ...state,
        //         isAddingEmployee: false,
        //         employeeList: action.payload
        //     }
        // case ADDING_EMPLOYEE_FAILURE:
        //     return {
        //         ...state,
        //         isAddingEmployee: false,
        //         error: action.payload
        //     }
        default:
            return state;
    }
}

export default reducer;