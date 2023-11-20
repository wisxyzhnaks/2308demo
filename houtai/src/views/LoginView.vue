<template>
  <div class="login">
    <main>
      <ul class="navs">
        后台管理系统登录
      </ul>
      <div class="box">
        <label for="">账号：<input type="text" v-model="user" /></label>
        <label for="">密码：<input type="password" v-model="pass" /></label>
        <label for="">
          登录权限：
          <select name="" id="" v-model="select">
            <option value="1">管理员</option>
            <option value="2">店主</option>
          </select>
        </label>
        <button @click="login">登录</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import {ref,getCurrentInstance} from 'vue';
import {useRouter} from 'vue-router';
import { ElMessage } from 'element-plus'

let select = ref(1);
let user = ref();
let pass = ref();
let router = useRouter();
let that = getCurrentInstance().appContext.config.globalProperties;
function login(){
  that.$http.getlogin({active:select.value,user:user.value,pass:pass.value}).then(res=>{
    if(res.msg === '登陆成功'){
      router.push('/');
      window.localStorage.setItem('select',select.value);
      window.localStorage.setItem('token',res.token);
      ElMessage({
        message:'登陆成功',
        type:'success'
      });
    }else{
      ElMessage('账号或密码错误');
    }
  })
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 97.5vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: url("../assets/login/bg.jpg") no-repeat center / 100% 100%;
}
main {
  width: 500px;
  height: 300px;
  background: #545c64;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -250px;
  border-radius: 150px 10px;
}
main .navs {
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  list-style: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 800;
  color: white;
}
main .box {
  width: 70%;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
main .box label {
  display: flex;
  align-items: center;
  width: 80%;
  height: 50px;
  color: white;
  font-size: 15px;
  font-weight: 600;
}
main .box label input {
  width: 80%;
  height: 30px;
}
main .box button {
  width: 70%;
  height: 40px;
  background: blue;
  color: white;
  border: 0;
}
</style>