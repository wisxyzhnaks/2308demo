<script setup>
import { RouterLink, RouterView } from "vue-router";
let onclick = ()=>{
	window.localStorage.setItem("token",false)
}
</script>

<template>
  <nav>
    <div class="left">
      username
      <div class="box">
        <img src="./assets/home/tou.jpg" alt="">
        <div><p>账号管理</p>|<p @click="onclick"><RouterLink to="/login" >退出</RouterLink></p></div>
      </div>
    </div>
    <div class="right">
      <RouterLink to="/">
        <img src="./assets/2.png" alt="" /> 淘宝网首页</RouterLink
      >
      <RouterLink to="/cart">购物车</RouterLink>
      <RouterLink to="/collect">
        <img src="./assets/3.png" alt="" /> 收藏夹</RouterLink
      >
      <RouterLink to="/sort">商品分类</RouterLink>
      <RouterLink to="/shop">免费开店</RouterLink>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  height: 35px;
  background: #f5f5f5;
  padding: 0 5%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav > .right {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
}
.right > a {
  text-decoration: none;
  color: gray;
}
.right > a > img {
  vertical-align: middle;
}
.right > a:hover {
  color: #e0620d;
}
.left {
  height: 100%;
  line-height: 35px;
  position: relative;
  cursor: pointer;
  color: gray;
}
.left > .box {
  width: 200px;
  height: 100px;
  background: white;
  position: absolute;
  top: 35px;
  left: 0;
  display: none;
  align-items: center;
  justify-content: space-evenly;
}
.left:hover {
  color: #e0620d;
}
.left:hover > .box {
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
}
.box>img{
  display: block;
  width: 52px;
  height: 52px;
  border-radius: 52px;
}
.box>div{
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
}
</style>
