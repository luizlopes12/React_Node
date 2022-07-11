import axios from "axios";

const API = axios.create({
  headers: { 'Content-Type': 'multipart/form-data' },
  baseURL: "http://localhost:3001",
});

export default API;
