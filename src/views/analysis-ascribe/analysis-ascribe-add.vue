<!--
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-12-06 16:44:47
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-02-28 17:22:28
-->
<template>
  <div class="content">
    <div class="search-from-wrap">
      <add-header></add-header>
      <el-form lable-width="100px">
        <GroupItem :data="formData.crowds" />
      </el-form>
    </div>
  </div>
</template>


<script setup lang="ts">
import AddHeader from "../components/add-header.vue";
import GroupItem from "../components/form/group-item.vue"
import { reactive } from 'vue'

const formData = reactive({
  crowds: {
    type: 0,
    crowds: [],
    tagSystem: '',
    tagName: []
  }
})


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
}
</style>