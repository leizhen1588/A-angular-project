<template>
  <div class="header">
    <ul>
      <li><img src="../../../images/logo.png" alt=""></li>
      <div v-for="(item,index) in navData">
        <router-link :to="item.path"><li :class="activeNum==index?'roter-li active':'roter-li'">{{item.name}}</li></router-link>
        <li class="roter-line"></li>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        navData: [
          {name: 'a模型', path: '/modulesA'},
          {name: 'b模型', path: '/modulesB'},
        ],
        activeNum:''
      }
    },
    mounted(){
      this.active()
    },
    methods:{
      active(){
        for (let a=0;a<this.navData.length;a++){
          if(this.$route.path==this.navData[a].path){
            this.activeNum=a
            return
          }
        }
      }
    },
    watch:{
      $route(){
        this.active()
      }
    }
  }
</script>

<style scoped lang="less">
  a:hover, a:visited, a:link, a:active {
    color: #fff;
    text-decoration: none;
  }
  .header {
    color: #fff;
    height: 50px;
    width: 100%;
    background: #5e87b0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      float: left;
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
    }
    .active{
      background: rgba(255, 255, 255, 0.1);
    }
    .roter-li {
      cursor: pointer;
      font-size: 14px;
      :hover {

      }
    }
    .roter-li:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    .roter-line {
      height: 30px;
      margin-top: 10px;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      padding: 0px;
    }
  }
</style>
