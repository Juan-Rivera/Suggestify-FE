import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token')); 
  
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: 'https://suggestify-backend.herokuapp.com/',
  });
};