<!--
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2023-03-07 14:48:51
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-03-07 16:01:50
-->
<template>
  <div ref="chartDom" class="chart-box"></div>
</template>

<script lang="ts" setup name="bar-charts">
import * as echarts from 'echarts'
import { Ref, ref, onMounted } from 'vue'
// 获取定义的Dom模板
const chartDom:Ref<HTMLElement|any> = ref(null)
onMounted(()=>{
  const myChart = echarts.init(chartDom.value)
  const option = {
    tooltip: {},
    legend: {
      data: ['vue3'],
      bottom: '5'
    },
    xAxis: {
      data: ['2019','2020','2021','2022','2023']
    },
    yAxis: {},
    series: [
      {
        name: 'vue3',
        type: 'bar',
        barWidth: 20,
        data: [6000,7000,9700,13500,13500]
      }
    ]
  }
  myChart.setOption(option)
  console.log("barvhart")
})
</script>

<style lang="scss">
.chart-box {
  height: 300px;
  width: 100%;
}
</style>