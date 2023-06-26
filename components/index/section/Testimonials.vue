<script setup>
import { register } from "swiper/element/bundle";
register();

const homeContent = useState("homeContent");

// Slider stuff
const $slider = ref(null);
const activeIndex = ref(0);
onMounted(() => {
	const swiper = $slider.value.swiper;
	swiper.on("activeIndexChange", (e) => {
		activeIndex.value = e.activeIndex;
	});
	watch(activeIndex, (value) => {
		swiper.slideTo(value);
	});
});
const handlePaginationButtonClick = (index) => {
	activeIndex.value = index;
};

// Reveal animation
const $testimonialsQuote = ref(null);
const $testimonialMessages = ref(null);
const $testimonialCustomers = ref(null);
const $testimonialPagination = ref(null);

onMounted(() => {
	$testimonialCustomers.value.forEach(($testimonialCustomer) => {
		useRevealAnimation(
			$testimonialCustomer,
			"animation-from-top--revealed",
			$testimonialPagination.value
		);
	});
	useRevealAnimation(
		$testimonialPagination.value,
		"animation-from-bottom--revealed"
	);
	useRevealAnimation(
		$testimonialsQuote.value,
		"animation-from-top--revealed",
		$testimonialMessages.value[0]
	);
	$testimonialMessages.value.forEach(($testimonialMessage) => {
		useRevealAnimation($testimonialMessage, "animation-from-bottom--revealed");
	});
});
</script>

<template>
	<section class="testimonials__container sct-ctr">
		<div class="testimonials sct">
			<img
				class="testimonials__quote animation-from-top--hidden"
				:src="useAsset(`/img/testimonials/quote.svg`)"
				ref="$testimonialsQuote"
			/>
			<swiper-container
				class="testimonials__testimonial-slider"
				ref="$slider"
				:autoplay="{ delay: 4800 }"
				:centered-slides="true"
				:grabCursor="true"
				:space-between="20"
				@activeIndexChange="handlePaginationButtonClick()"
			>
				<swiper-slide
					v-for="testimonial in homeContent?.testimonials"
					class="testimonials__testimonial-slider-item"
				>
					<div
						class="testimonials__testimonial-slider-item-message animation-from-bottom--hidden"
						ref="$testimonialMessages"
					>
						{{ testimonial.testimonial }}
					</div>
					<div
						class="testimonials__testimonial-slider-item-customer animation-from-top--hidden"
						ref="$testimonialCustomers"
					>
						{{ testimonial.customer }}
					</div>
				</swiper-slide>
			</swiper-container>
			<div
				class="testimonials__testimonial-slider-pagination animation-from-bottom--hidden"
				ref="$testimonialPagination"
			>
				<div
					v-for="(testimonial, index) in homeContent?.testimonials"
					:key="index"
					:class="[
						'testimonials__testimonial-slider-pagination-bullet',
						{
							'testimonials__testimonial-slider-pagination-bullet--active':
								activeIndex === index,
						},
					]"
					@click="handlePaginationButtonClick(index)"
				></div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.testimonials__container {
	background-color: a.$v-primary;
	color: a.$v-accent-1;
}

.testimonials {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-bottom: 0.8rem;
	padding: 12.8rem a.f-clampify(20, 348.5);

	&__quote {
		margin-bottom: 0.8rem;
	}
	&__testimonial-slider {
		width: a.f-clampify(299, 743);
		margin-bottom: 2.4rem;
	}
	&__testimonial-slider-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.4rem;
	}
	&__testimonial-slider-item-message {
		font-size: 3.2rem;
		text-align: center;
	}
	&__testimonial-slider-item-customer {
		font-size: 2rem;
		font-weight: 300;
	}
	&__testimonial-slider-pagination {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}
	&__testimonial-slider-pagination-bullet {
		width: 1.2rem;
		height: 1.2rem;
		background-color: a.$v-accent-7;
		border-radius: 50%;
		transition: background-color 400ms ease, transform 400ms ease;
	}
	&__testimonial-slider-pagination-bullet--active {
		background-color: a.$v-accent-1;
		border-radius: 50%;
		transform-origin: center;
		transform: scale(1.3);
	}
}
</style>
