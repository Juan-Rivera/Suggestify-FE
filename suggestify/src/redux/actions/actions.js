import axios from 'axios';

export const setSearchList = (songs) => {
    return {
        type: 'SET_SEARCHLIST',
        payload: songs
    }
}

export const saveSong = ({song, id}) => {
    return (dispatch) => {
      return axios.post(`https://suggestify-backend.herokuapp.com/api/songs/save/${id}`, song)
        .then(res => {
          dispatch(songSaved(res.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

export const songSaved = (song) => {
    return {
        type: 'SONG_SAVED',
        payload: song
    }
}

export const setSaveList = (songs) => {
    return {
        type: 'SET_SAVELIST',
        payload: songs
    }
}
