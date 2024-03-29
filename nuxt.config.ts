import { dir } from "console";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["@/assets/styles/base/_index.scss"],
	dir: { static: "static" },
	modules: ["@nuxt/content"],
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag.startsWith("swiper-"),
		},
	},
});
