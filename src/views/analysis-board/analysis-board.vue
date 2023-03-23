<!--
 * @Description: 分析看板页
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-11-21 15:44:38
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-03-13 09:20:28
-->
<template>
  <div class="board-box">
    <!-- 分析看板 -->
    <div class="chart-warp" v-for="item in list" :key="item.id">
      <component :is="item.com"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LineChart from "../components/charts/line-chart.vue"
import BarChart from "../components/charts/bar-chart.vue"
import { reactive, markRaw } from "vue"

const list = reactive([
  {
    id: 1,
    name: '折线图',
    date: '2023-03-13',
    com: markRaw(LineChart)
  },
  {
    id: 2,
    name: '柱状图',
    date: '2023-03-13',
    com: markRaw(BarChart)
  }
])

</script>

<style lang="scss">
.board-box {
  background: #fff;
  height: 100%;
  border-radius: 4px;
  padding: 16px;
}
.chart-warp {
  width: 100%;
  height:300px;
  border: 1px solid rgb(235, 238, 245);
  // padding: 16px 16px 0px;
  border-radius: 4px;
  margin-bottom: 16px;
}
</style>
