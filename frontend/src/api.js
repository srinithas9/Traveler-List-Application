import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/travelers'
});

export const fetchTravelers = () => API.get('/');
export const fetchTravelerById = (id) => API.get(`/${id}`);
export const addTraveler = (data) => API.post('/', data);
export const deleteTraveler = (id) => API.delete(`/${id}`);
