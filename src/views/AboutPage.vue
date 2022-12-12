<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<template>
  <h1>{{ userStore.user?.username || "未登录" }}</h1>
</template>
