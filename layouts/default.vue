<template>
  <Nav :background="props.background" />
  <slot />
  <LayoutFooter />
</template>

<script setup>
const props = defineProps({
  background: String,
});
</script>
