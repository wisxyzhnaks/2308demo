<template>
  <div class="user">
    <div class="search">
      <input type="text" />
      <button>搜索</button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="id" width="120">
        <template #default="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column property="user" label="账号" width="120" />
      <el-table-column property="pass" label="密码" show-overflow-tooltip />
      <el-table-column label="设置">
        <template #default="scope">
          <el-button size="small" type="danger">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="handleChange"
      layout="prev, pager, next"
      :total="all"
      style="margin: 10px 0"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance, reactive } from "vue";

let that = getCurrentInstance().appContext.config.globalProperties;

const tableData = reactive([]);

let all = ref();

function handleChange(val){
  that.$http.getUser({ index: (val - 1) * 5 }).then((res) => {
    tableData.length = 0;
    res.forEach((item) => {
      tableData.push(item);
    });
  });
}

onMounted(() => {
  
  that.$http.userAll().then(res=>{
    all.value = res[0].num;
  })

  that.$http.getUser({ index: 0 }).then((res) => {
    tableData.length = 0;
    res.forEach((item) => {
      tableData.push(item);
    });
  });
});
</script>

<style scoped>
.user {
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
  height: 20px;
  margin: 0 20px;
}
</style>