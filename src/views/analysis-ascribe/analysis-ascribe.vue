<!--
 * @Description: 归因分析
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-11-21 18:06:45
 * @LastEditors: ganyanping
 * @LastEditTime: 2022-12-28 15:59:13
-->
<template>
  <div>
    <SerachForm @add="handleAdd"/>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import SerachForm from "@/components/SerachForm.vue";
import { groupList } from '@/api'
export default defineComponent({
  name: "analysis-ascribe",
  components: {
    SerachForm
  },
  setup() {
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
    return {
      handleAdd,
      serach
    }
  }
});
</script>