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
  data() {
    return {
      services: [
        {
          name: 'Участникам СВО', 
          desc: 'Скидка 30%, а также скидка 15% для близких родственников участников СВО', 
          src: 'СВО.jpg',
          buttonVisible: false
        },
      ]
    }
  }
}
</script>

<style>
.v-discount-page {
  text-align: left;
  padding-bottom: 100px;
}
</style>
