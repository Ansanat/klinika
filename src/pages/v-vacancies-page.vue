<template>
  <div class="v-vacancies-page">
    <div class="service-about">
      <div v-for="item in vacancies" :key="item">
        <div class="service-header vac"> {{ item.name }} </div>
        <div class="service-text"> {{ item.ob }} </div>
        <div class="service-text"> {{ item.treb }} </div>
      </div>
      <div class="service-header vac"> Также требуются</div>
      <div class="service-text">Cпециалисты для консультаций и лечения физических лиц: врач дерматолог, врач стоматолог-терапевт, врач кардиолог, врач терапевт, врач УЗД, врач физиотерапевт, врач стоматолог-хирург, врач терапевт-профпатолог, врач офтальмолог, регистраторы, врач уролог УЗД.</div>
      <div class="service-header vac">По всем вопросам обращаться по телефону 8-913-914-20-49</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-vacancies-page',
  components: {

  },
  mounted() {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Клиника здоровья вакансии";
    document.body.appendChild(meta);
  },
  data() {
    return {
      vacancies: [
        {
          name: 'Администратор',
          ob: 'Обязанности: работа с пациентами, работа на кассе, работа с документацией.'
        },
        {
          name: 'Рентгенолаборант',
          ob: 'Обязанности: проведение рентгенографии, прием населения, участие в первичных и периодических коммисиях, умение (обучение) делать рентгенограммы, проводить фото обработку, участие в рентгеноскопии, оформление документации.'
        },
        {
          name: 'Младший сестринский состав',
          ob: 'Обязанности: участие в медкомиссиях, уборка помещений в соответствии с санитарными нормами, проверка оснащения кабинетов хозяйственными товарами, уборка кабинетов после медицинских комиссий, дезинфекция кабинетов.'
        },
        {
          name: 'Медицинская сестра в промышленное подразделение',
          ob: 'Обязанности: проведение пред рейсовых, после рейсовых, сменных, после сменных осмотров водителей, выход на линию.'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.vac {
  font-size: 34px !important;
  margin-top: 20px;
}
</style>
