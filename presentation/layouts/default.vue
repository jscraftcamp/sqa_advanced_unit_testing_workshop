<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  background: {
    default: '',
  },
  backgroundSize: {
    default: 'cover',
  },
})

const style = computed(() => {
  if (!props.background)
    return { backgroundColor: '#fff', minHeight: '100%' }
  const isColor = props.background[0] === '#' || props.background.startsWith('rgb')
  if (isColor)
    return { background: props.background, minHeight: '100%' }
  const base = import.meta.env.BASE_URL ?? '/'
  const url = props.background.startsWith('/') ? base + props.background.slice(1) : props.background
  return {
    color: 'white',
    backgroundImage: `url("${url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: props.backgroundSize,
    minHeight: '100%',
  }
})
</script>

<template>
  <div class="slidev-layout default" :style="style">
    <slot />
  </div>
</template>

<style scoped>
.slidev-layout.default {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
