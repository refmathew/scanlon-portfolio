<script setup>
const prop = defineProps({
	heading: {
		type: String,
		required: true,
	},
	// { name: "LinkedIn", address: "https://linkedin.com/john"}
	links: {
		type: Array,
		required: true,
	},
	shouldOpenNewTab: {
		type: Boolean,
	},
});

// ============================================================================>
// ===   Reveal animation   =====================================================>
// ============================================================================>

const $linksHeading = ref(null);
const $linksList = ref(null);

onMounted(() => {
	useRevealAnimation(
		$linksHeading.value,
		"animation-from-top--revealed",
		$linksList.value
	);
	useRevealAnimation($linksList.value, "animation-from-bottom--revealed");
});
</script>

<template>
	<div class="links">
		<p
			class="links__heading animation-from-top--hidden"
			ref="$linksHeading"
			v-text="heading"
		/>
		<nav class="links__list animation-from-bottom--hidden" ref="$linksList">
			<NuxtLink
				class="links__list-item"
				v-for="link in links"
				:to="link.address"
				>{{ link.name }}</NuxtLink
			>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.links {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	@include a.m-for-size(desktop) {
		align-items: flex-start;
	}

	&__heading {
		font-size: 1.6rem;
	}
	&__list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		color: a.$v-accent-5;
		@include a.m-for-size(desktop) {
			align-items: flex-start;
		}
	}
	&__list-item {
		position: relative;
		transition: color 200ms ease-in-out, transform 200ms ease-in-out;

		&:hover {
			transform: translateX(0.4rem);
			color: a.$v-accent-1;
		}

		// &::before {
		// 	content: "";
		// 	position: absolute;
		// 	top: 0;
		// 	right: 0;
		// 	width: 100%;
		// 	height: 0.2rem;
		// 	background-color: a.$v-accent-1;
		// 	opacity: 0;
		// 	transform: translateY(-0.8rem);
		// 	transition: transform 320ms ease-in-out, opacity 320ms ease-in-out;
		// }

		// &:hover::before {
		// 	opacity: 1;
		// 	transform: translateY(-0.4rem);
		// }

		// &::after {
		// 	content: "";
		// 	position: absolute;
		// 	bottom: 0;
		// 	right: 0;
		// 	width: 100%;
		// 	height: 0.2rem;
		// 	background-color: a.$v-accent-1;
		// 	opacity: 0;
		// 	transform: translateY(0.8rem);
		// 	transition: transform 320ms ease-in-out, opacity 320ms ease-in-out;
		// }

		// &:hover::after {
		// 	opacity: 1;
		// 	transform: translateY(0.4rem);
		// }
	}
}
</style>
