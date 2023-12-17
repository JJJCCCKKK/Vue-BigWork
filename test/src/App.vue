<template>
  <nav>
    <router-link  to="/">主页</router-link>
    <router-link to="/category">||商品分类</router-link>
  </nav>
  <router-view/>
</template>
<script >

import { defineComponent,onMounted,watchEffect} from 'vue';
import {useStore} from 'vuex';
export default defineComponent({
  name: 'App',
  components: {

  },
  setup(){
    let store=useStore();
    return{
      store
    }
  }
});
</script>
<style lang="scss">
@import url('../src/assets/css/base.css');
@import url('../src/assets/css/iconfont.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;
  width: 100%;
  display: flex;
  position: fixed;
  background-color: #F6F6F6;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 3px rgba(100,100,100,0.1);
  z-index: 15;

  a {
    color: var(--color-text);


    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 50px;
    font-size: var(--font-size);
  }

  .tab-bar-item .icon{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
    display: inline-block;
  }
}

</style>
