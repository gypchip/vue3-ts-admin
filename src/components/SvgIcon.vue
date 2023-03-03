<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
      <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup name="SvgIcon">
interface Props {
  iconClass: string
  className: string
}
const { svgClass } = defineProps<Props>();

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
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>
