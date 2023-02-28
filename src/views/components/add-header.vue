<template>
  <div class="title">
    <div class="left">
      <span class="left-border"></span>
      <span>{{title }}</span>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'add-header',
  props: {
    title: {
      type: String,
      default: '新建归因分析'
    }
  }
})
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 7px;
  padding-left: 16px;
  position: relative;
  line-height: 23px;
  .left {
    font-weight: 600;
    color: rgb(31, 34, 38);
    .left-border {
      display: block;
      position: absolute;
      left: 0px;
      top: 4px;
      width: 4px;
      height: 14px;
      border-radius: 2px;
      background: rgb(3, 111, 174);
    }
  }
}
</style>