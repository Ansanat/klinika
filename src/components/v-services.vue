<template>
    <div class="v-services">
        <div class="services-zag">Услуги и направления</div>
        <div class="service-buttons">
            <router-link
                v-for="service in services" :key="service"
                class="service-button"
                style="margin-right: 10px;"
                :to="{ name: service.route, hash: '#head'}"
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
                route: 'Gastr'
            },
            {
                name: 'Гинеколог', 
                route: 'Ginecolog'
            },
            {
                name: 'Кардиолог', 
                route: 'Cardiolog'
            },
            {
                name: 'ЛОР', 
                route: 'LOR'
            },
            {
                name: 'Невролог', 
                route: 'Nevrolog'
            },
            {
                name: 'Онколог', 
                route: 'Onkolog'
            },
            {
                name: 'Офтальмолог', 
                route: 'Oftalmolog'
            },
            {
                name: 'Терапевт', 
                route: 'Terapevt'
            },
            {
                name: 'Уролог',
                route: 'Urolog'
            },
            {
                name: 'Хирург', 
                route: 'Hirurg'
            },
            {
                name: 'Эндокринолог', 
                route: 'Endocrinolog'
            },
            {
                name: 'Медицинские комиссии', 
                route: 'Medcom'
            },
            {
                name: 'Процедурный кабинет', 
                route: 'Procedures'
            },
            {
                name: 'Рентген', 
                route: 'Rentgen'
            },
            {
                name: 'УЗИ', 
                route: 'USI'
            },
            {
                name: 'Анализы', 
                route: 'Analysis'
            },
            {
                name: 'Функциональная диагностика',
                route: 'Diagnostika'
            },
            {
                name: 'Фитотерапевт',
                route: 'Fitoterapevt'
            }
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
    margin-top: 15px;
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
    .service-button {
        font-size: 16px;
    }

}
@media screen and (min-width: 701px) and  (max-width: 1100px){

}
</style>
