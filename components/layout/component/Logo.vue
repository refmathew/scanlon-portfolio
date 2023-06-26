<script setup>
const props = defineProps({
	background: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<nuxt-link class="logo__wrapper" to="/">
		<img
			class="logo"
			v-if="props.background === 'blue'"
			src="@/assets/img/brand--white.svg"
		/>
		<img class="logo" v-else src="@/assets/img/brand--blue.svg" />
		<span class="logo__name"> John Scanlon </span>
	</nuxt-link>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.logo__wrapper {
	gap: 0.8rem;
	@include a.m-flex($aln: flex-end);
}

.logo {
	width: a.f-clampify(36, 48);

	&__name {
		margin-bottom: 0.2rem;
	}
}
</style>
