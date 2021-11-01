import axios from "axios";

const instance = axios.create({
  baseURL: 'https://cicada-backend.herokuapp.com/',
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
  (error) =>
    Promise.reject((error.response && error.response.data) || "Wrong Services")
);

export default instance;