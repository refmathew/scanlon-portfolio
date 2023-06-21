<script setup>
const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const handleInputFocus = (e) => {
	e.target.parentElement.classList.add("main__form-input-container--focused");
};
const handleInputBlur = (e) => {
	e.target.parentElement.classList.remove(
		"main__form-input-container--focused"
	);
};
</script>

<template>
	<section class="main__container sct-ctr">
		<div class="main sct">
			<div class="main__text">
				<div class="main__text-title">Interested to work with me?</div>
				<div class="main__text-subtitle">
					If you have a project in mind or are simply interested in finding out
					more, get in touch and let’s get things moving.
				</div>
			</div>
			<form class="main__form" @submit.prevent="submitForm">
				<div class="main__form-group-1">
					<div
						class="main__form-input-container main__form-input-container-group-1"
					>
						<input
							class="main__form-input"
							name="name"
							placeholder="Name"
							ref="$name"
							type="text"
							v-model="name"
							@focus="handleInputFocus"
							@blur="handleInputBlur"
						/>
					</div>
					<div
						class="main__form-input-container main__form-input-container-group-1"
					>
						<input
							class="main__form-input"
							name="email"
							placeholder="Email*"
							ref="$email"
							type="email"
							v-model="email"
							@focus="handleInputFocus"
							@blur="handleInputBlur"
						/>
					</div>
				</div>
				<div class="main__form-input-container">
					<input
						class="main__form-input"
						name="subject"
						placeholder="Subject"
						ref="$subject"
						type="text"
						v-model="subject"
						@focus="handleInputFocus"
						@blur="handleInputBlur"
					/>
				</div>
				<div
					class="main__form-input-container main__form-input-container--message"
				>
					<textarea
						class="main__form-input main__form-input--message"
						name="message"
						placeholder="Message*"
						ref="$message"
						v-model="message"
						@focus="handleInputFocus"
						@blur="handleInputBlur"
					/>
				</div>
				<button class="main__form-submit" type="submit">Send Message</button>
			</form>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;
.main__container {
}

.main {
	position: relative;
	width: 100%;
	padding: a.f-clampify(340, 378) a.f-clampify(20, 128) 25.6rem;
	background-image: url(@/assets/img/contact/bg.png);
	background-repeat: no-repeat;
	background-size: auto 100%;
	background-position: 69% 73%;
	color: a.$v-primary;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		background: rgba(a.$v-secondary-1, 0.32);
	}

	&__text {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		gap: 3.2rem;
		max-width: 68rem;
		margin-bottom: 6.4rem;
	}
	&__text-title {
		font-size: a.f-clampify(36, 48);
	}
	&__text-subtitle {
		max-width: 45.5rem;
		font-size: 1.6rem;
		font-weight: 500;
	}
	&__form {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		gap: 3.6rem;
		max-width: 60rem;
	}
	&__form-group-1 {
		display: flex;
		flex-direction: column;
		gap: 3.6rem;
		@include a.m-for-size(tablet) {
			flex-direction: row;
		}
	}
	&__form-input-container {
		position: relative;
		overflow-x: hidden;
		width: 100%;
		max-width: 32rem;

		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 0.2rem;
			opacity: 0;
			background: a.$v-primary;
			transition: opacity 320ms ease;
		}
	}
	&__form-input-container-group-1 {
		@include a.m-for-size(tablet) {
			max-width: unset !important;
		}
	}
	&__form-input-container--message {
		max-width: unset;
	}
	&__form-input-container--focused {
		&::after {
			opacity: 1;
		}
	}
	&__form-input {
		width: 100%;
		padding: 0.8rem 0;
		border-bottom: solid 0.1rem rgba(a.$v-primary, 0.32);
		font-size: 1.6rem;
		font-weight: 300;
	}
	&__form-input--message {
		resize: none;
		height: 8rem;
	}
	&__form-submit {
		width: fit-content;
		margin-top: 3.2rem;
		padding: 1.2rem 2rem;
		background-color: a.$v-accent-1;
		border-radius: 0.4rem;
	}
}
</style>
