<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <div class="left">username</div>
    <div class="right">
      <RouterLink to="/">淘宝网首页</RouterLink>
      <RouterLink to="/cart">购物车</RouterLink>
      <RouterLink to="/collect">收藏夹</RouterLink>
      <RouterLink to="/sort">商品分类</RouterLink>
      <RouterLink to="/shop">免费开店</RouterLink>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
nav{
  width: 100%;
  height: 35px;
  background: #f5f5f5;
  padding: 0 5%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav>.right{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
a{
  text-decoration: none;
}
</style>
