import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8090',
    proxy: {
        host: '127.0.0.1',
        port: 8090
    }
})
