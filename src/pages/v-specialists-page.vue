<template>
  <div class="v-specialists-page">
    <div v-for="doctor in doctors" :key="doctor" style="display: inline-block;">
      <Card
        :name="doctor.name"
        :spec="doctor.spec"
        :img="doctor.src"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/v-specialist-card.vue'

export default {
  name: 'v-specialists-page',
  components: {
    Card,
  },
  props: {
  },
  data() {
    return {
      doctors: [
        {name: 'Сотников Евгений Иванович', spec: 'Врач акушер-гинеколог, врач ультразвуковой диагностики', src: 'Сотников Евгений Иванович.jpeg'},
        {name: 'Черникова Вероника Викторовна', spec: 'Врач оториноларинголог', src: 'Черникова Вероника Викторовна.jpeg'},
        {name: 'Чащина Ольга Константиновна', spec: 'Врач акушер-гинеколог, врач гинеколог-эндокринолог, врач ультразвуковой диагностики', src: 'Чащина Ольга Константиновна.jpeg'},
        {name: 'Ушакова Маргарита Андреевна', spec: 'Врач акушер-гинеколог, врач ультразвуковой диагностики', src: 'Ушакова Маргарита Андреевна.jpeg'},
        {name: 'Марченко Ольга Алексеевна', spec: 'Врач ультразвуковой диагностики', src: 'Марченко Ольга Алексеевна.jpeg'},
        {name: 'Гладышев Алексей Владимирович', spec: 'Врач анестезиолог-реаниматолог, исполнительный директор', src: 'Гладышев Алексей Владимирович.jpeg'},
        {name: 'Беляева Марина Викторовна', spec: 'Врач анестезиолог-реаниматолог', src: 'Беляева Дарья Александровна.jpeg'},
        // {name: 'Ущенко Марина Сергеевна', spec: 'Врач дерматовенеролог', src: 'doctor2.jpeg'},
        {name: 'Кужугет Сайзана Владимировна', spec: 'Врач ультразвуковой диагностики', src: 'Кужугет Сайзана Владимировна.jpeg'},
        {name: 'Санников Михаил Сергеевич', spec: 'Врач невролог, врач ультразвуковой диагностики', src: 'Санников Михаил Сергеевич.jpeg'},
        // {name: 'Абдуллин Григорий Рафаилович', spec: 'Врач онколог-маммолог', src: 'doctor.jpeg'},
        {name: 'Манчыылай Чейнеш Шой-ооловна', spec: 'Врач эндокринолог', src: 'Манчыылай Чейнеш Шой-ооловна.jpeg'},
        {name: 'Моторина Татьяна Борисовна', spec: 'Врач офтальмолог', src: 'Моторина Татьяна Борисовна.jpeg'},
        {name: 'Борзых Наталья Александровна', spec: 'Врач профпатолог', src: 'Борзых Наталья Александровна.jpeg'},
        {name: 'Калинин Александр Иванович', spec: 'Врач психиатр-нарколог', src: 'Калинин Александр Иванович.jpeg'},
        {name: 'Медведева Ольга Александровна', spec: 'Врач психиатр-нарколог', src: 'Медведева Ольга Александровна.jpeg'},
        {name: 'Исмаилов Расулжон Рахимжанович', spec: 'Врач хирург, врач ультразвуковой диагностики', src: 'Исмаилов Расул Рахимович.jpeg'},
        // {name: 'Рыбакова Татьяна Александровна', spec: 'Врач УЗД', src: 'doctor2.jpeg'},
        {name: 'Шульга Марина Андреевна', spec: 'Врач ультразвуковой диагностики', src: 'Шульга Марина Андреевна.jpeg'},
        // {name: 'Пономаренко Александр Геннадьевич', spec: 'Врач УЗД', src: 'doctor.jpeg'},
        {name: 'Рыбкин Андрей Львович', spec: 'Врач уролог', src: 'Рыбкин Андрей Львович.jpeg'},
        {name: 'Горлатых Вера Андреевна', spec: 'Врач стоматолог', src: 'Горлатых Вера Андреевна.jpeg'},
      ]
    }
  }
}
</script>

<style>
.v-specialists-page {
  text-align: center;
}

</style>
