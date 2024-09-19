<template>
  <div class="v-service">
    <div class="service-about">
        <div class="service-header">Стоматолог-гигиенист</div>
        <div class="service-text">У специалиста, занимающегося гигиеной, обязательно имеется высшее или средне-специальное образование в соответствующей специализации. Его основной задачей является качественная чистка, а также совершение процедур, нацеленных на укрепление зубной эмали и предотвращение развития кариеса. Он на профессиональном уровне знает все аспекты ухода за полостью рта.</div>
        <div class="service-header">Прайс лист</div>
        <div class="price-table">
            <div class="price-line"></div>
            <div v-for="service in stomatolog_services" :key="service">
                <div class="price-row">
                <div class="price-name">{{service.name}}</div>
                <div class="price-price">{{service.price}}</div>
                </div>
                <div class="price-line"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'v-stomatolog',
    props: {
    },
    mounted() {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = "Клиника здоровья стоматолог";
        document.body.appendChild(meta);
    },
    data() {
        return {
            stomatolog_services: [
                {
                    name: 'Ультразвуковая чистка и полировка специальной полировочной пастой (1 зуб)',
                    price: '80 руб'
                },
                {
                    name: 'Покрытие всех зубов фтор лаком',
                    price: '300 руб'
                },
                {
                    name: 'Покрытие фтор лаком (1 зуб)',
                    price: '50 руб'
                },
                {
                    name: 'Фторирование зубов фтор гелем всех зубов + одноразовые каппы',
                    price: '500 руб'
                },
            ],
        }
    }
}
</script>

<style>
</style>
