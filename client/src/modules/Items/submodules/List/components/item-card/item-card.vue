<template>
  <div class="item-list-card">
    <img
      :src="item.picture"
      :alt="item.title"
      height="180"
      width="180"
      @click="navigateToDetails">
    <div class="item-infos">
      <p class="item-price" @click="navigateToDetails">
        {{ item.price.decimals | currency(item.price.currency) }}
      </p>
      <p>{{ item.title }}</p>
      <p>{{ item.condition }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ItemListCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToDetails() {
      this.$router.push({
        name: 'items.details',
        params: {
          id: this.item.id,
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  .item-list-card {
    display: flex;
    padding-bottom: $smallMargin;

    &:not(:first-child) {
      padding-top: $smallMargin;
    }
    
    &:not(:last-child) {
      border-bottom: 1px solid $gray;
    }

    img {
      margin-right: $smallMargin;
      border-radius: 4px;
      cursor: pointer;
    }

    .item-infos {
      padding: $bigMargin 0;

      p {
        margin: 0;
        font-size: 18px;
      }

      .item-price {
        font-size: 24px;
        margin-bottom: $bigMargin;
        cursor: pointer;
      }
    }
  }
</style>