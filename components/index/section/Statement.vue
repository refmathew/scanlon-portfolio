<script setup>
const homeContent = useState("homeContent");
const $statementText = ref(null);
const $statementBackground = ref(null);
const $circle1 = ref(null);
const $circle2 = ref(null);
const $circle3 = ref(null);
const $circle4 = ref(null);
const $cross1 = ref(null);
const $cross2 = ref(null);
const $crescent = ref(null);
const $ff = ref(null);
const $crossMobile = ref(null);
const $ffMobile = ref(null);

onMounted(() => {
	const $graphics = [$circle3.value, $cross2.value];

	$graphics.forEach(($graphic) => {
		useRevealAnimation($graphic, "reveal--transparent", $statementText.value);
	});
	// useRevealAnimation( $statementBackground.value, "reveal--transparent", $statementText.value);
	useRevealAnimation($statementText.value, "reveal--below");
});
</script>

<template>
	<section class="statement__container sct-ctr">
		<div class="statement sct">
			<div class="statement__main">
				<div class="statement__background" ref="$statementBackground">
					<img
						class="statement__background-graphic hide--transparent"
						src="@/assets/img/statement/circle-3.svg"
						alt=""
						ref="$circle3"
					/>
					<img
						class="statement__background-graphic hide--transparent"
						src="@/assets/img/statement/cross-2.svg"
						alt=""
						ref="$cross2"
					/>
					<!-- <img
						class="statement__background-graphic"
						src="@/assets/img/statement/crescent.svg"
						alt=""
						ref="$crescent"
					/>
					<img
						class="statement__background-graphic"
						src="@/assets/img/statement/circle-4.svg"
						alt=""
						ref="$circle4"
					/>
					<img
						class="statement__background-graphic"
						src="@/assets/img/statement/ff.svg"
						alt=""
						ref="$ff"
					/>
					<img
						class="statement__background-graphic"
						src="@/assets/img/statement/cross-1.svg"
						alt=""
						ref="$cross1"
					/>
					<img
						class="statement__background-graphic"
						src="@/assets/img/statement/circle-2.svg"
						alt=""
						ref="$circle2"
					/>
					<img
						class="statement__background-graphic"
						src="@/assets/img/statement/circle-1.svg"
						alt=""
						ref="$circle1"
					/>
					<img
						class="statement__background-graphic"
						src="@/assets/img/statement/cross-mobile.svg"
						alt=""
						ref="$crossMobile"
					/>
					<img
						class="statement__background-graphic"
						src="@/assets/img/statement/ff-mobile.svg"
						alt=""
						ref="$ffMobile"
					/> -->
				</div>
				<div class="statement__text hide--below" ref="$statementText">
					{{ homeContent?.statement }}
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;
.statement__container {
	background-color: a.$v-primary;
	font-size: a.f-clampify(36, 52);
	font-weight: 700;
	color: a.$v-accent-1;
	line-height: a.f-clampify(44, 80);
	text-align: center;
	@include a.m-for-size(desktop) {
		font-weight: 900;
	}
}

.statement {
	padding: a.f-clampify(128, 256) a.f-clampify(20, 273.5);
	overflow: hidden;

	&__main {
		position: relative;
	}

	&__background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	&__background-graphic {
		position: absolute;
		display: none;

		&:nth-child(1) {
			display: inline-block;
			top: -13%;
			left: -14%;
			transition-delay: 5000ms;
		}

		&:nth-child(2) {
			transition-delay: 5000ms;
		}

		&:nth-child(3) {
		}

		&:nth-child(4) {
			display: inline-block;
			bottom: -15%;
			right: -9%;
			width: 16.2rem;
		}

		&:nth-child(5) {
		}

		&:nth-child(6) {
		}

		&:nth-child(7) {
		}

		&:nth-child(8) {
		}

		&:nth-child(9) {
			display: inline-block;
			bottom: -8%;
			left: 13%;
		}

		&:nth-child(10) {
			display: inline-block;
			bottom: 46%;
			right: 5%;
		}

		@include a.m-for-size(tablet) {
			display: inline-block;

			&:nth-child(1) {
				top: -17%;
				left: -0.1%;
			}

			&:nth-child(2) {
				top: -14%;
				right: 28%;
			}

			&:nth-child(3) {
				top: -19%;
				right: -9%;
			}

			&:nth-child(4) {
				bottom: 7%;
				right: -11%;
			}

			&:nth-child(5) {
				bottom: 16%;
				right: 31%;
			}

			&:nth-child(6) {
				bottom: -10%;
				left: 16%;
			}

			&:nth-child(7) {
				bottom: 10%;
				left: 18%;
			}

			&:nth-child(8) {
				top: 25%;
				left: -9%;
			}

			&:nth-child(9) {
				display: none;
			}

			&:nth-child(10) {
				display: none;
			}
		}
	}

	&__text {
		position: relative;
	}
}
</style>
