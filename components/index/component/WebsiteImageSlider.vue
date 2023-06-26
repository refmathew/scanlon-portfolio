<script setup>
import { register } from "swiper/element/bundle";
register();

const homeContent = useState("homeContent");

// ============================================================================>
// ===   Slider stuff   =========================================================>
// ============================================================================>
const activeIndex = ref(0);
const $imageSlider = ref(null);
const $companySlider = ref(null);
onMounted(() => {
	const $companySwiper = $companySlider.value.swiper;
	$companySwiper.on("activeIndexChange", (e) => {
		activeIndex.value = e.activeIndex;
	});

	const $imageSwiper = $imageSlider.value.swiper;
	$imageSwiper.on("activeIndexChange", (e) => {
		activeIndex.value = e.activeIndex;
	});

	watch(activeIndex, (newActiveIndex) => {
		$imageSwiper.slideTo(newActiveIndex);
		$companySwiper.slideTo(newActiveIndex);
	});
});

// ============================================================================>
// ===   Reveal animation   =====================================================>
// ============================================================================>
onMounted(() => {
	useRevealAnimation(
		$companySlider.value,
		"animation-from-top--revealed",
		$imageSlider.value
	);
	useRevealAnimation($imageSlider.value, "animation-from-bottom--revealed");
});
</script>

<template>
	<div class="website-slider">
		<swiper-container
			class="website-slider__company-slider animation-from-top--hidden"
			ref="$companySlider"
			:centered-slides="true"
			:grab-cursor="true"
			:slides-per-view="'auto'"
			:slide-to-clicked-slide="true"
		>
			<swiper-slide
				class="website-slider__company-slider-item"
				v-for="(work, index) in homeContent?.work"
				:class="{
					'website-slider__company-slider-item--active': activeIndex === index,
				}"
				:key="index"
			>
				<span>{{ work.company }}</span>
			</swiper-slide>
		</swiper-container>
		<swiper-container
			class="website-slider__image-slider animation-from-bottom--hidden"
			ref="$imageSlider"
			:autoplay="{ delay: 3200 }"
			:centered-slides="true"
			:grabCursor="true"
			:space-between="24"
		>
			<swiper-slide
				v-for="work in homeContent?.work"
				class="website-slider__image-slider-item"
			>
				<img :src="useAsset(`/img/work/img/${work.websiteImage}.png`)" alt="" />
			</swiper-slide>
		</swiper-container>
	</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;
@mixin white-gradient {
	background: linear-gradient(
		to right,
		rgba(a.$v-accent-1, 1) 0%,
		rgba(a.$v-accent-1, 0) 100%
	);
}

.website-slider {
	width: a.f-clampify(360, 1440);
}
.website-slider__company-slider {
	margin-bottom: a.f-clampify(32, 64);
	&-item {
		width: auto !important;
		font-size: a.f-clampify(24, 40);
		color: a.$v-accent-5;
		cursor: pointer;
	}
	&-item:not(:last-child) {
		margin-right: a.f-clampify(24, 32);
	}
	&-item--active {
		color: a.$v-primary;
	}
}
.website-slider__image-slider {
	// &::before,
	// &::after {
	//   position: absolute;
	//   z-index: 1;
	//   top: 0;
	//   content: "";
	//   width: 40%;
	//   height: 100%;
	//   @include white-gradient();
	// }

	// &::before {
	//   left: -0.1rem;
	// }

	// &::after {
	//   right: -0.1rem;
	//   transform: rotate(180deg);
	// }
}
</style>
