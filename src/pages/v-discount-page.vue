<template>
  <div class="v-discount-page">
    <div v-for="service in services" :key="service" style="display: inline-block;">
      <Card
        style="height: 300px;"
        :img="service.src"
        :desc="service.desc"
        :name="service.name"
        :buttonVisible="service.buttonVisible"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/v-service-card.vue'
export default {
  name: 'v-discount-page',
  props: {
  },
  components: {
    Card
  },
  mounted() {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Клиника здоровья акции скидки";
    document.body.appendChild(meta);
  },
  data() {
    return {
      services: [
        {
          name: 'Участникам СВО', 
          desc: 'Скидка 30%, а также скидка 15% для близких родственников участников СВО', 
          src: 'СВО.jpg',
          buttonVisible: false
        },
        {
          name: 'Розовый октябрь', 
          desc: 'Октябрь - это месяц борьбы с раком молочной железы. В связи с этим, весь октябрь будет действовать скидка 10% на УЗИ молочных желез и маммографию.', 
          src: 'pink.png',
          buttonVisible: false
        },
      ]
    }
  }
}
</script>

<style>
.v-discount-page {
  text-align: center;
  padding-bottom: 100px;
}
</style>
