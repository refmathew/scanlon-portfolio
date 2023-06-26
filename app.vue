<script setup>
useState("homeContent", () => {
	return {
		hero: {
			title: "Lorem ipsum dolor sit amet.",
			subtitle: [
				"Lorem ipsum dolor sit amet consectetur.",
				" Elementum neque proin adipiscing justo et tristique nec elementum.",
			],
			brands: [
				["coca-cola", "nike", "uniqlo", "pinterest", "microsoft"],
				["adidas", "amazon", "reddit", "spotify", "prime-video"],
			],
		},
		statement:
			"I help businesses improve their online presence for greater visibility and reach, or something like this",
		services: [
			{
				icon: "paintbrush",
				title: "Lorem ipsum dolor",
				definition:
					"Lorem ipsum dolor sit amet consectetur. Elementum neque proin adipiscing justo et tristique nec elementum.",
			},
			{
				icon: "code",
				title: "Tincidunt sit in quam",
				definition:
					"Sit ac odio risus eget pretium justo vehicula erat. Vulputate sit nisl placerat libero tincidunt scelerisque mauris eget sed. Auctor risus quis a molestie tempor fermentum.",
			},
			{
				icon: "search",
				title: "Velit porttitor posuere",
				definition:
					"Massa dui morbi elementum nisl nec eget magna. Enim elementum sapien vitae rhoncus pellentesque penatibus",
			},
		],
		testimonials: [
			{
				testimonial:
					"We doubled leads generated from our website in the first month of launch.",
				customer: "John Doe",
			},
			{
				testimonial:
					"Diam rhoncus proin condimentum quam sit sollicitudin odio id. Lacus a in sit arcu placerat libero sem mi feugiat.",
				customer: "Mira Aminoff",
			},
			{
				testimonial:
					"Massa dui morbi elementum nisl nec eget magna. Enim elementum sapien vitae rhoncus pellentesque penatibus.",
				customer: "Davis Gouse",
			},
			{
				testimonial:
					"Velit porttitor posuere tellus et risus tortor non. Nec tellus fusce aliquam dictum tortor turpis maecenas ut cras.",
				customer: "Kaylynn Bator",
			},
			{
				testimonial:
					"Sodales congue ultricies eget sem cursus amet. Non in nisl arcu ut id ac.",
				customer: "Alfredo Workman",
			},
		],
		work: [
			{
				company: "Moooi",
				websiteImage: "moooi",
			},
			{
				company: "Digital Cover",
				websiteImage: "digital-cover",
			},
			{
				company: "Penshoppe",
				websiteImage: "penshoppe",
			},
			{
				company: "Adidas",
				websiteImage: "adidas",
			},
			{
				company: "Swab the World",
				websiteImage: "swab-the-world",
			},
			{
				company: "Mubasic",
				websiteImage: "mubasic",
			},
			{
				company: "Nike",
				websiteImage: "nike",
			},
			{
				company: "Superlist",
				websiteImage: "superlist",
			},
			{
				company: "Newest Americans",
				websiteImage: "newest-americans",
			},
		],
	};
});

useState("aboutContent", () => {
	return {
		about: [
			"Lorem ipsum dolor sit amet consectetur. Est facilisis vitae sem lectus aliquam amet. Commodo rutrum convallis donec nam duis facilisis. Ipsum posuere turpis leo commodo consectetur.",
			"Est ut scelerisque fringilla at enim et arcu volutpat. Consequat placerat sed eget proin curabitur luctus vitae ipsum. Viverra mollis at volutpat tristique massa. Tincidunt dictum nisl lobortis duis porttitor interdum convallis interdum purus. Risus elit odio tincidunt felis aliquet pellentesque. Eu pellentesque pulvinar elementum nunc aliquam donec. Sed nisl massa eu urna faucibus vitae pellentesque. Elit vulputate nulla vulputate ultricies faucibus suscipit mauris pellentesque.",
		],
	};
});
</script>

<template>
	<NuxtPage />
</template>

<style></style>
