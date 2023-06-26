<script setup></script>

<template>
	<NuxtLayout background="blue">
		<main class="home-page">
			<IndexPreLoader />
			<IndexSecHero />
			<IndexSectionStatement />
			<IndexSectionServices />
			<IndexSectionTestimonials />
			<IndexSectionWork />
		</main>
	</NuxtLayout>
</template>

<style scoped lang="scss">
@use "@/assets/styles/abstracts" as a;
.home-page {
	background-color: a.$v-accent-1;
	color: a.$v-primary;
	overflow-x: hidden;
}
</style>
