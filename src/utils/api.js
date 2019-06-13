import axios from 'axios';

export default axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000'
  baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'
})
