<template>
  <div class="v-about-page">
    <div class="service-header" style="text-align: center; margin-bottom: 20px;">О клинике</div>
    <div class="v-about-header">
        <img
          class="v-about-header-image"
          src="../images/main-gallery/Репин Андрей Александрович.jpeg"
        />
        <div class="v-about-header-text">
          ООО «Пульсар» Клиника Здоровья имеет многолетний опыт работы в сфере предоставления медицинских услуг. <br><br>
          Проведение предрейсового/послерейсового, предварительного/периодического медицинского осмотра, ведение консультативного приема, лучевая, ультразвуковая диагностика, собственная операционная для малых хирургических вмешательств. <br><br>
          Многопрофильный медицинский центр организован в 2010 году и за эти годы зарекомендовал себя как надежный партнер, индивидуальные подходы к решению многих многогранных и нестандартных задач, дружный и сплоченный коллектив, постоянная работа над собой для лучшего плодотворного сотрудничества с организациями, мы работаем в разных областях Российской Федерации, нам доверяют профессионалы.
        </div>
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
  }

  &-text {
    margin-left: 20px;
    font-size: 18px;
    width: 60%;
    text-align: justify;
    margin-top: 20px;
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
