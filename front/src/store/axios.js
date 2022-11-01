import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/projects',
    timeout: 20000
})


export default instance