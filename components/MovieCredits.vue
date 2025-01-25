<template>
  <div class="card-section">
    <swiper
      :slides-per-view="5"
      :slides-per-group="5"
      :speed="600"
      :modules="[Navigation]"
      navigation
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

.swiper-slide {
  display: flex;
  justify-content: center;
}

.card-section .swiper-button-prev,
.card-section .swiper-button-next {
  color: #ffffff;
  transition: all 0.2s ease;
}
</style>
