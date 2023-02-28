<template>
  <div class="form-col">
   <el-form-item label="人群" prop="crowds">
      <div style="display: flex;">
        <el-form-item ref="typeRule" class="form-item with120">
          <el-select v-model="data.type">
            <el-option label="全部用户" :value="0"></el-option>
            <el-option label="人群" :value="1"></el-option>
            <el-option label="标签" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="form-item" v-show="data.type === 1">
          <el-select :multiple="multiple" :multiple-limit="multipleLimit" v-model="data.crowds">
            <el-option v-for="item in crowdList" :key="item.value"  :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="form-item" v-show="data.type === 2">
           <el-select v-model="data.tagSystem">
            <el-option v-for="item in tagClassList" :key="item.value"  :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </div>
   </el-form-item>
  </div>
</template>

<script setup name="GroupItem" lang="ts">
import { onMounted, reactive } from 'vue'
interface IData {
 type: number
 crowds: []
 tagSystem: string
 tagName: []
}
interface Props {
  data: IData
  multiple?: boolean
  multipleLimit?: number
}
//props使用ts定义，并使用withDefaults设置默认值
const { data, multiple , multipleLimit } =  withDefaults(defineProps<Props>(), {
  multiple: true,
  multipleLimit: 3
});

// props使用ts interface定义
// const { data, multiple, multipleLimit } = defineProps<{
//   data: IData;
//   multiple?: boolean
//   multipleLimit?: number
// }>();

// vue3使用defineProps定义props
// const { data, multiple , multipleLimit } = defineProps({
//   data: {type: Object, required: true},
//   multiple: {type: Boolean, default: true},
//   multipleLimit: {type: Number,default: 3}
// });


const tagClassList = reactive([
  { label: 'MA', value: '01' },
  { label: '分析洞察', value: '02' }
])
const crowdList = reactive([
  {label: '分群1', value: '01'},
  {label: '分群2', value: '02'},
  {label: '青壮年分群', value: '03'},
  {label: '测试分群', value: '04'}
])
onMounted(()=> {
  console.log(multiple)
})

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
  .with120 {
    width: 120px
  }
</style>