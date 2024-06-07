import axios from 'axios';

const axios_current = axios.create({
    baseURL: 'https://gateway.scan-interfax.ru/api/v1/',
  });
  axios_current.interceptors.request.use((request) => {
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken){
      request.headers.Authorization = `Bearer ${accessToken}`
    }
    return request
  })
  axios_current.interceptors.response.use((response) => response.data)
  export default axios_current
