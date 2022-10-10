import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params : {
    api_key: "1c2f0f92339bff124d15c1fa1db21c85",
    language: "ko-KR",
  }

});

export default instance;