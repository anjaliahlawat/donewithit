import {create} from 'apisauce'

const apiClient = create({
  baseURL: 'http://192.168.1.4:9000'
})

export default apiClient

