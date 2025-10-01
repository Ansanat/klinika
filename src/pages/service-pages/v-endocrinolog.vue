<template>
  <div class="v-service">
    <div class="service-about">
      <div class="service-header">Эндокринолог</div>
      <div class="service-text">Эндокринная система – совокупность  желез, вырабатывающих и выделяющих в кровь гормоны. Эти самые гормоны регулируют различные функции организма, такие как метаболизм, рост и размножение.
Нарушение работы щитовидной железы и нарушение обмена углеводов — самые известные проблемы, с которыми обращаются к врачу-эндокринологу. Этот специалист один из тех, кто отвечает за точную и тонкую настройку организма, и посещать эндокринолога необходимо регулярно.
Чаще всего попасть к этому уникальному специалисту можно по направлению терапевта или гинеколога. Но можно записаться и напрямую.</div>
      <div class="service-text"><b>Симптомы, которые могут послужить основанием для посещения эндокринолога:</b></div>
      <div class="service-text" style="text-align: left;">
        •	необъяснимое увеличение или потеря веса;<br>
        •	изменения аппетита;<br>
        •	усталость или вялость;<br>
        •	бессонница или чрезмерная сонливость;<br>
        •	увеличение или уменьшение частоты сердечных сокращений;<br>
        •	изменения кровяного давления;<br>
        •	повышенная жажда или голод;<br>
        •	бесплодие или нерегулярные месячные;<br>
        •	повышенная потливость или приливы жара;<br>
        •	перепады настроения или депрессия.<br>
      </div>
        <div class="service-header">Услуги врача эндокринолога</div>
        <div class="price-table">
            <div class="price-line"></div>
            <div v-for="service in onkolog_services" :key="service">
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
        meta.content = "Клиника здоровья эндокринолог";
        document.body.appendChild(meta);
    },
    data() {
        return {
            onkolog_services: [
                {
                    name: 'Первичный прием',
                    price: '2 200 руб'
                },
                {
                    name: 'Повторный прием',
                    price: '2 000 руб'
                },
            ],
        }
    }
}
</script>

<style>
</style>
