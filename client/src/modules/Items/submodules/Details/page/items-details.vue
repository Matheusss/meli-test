<template>
  <div class="item-details" v-if="details.item">
    <div class="item-basic-infos">
      <div class="item-image">
        <img :src="details.item.picture" :alt="details.item.title">
      </div>
      <div class="item-infos">
        <p class="item-conditions">
          <span>{{ $t(`${details.item.condition.toUpperCase()}`) }} - </span>
          <span>{{ $tc('SOLD', details.item.sold_quantity, {count: details.item.sold_quantity}) }}</span>
        </p>

        <h1>{{ details.item.title }}</h1>
        <h2>{{ details.item.price.decimals | currency(details.item.price.currency) }}</h2>

        <button
          class="buy-btn">
          Comprar
        </button>
      </div>

    </div>
    <div class="item-description">
      <h2>Descripción del producto</h2>
      <p>{{ details.item.description }}</p>
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
        padding-left: $smallMargin;
        padding-top: $bigMargin;
        box-sizing: border-box;

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

        .buy-btn {
          width: 100%;
          color: #fff;
          background-color: $blue;
          cursor: pointer;
          outline: 0;
          margin-right: $bigMargin;
          padding: 10px;
          border: 0;
          border-radius: 4px;
        }
      }

    }

    .item-image {
      height: 680px;
      width: 680px;
      flex-grow: 2;
      // margin-right: $smallMargin;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .item-description {
      h2 {
        font-size: 28px;
      }

      p {
        font-size: 16px;
      }
    }
  }
</style>