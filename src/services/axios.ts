import axios from 'axios';

// const SERVER_HOSTNAME = 'localhost';
// const SERVER_PORT = 4000;

// const baseURL = `http://${SERVER_HOSTNAME}:${SERVER_PORT}`;

const baseURL = `https://bamboodentique01.000webhostapp.com`;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Access-Control-Allow-Origin':
      'https://bamboo-dentique-reddotz.netlify.app/', // Replace with your Netlify frontend URL
    'Access-Control-Allow-Methods': '*', // Adjust to the allowed HTTP methods
    'Access-Control-Allow-Headers': '*', // Adjust to the allowed headers
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
