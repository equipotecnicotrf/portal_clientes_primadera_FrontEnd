import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8285/api/v1/reporteClientes";

class SoapService {
    getAllClientes(cliente) {
        return axios.get(BASE_REST_API_URL);
    }

}

export default new SoapService();