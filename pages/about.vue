<script setup>
import ContentService from "../services/content-service";
const aboutContent = useState("aboutContent");
(async () => (aboutContent.value = await ContentService.FetchAboutContent()))();
</script>
<template>
	<NuxtLayout background="white">
		<AboutSectionHeading />
		<AboutSectionMain />
	</NuxtLayout>
</template>
