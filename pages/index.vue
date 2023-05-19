<script setup>
import axios from 'axios';
import ContentService from '../services/content-service';


const homeContent = ref(undefined);
(async () => homeContent.value = await ContentService.FetchHomeContent())();

</script>

<template>
  <NuxtLayout background="blue">
  {{ homeContent }}
  </NuxtLayout>
</template>