<template>
<div class="v-service">
    <div class="service-about">
        <div class="service-header">Функциональная диагностика</div>
        <div class="price-table">
            <div class="price-line"></div>
            <div v-for="service in diagnostika_services" :key="service">
                <div class="price-row">
                    <div class="price-name">{{service.name}}</div>
                    <div class="price-price">{{service.price}}</div>
                </div>
                <div class="price-line"></div>
            </div>
        </div>
        <div class="service-header">График приема пациентов по услугам:</div>
        <div class="service-text">- Холтер ЭКГ, Холтер АД с 12:00 до 13:00</div>
        <div class="service-text">- Внутривенное капельное введение(капельница) с 12:00 до 13:30</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'v-diagnostika',
    props: {
    },
    data() {
        return {
            diagnostika_services: [
                {
                    name: 'Электрокардиограмма (ЭКГ ) с расшифровкой',
                    price: '700 руб'
                },
                {
                    name: 'Электрокардиограмма (ЭКГ ) без расшифровки',
                    price: '500 руб'
                },
                {
                    name: 'Электрокардиограмма с нагрузкой (ЭКГ с нагрузкой) с расшифровкой',
                    price: '1 300 руб'
                },
                {
                    name: 'Холтеровское мониторирование сердечного ритма (ХМ-ЭКГ) + Суточное мониторирование артериального давления (СМАД)',
                    price: '2 700 руб'
                },
                {
                    name: 'Холтеровское мониторирование сердечного ритма (ХМ-ЭКГ)',
                    price: '1 700 руб'
                },
                {
                    name: 'Суточное мониторирование артериального давления(СМАД)',
                    price: '1 500 руб'
                },
                {
                    name: 'Спирография',
                    price: '500 руб'
                },
                {
                    name: 'Спирография с бронхолитической пробой',
                    price: '900 руб'
                },
                {
                    name: 'Электроэнцефалография (ЭЭГ)',
                    price: '1 000 руб'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
</style>