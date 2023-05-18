<script setup>
import ContentService from '../services/content-service';

const homeContent = ref({})
homeContent.value = await ContentService.FetchHomeContent();
</script>

<template>
  <NuxtLayout background="blue">
  {{ homeContent }}
  </NuxtLayout>
</template>