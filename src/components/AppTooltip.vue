<script setup lang="ts">
import { ElTooltip, ElTooltipProps } from "element-plus";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends Pick<ElTooltipProps, "content" | "placement"> {}

const props = defineProps<Props>();
</script>

<template>
  <ElTooltip
    :content="props.content"
    :placement="props.placement"
    effect="light"
  >
    <slot />
  </ElTooltip>
</template>

<style scoped lang="scss">
.primary-button {
  @apply bg-green-600 hover:bg-green-500;
}
</style>
