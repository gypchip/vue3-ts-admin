<!--
 * @Description: 归因分析
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-11-21 18:06:45
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-03-15 16:00:13
-->
<template>
  <div class="content">
    <SerachForm @add="handleAdd"/>
    <div class="table-box">
      <el-table :data="tableData" stripe style="width: 100%" height="100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick"
              >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-box">
        <el-pagination layout="prev, pager, next" :total="50" />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SerachForm from "@/components/SerachForm.vue";
import { groupList } from '@/api'
export default defineComponent({
  name: "analysis-ascribe",
  components: {
    SerachForm
  },
  setup() {
    const a = ref('a')
    const b = reactive([{a:name}])
    const route = useRoute()
    const router = useRouter()
    const handleAdd = ()=>{
      const path = route.path + '-add'
      router.push({ path })
    }
    const serach = ()=> {
      groupList().then((res:any)=>{
        console.log(res)
      })
    }
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    const handleClick = ()=> {
      console.log(a.value)
      console.log(b)
    }
    return {
      handleAdd,
      serach,
      tableData,
      handleClick
    }
  }
});
</script>

<style lang="scss">
.content {
  height: 100%;
  background: #fff;
  padding: 16px;
}
.table-box {
  margin-top: 16px;
  height: calc(100% - 100px)
}
.pagination-box {
  text-align: right;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}
</style>