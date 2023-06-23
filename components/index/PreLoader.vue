<script setup></script>

<template>
	<div class="preloader">
		<img class="logo" src="@/assets/img/brand--blue.svg" />
	</div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/abstracts" as a;
$logoAniDur: 512ms;
$logoAniDel: 256ms;

.preloader {
	position: absolute;
	z-index: 999;
	display: grid;
	place-items: center;
	padding: 14rem;
	min-width: 100%;
	min-height: 100vh;
	background-color: a.$v-primary;
	animation: backgroundAnimation calc(2000ms - ($logoAniDur + $logoAniDel))
		calc($logoAniDur + $logoAniDel) forwards ease-out;
}

.logo {
	width: 6.4rem;
	animation: logoAnimation $logoAniDur $logoAniDel forwards ease;
}

@keyframes logoAnimation {
	0% {
		transform: scale(1);
		opacity: 1;
	}
	100% {
		transform: scale(0);
		opacity: 1;
	}
}

@keyframes backgroundAnimation {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(-100%);
	}
}
</style>
