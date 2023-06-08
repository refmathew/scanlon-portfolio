<script setup>
import ContentService from "../services/content-service";
const homeContent = useState("homeContent");

(async () => (homeContent.value = await ContentService.FetchHomeContent()))();
</script>

<template>
  <NuxtLayout background="blue">
    <div class="home-page">
      <IndexPreLoader />
      <IndexSecHero />
      <IndexSectionStatement />
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@use "@/assets/styles/abstracts" as a;
.home-page {
  background-color: a.$v-accent-1;
  color: a.$v-primary;
}
</style>
