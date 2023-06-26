<script setup>
const brands = [
	["coca-cola", "nike", "uniqlo", "pinterest", "microsoft"],
	["adidas", "amazon", "reddit", "spotify", "prime-video"],
];
</script>

<template>
	<div class="hero-container sct-ctr">
		<section class="hero sct">
			<IndexCmpIllustration
				class="hero__illustration from-right--hide from-right--reveal"
			/>
			<div class="hero__text from-left--hide from-left--reveal" ref="$heroText">
				<h1 class="hero__title">Lorem ipsum dolor sit amet.</h1>
				<div class="hero__subtitle">
					<p>Lorem ipsum dolor sit amet consectetur.</p>
					<p>
						Elementum neque proin adipiscing justo et tristique nec elementum.
					</p>
				</div>
				<ContactButton class="hero__cta" background="white" />
				<div class="hero__brand-slider">
					<IndexComponentBrandSlider
						:brands="brands[0]"
						:inverse-direction="false"
					/>
					<IndexComponentBrandSlider
						:brands="brands[1]"
						:inverse-direction="true"
					/>
				</div>
				<div class="hero__illustration-placeholder"></div>
			</div>
		</section>
	</div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/abstracts" as a;
.hero {
	position: relative;
	padding: 12.3rem a.f-clampify(18, 128) a.f-clampify(36, 64);
	@include a.m-for-size(desktop) {
		padding: a.f-clampify(123, 192) a.f-clampify(18, 128) a.f-clampify(36, 64);
	}

	&__illustration {
		animation-delay: 2400ms;
	}

	&__text {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		animation-delay: 2400ms;
		@include a.m-for-size(desktop) {
			align-items: flex-start;
			max-width: 53%;
			text-align: left;
		}
	}

	&__title {
		margin-bottom: 1.6rem;
		font-size: a.f-clampify(48, 96);
		font-weight: 900;
		@include a.m-for-size(desktop) {
			line-height: 11.6rem;
		}
	}

	&__subtitle {
		margin-bottom: 3.2rem;
		font-size: 16;
		font-weight: 300;
		line-height: a.f-clampify(24, 36);
	}

	&__cta {
		margin-bottom: a.f-clampify(48, 64);
	}

	&__brand-slider {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: a.f-clampify(16, 32);
		width: 100%;
		@include a.m-for-size(desktop) {
			align-items: flex-start;
		}
	}

	&__illustration-placeholder {
		@include a.m-for-size(desktop) {
			height: 21.5rem;
		}
	}
}
</style>
