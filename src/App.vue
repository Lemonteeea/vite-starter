<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <div class="flex flex-col items-center text-xl p-10 gap-3">
    <RouterView></RouterView>
  </div>
</template>
