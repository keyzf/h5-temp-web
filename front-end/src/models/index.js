import UserStore from './modules/user'

class Store {
  constructor() {
    this.userStore = new UserStore()
  }
}

export default new Store()
