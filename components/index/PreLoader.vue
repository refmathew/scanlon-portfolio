<script setup></script>

<template>
	<div class="preloader sct-ctr">
		<img class="logo" src="@/assets/img/brand--white.svg" />
	</div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/abstracts" as a;
$logoAniDur: 2000ms;
$logoAniDel: 400ms;

.preloader {
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	padding: 14rem;
	max-width: 100%;
	min-height: 100vh;
	background-color: a.$v-accent-1;
	// transform: translateX(-50%);
	animation: backgroundAnimation calc(3200ms - ($logoAniDur + $logoAniDel))
		calc($logoAniDur + $logoAniDel) forwards ease-out;
}

.logo {
	width: 6.4rem;
	opacity: 0;
	animation: logoAnimation $logoAniDur $logoAniDel forwards ease-out;
}

@keyframes logoAnimation {
	0% {
		opacity: 0;
		transform: translateY(6.4rem);
	}
	40% {
		opacity: 1;
		transform: translateY(0);
	}
	70% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes backgroundAnimation {
	99.9% {
		opacity: 0;
	}
	100% {
		opacity: 0;
		z-index: -1;
	}
}
</style>
