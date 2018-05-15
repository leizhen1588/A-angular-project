<template>
  <div class="main">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {}
    },
    mounted() {
    },
    methods: {},
    watch: {}
  }
</script>
<style>
</style>
<style scoped lang="less">
  .main {
    display: flex;
    max-height: 100vh;
    flex-direction: column;
  }
  .header{
    height: 50px;
  }
  .content {
    flex: 1
  }
</style>
