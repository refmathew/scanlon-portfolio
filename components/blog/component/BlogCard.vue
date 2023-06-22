<script setup>
import { format } from "date-fns";
const props = defineProps({
	blog: {
		type: Object, // { featureImage, date, title, excerpt}
		required: true,
	},
});
</script>

<template>
	<NuxtLink class="blog-card" :to="blog._path">
		<img
			:src="useAsset(`/img/blog/${blog.featureImage}`)"
			class="blog-card__feature-image"
		/>
		<p class="blog-card__meta">
			{{
				format(new Date(blog.date), "LLLL d, u") +
				" • " +
				blog.readTime +
				" min read"
			}}
		</p>
		<p class="blog-card__title" v-text="blog.title" />
		<p
			class="blog-card__description"
			v-text="
				blog.description.length > 128
					? blog.description.substring(0, 125) + '...'
					: blog.description
			"
		/>
	</NuxtLink>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.blog-card {
	display: block;

	&__feature-image {
		width: 100%;
		height: a.f-clampify(204, 238);
		margin-bottom: 3.2rem;
		border-radius: 1.6rem;
		object-fit: cover;
	}
	&__meta {
		margin-bottom: 1rem;
		font-size: 1.4rem;
		font-weight: 300;
		color: a.$v-secondary-5;
	}
	&__title {
		margin-bottom: 1rem;
		font-size: a.f-clampify(24, 32);
		color: a.$v-secondary-1;
	}
	&__description {
		font-size: 1.6rem;
		font-weight: 300;
		color: a.$v-secondary-1;
	}
}
</style>
