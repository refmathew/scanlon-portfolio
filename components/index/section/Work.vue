<script setup>
const $header = ref(null);
const $abstract1 = ref(null);
const $abstract2 = ref(null);
const $abstract3 = ref(null);
const $abstract4 = ref(null);
const $abstract5 = ref(null);

// Reveal animation
onMounted(() => {
	useRevealAnimation($header.value, "animation-from-bottom--revealed");
	useRevealAnimation(
		$abstract1.value,
		"animation-from-top--revealed",
		$header.value
	);
	useRevealAnimation(
		$abstract2.value,
		"animation-from-top-right--revealed",
		$header.value
	);
	useRevealAnimation(
		$abstract3.value,
		"animation-from-bottom-right--revealed",
		$header.value
	);
	useRevealAnimation(
		$abstract4.value,
		"animation-from-bottom-left--revealed",
		$header.value
	);
	useRevealAnimation(
		$abstract5.value,
		"animation-from-bottom-left--revealed",
		$header.value
	);
});
const $route = useRoute();
</script>

<template>
	<section class="work-container sct-ctr">
		<div class="work sct">
			<div class="work__header-container">
				<p class="work__header animation-from-bottom--hidden" ref="$header">
					Projects I've <br />
					worked on
				</p>
				<div id="work" class="work__header-abstract">
					<img
						class="animation-from-top--hidden"
						:src="useAsset('/img/work/abstract/square.svg')"
						alt=""
						ref="$abstract1"
					/>
					<img
						class="animation-from-top-right--hidden"
						:src="useAsset('/img/work/abstract/star-2.svg')"
						alt=""
						ref="$abstract2"
					/>
					<img
						class="animation-from-bottom-right--hidden"
						:src="useAsset('/img/work/abstract/star-3.svg')"
						alt=""
						ref="$abstract3"
					/>
					<img
						class="animation-from-bottom-left--hidden"
						:src="useAsset('/img/work/abstract/star-1.svg')"
						alt=""
						ref="$abstract4"
					/>
					<img
						class="animation-from-bottom-left--hidden"
						:src="useAsset('/img/work/abstract/circle.svg')"
						alt=""
						ref="$abstract5"
					/>
				</div>
			</div>
			<IndexComponentWebsiteImageSlider />
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;
.work-container {
	background-color: a.$v-accent-1;
}
.work {
	display: grid;
	place-items: center;
	padding: a.f-clampify(128, 166) 0 a.f-clampify(128, 135);

	&__header-container {
		position: relative;
		width: fit-content;
		margin-bottom: a.f-clampify(64, 128);
	}
	&__header {
		position: relative;
		z-index: 1;
		padding: 0 8rem;
		text-align: center;
		font-size: a.f-clampify(32, 40);
		line-height: a.f-clampify(40, 64);

		br {
			display: none;
			@include a.m-for-size(491) {
				display: block;
			}
			@include a.m-for-size(544) {
				display: none;
			}
		}
	}
	&__header-abstract {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		img {
			position: absolute;
		}

		img:nth-child(1) {
			width: a.f-clampify(6, 8);
			top: -21%;
			left: 55%;
			@include a.m-for-size(544) {
				top: -40%;
				left: 50%;
			}
		}
		img:nth-child(2) {
			top: -50%;
			right: 12%;
			@include a.m-for-size(544) {
				top: -54%;
				right: 10%;
			}
			@include a.m-for-size(660) {
				right: 2%;
			}
		}
		img:nth-child(3) {
			width: a.f-clampify(10, 12);
			bottom: -8%;
			right: 19%;
			@include a.m-for-size(544) {
				bottom: -28%;
				right: 32%;
			}
		}
		img:nth-child(4) {
			bottom: -28%;
			left: 39%;
			@include a.m-for-size(544) {
				bottom: -24%;
				left: 23%;
			}
		}
		img:nth-child(5) {
			bottom: -37%;
			left: 10%;
			@include a.m-for-size(544) {
				bottom: -81%;
				left: 8%;
			}
			@include a.m-for-size(660) {
				left: 3%;
			}
		}
	}
}
</style>
