<template>
  <div class="card-section">
    <swiper
      :speed="600"
      :modules="[Navigation]"
      navigation
      :breakpoints="{
        360: { slidesPerView: 2, spaceBetween: 2, slidesPerGroup: 2 },
        480: { slidesPerView: 2, spaceBetween: 3, slidesPerGroup: 2 },
        640: { slidesPerView: 3, spaceBetween: 5, slidesPerGroup: 3 },
        768: { slidesPerView: 3, spaceBetween: 10, slidesPerGroup: 3 },
        1024: { slidesPerView: 5, spaceBetween: 10, slidesPerGroup: 5 },
      }"
    >
      <swiper-slide v-for="credit in credits.cast" :key="credit.id">
        <CreditCard
          :name="credit.name"
          :picture="credit.profile_path"
          :character="credit.character"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const route = useRoute();
const movieid = route.params.id;

const { data: credits, error } = await useFetch(
  `/api/movies/${movieid}/credits`
);
</script>

<style scoped>
.swiper-horizontal {
  padding: 10px;
}

.card:hover {
  transform: none;
  box-shadow: none;
  border: 1px solid transparent;
}

.swiper-slide {
  height: 100%;
  display: flex;
  justify-content: center;
}

.card-section .swiper-button-prev,
.card-section .swiper-button-next {
  color: #ffffff;
  transition: all 0.2s ease;
}
</style>
