<template>
  <div class="v-about-page">
    <div class="service-header" style="text-align: center; margin-bottom: 20px;">О клинике</div>
    <div class="v-about-header">
        <img
          class="v-about-header-image"
          src="../images/main-gallery/about-page.jpeg"
        />
        <div class="v-about-header-text">
          ООО «Пульсар» Клиника Здоровья имеет многолетний опыт работы в сфере предоставления медицинских услуг. <br><br>
          Проведение предрейсового/послерейсового, предварительного/периодического медицинского осмотра, ведение консультативного приема, лучевая, ультразвуковая диагностика, собственная операционная для малых хирургических вмешательств. <br><br>
          Многопрофильный медицинский центр организован в 2010 году и за эти годы зарекомендовал себя как надежный партнер, индивидуальные подходы к решению многих многогранных и нестандартных задач, дружный и сплоченный коллектив, постоянная работа над собой для лучшего плодотворного сотрудничества с организациями, мы работаем в разных областях Российской Федерации, нам доверяют профессионалы.<br><br>
          <i>"С уважение к Вам и Вашему здоровью"</i> <br> 
          <i>Генеральный директор ООО "ПУЛЬСАР" Репин Андрей Александрович</i>
        </div>
    </div>
    <div class="service-header" style="text-align: center; margin-bottom: 20px;">Лицензия</div>
    <div class="v-about-license-block">
      <img
        class="v-about-license" 
        v-for="i in 3" :key="i"
        :src="`../images/license/${i}.jpeg`"
      />
      <br>
      <img
        class="v-about-license" 
        v-for="i in 13" :key="i"
        :src="`../images/license2020/${i}.jpeg`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-about-page',
  components: {

  }
}
</script>

<style lang="scss">
.v-about-header {

  height: auto;
  background-color: white;
  padding: 30px;
  display: flex;

  &-image {
    width: 500px;
    border: 2px solid #358c21;
    border-radius: 10px;
  }

  &-text {
    margin-left: 30px;
    font-size: 18px;
    width: 60%;
    text-align: justify;
    margin-top: 20px;
  }
}

.v-about-license-block {
  width: 90%;
  margin: auto;
}

.v-about-license {
  margin-top: 20px;
  margin-left: 40px;
  width: 45%;
}

@media screen and (max-width: 900px) {
  .v-about-license {
    margin-left: 20px;
    width: 90%;
  }
}

@media screen and (max-width: 700px) {
  .v-about-header {
    display: block;

    &-image{
      width: 100%;
    }

    &-text {
      font-family: Arial;
      margin-left: 0px;
      width: 100%;
    }
  }
}

@media screen and (min-width: 701px) and  (max-width: 1100px){
    .v-about-header {
      display: block;

      &-image{
        width: 100%;
      }

      &-text {
        margin-left: 0px;
        width: 100%;
      }
    }
}

</style>
