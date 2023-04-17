import {
    FETCH_ALL,
    DELETE,
    START_LOADING,
    END_LOADING,

} from "../constants/actionTypes.js";

export default (state = {isLoading: true, users: []}, action) => {
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case FETCH_ALL:
            return {
                ...state,
                users: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };


        case DELETE:
            return {...state, users: state.users.filter((user) => user._id !== action.payload)}
        default:
            return state;
    }
};