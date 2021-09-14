const axios = require('axios').default;

const api = axios.create({

    baseURL:'https://lucasfg1-eval-prod.apigee.net/turismo/' , 
    headers:{
        'Content-Type':'application/json'
    }
})

export default api;