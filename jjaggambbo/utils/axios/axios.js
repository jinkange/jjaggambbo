import axios from 'axios';
//const baseUrl = '192.168.0.238';

const baseUrl = 'http://192.168.0.238/';

  const client = axios.create({
    baseURL: baseUrl,
})

export default client;