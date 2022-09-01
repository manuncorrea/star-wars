import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://swapi.dev/api',
});


export const apiSign = axios.create({
  baseURL: 'https://swapi.dev/api',
});