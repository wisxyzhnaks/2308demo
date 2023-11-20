<template>
  <div class="shop">
    <div class="search">
      <input type="text" />
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="订单id" width="120">
        <template #default="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column property="time" label="时间" width="120" />
      <el-table-column property="location" label="地址" width="120" />
      <el-table-column property="name" label="商品名称" width="120" />
      <el-table-column property="num" label="商品数量" width="120" />
      <el-table-column property="user" label="购买用户" show-overflow-tooltip />
      <el-table-column label="设置">
        <template #default="scope">
          <el-button
            size="small"
            type="success"
            v-if="scope.row.oactive === '待发货'"
            @click="fh(scope.row.id)"
            >发货</el-button
          >
          <div v-else>{{ scope.row.oactive }}</div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleChange"
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
  that.$http.getOrder({ index: (val - 1) * 5 }).then((res) => {
    tableData.length = 0;
    res.forEach((item) => {
      tableData.push(item);
    });
    console.log(tableData);
  });
}

//发货
function fh(val) {
  ElMessageBox.confirm("是否已经发货？", "发货", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      that.$http.orderfh({ id: val }).then((res) => {
        tableData.length = 0;
        res.forEach((item) => {
          tableData.push(item);
        });
      });
      ElMessage({
        type: "success",
        message: "已发货",
      });
    })
    .catch(() => {});
}

onMounted(() => {
  that.$http.getOrder({ index: 0 }).then((res) => {
    tableData.length = 0;
    res.forEach((item) => {
      tableData.push(item);
    });
  });

  that.$http.orderAll().then((res) => {
    all.value = res[0].num;
    // console.log(res)
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