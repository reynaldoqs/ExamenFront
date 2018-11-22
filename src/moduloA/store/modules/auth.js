import axios from 'axios'
import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from '../actions/auth'
import { authApi } from '@/services'

const state = {
  user: JSON.parse(localStorage.getItem('user')) || '',
  status: '',
  hasLoadedOnce: false
}

const getters = {
  isAuthenticated: state => {
    return !(state.user === '' || state.user === undefined)
  },
  authStatus: state => state.status,
  currentUser: state => state.user || 'not found'
}
const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.user = resp // update: Mejorar esta parte
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: state => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: state => {
    state.user = ''
  }
}

const actions = {
  login: (context, creds) => {
    context.commit(AUTH_REQUEST)
    return new Promise((resolve, reject) => {
      authApi
        .login(creds)
        .then(data => {
          let user = data
          localStorage.setItem('user', JSON.stringify(user))
          axios.defaults.headers.common['Authorization'] = user.accesos.token
          context.commit(AUTH_SUCCESS, user)
          resolve('Login Success')
        })
        .catch(err => {
          context.commit(AUTH_ERROR, err)
          localStorage.clear()
          reject(err)
        })
    })
  },
  logout: context => {
    // update: retornar un promise para quemar el token en el server
    localStorage.removeItem('user')
    localStorage.clear()
    axios.defaults.headers.common['Authorization'] = ''
    context.commit(AUTH_LOGOUT)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
