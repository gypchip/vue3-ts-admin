<template>
  <div ref="chartDom" class="chart-box"></div>
</template>

<script lang="ts" setup name="line-chart">
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
        type: 'line',
        data: [6000,7000,9700,13500,13500]
      }
    ]
  }
  myChart.setOption(option)
  console.log("linechart")
})
</script>

<style lang="scss">
.chart-box {
  height: 300px;
  width: 100%;
}
</style>