<template>
  <NuxtLink
    to="/contact"
    class="contact-button"
    :class="{ 'contact-button--blue': background === 'blue' }"
  >
    Reach Out
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  background: String,
});
</script>

<style lang="sass">
@use '@/assets/styles/abstracts' as a

.contact-button
  width: fit-content
  padding: 1.2rem 2rem
  border-radius: .4rem
  background-color: a.$v-primary
  color: a.$v-accent-1

.contact-button--blue
  background-color: a.$v-accent-1
  color: a.$v-primary
</style>
