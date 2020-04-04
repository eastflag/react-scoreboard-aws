import axios from 'axios';

export default axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://api.eastflag.co.kr:8000' : 'http://localhost:8000'
  // baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'
})
