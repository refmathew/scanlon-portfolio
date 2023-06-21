<script setup>
import { useElementBounding } from "@vueuse/core";

const headerHeight = ref(null);
onMounted(() => {
	const $header = document.querySelector(".header");
	const { height } = useElementBounding($header);

	watch(height, (newHeaderHeight) => {
		headerHeight.value = `${newHeaderHeight}px`;
	});
});
</script>

<template>
	<NuxtLayout background="white">
		<div class="header-placeholder" />
		<main>
			<ContactSectionMain />
		</main>
	</NuxtLayout>
</template>

<style lang="scss" scoped>
.header-placeholder {
	width: 100%;
	height: v-bind(headerHeight);
}
</style>
