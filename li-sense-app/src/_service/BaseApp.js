import axios from 'axios';

const apiUrl = axios.create({
  baseUrl: 'https://dev.li-sense.xyz'
});

export default apiUrl;