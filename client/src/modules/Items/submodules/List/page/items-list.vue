<template>
  <div class="items-list">
    <item-list-card
      v-for="item in list.items"
      :key="item.id"
      :item="item">

    </item-list-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ItemListCard from '../components/item-card/item-card.vue'

export default {
  name: 'ItemsList',
  components: {
    ItemListCard,
  },
  beforeRouteEnter(to, from, next) {
    const { search } = to.query
    next((vm) => {
      vm.getList(search)
    })
  },
  beforeRouteUpdate(to, from, next) {
    const { search } = to.query
    next(this.getList(search))
  },
  computed: {
    ...mapGetters('items-list', ['list']),
  },
  methods: {
    ...mapActions('items-list', ['getList']),
  }
}
</script>
<style lang="scss" scoped>
  .items-list {
    background-color: #fff;
    padding: $smallMargin;
    box-sizing: border-box;
  }
</style>