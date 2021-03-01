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
        case "SET_SAVEDSONGS":
            return {
                ...state,
                savedSongs: action.payload
            }
        case "SAVE_SONG":
            return {
                //axios call to post saved song to backend for specific user
            }
        default: return state
    }
}
export default reducer;