import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT" + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
axiosInstance.interceptors.response.use(
  // TODO: flesh out this part as much as possible to hadle erroes
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (typeof error.response === "undefined") {
      alert(
        "A server error occured looks like CORS ahas a problem..I wrote this"
      );
      return Promise.reject(error);
    }
    if (
      error.response.status === 400 &&
      originalRequest.url === baseURL + "token/refresh/"
    ) {
      window.location.href = "/signin/";
      return Promise.reject(error);
    }
    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refresh_token = localStorage.getItem("refresh_token");
      if (refresh_token) {
        const token_parts = JSON.parse(atob(refresh_token.split(".")[1]));
        const now = Math.ceil(Date.now() / 1000);
        console.log(token_parts.exp);
        if (token_parts.exp > now) {
          return axiosInstance
            .post("token/refresh/", { refresh: refresh_token })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.refresh);
              axiosInstance.defaults.headers["Authorization"] =
                "JWT" + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT" + response.data.access;
              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh Token expired", token_parts.exp, now);
          window.location.href = "/signin/";
        }
      } else {
        console.log("Refresh token not availble");
        window.location.href = "/signin/";
      }
    }
    //specific error handling done somewhere else
    return Promise.reject(error);
  }
);

export default axiosInstance;
