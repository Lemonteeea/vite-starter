<script lang="ts" setup>
import { ref } from "vue";
import AppTooltip from "@/components/AppTooltip.vue";
import MainButton from "@/components/MainButton.vue";

const showMessage = ref(false);
const message = ref("hello");

function toggle() {
  showMessage.value = !showMessage.value;
}
</script>

<template>
  <div class="flex flex-col justify-center items-center p-10 gap-5">
    <AppTooltip content="click to show message" placement="top">
      <MainButton @click="toggle">ClickMe</MainButton>
    </AppTooltip>
    <p v-show="showMessage">{{ message }}</p>
  </div>
</template>
