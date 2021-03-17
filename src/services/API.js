import axios from 'axios'

const api = axios.create({
    baseURL:'https://apitec.clinitec.com.br/v2',
        headers:{
            'Authorization':'e83ca95ed581c0095dbab2968b1ce54c50a1f3e3',
        }
   });
export default api;