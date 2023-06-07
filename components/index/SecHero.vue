<script setup>
import { vElementSize } from "@vueuse/components";
const homeContent = useState("homeContent");

// Size of slider track
const heroTextHeight = ref(null);
const handleHeroTextResize = ({ width, height }) => {
  heroTextHeight.value = `${height * 0.25}px`;
};
</script>

<template>
  <div class="hero-container sct-ctr">
    <section class="hero sct">
      <IndexCmpIllustration class="hero__illustration" />
      <div class="hero__text" v-element-size="handleHeroTextResize">
        <h1 class="hero__title">{{ homeContent?.hero.title }}</h1>
        <div class="hero__subtitle">
          <p v-for="subtitle in homeContent?.hero.subtitle">{{ subtitle }}</p>
        </div>
        <ContactButton class="hero__cta" background="white" />
        <div class="hero__brand-slider">
          <IndexComponentBrandSlider
            :brands="homeContent?.hero.brands[0]"
            :inverse-direction="false"
          />
          <IndexComponentBrandSlider
            :brands="homeContent?.hero.brands[1]"
            :inverse-direction="true"
          />
        </div>
        <div class="hero__illustration-placeholder"></div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/abstracts" as a;
.hero {
  position: relative;
  padding: 12.3rem a.f-clampify(18, 128) a.f-clampify(36, 64);
  @include a.m-for-size(desktop) {
    padding: a.f-clampify(123, 192) a.f-clampify(18, 128) a.f-clampify(36, 64);
  }

  &__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @include a.m-for-size(desktop) {
      align-items: flex-start;
      max-width: 53%;
      text-align: left;
    }
  }

  &__title {
    margin-bottom: 1.6rem;
    font-size: a.f-clampify(48, 96);
    font-weight: 900;
    @include a.m-for-size(desktop) {
      line-height: 11.6rem;
    }
  }

  &__subtitle {
    margin-bottom: 3.2rem;
    font-size: 16;
    font-weight: 300;
    line-height: a.f-clampify(24, 36);
  }

  &__cta {
    margin-bottom: a.f-clampify(48, 64);
  }

  &__brand-slider {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: a.f-clampify(16, 32);
    width: 100%;
    @include a.m-for-size(desktop) {
      align-items: flex-start;
    }
  }

  &__illustration-placeholder {
    @include a.m-for-size(desktop) {
      height: v-bind(heroTextHeight);
    }
  }
}
</style>
