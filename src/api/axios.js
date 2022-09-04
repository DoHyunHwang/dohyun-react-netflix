import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "524ac9818852cda2f05f8ae4e7507f48",
    language: "ko-KR",
  },
});

export default instance;
