<template>
<div class="klinika-app" :class="{ 'accessibility-mode': isAccessibilityMode }">
  <Header id="head" class="main-header"/>
  <router-view />
  <Footer/>
</div>
</template>

<script>
import Header from './components/v-header.vue'
import Footer from './components/v-footer.vue'
import { useAccessibility } from './composables/useAccessibility'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const { isAccessibilityMode } = useAccessibility()
    return {
      isAccessibilityMode
    }
  }
}
</script>

<style>
.klinika-app {
  top: 0px;
  background-color: #f2fcf0;
  font-family: sans-serif;
  padding-top: 80px;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}

@media screen and (max-width: 1146px) {
  .klinika-app {
    padding-top: 80px;
  }
}

body, html {
  overflow-x: hidden !important;
  max-width: 100vw !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

* {
  box-sizing: border-box;
}

/* Стили для версии слабовидящих */
.accessibility-mode {
  font-size: 1.5em !important;
  line-height: 1.8 !important;
}

.accessibility-mode * {
  font-size: inherit !important;
}

.accessibility-mode .klinika-app {
  background-color: #ffffff !important;
  color: #000000 !important;
  padding-top: 220px !important;
}

.accessibility-mode .v-header,
.accessibility-mode .v-mobile-header {
  background-color: #000000 !important;
  color: #ffffff !important;
  border-bottom: 3px solid #ffffff !important;
  min-height: 120px !important;
  height: auto !important;
  padding: 15px 0 !important;
}

.accessibility-mode .header-content {
  min-height: 90px !important;
  align-items: flex-start !important;
  padding-top: 10px !important;
}

/* Увеличиваем отступ для контента в режиме слабовидящих на ПК */
@media screen and (min-width: 1147px) {
  .accessibility-mode .klinika-app {
    padding-top: 240px !important;
  }
}

.accessibility-mode .logo {
  height: 60px !important;
  margin-top: 5px !important;
}

.accessibility-mode .nav-bar {
  min-height: 70px !important;
  height: auto !important;
  padding: 10px 0 !important;
  flex-wrap: wrap !important;
  gap: 10px !important;
}

.accessibility-mode .nav-bar a {
  margin: 5px 10px !important;
}

.accessibility-mode .accessibility-toggle {
  margin-top: 5px !important;
  padding: 12px 16px !important;
  font-size: 1.1em !important;
}

.accessibility-mode .nav-item {
  color: #ffffff !important;
  font-size: 1.2em !important;
  font-weight: bold !important;
  padding: 10px 15px !important;
  border: 2px solid #ffffff !important;
  margin: 5px !important;
}

.accessibility-mode .nav-item:hover {
  background-color: #ffffff !important;
  color: #000000 !important;
}

.accessibility-mode .mobile-menu-li {
  font-size: 1.3em !important;
  padding: 20px !important;
  border: 3px solid #ffffff !important;
  margin: 15px 0 !important;
  background-color: #000000 !important;
  min-height: 60px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.accessibility-mode .mobile-menu-li a,
.accessibility-mode .mobile-menu-li span {
  color: #ffffff !important;
  font-weight: bold !important;
  text-align: center !important;
  width: 100% !important;
  word-wrap: break-word !important;
}

.accessibility-mode .mobile-menu-ul {
  padding: 120px 0 40px 0 !important;
  background-color: #000000 !important;
}

.accessibility-mode .v-mobile-header {
  position: fixed !important;
  z-index: 10000 !important;
  width: 100% !important;
  height: 100vh !important;
  overflow-y: auto !important;
  background-color: #000000 !important;
}

.accessibility-mode .v-mobile-header .mobile-menu {
  position: fixed !important;
  top: 20px !important;
  left: 20px !important;
  z-index: 10002 !important;
}

.accessibility-mode .service-header {
  font-size: 2em !important;
  font-weight: bold !important;
  color: #000000 !important;
  background-color: #ffff00 !important;
  padding: 15px !important;
  border: 3px solid #000000 !important;
  margin: 20px 0 !important;
}

.accessibility-mode .service-text {
  font-size: 1.3em !important;
  line-height: 1.8 !important;
  color: #000000 !important;
  background-color: #ffffff !important;
  padding: 15px !important;
  margin: 15px 0 !important;
}

.accessibility-mode .price-table {
  border: 3px solid #000000 !important;
  background-color: #ffffff !important;
  padding: 20px !important;
  margin: 20px 0 !important;
}

.accessibility-mode .price-row {
  border: 2px solid #000000 !important;
  padding: 20px !important;
  margin: 15px 0 !important;
  min-height: 80px !important;
  height: auto !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  clear: both !important;
}

.accessibility-mode .price-name {
  font-size: 1.3em !important;
  font-weight: bold !important;
  color: #000000 !important;
  float: none !important;
  width: auto !important;
  flex: 1 !important;
  min-width: 200px !important;
  margin-right: 20px !important;
}

.accessibility-mode .price-price {
  font-size: 1.3em !important;
  font-weight: bold !important;
  color: #000000 !important;
  float: none !important;
  width: auto !important;
  text-align: right !important;
  white-space: nowrap !important;
}

.accessibility-mode .price-line {
  border-top: 2px solid #000000 !important;
  margin: 10px 0 !important;
}

.accessibility-mode a {
  color: #0000ff !important;
  text-decoration: underline !important;
  font-weight: bold !important;
}

.accessibility-mode button,
.accessibility-mode .v-button {
  font-size: 1.3em !important;
  padding: 15px 30px !important;
  border: 3px solid #000000 !important;
  background-color: #ffff00 !important;
  color: #000000 !important;
  font-weight: bold !important;
  min-height: 60px !important;
  height: auto !important;
  width: auto !important;
  min-width: 250px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  white-space: normal !important;
  word-wrap: break-word !important;
  box-sizing: border-box !important;
}

.accessibility-mode input,
.accessibility-mode textarea,
.accessibility-mode select {
  font-size: 1.3em !important;
  padding: 15px !important;
  border: 3px solid #000000 !important;
  background-color: #ffffff !important;
  color: #000000 !important;
}

.accessibility-mode img {
  border: 3px solid #000000 !important;
}

/* Улучшенная видимость для всех элементов */
.accessibility-mode * {
  text-shadow: none !important;
}

.accessibility-mode .logo {
  border: 3px solid #ffffff !important;
  background-color: #ffffff !important;
  padding: 5px !important;
}

/* Мобильные стили для режима слабовидящих */
@media screen and (max-width: 1146px) {
  .accessibility-mode .v-header,
  .accessibility-mode .v-mobile-header {
    min-height: 100px !important;
    padding: 10px 0 !important;
  }

  .accessibility-mode .header-content {
    min-height: 80px !important;
    padding: 5px 10px !important;
    flex-wrap: wrap !important;
  }

  .accessibility-mode .logo {
    height: 50px !important;
    margin-left: 10px !important;
    margin-top: 5px !important;
  }

  .accessibility-mode .mobile-menu {
    margin-left: 5px !important;
    margin-top: 5px !important;
  }

  .accessibility-mode .menu-icon {
    font-size: 60px !important;
    color: #ffffff !important;
  }

  /* Карточки услуг на мобильных */
  .accessibility-mode .v-service-card {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    margin: 20px 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 20px !important;
    box-sizing: border-box !important;
  }

  /* Карточки специалистов на мобильных */
  .accessibility-mode .v-specialist-card {
    width: 95% !important;
    min-width: auto !important;
    margin: 20px auto !important;
    padding: 20px !important;
  }

  /* Кнопки услуг - общие стили для режима слабовидящих (все экраны) */
  .accessibility-mode .service-button {
    width: 100% !important;
    max-width: 100% !important;
    margin: 10px 0 !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
    padding: 15px !important;
    font-size: 1.2em !important;
    display: block !important;
    box-sizing: border-box !important;
    word-wrap: break-word !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
    word-break: break-word !important;
  }

  .accessibility-mode .service-buttons {
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    margin: 20px 0 !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
  }

  /* Таблицы цен на мобильных */
  .accessibility-mode .price-table {
    width: 95% !important;
    padding: 15px !important;
  }

  .accessibility-mode .price-row {
    flex-direction: column !important;
    align-items: flex-start !important;
    padding: 15px !important;
    min-height: auto !important;
  }

  .accessibility-mode .price-name {
    width: 100% !important;
    margin-bottom: 10px !important;
    margin-right: 0 !important;
  }

  .accessibility-mode .price-price {
    width: 100% !important;
    text-align: left !important;
  }

  /* Кнопки на мобильных */
  .accessibility-mode .v-button {
    width: 100% !important;
    max-width: 100% !important;
    min-width: auto !important;
    padding: 15px 20px !important;
    box-sizing: border-box !important;
  }

  /* Заголовки на мобильных */
  .accessibility-mode .service-header {
    font-size: 1.8em !important;
    padding: 15px !important;
    margin: 15px 0 !important;
  }

  .accessibility-mode .service-text {
    font-size: 1.2em !important;
    padding: 15px !important;
    margin: 15px 0 !important;
  }

  /* Компонент About - отступ снизу */
  .accessibility-mode .v-about {
    margin-bottom: 150px !important;
    padding-bottom: 80px !important;
  }

  /* Услуги и направления */
  .accessibility-mode .services-zag {
    font-size: 2em !important;
    padding: 50px 10px !important;
    margin-top: 200px !important;
    margin-bottom: 50px !important;
    word-wrap: break-word !important;
    box-sizing: border-box !important;
    max-width: 100% !important;
    overflow-wrap: break-word !important;
    clear: both !important;
    position: relative !important;
  }

  .accessibility-mode .v-services {
    width: 100% !important;
    max-width: 100vw !important;
    padding: 10px !important;
    margin-top: 250px !important;
    margin-bottom: 30px !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
    clear: both !important;
    position: relative !important;
  }

  .accessibility-mode .service-buttons {
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    margin: 20px 0 !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
  }

  .accessibility-mode .mobile-accessibility-toggle {
    background-color: transparent !important;
    border: none !important;
  }

  .accessibility-mode .mobile-accessibility-toggle .material-icons {
    color: #ffffff !important;
    font-size: 50px !important;
  }

  .accessibility-mode .mobile-accessibility-toggle:hover .material-icons {
    color: #ffff00 !important;
  }

  .accessibility-mode .v-header {
    position: fixed !important;
    z-index: 1000 !important;
    width: 100% !important;
  }
}

/* Карточки услуг */
.accessibility-mode .v-service-card {
  height: auto !important;
  min-height: 400px !important;
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0 !important;
  padding: 25px !important;
  margin: 30px 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  box-sizing: border-box !important;
}

.accessibility-mode .service-name {
  font-size: 1.5em !important;
  width: 100% !important;
  max-width: 100% !important;
  padding: 15px 0 !important;
  margin-bottom: 15px !important;
  box-sizing: border-box !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
}

.accessibility-mode .service-description {
  font-size: 1.2em !important;
  width: 100% !important;
  max-width: 100% !important;
  padding: 15px 0 !important;
  line-height: 1.8 !important;
  margin-bottom: 20px !important;
  box-sizing: border-box !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
}

.accessibility-mode .service-img {
  width: 100% !important;
  margin-bottom: 20px !important;
}

.accessibility-mode .service-card-button {
  width: 100% !important;
  margin-top: 20px !important;
}

.accessibility-mode .service-card-button .v-button {
  width: 100% !important;
  max-width: 100% !important;
}

/* Карточки специалистов */
.accessibility-mode .v-specialist-card {
  width: auto !important;
  min-width: 400px !important;
  max-width: 90% !important;
  height: auto !important;
  min-height: 400px !important;
  padding: 25px !important;
  margin: 30px auto !important;
  box-sizing: border-box !important;
}

.accessibility-mode .doctor-name {
  font-size: 1.4em !important;
  width: 100% !important;
  padding: 15px 0 !important;
  line-height: 1.6 !important;
  word-wrap: break-word !important;
  white-space: normal !important;
}

.accessibility-mode .doctor-spec {
  font-size: 1.2em !important;
  width: 100% !important;
  padding: 10px 0 !important;
  margin-top: 10px !important;
  line-height: 1.6 !important;
  word-wrap: break-word !important;
  white-space: normal !important;
}

.accessibility-mode .doctor-img {
  width: 100% !important;
  margin-bottom: 15px !important;
}

/* Контейнер страницы услуг */
.accessibility-mode .v-service-page {
  width: 100% !important;
  max-width: 100vw !important;
  padding: 10px !important;
  box-sizing: border-box !important;
  overflow-x: hidden !important;
}

.accessibility-mode .v-service-page > div {
  width: 100% !important;
  max-width: 100% !important;
  display: block !important;
  margin: 0 !important;
  box-sizing: border-box !important;
}
</style>
