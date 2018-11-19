import axios from 'axios'
export default {
  parametros() {
    let url = 'http://localhost:3000/v1/composicion/parametros';
    return new Promise((resolve, reject) => {
      axios.get(url).then(data => resolve(data.data)).catch(err => reject(err.response))
    })
  }
}