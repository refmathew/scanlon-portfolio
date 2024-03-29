<script setup>
const homeContent = useState("homeContent");

const $servicesSection = ref(null);
const $servicesTitle = ref(null);
const $servicesBody = ref(null);

onMounted(() => {
	const $services = document.querySelectorAll(".services__service");

	useRevealAnimation(
		$servicesTitle.value,
		"animation-from-top--revealed",
		undefined,
		{
			revealPoint: 256,
		}
	);

	$services.forEach(($service, index) => {
		useRevealAnimation(
			$service,
			"animation-from-bottom--revealed",
			$servicesTitle.value,
			{ revealPoint: 256 }
		);
	});
});
</script>

<template>
	<section class="services__container sct-ctr" id="services">
		<div class="services sct" ref="$servicesSection">
			<div class="services__main-container">
				<div class="services__main">
					<div
						class="services__title animation-from-top--hidden"
						ref="$servicesTitle"
					>
						What I bring to the table
					</div>
					<div class="services__body" ref="$servicesBody">
						<div
							class="services__service animation-from-bottom--hidden"
							v-for="(service, index) in homeContent?.services"
							:class="`services__service-${index + 1}`"
							:key="index"
							:ref="`$service${index + 1}`"
						>
							<img
								class="services__service-icon"
								:src="useAsset(`/img/services/${service.icon}.svg`)"
							/>
							<div class="services__service-title">{{ service.title }}</div>
							<div class="services__service-definition">
								{{ service.definition }}
							</div>
						</div>
					</div>
				</div>
				<div class="services__background">
					<img
						class="services__background-graphic"
						:src="useAsset(`/img/services/${'bg-graphic-1'}.svg`)"
						alt=""
					/>
					<img
						class="services__background-graphic"
						:src="useAsset(`/img/services/${'bg-graphic-2'}.svg`)"
						alt=""
					/>
					<img
						class="services__background-graphic"
						:src="useAsset(`/img/services/${'bg-graphic-3'}.svg`)"
						alt=""
					/>
					<img
						class="services__background-graphic"
						:src="useAsset(`/img/services/${'bg-graphic-4'}.svg`)"
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.services__container {
	background-color: a.$v-primary;
}

.services {
	padding: 0 a.f-clampify(20, 128);

	&__main-container {
		position: relative;
		background-color: a.$v-accent-1;
		padding: 12.8rem a.f-clampify(20, 128) 6.4rem;
		overflow: hidden;
		box-shadow: -0.1rem 0.4rem 1.6rem 0.4rem rgba(0, 0, 0, 0.25);
		border-radius: 1.6rem;
		text-align: center;
	}

	&__main {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3.2rem;
	}
	&__title {
		font-size: a.f-clampify(32, 40);
	}
	&__body {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: a.f-clampify(16, 32);
		flex-wrap: wrap;
		@include a.m-for-size(tablet) {
			justify-content: center;
			align-items: flex-start;
			flex-direction: row;
			gap: 0;
		}
	}
	&__service {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;
		max-width: 36rem;
		padding: a.f-clampify(16, 32);
		@include a.m-for-size(tablet) {
			max-width: 25.6rem;
		}
	}
	&__service:nth-child(1) {
		// transition-delay: 100ms;
	}
	&__service:nth-child(2) {
		// transition-delay: 200ms;
	}
	&__service:nth-child(3) {
		// transition-delay: 300ms;
	}
	&__service-icon {
		width: 6.4rem;
		margin-bottom: a.f-clampify(8, 16);
	}
	&__service-title {
		font-size: 2.4rem;
		font-weight: 700;
	}
	&__service-definition {
		font-size: 1.6rem;
		font-weight: 300;
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
		min-width: max-content;
	}
	&__background-graphic:nth-child(1) {
		top: -36%;
		display: none;
		left: -141%;
	}
	&__background-graphic:nth-child(2) {
		display: none;
	}
	&__background-graphic:nth-child(3) {
		display: none;
	}
	&__background-graphic:nth-child(4) {
		display: none;
	}
}
</style>
