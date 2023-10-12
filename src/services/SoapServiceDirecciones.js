import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8285/api/v1/reporteDirecciones/filtrar";

class SoapServiceDirecciones {
    getAllDirecciones(custAccountID) {
        return axios.get(BASE_REST_API_URL + "?custAccountID=" + custAccountID);
    }

}

export default new SoapServiceDirecciones();