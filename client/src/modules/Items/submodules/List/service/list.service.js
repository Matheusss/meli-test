import itemsListAPI from '../api/list.api'

class ItemsListService {
  async getList(search) {
    const { data } = await itemsListAPI.getList(search)

    return data
  }
}

export default new ItemsListService()
