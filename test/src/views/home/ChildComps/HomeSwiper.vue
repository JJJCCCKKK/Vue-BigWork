<template>
  <!--使用滑动控制，方便屏幕操作-->
  <van-swipe v-if="banners.length" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item,index) in banners" :key="index">
      <img v-lazy="item.img_url" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { defineComponent} from 'vue';
export default defineComponent({
  name: "HomeSwiper",
  props: {
    banners: Array,
    default(){
      return []
    }
  }
})
</script>

<style scoped>
img{
  width: 100%;
  height: auto !important;
}
</style>

