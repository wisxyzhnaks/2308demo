<template>
  <div class="shop">
    <el-form :model="form" :disabled=" form.actives == '审核中'? true : false " @submit.native.prevent label-width="120px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="店铺logo">
        <img style="display:block; width:100px; height:100px; margin:0 10px;" :src="logos" alt="">
        <input type="file" ref="upload" :disabled=" form.actives == '审核中'? true : false " />
        <button @click="upImg" :disabled=" form.actives == '审核中'? true : false ">头像上传</button>
      </el-form-item>
      <el-form-item label="店铺类型">
        <el-radio-group v-model="form.resource">
          <el-radio label="1" />
          <el-radio label="2" />
          <el-radio label="3" />
          <el-radio label="4" />
          <el-radio label="5" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input v-model="form.title" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, onMounted } from "vue";

let that = getCurrentInstance().appContext.config.globalProperties;

const form = reactive({
  name: "",
  resource: "",
  img: "",
  title:"",
  actives:""
});
let logos = ref();

function onSubmit() {
  form.actives = '审核中';
  that.$http.setShop(form).then((data)=>{
    form.name = data[0].nname;
    form.img = data[0].nlogo;
    form.resource = data[0].ntype;
    form.title = data[0].ntitle;
    form.actives = data[0].actives;
    logos.value = `http://47.109.51.95:3000/images/${form.img}`
  })
}

//logo上传
let upload = ref();

function upImg() {
  let obj = new FormData();
  obj.append("file", upload.value.files[0]);
  that.$http.setImg(obj).then((res) => {
    form.img = res;
    logos.value = `http://47.109.51.95:3000/images/${form.img}`
  });
}

onMounted(()=>{
  that.$http.getShop().then((data)=>{
    form.name = data[0].name;
    form.img = data[0].logo;
    form.resource = data[0].type;
    form.title = data[0].title;
    form.actives = data[0].actives;
    logos.value = `http://47.109.51.95:3000/images/${form.img}`
  })
})
</script>


<style scoped>
.shop {
  width: 90%;
  height: auto;
  margin: 10px auto;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid black;
}
.search {
  width: 40%;
  height: 30px;
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.search input {
  width: 200px;
  height: 20px;
  margin: 0 20px;
}
</style>