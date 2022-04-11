import axios from 'axios';


const journalApi = axios.create({
    baseURL : ''
});

journalApi.interceptors.request.use( (config) => {
    
    config.params = {
        auth: localStorage.getItem('idToken')
    }

    // config.headers = {
    //     authorization : 'bearer idToken'
    // }

    return config;
});


export default journalApi;