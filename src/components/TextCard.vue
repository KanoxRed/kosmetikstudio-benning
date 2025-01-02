<template>
  <BaseCard>
    <h2 class="text-left text-error text-xl font-bold">{{ props.title }}</h2>
    <br />
    <div class="lg:flex lg:flex-row w-full h-3/4">
      <div class="flex justify-center">
        <img :src="`${base}assets/${props.imageSrc}.jpg`" width="300" alt="Bild" />
      </div>
      <div class="text-center w-full p-4">
        <slot />
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import { defineProps } from 'vue'

const base = import.meta.env.BASE_URL

const props = defineProps({ title: String, imageSrc: String })
</script>
