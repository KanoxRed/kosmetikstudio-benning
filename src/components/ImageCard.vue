<template>
  <BaseCard @perform-action="$emit('performAction')">
    <h2 class="text-error text-xl font-bold truncate">{{ props.title }}</h2>
    <br />
    <img
      class="flex w-full justify-self-center"
      :src="`src/assets/${props.imageSrc}.jpg`"
      width="300"
      alt="Bild"
    />
    <slot />
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import { defineProps } from 'vue'

const props = defineProps({ title: String, imageSrc: String })

const emit = defineEmits<{
  performAction: []
}>()
</script>
