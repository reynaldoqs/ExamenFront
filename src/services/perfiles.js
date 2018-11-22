import axios from 'axios'
export default {
  getPerfiles(creds) {
    let { user, pass } = creds;
    return new Promise((resolve, reject) => {
      //Consumir un servicio con axios
      if (user === 'user' && pass === 'pass') {
        return resolve({
          token: 'token de consumo'
        })
      }
      reject({
        message: 'datos incorrectos'
      })
    })
  }
}
