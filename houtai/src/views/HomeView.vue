<template>
  <div class="home" v-if="select == 1">
    <h4>欢迎管理员登录后台管理系统！</h4>
    <div ref="main" style="width: 100%; height: 400px"></div>
  </div>
  <div class="home" v-if="select == 2">欢迎店主登录后台管理系统！</div>
</template>

<script setup>
import { onMounted, reactive, ref, watch,getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import * as echarts from "echarts";

let that = getCurrentInstance().appContext.config.globalProperties;
let router = useRouter();
let select = ref();
let main = ref();
let option = reactive({
    title: {
      text: "店铺类型比例",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "1" },
          { value: 735, name: "2" },
          { value: 580, name: "3" },
          { value: 484, name: "4" },
          { value: 300, name: "5" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
});

function init() {
  var myChart = echarts.init(main.value);

  myChart.setOption(option);
}

onMounted(() => {
  that.$http.getType().then(res=>{
    res.forEach(item=>{
      option.series[0].data.length = 0;
      option.series[0].data.push({value:item.num,name:item.type});
      init();
    })
  })
});

watch(() => {
  watch(
    () => router.currentRoute.value,
    (newValue) => {
      // index.value = newValue.meta.index;
      // names.value = newValue.meta.names;
      // others.value = newValue.meta.others;
      select.value = window.localStorage.getItem("select");
    },
    { immediate: true }
  );
});
</script>

<style scoped>
.home {
  width: 90%;
  height: 75vh;
  margin: 10px auto;
  border: 1px solid black;
}
</style>