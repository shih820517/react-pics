import axios from 'axios';
import KEY from 'KEY.js';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: KEY
  }
});