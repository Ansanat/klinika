<template>
  <div class="v-schedule-page">
    <div class="service-about">
      <div class="service-header vac">Рентген кабинет</div>
      <div class="service-text">
        Понедельник - с 12:00 до 16:00<br>
        Вторник - с 12:00 до 16:00<br>
        Среда - с 12:00 до 16:00<br>
        Четверг - с 12:00 до 16:00<br>
        Пятница - с 12:00 до 16:00<br>
        Суббота - с 9:00 до 14:00
      </div>
      
      <div class="service-header vac">Процедурный кабинет</div>
      <div class="service-text">
        Понедельник - с 8:00 до 11:00<br>
        Вторник - с 8:00 до 11:00<br>
        Среда - с 8:00 до 11:00<br>
        Четверг - с 8:00 до 11:00<br>
        Пятница - с 8:00 до 11:00<br>
        Суббота - с 9:00 до 10:00
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-schedule-page',
  components: {

  },
  mounted() {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Клиника здоровья расписание работы";
    document.body.appendChild(meta);
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.service-about {
  overflow: hidden;
  width: 90%;
  height: auto;
  background-color: white;
  padding-bottom: 30px;
  border-radius: 30px;
  margin: auto;
  margin-top: 40px;
  box-shadow: 4px 4px 20px #b9ecad;
}

.service-header {
  padding-top: 20px;
  margin-left: 20px;
  font-size: 40px;
  color: #358c21;
  font-weight: bold;
}

.service-text {
  width: 85%;
  padding-top: 20px;
  margin: auto;
  font-size: 18px;
  text-align: justify;
}

.vac {
  font-size: 34px !important;
  margin-top: 20px;
}

@media screen and (max-width: 700px) {
  .service-header {
    font-size: 27px;
  }
}
</style>
