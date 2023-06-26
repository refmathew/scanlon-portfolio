<script setup></script>

<template>
	<section class="heading__wrapper sct-ctr">
		<div class="heading sct">
			<div class="heading__title from-top--hide from-top--reveal">
				I provide digital solutions to your <br />
				business’ problems.
			</div>
			<ContactButton
				background="blue"
				class="heading__contact from-bottom--hide from-bottom--reveal"
			/>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.heading__wrapper {
}

.heading {
	padding: a.f-clampify(212, 250) a.f-clampify(18, 128) 14rem;
	width: 100%;

	&__title {
		font-size: a.f-clampify(36, 48);
		color: a.$v-accent-1;
		margin-bottom: 4.4rem;

		br {
			display: none;
			@include a.m-for-size(1157) {
				display: block;
			}
		}
	}
}
</style>
