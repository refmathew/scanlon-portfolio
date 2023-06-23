<script setup>
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
			<BlogComponentFeaturedBlogCard
				class="main__featured-blog"
				:featured-blog="featuredBlog"
			/>
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
		margin-bottom: a.f-clampify(64, 128);
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
