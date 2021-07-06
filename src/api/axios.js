import axios from "axios";

axios.defaults.baseURL = "https://api.cureline-crm.phnapp.com/api";
// axios.defaults.baseURL = "http://localhost/api/";
axios.defaults.withCredentials = true;

let aToken = localStorage.getItem("authToken");
if (aToken !== "") {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("authToken")}`;
}

/*axios.interceptors.response.use((response) => {
  return response;
});*/

export default axios;
