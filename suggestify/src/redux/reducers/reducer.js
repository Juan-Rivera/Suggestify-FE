import axios from 'axios';

const defaultState = {
    user: {
        id: 0,
        name: '',
        username: ''
    },
    searchList: [],
    savedSongs: [],
    songSavedList: [],
}
function reducer(state = defaultState, action){
    switch(action.type){
        case "SET_SEARCHLIST":
            return {
                ...state,
                searchList: action.payload
            }
        case "SET_SAVEDSONGS":
            return {
                ...state,
                savedSongs: action.payload
            }
        case "SONG_SAVED":
            return {
                ...state,
                songSavedList: action.payload
            }
        default: return state
    }
}
export default reducer;