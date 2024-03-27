<template>
    <div class="v-services">
        <div class="services-zag">Услуги и направления</div>
        <div class="service-buttons">
            <router-link
                style="margin-right: 10px;"
                v-for="service in services" :key="service"
                class="service-button"
                :to="{path: service.route}"
            >
                {{ service.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'v-services',
  props: {
  },
  data() {
    return {
        services: [
            {
                name: 'Гастроэнтеролог', 
                route: '/service-page/gastr'
            },
            {
                name: 'Гинеколог', 
                route: '/service-page/ginecolog'
            },
            {
                name: 'Кардиолог', 
                route: '/service-page/cardiolog'
            },
            {
                name: 'ЛОР', 
                route: '/service-page/lor'
            },
            {
                name: 'Невролог', 
                route: '/service-page/nevrolog'
            },
            {
                name: 'Онколог', 
                route: '/service-page/onkolog'
            },
            {
                name: 'Офтальмолог', 
                route: '/service-page/oftalmolog'
            },
            {
                name: 'Терапевт', 
                route: '/service-page/terapevt'
            },
            {
                name: 'Уролог',
                route: '/service-page/urolog'
            },
            {
                name: 'Хирург', 
                route: '/service-page/hirurg'
            },
            {
                name: 'Эндокринолог', 
                route: '/service-page/endocrinolog'
            },
            {
                name: 'Медицинские комиссии', 
                route: '/service-page/medcom'
            },
            {
                name: 'Процедурный кабинет', 
                route: '/service-page/procedures'
            },
            {
                name: 'Рентген', 
                route: '/service-page/rentgen'
            },
            {
                name: 'УЗИ', 
                route: '/service-page/gastr'
            },
            {
                name: 'Анализы', 
                route: '/service-page/gastr'
            },
        ]
    }
  }
}
</script>

<style>

.v-services{
    width: 85%;
    margin: auto;
    margin-top: 80px;
}

.service-buttons {
    width: 100%;
    margin-top: 20px;
}

.service-button {
    display: inline-block;
    text-decoration: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    height: auto;
    border: 2px solid #358c21;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    background-color: #b9ecad;
    font-size: 20px;
    box-shadow: 2px 2px 2px gray;
    color: black;
}

.service-button:hover{
    box-shadow: 2px 2px 10px gray;
}

.services-zag {
    width: 100%;
    font-size: 50px;
    color: #358c21;
    font-weight: bold;
}

@media screen and (max-width: 700px) {
.services-zag {
    font-size: 34px;
}
}
@media screen and (min-width: 701px) and  (max-width: 1100px){

}
</style>
