import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token") || "";
  return config;
});