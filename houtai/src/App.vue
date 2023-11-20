<script setup>
import { watch, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let index = ref(0);
let names = ref();
let others = ref();
let select = ref();

// const handleOpen = (key, keyPath) => {
//   console.log(key, keyPath);
// };
// const handleClose = (key, keyPath) => {
//   console.log(key, keyPath);
// };

function goLogin() {
  router.push("/login");
}

watch(() => {
  watch(
    () => router.currentRoute.value,
    (newValue) => {
      index.value = newValue.meta.index;
      names.value = newValue.meta.names;
      others.value = newValue.meta.others;
      select.value = window.localStorage.getItem("select");
    },
    { immediate: true }
  );
});
</script>

<template>
  <el-row class="tac">
    <!-- 左边 -->
    <el-col :span="5" class="left">
      <h5 class="mb-2" v-if="select == 1" style="margin-left: 50px; color: white">
        管理员后台管理系统
      </h5>
      <h5 class="mb-2" v-if="select == 2" style="margin-left: 50px; color: white">
        店铺后台管理系统
      </h5>
      <!-- 管理员 -->
      <el-menu
        v-if="select == 1"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="index"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>信息管理</span>
          </template>
          <RouterLink to="/user"
            ><el-menu-item index="1-1">用户信息管理</el-menu-item></RouterLink
          >
          <RouterLink to="/shop"
            ><el-menu-item index="1-2">店铺信息管理</el-menu-item></RouterLink
          >
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>信息审核</span>
          </template>
          <RouterLink to="/useraudit"
            ><el-menu-item index="2-1">用户信息审核</el-menu-item></RouterLink
          >
          <el-sub-menu index="2-2">
            <template #title>店铺信息</template>
            <RouterLink to="/storeaudit"
              ><el-menu-item index="2-2-1"
                >店铺信息审核</el-menu-item
              ></RouterLink
            >
            <RouterLink to="/goodaudit"
              ><el-menu-item index="2-2-2"
                >商品信息审核</el-menu-item
              ></RouterLink
            >
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
      <!-- 商家 -->
      <el-menu
        v-if="select == 2"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="index"
        text-color="#fff"
      >
        <RouterLink to="/good"
          ><el-menu-item index="3-1">商品管理</el-menu-item></RouterLink
        >
        <RouterLink to="/order"
          ><el-menu-item index="3-2">订单管理</el-menu-item></RouterLink
        >
        <RouterLink to="/set"
          ><el-menu-item index="3-3">商铺设置</el-menu-item></RouterLink
        >
      </el-menu>
    </el-col>
    <!-- 右边 -->
    <el-col :span="19" class="right">
      <div class="title">
        <img src="./assets/tou.png" @click="goLogin" alt="" />
      </div>
      <div class="main">
        <div class="navs">
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-if="names != ''">{{
              names
            }}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="others != ''">{{
              others
            }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <RouterView></RouterView>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
a {
  text-decoration: none;
}
.tac {
  box-sizing: border-box;
}
.left {
  height: 97.5vh;
  background-color: #545c64;
}
.right {
  height: 97.5vh;
  border: 2px solid #545c64;
  box-sizing: border-box;
}
.right .title {
  width: 100%;
  height: 60px;
  background-color: #545c64;
  position: relative;
}
.right .title img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: white;
  border: 2px solid white;
  position: absolute;
  top: 10px;
  right: 10px;
}
.right .main .navs {
  width: 90%;
  margin: 10px auto;
  padding: 15px 0;
  border-bottom: 2px solid #545c64;
}
</style>
