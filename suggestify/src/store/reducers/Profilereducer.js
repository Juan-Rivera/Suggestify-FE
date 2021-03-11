import {
    FETCH_PROFILE_DATA,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
    UPDATE_PROFILE_DATA,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
   
} from '../actions/ProfileActions';

const defaultState = {
    profile: {
        id: 0,
        name: '',
        username: '',
    },
    isFetching: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: "",
  };
function Profilereducer(state = defaultState, action){
    switch(action.type){
        // FETCH
        case FETCH_PROFILE_DATA:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                profile: action.payload,
                error: "",
            };
        case FETCH_PROFILE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        // UPDATE
        case UPDATE_PROFILE_DATA:
            return {
                ...state,
                isUpdating: true,
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                profile: action.payload,
                error: "",
            };
        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                isUpdating: false,
                error: action.payload,
            };
        default: return state
    }
}
export default Profilereducer;