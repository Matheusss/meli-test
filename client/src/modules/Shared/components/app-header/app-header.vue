<template>
  <div class="app-header">
    <div class="app-logo" @click="navigateHome"></div>

    <div class="input-search">
      <form class="search-form" @submit.prevent="search">
        <input
          class="main-input"
          type="text"
          placeholder="Nunca dejes de buscar"
          v-model="model.search" />
          
          <button
            type="submit"
            class="search-btn">

          </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      model: {
        search: undefined,
      },
    }
  },
  methods: {
    navigateHome() {
      this.$router.push({
        path: '/',
      })
    },
    search() {
      this.$router.push({
        name: 'items',
        query: {
          search: this.model.search,
        },
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-header {
    width: 80%;
    margin: 0 auto;
    display: flex;

    .app-logo {
      height: 36px;
      width: 56px;
      background-image: url('../../../../assets/Logo_ML.png');
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .input-search {
      margin-left: 20px;
      flex-grow: 2;

      .search-form {
        display: flex;
      }

      .main-input {
        height: 40px;
        flex-grow: 2;
        padding: 10px;
        border: 1px solid $lightGray;
        border-radius: 2px;
        box-sizing: border-box;
        background-color: #fff;
        font-size: 18px;
        outline: 0;
        color: $gray;

        &::placeholder {
          font-size: 18px;
          color: $gray;
        }
      }

      .search-btn {
        height: 40px;
        width: 40px;
        background-color: $lightGray;
        background-image: url('../../../../assets/ic_Search.png');
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
        border: 1px solid $lightGray;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        position: relative;
        left: -2px;
        transform: .3s ease-in-out;
        outline: 0;
        
        &:hover {
          background-color: darken($lightGray, 2%);
          transform: .3s ease-in-out;
        }
      }
    }
  }
</style>