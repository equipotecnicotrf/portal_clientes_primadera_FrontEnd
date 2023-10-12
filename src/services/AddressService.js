import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8285/api/v1/Addresses";

class AddressService {
    postAddress(address) {
        return axios.post(BASE_REST_API_URL, address);
    }

}

export default new AddressService();