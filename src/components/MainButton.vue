<script setup lang="ts">
import { ElButton } from "element-plus";
const emits = defineEmits(["click"]);
function click() {
  emits("click");
}
</script>

<template>
  <ElButton class="primary-button" type="primary" @click="click">
    <slot />
  </ElButton>
</template>

<style scoped lang="scss">
.primary-button {
  @apply bg-green-600 hover:bg-green-500;
}
</style>
