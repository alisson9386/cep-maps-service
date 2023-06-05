import axios from 'axios';

const CEP_BASE_URL = "https://viacep.com.br/ws/";

class CepService {

    buscaCep(cep){
        return axios.get(CEP_BASE_URL + cep + '/json/')
    }

}

export default new CepService()