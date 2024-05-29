import axios from 'axios';

const reqres_instance = axios.create({
  baseURL: 'https://reqres.in/api/users',
  timeout: 6000,
});
class APIHandler {
  constructor() {}

  async testFetch() {
    try {
      const response = await reqres_instance.get();
      return response;
    } catch (err) {
      throw { error: err, response: err.response };
    }
  }
}

const API_Handler = new APIHandler();
export default API_Handler;
