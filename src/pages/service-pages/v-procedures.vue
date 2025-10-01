<template>
  <div class="v-service">
    <div class="service-about">
        <div class="service-header">Услуги процедурного кабинета</div>
        <div class="price-table">
            <div class="price-line"></div>
            <div v-for="service in procedures_services" :key="service">
                <div class="price-row">
                <div class="price-name">{{service.name}}</div>
                <div class="price-price">{{service.price}}</div>
                </div>
                <div class="price-line"></div>
            </div>
        </div>
        <div class="service-text">
        * В каждое в/в капельное введение включено: одноразовая система, одноразовая простынь, система «минивен» (бабочка), стерильные перчатки для сестры, одноразовый шприц, обработка кожи.
        </div>
        <div class="service-text">
        ** При единовременной оплате 5-7 капельниц - скидка 5%, 10 капельниц – скидка 10%
        </div>
        <div class="service-header">График приема пациентов по услугам:</div>
        <div class="service-text">- Холтер ЭКГ, Холтер АД с 12:00 до 13:00</div>
        <div class="service-text">- Внутривенное капельное введение(капельница) с 12:00 до 13:30</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'v-gastr',
    props: {
    },
    mounted() {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = "Клиника здоровья процедурный кабинет ЭКГ";
        document.body.appendChild(meta);
    },
    data() {
        return {
            procedures_services: [
                {
                    name: 'В/В капельное введение (без стоимости препарата)*',
                    price: '400 руб**'
                },
                {
                    name: 'В/В струйное введение (без стоимости препарата)',
                    price: '300 руб'
                },
                {
                    name: 'В/В капельное введение + В/В струйное введение (без стоимости препарата)',
                    price: '500 руб'
                },
                {
                    name: 'Внутримышечная инъекция',
                    price: '200 руб'
                },
                {
                    name: 'Подкожная инъекция',
                    price: '150 руб'
                },
                {
                    name: 'Забор крови из вены',
                    price: '150 руб'
                },
                {
                    name: 'Забор анализа на бактериологический посев',
                    price: '300 руб'
                },
                {
                    name: 'Забор анализа на цитологическое исследование',
                    price: '300 руб'
                },
                {
                    name: 'Забор риноцитограммы',
                    price: '300 руб'
                },
                {
                    name: 'Небулайзер',
                    price: '300 руб'
                },
                {
                    name: 'Перевязка',
                    price: '500 руб'
                },
            ],
        }
    }
}
</script>

<style>
</style>
