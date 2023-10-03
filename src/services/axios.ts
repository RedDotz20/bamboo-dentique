import axios from 'axios';

// const SERVER_HOSTNAME = 'localhost';
// const SERVER_PORT = 4000;

// const baseURL = `http://${SERVER_HOSTNAME}:${SERVER_PORT}`;

// const baseURL = `https://casadeestella.online/api`;
const baseURL = `https://bamboodentique01.000webhostapp.com`;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
