import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9004',
});

export default instance;