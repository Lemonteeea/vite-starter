<script setup lang="ts">
import { ref } from "vue";

const message = ref("hello");
</script>

<template>
  <h1>Home Page</h1>
  <p>{{ message }}</p>
</template>
