import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://localhost:8000/api/v1/'
});

export default api;