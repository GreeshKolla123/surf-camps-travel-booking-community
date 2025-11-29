import axios from 'axios'

const api = axios.create({
  baseURL: 'https://surf-camps-api.com/api',
})

export default api