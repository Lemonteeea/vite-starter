<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <div class="flex flex-col justify-center text-4xl p-10">
    <RouterView></RouterView>
  </div>
</template>
