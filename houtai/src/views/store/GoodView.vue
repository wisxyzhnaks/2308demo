<template>
  <div class="shop">
    <div class="search">
      <input type="text" />
      <el-button type="primary">搜索</el-button>
      <el-button type="success" @click="adds">添加商品</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="id" width="120">
        <template #default="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column property="name" label="Name" width="120" />
      <el-table-column property="title" label="title" width="120" />
      <el-table-column property="pic" label="pic" width="120" />
      <el-table-column property="url" label="url" show-overflow-tooltip>
        <template #default="scope"
          ><img
            style="display: block; width: 50px; height: 50px"
            :src="scope.row.url"
            alt=""
        /></template>
      </el-table-column>
      <el-table-column label="设置">
        <template #default="scope">
          <el-button
            size="small"
            v-if="scope.row.gactive === '已完成'"
            @click="changes(scope.row.id)"
            >修改</el-button
          >
          <el-button
            size="small"
            type="danger"
            v-if="scope.row.gactive === '已完成'"
            @click="deletes(scope.row.id)"
            >删除</el-button
          >
          <div v-else>审核中</div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleChange"
      background
      layout="prev, pager, next"
      :total="all"
      style="margin: 10px 0"
    />
    <!-- 添加 -->
    <el-dialog v-model="dialogFormVisible" title="添加商品信息">
      <el-form :model="form" @submit.native.prevent label-width="120px">
        <el-form-item label="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="pic">
          <el-input v-model="form.pic" />
        </el-form-item>
        <el-form-item label="url">
          <img
            style="display: block; width: 100px; height: 100px; margin: 0 10px"
            :src="logos"
            alt=""
          />
          <input type="file" ref="upload" />
          <button @click="upImg">头像上传</button>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="addGood"> 添加 </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
    >
      <span>是否要删除该商品</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="deleteGood()"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog v-model="changeFormVisible" title="商品信息修改">
      <el-form :model="form" @submit.native.prevent label-width="120px">
        <el-form-item label="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="pic">
          <el-input v-model="form.pic" />
        </el-form-item>
        <el-form-item label="url">
          <img
            style="display: block; width: 100px; height: 100px; margin: 0 10px"
            :src="logos"
            alt=""
          />
          <input type="file" ref="upload" />
          <button @click="upImg">头像上传</button>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="changeFormVisible = false">取消</el-button>
          <el-button type="primary" @click="changeGood"> 修改 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, getCurrentInstance } from "vue";

let that = getCurrentInstance().appContext.config.globalProperties;

const tableData = reactive([]);

const dialogFormVisible = ref(false);

const dialogVisible = ref(false);

const changeFormVisible = ref(false);

let currentIndex = ref();

let all = ref();

let upload = ref();
let logos = ref();

let form = reactive({
  id: "",
  name: "",
  title: "",
  pic: "",
  url: "",
  gactive: "",
});

function handleChange(val) {
  that.$http.getGood({ index: (val - 1) * 5 }).then((res) => {
    tableData.length = 0;
    res.forEach((item) => {
      tableData.push(item);
    });
  });
}

function upImg() {
  let obj = new FormData();
  obj.append("file", upload.value.files[0]);
  that.$http.setImg(obj).then((res) => {
    form.url = res;
    logos.value = `http://47.109.51.95:3000/images/${form.url}`;
    console.log(logos.value);
  });
}

//添加商品
function adds() {
  dialogFormVisible.value = true;
  form = reactive({
    id: "",
    name: "",
    title: "",
    pic: "",
    url: "",
    gactive: "",
  });
}

function addGood() {
  form.gactive = "添加";
  that.$http.addGood(form).then((res) => {
    tableData.length = 0;
    res.forEach((item) => {
      tableData.push(item);
    });
    dialogFormVisible.value = false;
  });
}

//修改商品
function changes(index) {
  changeFormVisible.value = true;
  currentIndex.value = index;
  tableData.forEach((item) => {
    if (item.id == index) {
      form.id = index;
      form.name = item.name;
      form.title = item.title;
      form.pic = item.pic;
      form.gactive = "修改";
      logos.value = item.url;
    }
  });
}

function changeGood() {
  that.$http.changeGood(form).then(res=>{
    tableData.length = 0;
    res.forEach((item) => {
      item.url = `http://47.109.51.95:3000/images/${item.url}`;
      tableData.push(item);
    });
    changeFormVisible.value = false;
  })
}

//删除商品
function deletes(index) {
  dialogVisible.value = true;
  currentIndex.value = index;
}

function deleteGood() {
  that.$http.deleteGood({index:currentIndex.value}).then(res=>{
    tableData.length = 0;
    res.forEach((item) => {
      tableData.push(item);
    });
    dialogVisible.value = false;
  })
}

onMounted(() => {
  //商品总量
  that.$http.goodNum().then((res) => {
    all.value = res[0].num;
  });
  //首页商品
  that.$http.getGood({ index: 0 }).then((res) => {
    tableData.length = 0;
    res.forEach((item) => {
      item.img = item.url;
      item.url = `http://47.109.51.95:3000/images/${item.url}`;
      tableData.push(item);
    });
  });
});
</script>

<style scoped>
.shop {
  width: 90%;
  height: auto;
  margin: 10px auto;
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
  height: 25px;
  margin: 0 20px;
}
</style>