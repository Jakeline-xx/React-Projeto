import axios from "axios";

export const fakeApi = axios.create({
  baseURL: "http://localhost:8000",
});
