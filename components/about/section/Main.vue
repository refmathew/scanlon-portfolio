<script setup>
const aboutContent = useState("aboutContent");

const $mainTitle = ref(null);
const $mainBody = ref(null);

onMounted(() => {
	const $mainBodyParagraphs = $mainBody.value.querySelectorAll(
		".main__body-paragraph"
	);

	useRevealAnimation(
		$mainTitle.value,
		"animation-from-top--revealed",
		$mainBodyParagraphs[0]
	);
	$mainBodyParagraphs.forEach(($mainBodyParagraph) => {
		useRevealAnimation($mainBodyParagraph, "animation-from-bottom--revealed");
	});
});
</script>

<template>
	<section class="main__container sct-ctr">
		<div class="main sct">
			<div class="main__background-overlay" />
			<p class="main__title animation-from-top--hidden" ref="$mainTitle">
				About me
			</p>
			<div class="main__body" ref="$mainBody">
				<p
					class="main__body-paragraph animation-from-bottom--hidden"
					v-for="paragraph in aboutContent?.about"
					v-text="paragraph"
				></p>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.main__container {
	color: a.$v-primary;
}
.main {
	position: relative;
	width: 100%;
	padding: 12.8rem a.f-clampify(20, 128);
	background-image: url(@/assets/img/about/bg.png);
	background-repeat: no-repeat;
	background-size: auto 110%;
	background-position: 64% 0;
	@include a.m-for-size(768) {
		background-size: a.f-clampify(1162, 1920);
		background-position: 70% 44%;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(a.$v-secondary-1, 0.64);
	}

	&__title {
		position: relative;
		z-index: 2;
		margin-bottom: 3.2rem;
		font-size: a.f-clampify(36, 48);
	}
	&__body {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 3.2rem;
		max-width: 60rem;
		font-size: 1.6rem;
		font-weight: 300;
	}
	&__body-paragraph {
	}
}
</style>
