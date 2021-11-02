import axios from "axios";
const instance = axios.create({
  baseURL: "https://cicada-backend.herokuapp.com",
});

instance.interceptors.response.use(
  (response) => {
    if (response.data.success) {
      return response;
    } else {
      console.log(response.data.message);
      return response;
    }
  },
  (error) =>{
    if (error.response.status === 401) {
      localStorage.removeItem("token")
      return window.location.href = '/login'
    }
    Promise.reject((error.response && error.response.data) || "Wrong Services")
  }
);

axios.interceptors.response.use(response => {
  return response;
}, error => {

 return error;
});

export default instance;