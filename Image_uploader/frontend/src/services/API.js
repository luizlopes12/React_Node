import axios from "axios";

const API = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: "http://localhost:3001",
});

export default API;
