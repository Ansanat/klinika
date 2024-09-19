<template>
  <div class="v-service">
    <div class="service-about">
      <div class="service-header">Невролог</div>
      <div class="service-text">Бытует мнение, что «все болезни от нервов», и это недалеко от истины. В основе развития заболеваний ЦНС и ПНС лежат нарушения функционирования нейронов и межнейронных связей, а также различные воспалительные процессы инфекционной и неинфекционной природы, развивающиеся в стволе головного мозга, спинномозговых структурах и в пучках вегетативных нервных волокон.</div>
      <div class="service-text">Врач-невролог (невропатолог) – специалист с высшим медицинским образованием, в компетенцию которого входит диагностика, лечение и профилактика болезней, связанных с нервной системой. Это центральная и периферическая нервная системы.</div>
      <div class="service-text"><b>С какими симптомами следует обратиться к врачу-неврологу?</b></div>
      <div class="service-text" style="text-align: left;">
•	Хроническая усталость;<br>
•	Быстрая утомляемость;<br>
•	Нарушение сна;<br>
•	Головокружения;<br>
•	Головные боли;<br>
•	Невралгии различной локации (межреберная, затылочного нерва, тройничного нерва, пояснично-крестцового отдела позвоночника);<br>
•	Миалгия (мышечные боли);<br>
•	Болезненные, неприятные ощущения в области сердца, которые можно принять за кардиологические боли;<br>
•	Парезы и параличи (частичная или полная утрата двигательной функции);<br>
•	Тремор, судороги, тики.<br>
      </div>
        <div class="service-header">Услуги врача невролога</div>
        <div class="price-table">
            <div class="price-line"></div>
            <div v-for="service in nevrolog_services" :key="service">
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
    name: 'v-gastr',
    props: {
    },
    mounted() {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = "Клиника здоровья невролог";
        document.body.appendChild(meta);
    },
    data() {
        return {
            nevrolog_services: [
                {
                    name: 'Первичный прием',
                    price: '1 700 руб'
                },
                {
                    name: 'Повторный прием',
                    price: '1 500 руб'
                },
                {
                    name: 'Оформление МСЭ',
                    price: '2 000 руб'
                },
                {
                    name: 'Проведение лечебных блокад (без стоимости препарата)',
                    price: '800 руб'
                },
            ],
        }
    }
}
</script>

<style>
</style>
