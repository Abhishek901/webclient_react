import axios from "axios";
//axios.defaults.baseURL = 'https://api.pinchappmail.com/v1/public'

class dataLayer {
  constructor() {
    this.axios = axios;
    this.axios.defaults.baseURL = "http://18.191.177.13:5000/api";
    this.axios.defaults.headers.post["Content-Type"] = "application/json"; // for POST
    this.axios.defaults.headers.patch["Content-Type"] = "application/json";
    this.axios.defaults.headers.patch["Access-Control-Allow-Origin"] = "*";
    this.axios.interceptors.request.use(function (config) {
      const token = window.localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }
  login(credentials) {
    console.log("here in data sections");
    console.log(credentials);
    return new Promise((resolve, reject) => {
      axios
        .post("/auth/login", credentials)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
  }

  verify(credentials) {
    // console.log("here in data sections");
    // console.log(credentials);
    return new Promise((resolve, reject) => {
      axios
        .post("/auth/verify", credentials)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
  }
}

export default new dataLayer();
