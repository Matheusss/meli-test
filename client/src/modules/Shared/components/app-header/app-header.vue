<template>
  <div class="app-header">
    <div class="app-logo"></div>

    <div class="input-search">
      <form @submit.prevent="search">
        <input
          class="main-input"
          type="text"
          placeholder="Nunca dejes de buscar"
          v-model="model.search" />
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
    search() {
      console.log(this.model.search)
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
    }

    .input-search {
      margin-left: 20px;
      flex-grow: 2;

      .main-input {
        height: 40px;
        width: 100%;
        padding: 7px 60px 9px 15px;
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
    }
  }
</style>