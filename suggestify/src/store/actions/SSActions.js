import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_SS_DATA = "FETCH_SS_DATA";
export const FETCH_SS_SUCCESS = "FETCH_SS_SUCCESS";
export const FETCH_SS_FAILURE = "FETCH_SS_FAILURE";

export const ADD_SS_DATA = "ADD_SS_DATA";
export const ADD_SS_SUCCESS = "ADD_SS_SUCCESS";
export const ADD_SS_FAILURE = "ADD_SS_FAILURE";

export const DELETE_SS_DATA = "DELETE_SS_DATA";
export const DELETE_SS_SUCCESS = "DELETE_SS_SUCCESS";
export const DELETE_SS_FAILURE = "DELETE_SS_FAILURE";


export const fetchSongs = (user_id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_SS_DATA });
    axiosWithAuth()
      .get(`api/songs/save/${user_id}`)
      .then((res) => {
        dispatch({ type: FETCH_SS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_SS_FAILURE,
          payload: err,
        });
      });
  };
};

export const addSong = (song, user_id) => {

  const saveSong = {
    album_art: song.album_art,
    album_name: song.album_name,
    artist: song.artist,
    title: song.title,
    song_id: song.song_id,
    user_id: user_id
  }
  return (dispatch) => {
    dispatch({ type: ADD_SS_DATA });
    axiosWithAuth()
      .post('api/songs/save', saveSong)
      .then((res) => {
        axiosWithAuth()
          .get()
          .then((res) => {
            dispatch({ type: ADD_SS_SUCCESS, payload: res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: ADD_SS_FAILURE,
          payload: err,
        });
      });
  };
};

export const removeSong = (user_id, song_id) => {

  return (dispatch) => {
    dispatch({ type: DELETE_SS_DATA });
    axiosWithAuth()
      .delete(`api/songs/save/${user_id}/${song_id}`)
      .then((res) => {
        axiosWithAuth()
          .get()
          .then((res) => {
            dispatch({ type: DELETE_SS_SUCCESS, payload: res.data });
            window.location.href = '/dashboard/savedSongs';
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: DELETE_SS_FAILURE,
          payload: err,
        });
      });
  };
};