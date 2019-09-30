import axios from 'axios'

class ItemDetailsAPI {
  constructor() {
    this.BASE_URL = `${process.env.VUE_APP_BASE_URL}/api/items`
  }

  getDetails(id) {
    return axios.get(`${this.BASE_URL}/${id}`)
  }
}

export default new ItemDetailsAPI()
