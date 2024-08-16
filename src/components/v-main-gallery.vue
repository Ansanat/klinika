<template>
  <swiper
    :spaceBetween="0"
    :centeredSlides="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="../images/main-gallery/Image1.jpg" class="card-gallery">
      <router-link :to="{ name: 'AboutPage', hash: '#head'}">
        <Button class="route-button" text="Подробнее"/>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <img src="../images/main-gallery/Image2.png" class="card-gallery">
      <router-link :to="{ name: 'Service', hash: '#head'}">
        <Button class="route-button" text="Подробнее"/>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <img src="../images/main-gallery/Image3.png" class="card-gallery">
      <router-link :to="{ name: 'Medcom', hash: '#head'}">
        <Button class="route-button" text="Подробнее"/>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <img src="../images/main-gallery/Image4.png" class="card-gallery">
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  import Button from '@/components/v-button'

  export default {
    name: 'v-card-gallery',
    components: {
      Swiper,
      SwiperSlide,
      Button,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style>
.route-button {
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translate(-50%,-50%);
}

.card-gallery {
  width: 100%;
  aspect-ratio: 16 / 7;
  object-fit: cover;
}
.swiper-pagination-bullet, .swiper-pagination-bullet-active {
  background-color: #121820;
  width: 13px;
  height:13px;
  display: none;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
  color: #121820;
}
.swiper-button-next:hover {
  color: white;
  opacity:0.4;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-prev:after {
  color: #121820;
}
.swiper-button-prev:hover {
  color: white;
  opacity:0.4;
}

@media screen and (max-width: 700px) {
  .card-gallery {
    aspect-ratio: 3 / 3;
    object-fit: cover;
  }

  .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    display: none;
  }

  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-prev:after {
    display: none;
  }
}
</style>
