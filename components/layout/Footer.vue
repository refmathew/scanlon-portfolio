<script setup>
const props = defineProps({
  background: {
    type: String,
    required: true,
  },
});

const socials = [
  {
    name: "Email",
    address: "mailto:john@gmail.com",
  },
  {
    name: "Youtube",
    address: "https://www.youtube.com/@iusegentoobtw",
  },
  {
    name: "LinkedIn",
    address: "https://www.linkedin.com",
  },
  {
    name: "Twitter",
    address: "https://www.twitter.com",
  },
];

const sitemap = [
  {
    name: "Home",
    address: "/",
  },
  {
    name: "About",
    address: "/about",
  },
  {
    name: "Services",
    address: "/#services",
  },
  {
    name: "Work",
    address: "/#work",
  },
  {
    name: "Testimonials",
    address: "/#testimonials",
  },
  {
    name: "Blog",
    address: "/blog",
  },
  {
    name: "Contact",
    address: "/contact",
  },
];
</script>

<template>
  <section class="footer__container sct-ctr">
    <div class="footer sct">
      <LayoutComponentLogo class="footer__logo" :background="background" />
      <div class="footer__links-all">
        <div class="footer__contact">
          <div class="footer__contact-header">Interested to work with me?</div>
          <ContactButton background="blue" />
        </div>
        <div class="footer__links-main">
          <LayoutComponentLinks
            class="footer__links-main-1"
            heading="Socials"
            :links="socials"
          />
          <LayoutComponentLinks
            class="footer__links-main-2"
            heading="Sitemap"
            :links="sitemap"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts" as a;

.footer__container {
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  width: 100%;
  padding: 12.8rem a.f-clampify(20, 128);
  color: a.$v-accent-1;
  @include a.m-for-size(desktop) {
    flex-direction: row;
    align-items: flex-start;
    gap: a.f-clampify(32, 128);
  }

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.2rem;
    @include a.m-for-size(desktop) {
      flex-direction: unset;
      align-items: flex-end;
    }
  }
  &__logo :deep(.logo) {
    width: 4.8rem;
  }
  &__logo :deep(.logo__name) {
    @include a.m-for-size(desktop) {
      white-space: nowrap;
    }
  }

  &__links-all {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.4rem;
    @include a.m-for-size(desktop) {
      flex-direction: row-reverse;
      align-items: flex-start;
      gap: a.f-clampify(64, 128);
    }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    @include a.m-for-size(desktop) {
      align-items: flex-start;
    }
  }
  &__contact-header {
  }

  &__links-main {
    display: flex;
    gap: 3.2rem;
    @include a.m-for-size(desktop) {
      gap: a.f-clampify(32, 128);
    }
  }
  &__links-1 {
  }
  &__links-2 {
  }
}
</style>
