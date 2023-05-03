/**     create a separate configuration file that contains all the Axios configurations, 
 * such as the base URL, headers, and timeout */
import axios from 'axios'; //https://www.npmjs.com/package/axios

const axiosConfig = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

export default axiosConfig;
