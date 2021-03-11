import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_PROFILE_DATA = "FETCH_PROFILE_DATA";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";

export const UPDATE_PROFILE_DATA = "UPDATE_PROFILE_DATA";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const fetchProfile = (id) => {
    return (dispatch) => {
      dispatch({ type: FETCH_PROFILE_DATA });
      axiosWithAuth()
        .get(`api/profiles/${id}`)
        .then((res) => {
          // console.log("GOT POST DATA", res.data);
          dispatch({ type: FETCH_PROFILE_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          // console.log(err);
          dispatch({
            type: FETCH_PROFILE_FAILURE,
            payload: err,
          });
        });
    };
  };
  
  export const updateProfile = (update, id) => {
    return (dispatch) => {
      dispatch({ type: UPDATE_PROFILE_DATA });
      axiosWithAuth()
        .put(`api/profiles/${id}`, update)
        .then((res) => {
          // console.log(res.data);
          dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: UPDATE_PROFILE_FAILURE,
            payload: err,
          });
        });
    };
  };