<!--
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-10-26 10:20:06
 * @LastEditors: ganyanping
 * @LastEditTime: 2022-11-30 15:08:54
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AsideMenu />
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">Header</div>
          <div class="userInfo"></div>
        </el-header>
        <el-main>
          <div class="container">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import AsideMenu from "@/components/AsideMenu.vue";
export default defineComponent({
  name: "App",
  components: {
    AsideMenu,
  },
  setup() {
    // ref 定义基本类型响应数据
    let count = ref(0);
    // reactive定义对象响应数据
    const user = reactive({
      name: "甘甘",
      age: 27,
    });
    function updateCount() {
      count.value++;
    };
    function updateUser() {
      user.name += "==";
      user.age = 30
    };
    return {
      count,
      updateCount,
      user,
      updateUser,
    };
  },
});
</script>

<style scoped>
.common-layout {
  font-size: 13px;
  color: #303133;
  font-family: Helvetica Neue,Helvetica,Arial,PingFang SC,Microsoft Yahei,WenQuanYi Micro Hei,sans-serif;
}
.el-header {
  padding: 0;
  height: 52px;
  background: rgba(230,243,250,0.5);
  display: flex;
  justify-content: space-between;
}
.el-main {
  background-color: #F5F6F7;
  padding: 16px;
}
.container {
  background-color: #fff;
  height: 100%;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #F2F6FC;
}
</style>
