<template>
  <div class="v-main-page">
    <Gallery/>
    <About/>
    <Services/>
    <Team/>
  </div>
</template>

<script>
import Gallery from '@/components/v-main-gallery.vue'
import About from '@/components/v-about.vue'
import Services from '@/components/v-services.vue'
import Team from '@/components/v-team.vue'

export default {
  name: 'v-main-page',
  components: {
    Gallery,
    About,
    Services,
    Team
  },
  mounted() {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Клиника здоровья Искитим";
    document.body.appendChild(meta);
  },
}
</script>

<style>

</style>
