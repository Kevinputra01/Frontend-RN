import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
});