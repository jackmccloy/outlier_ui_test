import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const launchUrl = `${SERVICES_URL}/launches`;
const rocketsUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();

export const launchService = {
  get: () => api.get(`${launchUrl}`)
};

export const rocketService = {
  get: () => api.get(`${rocketsUrl}`)
};
