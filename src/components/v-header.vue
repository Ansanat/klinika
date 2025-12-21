<template>
  <div 
    :class="show ? 'v-mobile-header' : 'v-header'"
  >
    <nav class="mobile-menu">
      <transition name="fade" mode="out-in">
        <i 
          v-if="!show"
          @click="show = !show"
          key="menu"
          class="material-icons menu menu-icon"
        >
          menu
        </i>
        <i
          v-else
          @click="show = !show"
          key="clear"
          class="material-icons clear menu-icon"
        >
          clear
        </i>
      </transition>
      <div class="mobile-accessibility-toggle" @click="toggleAccessibility">
        <i class="material-icons">visibility</i>
      </div>
      <transition name="fade">
        <ul 
          v-if="show"
          class="mobile-menu-ul"
        >
          <li 
            v-for="item in menu_items" :key="item"
            @click="show = !show"
            class="mobile-menu-li"
          >
            <router-link 
              :to="{ name: item.url, hash: '#head'}"
              style="text-decoration: none; color: #358c21;"
            >
              {{ item.name }}
            </router-link>
          </li>
          <li 
            @click="toggleAccessibility(); show = !show"
            class="mobile-menu-li"
            style="cursor: pointer;"
          >
            <span style="text-decoration: none; color: #358c21;">
              {{ isAccessibilityMode ? 'Обычная версия' : 'Версия для слабовидящих' }}
            </span>
          </li>
        </ul>
      </transition>
    </nav>
    <div class="header-content">
      <router-link to="/"><img src="@/images/logo.png" class="logo"></router-link>
      <div class="nav-bar">
        <router-link :to="{ name: 'Main', hash: '#head'}">
          <div class="nav-item">
            Главная
          </div>
        </router-link>
        <router-link :to="{ name: 'Service', hash: '#head'}">
          <div class="nav-item">
            Услуги
          </div>
        </router-link>
        <!-- <router-link :to="{ name: 'Discount', hash: '#head'}">
          <div class="nav-item">
            Акции
          </div>
        </router-link> -->
        <router-link :to="{ name: 'Specialists', hash: '#head'}">
          <div class="nav-item">
            Специалисты
          </div>
        </router-link>
        <router-link :to="{ name: 'Vacancies', hash: '#head'}">
          <div class="nav-item">
            Вакансии
          </div>
        </router-link>
        <router-link :to="{ name: 'Schedule', hash: '#head'}">
          <div class="nav-item">
            Расписание
          </div>
        </router-link>
        <router-link :to="{ name: 'Feedback', hash: '#head'}">
          <div class="nav-item">
            Отзывы
          </div>
        </router-link>
        <router-link :to="{ name: 'AboutPage', hash: '#head'}">
          <div class="nav-item">
            О клинике
          </div>
        </router-link>
        <router-link :to="{ name: 'Contacts', hash: '#head'}">
          <div class="nav-item">
            Контакты
          </div>
        </router-link>
      </div>
      <div class="accessibility-toggle" @click="toggleAccessibility">
        <i class="material-icons">visibility</i>
        <span class="accessibility-text">{{ isAccessibilityMode ? 'Обычная версия' : 'Версия для слабовидящих' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useAccessibility } from '@/composables/useAccessibility'

export default {
  name: 'v-header',
  props: {
  },
  setup() {
    const { isAccessibilityMode, toggleAccessibilityMode } = useAccessibility()
    return {
      isAccessibilityMode,
      toggleAccessibility: toggleAccessibilityMode
    }
  },
  data() {
    return {
      menu_items: [
        {
          name: 'Главная',
          url: 'Main'
        },
        {
          name: 'Услуги',
          url: 'Service'
        },
        {
          name: 'Акции',
          url: 'Discount'
        },
        {
          name: 'Специалисты',
          url: 'Specialists'
        },
        {
          name: 'Вакансии',
          url: 'Vacancies'
        },
        {
          name: 'Расписание',
          url: 'Schedule'
        },
        {
          name: 'Отзывы',
          url: 'Feedback'
        },
        {
          name: 'О клинике',
          url: 'AboutPage'
        },
        {
          name: 'Контакты',
          url: 'Contacts'
        }
      ],
      show: false,
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.v-header {
  top: 0px;
  height: 80px;
  background-color: #b9ecad;
  font-family: Arial;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 100vw;
  z-index: 1000;
  left: 0;
  right: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
  overflow-x: hidden;
  flex-shrink: 1;
}

.v-mobile-header {
  position: fixed;
  z-index: 10000;
  top: 0px;
  left: 0px;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-color: #b9ecad;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}

.logo {
  cursor: pointer;
  height: 50px;
  margin-left: 80px;
  max-width: 200px;
  flex-shrink: 0;
  object-fit: contain;
}

.nav-bar {
  height: 50px;
  flex: 1;
  min-width: 0;
  vertical-align: middle;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
}

.nav-bar a {
  text-decoration: none;
  margin: 0 8px;
}

.nav-item {
  font-weight: 100;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  color: black;
  text-decoration: none;
  white-space: nowrap;
}

.nav-item:hover {
  color: #358c21;
}

.mobile-menu {
  display: none;
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  z-index: 10002;
  display: flex;
  align-items: center;
  gap: 15px;
}

.v-mobile-header .mobile-menu {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10002;
}

.mobile-accessibility-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #358c21;
  padding: 5px;
}

.mobile-accessibility-toggle .material-icons {
  font-size: 50px;
  color: #358c21;
}

.mobile-accessibility-toggle:hover .material-icons {
  color: #2a6f18;
}

.mobile-menu-ul {
  font-weight: bold;
  position: fixed;
  font-size: 25px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: #b9ecad;
  z-index: 10001;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
  overflow-y: auto;
}

.mobile-menu-li {
  list-style-type: none;
  margin: 15px 0;
  padding: 15px 20px;
  box-sizing: border-box;
  width: 90%;
  max-width: 400px;
}

.menu-icon {
  font-size: 50px;
  color: #358c21;
}

.accessibility-toggle {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  padding: 8px 12px;
  background-color: #358c21;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-size: 14px;
  white-space: nowrap;
  flex-shrink: 0;
  max-width: 250px;
}

.accessibility-toggle:hover {
  background-color: #2a6f18;
}

.accessibility-toggle .material-icons {
  font-size: 20px;
  margin-right: 8px;
}

.accessibility-text {
  white-space: nowrap;
}

@media screen and (max-width: 1146px) {
  .accessibility-toggle {
    display: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1146px) {
  .nav-bar{
    display: none;
  }

  .logo {
    margin-left: 10px;
    max-width: 150px;
    flex-shrink: 1;
  }

  .mobile-menu {
    display: flex;
    flex-shrink: 0;
  }

  .mobile-accessibility-toggle {
    display: flex;
    flex-shrink: 0;
  }

  .v-header {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 100vw;
  }

  .header-content {
    padding: 0 5px;
    gap: 5px;
  }

  .accessibility-toggle {
    display: none;
  }
}
@media screen and (min-width: 831px) and  (max-width: 1100px){
  .nav-bar{
    width: 65%;
  }
  .nav-item{
    font-size: 15px;
  }
  .logo{
    margin-left: 20px;
  }
}
</style>
