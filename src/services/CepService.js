import axios from 'axios';

const CEP_BASE_URL = "https://viacep.com.br/ws/";

const API_KEY = "&key=1aad9c416ac048ea9ce3dc26f8d63786";

const OPENCAGE_URL = "https://api.opencagedata.com/geocode/v1/json?q=";

class CepService {

    buscaCep(cep){
        return axios.get(CEP_BASE_URL + cep + '/json/');
    }

    buscaOpenCage(cep){
        return axios.get(OPENCAGE_URL + cep + API_KEY);
    }

}
// eslint-disable-next-line
export default new CepService()