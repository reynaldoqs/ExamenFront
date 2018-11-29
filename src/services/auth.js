import axios from 'axios'
export default {
  login(creds) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth', creds)
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err.response.data.error)
        })
    })
  }
}
