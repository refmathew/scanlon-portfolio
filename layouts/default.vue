<template>
  <Nav :background="props.background"/>
  <slot />
</template>

<script setup>
const props = defineProps({
  background: String
})
</script>