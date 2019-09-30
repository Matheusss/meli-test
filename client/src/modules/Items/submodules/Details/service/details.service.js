import itemDetailsAPI from '../api/details.api'

class ItemDetailsService {
  async getDetails(id) {
    const { data } = await itemDetailsAPI.getDetails(id)

    return data
  }
}

export default new ItemDetailsService()
