<script setup>
import { format } from "date-fns";

const props = defineProps({
	featuredBlog: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<NuxtLink class="featured-blog" :to="featuredBlog._path">
		<img
			class="featured-blog-feature-image"
			:src="useAsset(`/img/blog/${featuredBlog.featureImage}`)"
		/>
		<div class="featured-blog-text">
			<p
				class="featured-blog-meta"
				v-text="
					`${format(new Date(featuredBlog.date), 'LLLL d, u')} • ${
						featuredBlog.readTime
					} min read`
				"
			/>
			<p class="featured-blog-title" v-text="featuredBlog.title" />
			<p class="featured-blog-description" v-text="featuredBlog.description" />
		</div>
	</NuxtLink>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.featured-blog {
	display: flex;
	flex-direction: column;
	gap: 3.2rem;

	@include a.m-for-size(tablet) {
		flex-direction: row;
		align-items: center;
		& > * {
			flex: 1;
		}
	}

	&-feature-image {
		width: 100%;
		height: a.f-clampify(204, 366);
		object-fit: cover;
		border-radius: 1.6rem;
	}
	&-text {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.2rem 0;
	}
	&-meta {
		font-size: a.f-clampify(14, 16);
		color: a.$v-secondary-5;
		font-weight: 300;
	}
	&-title {
		font-size: a.f-clampify(24, 32);
	}
	&-description {
		font-size: a.f-clampify(16, 20);
		font-weight: 300;
	}
}
</style>
