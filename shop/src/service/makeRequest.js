import axios from "axios";

const baseURL = import.meta.env.VITE_APP_API_URL
const apiToken = import.meta.env.VITE_APP_API_TOKEN

export const makeRequest = axios.create({
  baseURL,
  headers: {
    Authorization: "bearer " +apiToken,
  },
});
