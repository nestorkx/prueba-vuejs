import Api from './api'

export default {
  getUsers() {
    return Api().get('/?results=10').then( response => response.data.results )
  }
}
