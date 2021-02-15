const defaultState = {
    searchList: [],
    savedSongs: [],
}
function reducer(state = defaultState, action){
    switch(action.type){
        case "SET_SEARCHLIST":
            return {
                ...state,
                searchList: action.payload
            }
        case "SAVE_SONG":
            return {
                ...state,
                savedSongs: [...state.savedSongs, action.payload]
            }
        default: return state
    }
}
export default reducer;