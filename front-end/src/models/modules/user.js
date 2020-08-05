import { observable } from 'mobx'

class UserStore {
  @observable user = {
    name: 'Fate'
  }
}

export default UserStore
