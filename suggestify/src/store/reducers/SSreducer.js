import {
    FETCH_SS_DATA,
    FETCH_SS_SUCCESS,
    FETCH_SS_FAILURE,
    ADD_SS_DATA,
    ADD_SS_SUCCESS,
    ADD_SS_FAILURE,
    DELETE_SS_DATA,
    DELETE_SS_SUCCESS,
    DELETE_SS_FAILURE,
} from '../actions/SSActions';

const defaultState = {
    savedSongs: [],
    isFetching: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: "",
  };
function SSreducer(state = defaultState, action){
    switch(action.type){
        // FETCH
        case FETCH_SS_DATA:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                savedSongs: action.payload,
                error: "",
            };
        case FETCH_SS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        // ADD
        case ADD_SS_DATA:
        return {
            ...state,
            isAdding: true,
        };
        case ADD_SS_SUCCESS:
        return {
            ...state,
            isAdding: false,
            error: "",
        };
        case ADD_SS_FAILURE:
        return {
            ...state,
            isAdding: false,
            error: action.payload,
        };
        // DELETE
        case DELETE_SS_DATA:
        return {
            ...state,
            isDeleting: true,
        };
        case DELETE_SS_SUCCESS:
        return {
            ...state,
            isDeleting: false,
            error: "",
        };
        case DELETE_SS_FAILURE:
        return {
            ...state,
            isDeleting: false,
            error: action.payload,
        };
        default: return state
    }
}
export default SSreducer;