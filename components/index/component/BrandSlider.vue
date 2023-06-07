<script setup>
import { vElementSize } from "@vueuse/components";
const props = defineProps({
  brands: {
    type: Array,
    required: true,
  },
  inverseDirection: {
    type: Boolean,
    default: false,
  },
});

// Size of slider track
const brandSliderTrackWidth = ref(null);
const brandSliderTrack = ref(null);

const handleBrandSliderTrackResize = ({ width, height }) => {
  brandSliderTrackWidth.value = `${width * 0.55}px`;
};
</script>

<template>
  <div
    class="brand-slider"
    :class="{ 'brand-slider--inverse': inverseDirection }"
  >
    <div
      class="brand-slider__track"
      ref="brandSliderTrack"
      v-element-size="handleBrandSliderTrackResize"
    >
      <img
        class="brand-slider__item"
        :src="useAsset(`/img/brand-logos/${brand}.svg`)"
        v-for="brand in brands"
      />
      <img
        class="brand-slider__item"
        :src="useAsset(`/img/brand-logos/${brand}.svg`)"
        v-for="brand in brands"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@//assets/styles/abstracts" as a;

$sliderSpeed: 16s;
@mixin white-gradient {
  background: linear-gradient(
    to right,
    rgba(a.$v-accent-1, 1) 0%,
    rgba(a.$v-accent-1, 0) 100%
  );
}

.brand-slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: v-bind(brandSliderTrackWidth);

  &::before,
  &::after {
    position: absolute;
    z-index: 1;
    top: 0;
    content: "";
    width: 40%;
    height: 20px;
    @include white-gradient();
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: rotate(180deg);
  }

  &__track {
    display: flex;
    width: max-content;
    animation: brand-slider $sliderSpeed linear infinite;
    transform-origin: top right;
    transform: translateX(0);
  }
  &__item {
    display: block;
    height: a.f-clampify(16, 28);
    margin-left: a.f-clampify(32, 48);
    height: a.f-clampify(16, 20);
    margin-left: a.f-clampify(20, 28);
  }
}

.brand-slider--inverse {
  .brand-slider {
    &__track {
      transform-origin: top left;
      animation: brand-slider--inverse $sliderSpeed linear infinite;
    }
  }
}

@keyframes brand-slider {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0%);
  }
}
@keyframes brand-slider--inverse {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
