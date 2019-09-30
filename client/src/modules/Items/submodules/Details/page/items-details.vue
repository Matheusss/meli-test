<template>
  <div class="item-details" v-if="details.item">
    <div class="item-basic-infos">
      <div class="item-image">
        <img :src="details.item.picture" :alt="details.item.title" width="680" height="680">
      </div>
      <div class="item-infos">
        <p class="item-conditions">{{ details.item.condition }} - {{ details.item.sold_quantity }}</p>

        <h1>{{ details.item.title }}</h1>
        <h2>{{ details.item.price.decimals | currency }}</h2>
      </div>

    </div>
    <div>
      <h2>Descripción del producto</h2>
      {{ details.item.description }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ItemDetails',
  beforeRouteEnter(to, from, next) {
    const { id } = to.params
    next((vm) => {
      vm.getDetails(id)
    })
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    next(this.getDetails(id))
  },
  computed: {
    ...mapGetters('items-details', ['details']),
  },
  methods: {
    ...mapActions('items-details', ['getDetails']),
  }
}
</script>
<style lang="scss" scoped>
  .item-details {
    background-color: #fff;
    padding: $bigMargin;
    box-sizing: border-box;

    .item-basic-infos {
      display: flex;

      .item-infos {
        width: calc(100% - 680px);
        padding-top: $bigMargin;

        h1 {
          font-size: 24px;
          margin: 0;
          margin-bottom: $bigMargin;
        }
  
        h2 {
          font-size: 46px;
          margin: 0;
          margin-bottom: $bigMargin;
        }
  
        p {
          font-size: 14px;
          margin: 0 0 $smallMargin 0;
        }
      }

    }

    .item-image {
      height: 680px;
      width: 680px;
      margin-right: $smallMargin;
    }
  }
</style>