import axios from "axios";
import environments from '../environment/environment';

/**
 * axios instance to set base url
*/
let instance = axios.create({
  baseURL: environments.API_URL_DEV
})

export default instance;
