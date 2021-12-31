const axios = require('axios');

const baseURL = "http://localhost:5000";

const API = {
    productAPI: () => {
        return axios.get(`${baseURL}/product`)
    }
}

export default API;