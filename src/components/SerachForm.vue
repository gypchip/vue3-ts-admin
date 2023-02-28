<!--
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-11-30 14:32:03
 * @LastEditors: ganyanping
 * @LastEditTime: 2022-12-06 16:34:04
-->
<template>
  <div class="top-box">
    <div class="left">
      <el-button class="add-btn" type="primary" :icon="Plus" @click="handleAdd">新建</el-button>
      <el-radio-group v-model="formData.type" type="border-card" >
        <el-radio-button label="全部" border />
        <el-radio-button label="我创建的" border />
        <el-radio-button label="分享给我的" border />
      </el-radio-group>
    </div>
    <div class="right">
      <el-input v-model="formData.searchData" placeholder="创建人/图表名称">
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { Plus, Search } from '@element-plus/icons-vue'
export default defineComponent({
  name: "SearchForm",
  setup(props, { emit }) {
    const formData = reactive({
      type: '全部',
      searchData: ''
    })
    const handleAdd = function() {
      emit('add')
    }
    return {
      Plus,
      Search,
      formData,
      handleAdd
    }
  },
});
</script>

<style lang="scss" scoped >
.top-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .add-btn {
      margin-right: 16px;
    }
    :deep(.el-radio-button__original-radio:checked+.el-radio-button__inner){
      color:var(--el-color-primary);
      background-color: #E8F2FF;
      border-color: var(--el-color-primary);
      box-shadow: -1px 0 0 0 var(--el-color-primary);
    }
  }
}
 
</style>