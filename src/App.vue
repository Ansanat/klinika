<template>
<div class="klinika-app">
  <Header id="head" class="main-header"/>
  <router-view />
  <Footer/>
</div>
</template>

<script>
import Header from './components/v-header.vue'
import Footer from './components/v-footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.klinika-app {
  top: 0px;
  background-color: #f2fcf0;
  font-family: sans-serif;
}
</style>
