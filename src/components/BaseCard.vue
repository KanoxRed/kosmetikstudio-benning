<template>
  <div class="w-full h-full overflow-hidden">
    <Button @click="$emit('performAction')" class="w-full h-full">
      <div class="p-3 border-2 rounded-lg border-grey shadow-inner shadow-grey bg-white h-full">
        <slot />
      </div>
    </Button>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  performAction: []
}>()
</script>
