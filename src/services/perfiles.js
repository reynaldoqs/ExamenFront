import axios from 'axios'
export default {
  getPerfiles: (idUsuario, limit = 500, page = 1) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/usuarios/${idUsuario}/perfiles?limite=${limit}&pagina=${page}`)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  },
  getPerfil: (idUsuario, idPerfil) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/usuarios/${idUsuario}/perfiles/${idPerfil}`)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  },
  patchPerfil: (idUsuario, idPerfil, data) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`/usuarios/${idUsuario}/perfiles/${idPerfil}`, data)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  },
  postPerfil: (idUsuario, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`/usuarios/${idUsuario}/perfiles`, data)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  },
  deletePerfil: (idUsuario, idPerfil) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/usuarios/${idUsuario}/perfiles/${idPerfil}`)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  }
}
