<script setup>
import _ from "lodash";
import { format } from "date-fns";

const $route = useRoute();
const { data: blogs } = await useAsyncData("blogs", () =>
	queryContent("/blog").find()
);
const { data: blog } = await useAsyncData("blog", () =>
	queryContent($route.path).findOne()
);
const randomBlogs = ref(
	_.sampleSize(
		blogs.value.filter((item) => item.title !== blog.title),
		3
	)
);
const blogMeta = ref(
	`${format(new Date(blog.value.date), "LLLL d, u")} • ${
		blog.value.readTime
	} min read`
);
</script>

<template>
	<NuxtLayout background="white">
		<main class="blog__container sct-ctr">
			<section class="blog__heading sct blog-sct">
				<h1 class="blog__title" v-text="blog.title" />
				<p class="blog__meta" v-text="blogMeta" />
				<img
					class="blog__feature-image"
					:src="useAsset(`/img/blog/${blog.featureImage}`)"
					alt=""
				/>
			</section>
			<section class="blog__main blog-sct">
				<ContentDoc />
			</section>
			<div class="blog__section-divider-container">
				<hr class="blog__section-divider" />
			</div>
			<section class="blog__blog-roll-container">
				<h3 class="blog__blog-roll-heading">You may also like</h3>
				<div class="blog__blog-roll">
					<BlogComponentFeaturedBlogCard
						class="blog__blog-roll-item"
						v-for="blog in randomBlogs"
						:featured-blog="blog"
					/>
				</div>
			</section>
		</main>
	</NuxtLayout>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.blog__container {
	color: a.$v-secondary-2;
}
.blog {
	&__heading {
		margin: a.f-clampify(148, 250) a.f-clampify(20, 128) 6.4rem;
		text-align: center;
	}
	&__title {
		font-size: a.f-clampify(32, 48);
		margin-bottom: 1.2rem;
	}
	&__meta {
		font-size: a.f-clampify(12, 16);
		font-weight: 300;
		margin-bottom: 4rem;
	}
	&__feature-image {
		width: 100%;
		height: 20rem;
		object-fit: cover;
	}
}

.blog {
	&__section-divider-container {
		width: 100%;
		max-width: 144rem;
		padding: 0 a.f-clampify(20, 128);
	}
	&__section-divider {
		width: 100%;
		height: 0.1rem;
		background-color: a.$v-secondary-2;
		border-radius: 0.1rem;
	}
}

.blog {
	&__blog-roll-container {
		padding: a.f-clampify(64, 128) a.f-clampify(20, 128) 0;
	}
	&__blog-roll-heading {
		margin-bottom: 3.2rem;
		font-size: a.f-clampify(24, 32);
		text-align: center;
	}
	&__blog-roll {
		display: grid;
		gap: 3.2rem;
		justify-content: center;
		@include a.m-for-size(tablet) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	&__blog-roll-item {
		flex-direction: column;
		gap: 0;
		max-width: 32rem;
		text-align: center;
	}
	&__blog-roll-item :deep(.featured-blog-feature-image) {
		margin: auto;
	}
	&__blog-roll-item :deep(.featured-blog-title) {
		font-size: a.f-clampify(18, 20);
	}
	&__blog-roll-item :deep(.featured-blog-text) {
		flex-direction: column-reverse;
		justify-content: flex-start;
	}
	&__blog-roll-item :deep(.featured-blog-description) {
		display: none;
	}
}

.blog-sct {
	max-width: 58rem;
}
</style>

<style lang="scss">
@use "@/assets/styles/abstracts" as a;

.blog {
	&__main {
		margin: 0 a.f-clampify(20, 128) a.f-clampify(64, 128);
		font-weight: 300;
		color: a.$v-secondary-2;

		h1 {
			font-size: 2.4rem;
			margin-bottom: 2rem;
		}
		h2 {
			font-size: 2rem;
			margin-bottom: 1.6rem;
		}
		h3 {
			font-size: 1.8rem;
			margin-bottom: 1rem;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: 900;
			&:not(:first-child) {
				margin-top: 3.2rem;
			}
		}
		p {
			margin-bottom: 1.6rem;
			line-height: 2rem;
		}
		ul,
		ol {
			margin-bottom: 1.6rem;
		}
		li {
			margin-left: 20px;
		}

		img {
			max-width: 100%;
			height: auto;
			margin-bottom: 15px;
		}
	}
}
</style>
