import axios from "axios";


const API = axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.user( (req) => {
  if (localStorage.getItem('userInfo')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
  }

  return req;
})

