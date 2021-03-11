import axios from 'axios';

export const FETCH_SEARCH_DATA = "FETCH_SEARCH_DATA";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "FETCH_SeARCH_FAILURE";

export const fetchSongs = (search) => {
  return (dispatch) => {
    dispatch({ type: FETCH_SEARCH_DATA });
    axios
      .get(`https://spotify-3-ds.herokuapp.com/search/${search.artist}/${search.song}`)
      .then((res) => {
        dispatch({ type: FETCH_SEARCH_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_SEARCH_FAILURE,
          payload: err,
        });
      });
  };
};