import axios from 'axios'

// json - server--watch - d 180 --hots (meu ip) db.json

const api = axios.create(
    {
        baseURL: 'http://192.168.0.8:3000/'
    }
)

export default api;