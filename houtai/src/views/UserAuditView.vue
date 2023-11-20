<template>
    <div class="shop">
      <div class="search">
          <input type="text">
          <button>搜索</button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column label="Date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="Name" width="120" />
        <el-table-column
          property="address"
          label="Address"
          show-overflow-tooltip
        />
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small">Edit</el-button>
            <el-button size="small" type="danger">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000" style="margin:10px 0" />
    </div>
  </template>
  
  <script setup>
  import { getCurrentInstance, onMounted, ref } from "vue";
  let that = getCurrentInstance().appContext.config.globalProperties;
  
  const tableData = [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-08",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-06",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-07",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-07",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-07",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    }
  ];

  </script>
  
  <style scoped>
  .shop {
    width: 90%;
    height: auto;
    margin: 10px auto;
    border: 1px solid black;
  }
  .search{
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