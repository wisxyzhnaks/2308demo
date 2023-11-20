<template>
  <div class="shop">
    <div class="search">
      <input type="text" />
      <button>搜索</button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="店铺id" width="120">
        <template #default="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column property="nname" label="店铺新名称" width="120" />
      <el-table-column property="" label="店铺新名称" width="120">
        <template #default="scope">
          <img
            style="display: block; width: 50px; height: 50px"
            :src="scope.row.nlogo"
            alt=""
          />
        </template>
      </el-table-column>
      <el-table-column property="ntype" label="店铺新类型" width="120" />
      <el-table-column
        property="ntitle"
        label="店铺新简介"
        show-overflow-tooltip
      />
      <el-table-column label="设置">
        <template #default="scope">
          <el-button size="small" type="success" @click="access(scope.row.id)"
            >同意</el-button
          >
          <el-button size="small" type="danger" @click="disaccess(scope.row.id)"
            >驳回</el-button
          >
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
import { onMounted, reactive, ref, getCurrentInstance } from "vue";

import { ElMessage, ElMessageBox } from "element-plus";

let that = getCurrentInstance().appContext.config.globalProperties;

const tableData = reactive([]);

let all = ref();

function handleChange(val) {
  that.$http.shShop({ index: (val - 1) * 5 }).then((res) => {
    tableData.length = 0;
    res.forEach((item) => {
      item.nlogo = `http://47.109.51.95:3000/images/${item.nlogo}`;
      tableData.push(item);
    });
  });
}
//同意
function access(index) {
  ElMessageBox.confirm("审核是否通过", "提示", {
    confirmButtonText: "同意",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      that.$http.shone({ index: index }).then((res) => {
        tableData.length = 0;
        res.forEach((item) => {
          item.nlogo = `http://47.109.51.95:3000/images/${item.nlogo}`;
          tableData.push(item);
        });

      });
    })
    .catch(() => {});
}
//驳回
function disaccess(index) {
  ElMessageBox.confirm("审核是否驳回", "提示", {
    confirmButtonText: "同意",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    that.$http.shtwo({ index: index }).then((res) => {
      tableData.length = 0;
      res.forEach((item) => {
        item.nlogo = `http://47.109.51.95:3000/images/${item.nlogo}`;
        tableData.push(item);
      });
      ElMessage({
        type: "success",
        message: "成功驳回",
      });
    });
  });
}

onMounted(() => {
  that.$http.shShop({ index: 0 }).then((res) => {
    tableData.length = 0;
    res.forEach((item) => {
      item.nlogo = `http://47.109.51.95:3000/images/${item.nlogo}`;
      tableData.push(item);
    });
  });

  that.$http.shAll().then((res) => {
    all.value = res[0].num;
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
  height: 20px;
  margin: 0 20px;
}
</style>