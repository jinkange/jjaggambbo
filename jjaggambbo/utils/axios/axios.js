import axios from 'axios';
import { ADUINO_BASE_URL,API_BASE_URL } from '@env';

const aduino = axios.create({
    baseURL: ADUINO_BASE_URL,
})

const api = axios.create({
  baseURL: API_BASE_URL,
})
export default aduino;