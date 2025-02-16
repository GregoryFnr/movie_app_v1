<template>
  <div class="card-section">
    <swiper
      :speed="600"
      :modules="[Navigation]"
      navigation
      :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 5, slidesPerGroup: 2 },
        768: { slidesPerView: 3, spaceBetween: 10, slidesPerGroup: 3 },
        1024: { slidesPerView: 5, spaceBetween: 10, slidesPerGroup: 5 },
      }"
    >
      <swiper-slide
        v-for="recommandation in recommandations.results"
        :key="recommandation.id"
      >
        <RecommandationCard
          :movieid="recommandation.id"
          :title="recommandation.title"
          :date="recommandation.release_date"
          :poster="recommandation.poster_path"
          :genreid="recommandation.genre_ids"
          :stars="recommandation.vote_average"
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

const { data: recommandations, error } = await useFetch(
  `/api/movies/${movieid}/recommandations`
);
</script>

<style scoped>
.swiper-horizontal {
  padding: 10px;
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
