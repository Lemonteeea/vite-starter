<script setup lang="ts">
import { ElMenu, ElMenuItem } from "element-plus";
import { ref } from "vue";

const activeIndex = ref("1");
</script>

<template>
  <ElMenu
    class="flex items-center select-none px-3"
    :default-active="activeIndex"
    mode="horizontal"
  >
    🎉
    <ElMenuItem index="1">
      <RouterLink to="home">Home</RouterLink>
    </ElMenuItem>
    <ElMenuItem index="2">
      <RouterLink to="about">About</RouterLink>
    </ElMenuItem>
  </ElMenu>
</template>
