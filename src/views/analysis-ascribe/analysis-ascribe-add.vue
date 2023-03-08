<!--
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-12-06 16:44:47
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-03-07 15:59:41
-->
<template>
  <div class="content">
    <div class="search-from-wrap">
      <add-header></add-header>
      <el-form label-width="70px" label-position="left" :model="formData" ref="formDom">
        <GroupItem :data="formData.crowds" />
        <FilterItem :data="formData.filters"/>
      </el-form>
      <div class="btn-group">
        <el-button type="primary" @click="searchData">查询</el-button>
        <el-button @click="resetData(formDom)">重置</el-button>
      </div>
    </div>
    <div class="chart-wrap">
        <div class="action-bar">
          <div>
            <el-date-picker
              v-model="formData.times"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              :size="size"
            />
          </div>
          <div class="chart-type">
            <div 
              v-for="(item, key) in chartTypeMap"
              :key="key"
              :class="['chart-btn', chartType === item.type ? 'active' : '']"
              @click="setChartType(item.type)">
              <svg-icon :icon-class="item.name" />
            </div>
          </div>
        </div>
        <div class="chart-box">
          <component :is="currentCom.com"/>
        </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import AddHeader from "../components/add-header.vue";
import GroupItem from "../components/form/group-item.vue"
import FilterItem from "../components/form/filter-item.vue"
import LineChart from "../components/charts/line-chart.vue"
import BarChart from "../components/charts/bar-chart.vue"
import { reactive, ref, Ref, computed,markRaw } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formData = reactive({
  crowds: {
    type: 0,
    crowds: [],
    tagSystem: '',
    tagName: []
  },
  times: '',
  filters: []
})
const chartTypeMap = reactive([
  {
    type: 0,
    name: "line-chart",
    noDataSvg: "no-data-line",
    com: markRaw(LineChart)
  },
  {
    type: 1,
    name: "bar-chart",
    noDataSvg: "no-data-bar",
    com: markRaw(BarChart)
  },
])
let chartType = ref(0)
let currentCom = reactive({
  com:chartTypeMap[0].com
})
const formDom = ref<FormInstance>()
const size = ref<'default' | 'large' | 'small'>('default')
// 查询数据
const searchData = ()=>{
  console.log(formData)
}
// const resetData = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.resetFields()
// }
// 重置表单数据
const resetData = () => {
  formData.times = ""
  formData.filters = []
  formData.crowds.type = 0
}
// 设置图表类型
const setChartType = (type)=> {
  chartType.value = type
  currentCom.com = chartTypeMap[type].com
  console.log(chartType)
}
</script>

<style lang="scss">
.content {
  height: 100%;
  // background-color: ;
  .search-from-wrap {
    background: #fff;
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 5px 0px;
    padding: 16px 16px 0px;
    border-radius: 4px;
  }
  .btn-group {
    padding: 16px 0;
  }
  .chart-wrap {
    background: #fff;
    margin-top: 16px;
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 5px 0px;
    padding: 16px ;
    border-radius: 4px;
    .action-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 16px;
      border-bottom: 1px solid rgb(248, 248, 250);
      .chart-type {
        display: flex;
        .chart-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          background: #f6f7fa;
          border-radius: 2px;
          margin-left: 6px;
          cursor: pointer;
          color: #4e5866;
        }
        .active {
          background: rgb(3, 111, 174);
          color: #fff;
        }
      }
    }
    .chart-box {
      height:300px
    }
  }
}
</style>