<!--
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-12-26 16:59:40
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-03-07 13:56:06
-->

<template>
  <div class="form-col">
   <el-form-item label="筛选" prop="filters">
      <div style="display: flex;">
        <svg-icon icon-class="dc-add" className="addBtn" @click="handleAdd"/>
        <div class="attr-wrap">
          <div class="attr-item" v-for="(attr, index) in data" :key="index">
            <el-form-item  class="form-item">
              <el-select v-model="attr.name">
                <el-option 
                  v-for="option in attrList " 
                  :label="option.label" 
                  :value="option.value" 
                  :key="option.value">
                </el-option>
              </el-select>
            </el-form-item>
            <svg-icon  icon-class="del_icon" className="del-icon" @click="handleDel(index)"/>
          </div>
        </div>
      </div>
   </el-form-item>
  </div>
</template>

<script setup name="filterItem" lang="ts">
import { reactive, toRefs } from "vue"
const attrList = reactive([
  {label: '年龄', value: 0},
  {label: '性别', value: 1},
  {label: '电话', value: 2},
  {label: '学历', value: 3},
  {label: '姓名', value: 4},
])

interface Props {
  data: []
}
let  props = withDefaults(defineProps<Props>(), {
  data: []
})
// const data = reactive([])
const handleAdd = function() {
  // console.log(props)
  props.data.push({
    name: null
  })
}
const handleDel = function(index) {
  props.data.splice(index,1)
}
</script>

<style lang="scss">
  .form-col {
    width:100%;
    padding-top: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(248, 248, 250);
    display: flex;
    align-items: center;
  }
  .form-item {
    margin-right: 8px
  }
  .attr-item {
    display: flex;
    .el-form-item  {
       margin-bottom: 18px;
    }
    &:last-child {
      .el-form-item  {
        margin-bottom: 0px;
      }
    }
  }
  .addBtn {
    font-size: 20px;
    padding: 6px 0px;
    margin-right: 8px;;
  }
 .del-icon{
    font-size: 18px;
    cursor: pointer;
    color: rgb(192, 196, 204);
    margin-top: 8px;
  }
</style>