<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { filename } from 'pathe/utils'

const glob = import.meta.glob('@/assets/imgs/carousel/*.jpg', {eager: true})


const imgs = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
console.log(imgs)

var currentImg = 1
</script>

<template>
    <Carousel class="custom-carousel" :itemsToShow="1" :wrapAround="false" :transition="500">
        <Slide v-for="slide, key in imgs" :key="key">
            <img 
                class="carousel__item"
                :src="slide"
                :alt="slide"
            />
        </Slide>

        <template #addons class="no">
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
.custom-carousel {
    width: 100%;
}

.carousel__item {
    width: auto;
    height: auto;
    max-height: 500px;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  transition-duration: 1000ms;
  z-index: 1;
}
</style>