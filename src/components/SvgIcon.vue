<template>
  <div
    v-if="isOnlineSvg"
    :style="{'--svg-icon-url': `url(${iconClass})`}"
    class="svg-icon svg-icon-online"
    :class="className"/>
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
      <use :xlink:href="`#icon-${iconClass}`" />
  </svg>
</template>

<script name="SvgIcon" lang="ts"  setup >
import { computed } from "vue"
interface Props {
  iconClass: string
  className?: string
}
const { iconClass,  className} = defineProps<Props>();
// 判断是否是在线图标
const isOnlineSvg = computed(()=>/^(https?:)/.test(iconClass))
// console.log(iconClass)
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  box-sizing: content-box;
}
.svg-icon-online {
  background: currentColor;
  mask-image: var(--svg-icon-url);
  -webkit-mask-image:var(--svg-icon-url);
  mask-size: cover;
  -webkit-mask-size: cover;
  display: inline-block;
}
</style>
