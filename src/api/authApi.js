
import axios from 'axios'


const authApi = axios.create({
    baseURL: '',
    params: {
        key: ''
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi