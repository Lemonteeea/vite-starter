<template>
  <h1>Home Page</h1>
  <p>{{ message }}</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const message = ref("hello");
</script>
