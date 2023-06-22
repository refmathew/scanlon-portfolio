<script setup>
import { format } from "date-fns";

// ============================================================================>
// ===   Blog Data   ============================================================>
// ============================================================================>

const { data: blogs } = await useAsyncData("blogs", () =>
	queryContent("/blog").sort({ date: -1 }).find()
);
const featuredBlog = ref(blogs.value[0]);
const previousBlogs = ref(blogs.value.filter((blog, index) => index > 0));
</script>

<template>
	<div class="main__container sct-ctr">
		<div class="main sct">
			<NuxtLink class="main__featured-blog" :to="featuredBlog._path">
				<img
					class="main__featured-blog-feature-image"
					:src="useAsset(`/img/blog/${featuredBlog.featureImage}`)"
				/>
				<div class="main__featured-blog-text">
					<p
						class="main__featured-blog-meta"
						v-text="
							`${format(new Date(featuredBlog.date), 'LLLL d, u')} • ${
								featuredBlog.readTime
							} min read`
						"
					/>
					<p class="main__featured-blog-title" v-text="featuredBlog.title" />
					<p
						class="main__featured-blog-description"
						v-text="featuredBlog.description"
					/>
				</div>
			</NuxtLink>
			<div class="main__blog-card-grid">
				<BlogComponentBlogCard v-for="blog in previousBlogs" :blog="blog" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.main__container {
}
.main {
	padding: a.f-clampify(148, 250) a.f-clampify(20, 128) a.f-clampify(64, 128);

	&__featured-blog {
		display: flex;
		flex-direction: column;
		gap: 3.2rem;
		margin-bottom: 12.8rem;
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
	&__blog-card-grid {
		display: grid;
		justify-items: center;
		gap: 3.2rem;

		& > * {
			width: 80%;
			max-width: 37.3rem;
		}

		@include a.m-for-size(tablet) {
			grid-template-columns: repeat(2, 1fr);
			align-items: start;

			& > * {
				max-width: unset;
				width: unset;
			}
		}
		@include a.m-for-size(desktop) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
}
</style>
