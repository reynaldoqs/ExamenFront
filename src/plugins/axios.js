import Axios from 'axios'
//import { BASE_URL } from '@/config'
//import store from '@/stores/stores'
//import { httpManager } from '@/shared/utils'

//Axios.defaults.baseURL = BASE_URL
Axios.defaults.headers.common.Accept = 'application/json'
/* Axios.interceptors.response.use(response => response, _check.errorManager)

if (store.getters['isAuthenticated']) {
  let token = JSON.parse(localStorage.getItem('user')).accesos.token
  Axios.defaults.headers.common['Authorization'] = token
}
 */