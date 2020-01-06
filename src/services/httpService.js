import Axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

Axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("Something wrong happened!!");
    console.log("Logging the error: " + error);
    logger.log(error);
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  Axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
  setJwt
};
