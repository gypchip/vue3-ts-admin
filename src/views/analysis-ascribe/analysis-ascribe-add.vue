<template>
  <div class="content">
    <div class="search-from-wrap">
      <add-header></add-header>
      <el-form label-width="70px" label-position="left">
        <GroupItem :data="formData.crowds" />
        <FilterItem />
      </el-form>
      <div class="btn-group">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
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
        </div>
        <div class="chart-box">
        </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import AddHeader from "../components/add-header.vue";
import GroupItem from "../components/form/group-item.vue"
// import FilterItem from "../components/form/filter-item.vue"
import { reactive, ref } from 'vue'

const formData = reactive({
  crowds: {
    type: 0,
    crowds: [],
    tagSystem: '',
    tagName: []
  },
  times: ''
})
const size = ref<'default' | 'large' | 'small'>('default')

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
    }
    .chart-box {
      height:300px
    }
  }
}
</style>