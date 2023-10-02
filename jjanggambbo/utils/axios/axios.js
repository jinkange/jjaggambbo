import axios from 'axios';
import { ADUINO_BASE_URL,API_BASE_URL,ADUINO_CAMERA1_URL } from '@env';

const aduino = axios.create({
    baseURL: ADUINO_BASE_URL,
})

const api = axios.create({
  baseURL: API_BASE_URL,
})

const stream1 = axios.create({
  baseURL: ADUINO_CAMERA1_URL,
})

export {aduino,api,stream1};