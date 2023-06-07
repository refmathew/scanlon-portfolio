<template>
  <header
    class="header"
    :class="{
      'header--blue-bg': background === 'blue',
      'header--active': isBurgerClicked === true,
    }"
    ref="$header"
  >
    <div class="header__main sct">
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
            <nuxt-link class="header__nav-link" to="/#testimonials">
              Testimonials
            </nuxt-link>
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
      <ContactButton class="header__contact-button" background="white" />
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
          <nuxt-link class="header__nav-link" to="/#testimonials">
            Testimonials
          </nuxt-link>
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

<script setup>
const props = defineProps({
  background: String,
});

const isBurgerClicked = ref(false);

// ===========================================================================>
// ===   Nav Animation   =====================================================>
// ===========================================================================>

const $header = ref(null);
const $mobileNav = ref(null);
let headerHeight;
let mobileNavHeight;
onMounted(() => {
  headerHeight = $header.value.clientHeight;
  mobileNavHeight = $mobileNav.value.clientHeight;
  $header.value.style.height = `${headerHeight}px`;
});
watch(isBurgerClicked, (value) => {
  if (value === true)
    return ($header.value.style.height = `${headerHeight + mobileNavHeight}px`);
  $header.value.style.height = `${headerHeight}px`;
});
</script>

<style lang="sass" scoped>
@use '@/assets/styles/abstracts' as a

.header
	position: fixed
	top: 0
	z-index: 1
	width: 100%
	height: v-bind(headerHeight)
	color: a.$v-accent-1
	transition: height 320ms 480ms cubic-bezier(.4,0,.2,1)
	background-color: rgba(a.$v-accent-1, .64)
	backdrop-filter: blur(16px)

	&--scrolled
		background-color: rgba(a.$v-accent-1, .64)
		backdrop-filter: blur(16px)

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
		transform: trans lateY(1.2rem)
		@include a.m-for-size(desktop)
			display: inline

	// ==========================================================================>

	&__nav-mobile
		position: absolute
		z-index: -1
		display: block
		width: 100%
		padding: a.f-clampify(16, 24) a.f-clampify(20, 126)
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
		gap: a.f-clampify(16, 20)
		flex-wrap: wrap

// ==========================================================================>

.header--blue-bg
	color: a.$v-primary

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

// @keyframes nav-mobile--active
// 	0%
// 		transform: translateY(-256%)
// 		opacity: 0
// 	100%
// 		transform: translateY(0)
// 		opacity: 1

// @keyframes nav-mobile--inactive
// 	0%
// 		transform: translateY(0)
// 		opacity: 1
// 	100%
// 		transform: translateY(-256%)
// 		opacity: 0
</style>
