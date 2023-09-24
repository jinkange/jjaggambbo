import axios from 'axios';
//const baseUrl = '192.168.0.238';

const baseUrl = 'http://27.124.206.159:100/';

  const aduino = axios.create({
    baseURL: baseUrl,
})

export default aduino;