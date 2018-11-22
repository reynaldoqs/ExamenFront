import {
  SET_PERFIL,
  SET_PERFILES,
  PERFILES_REQUEST,
  PERFILES_SUCCESS,
  PERFILES_ERROR,
  PUT_PERFIL,
  DELETE_PERFIL,
  PATCH_PERFIL
} from '../actions/perfil'
import { perfilesApi } from '@/services'

const state = {
  perfil: null,
  perfiles: [],
  perfilStatus: ''
}

const getters = {
  currentPerfil: state => state.perfil,
  hasPerfil: state => {
    return !(state.perfil === '' || state.perfil === null || state.perfil === undefined)
  },
  userPerfiles: state => state.perfiles
}

const mutations = {
  // fix: al hacer log out, eliminar el perfil seleccionar state.perfil
  [SET_PERFIL]: (state, idPerfil) => {
    let index = state.perfiles.findIndex(data => data.id == idPerfil)
    state.perfil = state.perfiles[index]
  },
  [SET_PERFILES]: (state, data) => {
    state.perfiles = data
  },
  [PERFILES_REQUEST]: state => {
    state.perfilStatus = 'loading'
  },
  [PERFILES_SUCCESS]: (state, data) => {
    state.perfilStatus = 'success'
    state.perfiles = data
  },
  [PERFILES_ERROR]: state => {
    state.perfilStatus = 'error'
  },
  [DELETE_PERFIL]: (state, idPerfil) => {
    let index = state.perfiles.findIndex(data => data.id == idPerfil)
    state.perfiles.splice(index, 1)
  },
  [PATCH_PERFIL]: (state, body) => {
    let idPerfil = body.id
    let index = state.perfiles.findIndex(data => data.id == idPerfil)
    state.perfiles[index] = body
  },
  [PUT_PERFIL]: (state, perfil) => {
    state.perfiles.push(perfil)
  }
}

const actions = {
  loadPerfiles: (context, clientId) => {
    context.commit(PERFILES_REQUEST)
    return new Promise((resolve, reject) => {
      perfilesApi.getPerfiles(clientId).then(data => {
        let perfiles = data.data.perfiles
        context.commit(PERFILES_SUCCESS, perfiles)
        resolve(data)
      })
    }).catch(err => {
      context.commit(PERFILES_ERROR)
      reject(err)
    })
  },
  changePerfil: (context, idPerfil) => {
    context.commit(SET_PERFIL, idPerfil)
  },
  removePerfil: (context, datos) => {
    let clientId = datos.clientId
    let idPerfil = datos.idPerfil
    return new Promise((resolve, reject) => {
      perfilesApi.deletePerfil(clientId, idPerfil).then(data => {
        context.commit(DELETE_PERFIL, idPerfil)
        resolve(data)
      })
    }).catch(err => {
      context.commit(PERFILES_ERROR)
      reject(err)
    })
  },
  savePerfil: (context, datos) => {
    let clientId = datos.clientId
    let body = {
      nombre: datos.nombre || 'sin_data',
      descripcion: datos.descripcion || 'sin_data',
      urlImagen: datos.urlImagen || 'rat'
    }
    return new Promise((resolve, reject) => {
      perfilesApi.postPerfil(clientId, body).then(data => {
        context.commit(PUT_PERFIL, data.data)
        resolve(data)
      })
    }).catch(err => {
      context.commit(PERFILES_ERROR)
      reject(err)
    })
  },
  patchPerfil: (context, datos) => {
    let clientId = datos.clientId
    let idPerfil = datos.idPerfil
    let body = {
      nombre: datos.nombre || 'sin_data',
      descripcion: datos.descripcion || 'sin_data',
      urlImagen: datos.urlImagen || 'sin_data'
    }
    return new Promise((resolve, reject) => {
      perfilesApi.patchPerfil(clientId, idPerfil, body).then(data => {
        context.commit(PATCH_PERFIL, data.data)
        resolve(data)
      })
    }).catch(err => {
      context.commit(PERFILES_ERROR)
      reject(err)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
