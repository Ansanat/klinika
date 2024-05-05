<template>
  <div class="team">

    <div class="team-zag">Команда профессионалов</div>

    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 7,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="team-swiper"
    >
      <swiper-slide 
        v-for="doctor in doctors" :key="doctor"
        class="team-slide"
      >
        <img :src="`../images/doctors/${doctor.src}`" class="team-img"/>
      </swiper-slide>
    </swiper>

    <router-link 
      :to="{ name: 'Specialists', hash: '#head'}"
      style="text-decoration: none;"
    >
      <Button text="Подробнее" class="team-button"/>
    </router-link>
  </div>



</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';


  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';
  import Button from '@/components/v-button.vue'

 export default {
    components: {
      Swiper,
      SwiperSlide,
      Button
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
    data() {
      return {
        doctors: [
          {
            src: 'Сотников Евгений Иванович.jpg',
          },
          {
            src: 'Чащина Ольга Константиновна.jpg',
          },
          {
            src: 'Ушакова Маргарита Андреевна.jpg',
          },
          {
            src: 'Корнеева Татьяна Николаевна.jpg',
          },
          {
            src: 'Гладышев Алексей Владимирович.jpg',
          },
          {
            src: 'Беляева Дарья Александровна.jpg',
          },
          {
            src: 'Беличенко Сергей Андреевич.jpg',
          },
          {
            src: 'Санников Михаил Сергеевич.jpg',
          },
          {
            src: 'Егоров  Иван Георгиевич.jpg',
          },
          {
            src: 'Моторина Татьяна Борисовна.jpg',
          },
          {
            src: 'Борзых Наталья Александровна.jpg',
          },
          {
            src: 'Калинин Александр Иванович.jpg',
          },
          {
            src: 'Медведева Ольга Александровна.jpg',
          },
          {
            src: 'Исмаилов Расул Рахимович.jpg',
          },
          {
            src: 'Шульга Марина Андреевна.jpg',
          },
          {
            src: 'Рыбкин Андрей Львович.jpg',
          },
        ]
      }
    }
};
</script>

<style lang="scss">
.team {
  margin: auto;
  margin-top: 90px;
  width: 85%;

  &-zag {
    font-size: 50px;
    color: #358c21;
    font-weight: bold;
  }

  &-img {
    width: 400px;
  }

  &-swiper {
    padding-top: 30px;
    width: 100%;
    display: flex;
  }

  &-slide {
    width: 400px;
    margin-bottom: 40px;
  }

  &-button {
    margin: auto;
  }
}

@media screen and (max-width: 700px) {
  .team {
    &-zag {
      font-size: 32px;
    }
  }
}

@media screen and (min-width: 701px) and  (max-width: 1100px){

}
</style>
