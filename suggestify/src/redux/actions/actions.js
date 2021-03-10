export const setSearchList = (songs) => {
    return {
        type: 'SET_SEARCHLIST',
        payload: songs
    }
}

export const saveSong = (song) => {
    return {
        type: 'SAVE_SONG',
        payload: song
    }
}

export const setSaveList = (songs) => {
    return {
        type: 'SET_SAVELIST',
        payload: songs
    }
}
