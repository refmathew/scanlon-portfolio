<script setup>
import { vElementSize } from "@vueuse/components";
import { useElementBounding, useWindowScroll } from "@vueuse/core";

const props = defineProps({
	background: String,
});

const $route = useRoute();

const $header = ref(null);
const $headerMain = ref(null);
const $mobileNav = ref(null);
const isBurgerClicked = ref(false);

// ===========================================================================>
// ===   Nav Animation   =====================================================>
// ===========================================================================>

const headerActivePadding = ref("");
const handleMobileNavResize = ({ width, height }) => {
	const headerPaddingTop = Number(
		window.getComputedStyle($headerMain.value).paddingTop.slice(0, -2)
	);
	headerActivePadding.value = `${height + headerPaddingTop}px`;
};

// ===========================================================================>
// ===   Show Header on Upward Scroll Only   =================================>
// ===========================================================================>

const showHeader = ref(true);

onMounted(() => {
	const { height: headerHeight } = useElementBounding($header.value);
	const { y: windowY } = useWindowScroll();
	watch(windowY, (newWindowY, prevWindowY) => {
		if (headerHeight.value * 2 > windowY.value)
			return (showHeader.value = true);

		newWindowY > prevWindowY
			? (showHeader.value = false)
			: (showHeader.value = true);
	});
});

// ===========================================================================>
// ===   Header Bottom Border   ================================================>
// ===========================================================================>
// show header bottom border only when y scroll is relatively small

const showBorder = ref(false);
onMounted(() => {
	const { y: windowY } = useWindowScroll();
	const { height: headerHeight } = useElementBounding($header.value);
	watch(windowY, (newWindowY) => {
		newWindowY > headerHeight.value * 1.5
			? (showBorder.value = true)
			: (showBorder.value = false);
	});
});
</script>

<template>
	<header
		class="header"
		:class="{
			'header--blue-bg': background === 'blue',
			'header--active': isBurgerClicked === true,
			'header--shown': showHeader,
			'header--border-shown': showBorder,
			'from-top--hide': $route.path === '/',
			'from-top--reveal': $route.path === '/',
		}"
		ref="$header"
	>
		<div class="header__main sct" ref="$headerMain">
			<nuxt-link class="header__logo-wrapper" to="/">
				<img
					class="header__logo"
					v-if="props.background === 'blue'"
					src="@/assets/img/brand--white.svg"
				/>
				<img class="header__logo" v-else src="@/assets/img/brand--blue.svg" />
				<span class="header__logo-name"> John Scanlon </span>
			</nuxt-link>
			<nav class="header__nav">
				<ul class="header__nav-list">
					<li class="header__nav-list-item">
						<nuxt-link class="header__nav-link" to="/about"> About </nuxt-link>
					</li>
					<li class="header__nav-list-item">
						<nuxt-link class="header__nav-link" to="/#services">
							Services
						</nuxt-link>
					</li>
					<li class="header__nav-list-item">
						<nuxt-link class="header__nav-link" to="/#work"> Work </nuxt-link>
					</li>
					<li class="header__nav-list-item">
						<nuxt-link class="header__nav-link" to="/blog"> Blog </nuxt-link>
					</li>
					<li class="header__nav-list-item">
						<nuxt-link class="header__nav-link" to="/contact">
							Contact
						</nuxt-link>
					</li>
				</ul>
			</nav>
			<ContactButton
				class="header__contact-button"
				:background="background === 'blue' ? 'white' : 'blue'"
			/>
			<button
				class="header__burger"
				:class="{ 'header__burger--inactive': isBurgerClicked === false }"
				@click.prevent="isBurgerClicked = !isBurgerClicked"
			>
				<span class="header__burger-line"></span>
				<span class="header__burger-line"></span>
				<span class="header__burger-line"></span>
			</button>
		</div>

		<!-- The nav to use when on smaller screens -->
		<nav
			class="header__nav header__nav-mobile"
			:class="{
				'header__nav-mobile--active': isBurgerClicked,
				'header__nav-mobile--inactive': isBurgerClicked === false,
			}"
			ref="$mobileNav"
			v-element-size="handleMobileNavResize"
		>
			<ul class="header__nav-list">
				<li class="header__nav-list-item">
					<nuxt-link class="header__nav-link" to="/about"> About </nuxt-link>
				</li>
				<li class="header__nav-list-item">
					<nuxt-link class="header__nav-link" to="/#services">
						Services
					</nuxt-link>
				</li>
				<li class="header__nav-list-item">
					<nuxt-link class="header__nav-link" to="/#work"> Work </nuxt-link>
				</li>
				<li class="header__nav-list-item">
					<nuxt-link class="header__nav-link" to="/blog"> Blog </nuxt-link>
				</li>
				<li class="header__nav-list-item">
					<nuxt-link class="header__nav-link" to="/contact">
						Contact
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="sass" scoped>
@use '@/assets/styles/abstracts' as a

.header
	position: fixed
	top: 0
	z-index: 999
	width: 100%
	border-bottom: solid 0px a.$v-accent-2
	color: a.$v-accent-1
	background-color: rgba(white, .64)
	backdrop-filter: blur(16px)
	transform: translateY(-100%)
	animation-delay: 2400ms
	transition: padding 320ms 480ms cubic-bezier(.4,0,.2,1), transform 640ms ease

	&--active
		padding-bottom: v-bind(headerActivePadding)
	&--border-shown
		border-bottom: solid .02rem a.$v-secondary-6
	&--shown
		transform: translateY(0%)
	&__main
		margin: auto
		padding: a.f-clampify(24, 32) a.f-clampify(20, 126)
		@include a.m-flex($aln: center, $jst: space-between)

	// ==========================================================================>

	&__logo-wrapper
		gap: .8rem
		@include a.m-flex($aln: flex-end)

	&__logo
		width: a.f-clampify(36, 48)

	&__logo-name
		margin-bottom: .2rem

	// ==========================================================================>

	&__nav
		display: none
		transform: translateY(1.2rem)
		@include a.m-for-size(desktop)
			display: block

	&__nav-list
		@include a.m-flex($dir: row)
		font-weight: 500

	&__nav-list-item
		transition: transform 200ms ease-in-out

		&:hover,&:focus
			transform: translateY(-.32rem)

	// ==========================================================================>

	&__burger
		gap: .4rem
		cursor: pointer
		@include a.m-flex($dir: column)
		@include a.m-for-size(desktop)
			display: none

	&__burger-line
		display: inline-block
		width: 2.8rem
		height: .2rem
		background-color: a.$v-accent-1

	&__burger-line:first-child
		animation: burger-1--active 800ms forwards

	&__burger-line:nth-child(2)
		animation: burger-2--active 800ms forwards

	&__burger-line:last-child
		animation: burger-3--active 800ms forwards

	&__burger--inactive

		.header__burger-line:first-child
			animation: burger-1--inactive 800ms forwards

		.header__burger-line:nth-child(2)
			animation: burger-2--inactive 800ms forwards

		.header__burger-line:last-child
			animation: burger-3--inactive 800ms forwards

	// ==========================================================================>

	&__contact-button
		display: none
		transform: translateY(1.2rem)
		@include a.m-for-size(desktop)
			display: inline

	// ==========================================================================>

	&__nav-mobile
		position: absolute
		z-index: -1
		display: block
		width: 100%
		padding: 0 a.f-clampify(20, 126) a.f-clampify(16, 24)
		opacity: 1
		transform: translateY(0)
		transition: opacity 480ms 320ms cubic-bezier(.4,0,.2,1), transform 480ms 320ms cubic-bezier(.4,0,.2,1)
		// transform: translateY(-256%)
		@include a.m-for-size(desktop)
			display: none

	&__nav-mobile--inactive
		opacity: 0
		transform: translateY(-256%)

	// &__nav-mobile--inactive
	// 	animation: nav-mobile--inactive 400ms cubic-bezier(0.4, 0, 0.2, 1) 400ms forwards

	// ==========================================================================>

	&__nav-list
		justify-content: center
		gap: a.f-clampify(16, 20)
		flex-wrap: wrap

// ==========================================================================>

.header--blue-bg
	color: a.$v-primary
	background-color: rgba(a.$v-accent-1, .64)

	&.header--border-shown
		border-bottom: solid .02rem a.$v-accent-2

	.header__main

	.header__burger-line
		background-color: a.$v-primary

	.header__nav-mobile
		animation-timing-function: linear

@keyframes burger-1--active
	0%
		transform: translateY(0) rotate(0)
	40%
		transform: translateY(.6rem) rotate(0)
	100%
		transform: translateY(.6rem) rotate(135deg)

@keyframes burger-2--active
	0%
		opacity: 1
	40%
		opacity: 0
	100%
		opacity: 0

@keyframes burger-3--active
	0%
		transform: translateY(0) rotate(0)
	40%
		transform: translateY(-.6rem) rotate(0)
	100%
		transform: translateY(-.6rem) rotate(-135deg)

@keyframes burger-1--inactive
	0%
		transform: translateY(.6rem) rotate(135deg)
	40%
		transform: translateY(.6rem) rotate(0)
	100%
		transform: translateY(0) rotate(0)

@keyframes burger-2--inactive
	0%
		opacity: 0
	40%
		opacity: 0
	100%
		opacity: 1

@keyframes burger-3--inactive
	0%
		transform: translateY(-.6rem) rotate(-135deg)
	40%
		transform: translateY(-.6rem) rotate(0)
	100%
		transform: translateY(0) rotate(0)
</style>
