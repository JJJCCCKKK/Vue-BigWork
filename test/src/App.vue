<template>
  <div id="nav">
    <!--nav是导航，下面是每一个导航小图标，由路由链接+图标+文字组成，功能是点击后转跳到对应页面 -->
    <router-link class="tab-bar-item" to="/home">

      <div class="icon"><i class="iconfont icon-shouye"></i></div>
      <div>首页</div>
    </router-link>
    <router-link class="tab-bar-item" to="/category">

      <div class="icon"><i class="iconfont icon-fenlei"></i></div>
      <div>分类</div>
    </router-link>
    <router-link class="tab-bar-item" to="/shopcart">

      <div class="icon"><i class="iconfont icon-gouwuchezhengpin"></i></div>
      <div>购物车</div>
    </router-link>
    <router-link class="tab-bar-item" to="/profile">

      <div class="icon"><i class="iconfont icon-yonghus"></i></div>
      <div>我的</div>
    </router-link>
  </div>
  <router-view/>
</template>


//进行一个脚本的编写
<script leng="ts">
//TypeScript是JavaScript的超集，它提供了类型系统，提供了静态类型检查的功能。这能够让你在编译阶段就找出潜在的错误，而不需要等到运行时才能发现问题。

import {defineComponent,onMounted,watchEffect} from "vue";

export default defineComponent({
  name:'App',
  components:{},

},
)
</script>

//进行样式编写，采用scss进行预编译为css增加一些编程特性，无需考虑浏览器的兼容性（完全兼容css3），让css更加简洁、适应性更强，可读性更佳，更易于代码的维护等诸多好处

<style lang="scss">

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
