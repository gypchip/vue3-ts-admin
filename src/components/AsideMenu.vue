<!--
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-11-21 16:43:14
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-03-13 10:11:53
-->
<template>
  <div class="aside">
    <div class="logo">深入学习Vue3+Ts</div>
    <ul >
      <li v-for="menu in menuList" :key="menu.path" @click="goPage(menu.path)">{{menu.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "AsideMenu",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const menuList = reactive([
      { name: "分析看板", path: "/" },
      { name: "图表分析", path: "/analysis-ascribe" },
    ])
    const goPage = function (path: string) {
      router.push({ path });
    }
    return {
      menuList,
      goPage
    }
  },
});
</script>

<style scoped>
.logo {
  font-size: 16px;
  color: #fff;
  margin-bottom: 25px;
  font-weight: 600;
}
.aside {
  padding: 16px;
  box-sizing: border-box;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(143deg, #063153 0%, #6A8DA6 67%, #5D82A3 92%, #224967 100%);
  overflow: auto;
}
ul li {
  list-style: none;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #CDE7F7;
  line-height: 22px;
}
</style>