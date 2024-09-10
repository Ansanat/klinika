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
        </ul>
      </transition>
    </nav>
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
        <router-link :to="{ name: 'Discount', hash: '#head'}">
          <div class="nav-item">
            Акции
          </div>
        </router-link>
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
  </div>
</template>

<script>
export default {
  name: 'v-header',
  props: {
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
}

.v-mobile-header {
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #b9ecad;
}

.logo {
  cursor: pointer;
  height: 50px;
  margin-left: 80px;
  margin-top: 15px;
}

.nav-bar {
  height: 50px;
  width: 70%;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
}

.nav-item {
  font-weight: 100;
  cursor: pointer;
  margin-left: 2%;
  margin-right: 2%;
  text-align: center;
  display: inline-block;
  color: black;
  text-decoration: none;
}

.nav-item:hover {
  color: #358c21;
}

.mobile-menu {
  display: none;
  margin-left: 10px;
  cursor: pointer;
}

.mobile-menu-ul {
  font-weight: bold;
  position: absolute;
  font-size: 25px;
  left: -8%;
  top: 70px;
  text-align: center;
  width: 100%;
}

.mobile-menu-li {
  list-style-type: none;
  margin-top: 30px;
}

.menu-icon {
  font-size: 50px;
  color: #358c21;
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
    margin-left: 50px;
  }

  .mobile-menu {
    display: inline-block;
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
