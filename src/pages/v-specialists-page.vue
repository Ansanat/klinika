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
        {name: 'Сотников Евгений Иванович', spec: 'Врач акушер-гинеколок УЗД', src: 'doctor.jpg'},
        {name: 'Никитина Надежда Дмитриевна', spec: 'Врач акушер-гинеколог', src: 'doctor2.jpg'},
        {name: 'Чащина Ольга Константиновна', spec: 'Врач акушер-гинеколог', src: 'doctor2.jpg'},
        {name: 'Ушакова Маргарита Андреевна', spec: 'Врач акушер-гинеколог УЗД', src: 'doctor2.jpg'},
        {name: 'Корнеева Татьяна Николаевна', spec: 'Врач акушер-гинеколог УЗД', src: 'doctor2.jpg'},
        {name: 'Гладышев Алексей Владимирович', spec: 'Врач анестезиолог-реаниматолог', src: 'doctor.jpg'},
        {name: 'Беляева Марина Викторовна', spec: 'Врач анестезиолог-реаниматолог', src: 'doctor2.jpg'},
        {name: 'Ущенко Марина Сергеевна', spec: 'Врач дерматовенеролог', src: 'doctor2.jpg'},
        {name: 'Беличенко Сергей Андреевич', spec: 'Врач дерматовенеролог', src: 'doctor.jpg'},
        {name: 'Санников Михаил Сергеевич', spec: 'Врач невролог УЗД', src: 'doctor.jpg'},
        {name: 'Абдуллин Григорий Рафаилович', spec: 'Врач онколог-маммолог', src: 'doctor.jpg'},
        {name: 'Егоров Иван Георгиевич', spec: 'Врач оториноларинголог', src: 'doctor.jpg'},
        {name: 'Моторина Татьяна Борисовна', spec: 'Врач офтальмолог', src: 'doctor2.jpg'},
        {name: 'Задворнова Любовь Вячеславовна', spec: 'Врач офтальмолог', src: 'doctor2.jpg'},
        {name: 'Борзых Наталья Александровна', spec: 'Врач профпатолог', src: 'doctor2.jpg'},
        {name: 'Калинин Александр Иванович', spec: 'Врач психиатр', src: 'doctor.jpg'},
        {name: 'Медведева Ольга Александровна', spec: 'Врач психиатр-нарколог', src: 'doctor2.jpg'},
        {name: 'Исмаилов Расулжон Рахимжанович', spec: 'Врач УЗД', src: 'doctor.jpg'},
        {name: 'Рыбакова Татьяна Александровна', spec: 'Врач УЗД', src: 'doctor2.jpg'},
        {name: 'Комунов Уланычбек Камчыбекович', spec: 'Врач уролог УЗД', src: 'doctor.jpg'},
        {name: 'Шульга Марина Андреевна', spec: 'Врач УЗД', src: 'doctor2.jpg'},
        {name: 'Пономаренко Александр Геннадьевич', spec: 'Врач УЗД', src: 'doctor.jpg'},
        {name: 'Рыбкин Андрей Львович', spec: 'Врач уролог', src: 'doctor.jpg'},
      ]
    }
  }
}
</script>

<style>

</style>
