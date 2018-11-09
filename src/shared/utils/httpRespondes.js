/* import { Notification } from 'element-ui' */
export default {
  errorManager: error => {
    if (error.response.status === 500) {
      /*   Notification.error({
          title: 'Error interno',
          message: 'Intentelo más tarde o comuniquese con el administrador.'
        }) */
      return Promise.reject(error)
    } else {
      return Promise.reject(error)
    }
  }
}
