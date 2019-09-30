import axios from 'axios'

class ItemsListAPI {
  constructor() {
    this.BASE_URL = `${process.env.VUE_APP_BASE_URL}/api/items`
  }

  getList(search) {
    return axios.get(this.BASE_URL, {
      params: {
        q: search
      }
    })
  }
}

export default new ItemsListAPI()
