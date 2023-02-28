<!--
 * @Description: 归因分析新建
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-11-21 18:06:45
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-02-28 14:32:14
-->
<template>
  <div class="content">
    <div class="search-from-wrap">
      <add-header></add-header>
      <el-form></el-form>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddHeader from "../components/add-header.vue";
export default defineComponent({
  name: "analysis-ascribe",
  components: {
    AddHeader
  },
  setup() {
   
  },
});
</script>

<style lang="scss">
.content {
  height: 100%;
  // background-color: ;
}
</style>