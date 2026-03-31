<template>
  <div class="v-service">
    <div class="service-about">
      <div class="service-header">Доабортное консультирование</div>
      <div class="service-text">
        Консультирование в ситуации репродуктивного выбора — обязательный и важный этап подготовки к медицинскому
        вмешательству при прерывании беременности. Задача специалиста — выслушать пациентку, ответить на вопросы и
        помочь принять осознанное, добровольное решение с учётом состояния здоровья и жизненных обстоятельств.
      </div>
      <div class="service-text">
        На консультации обсуждаются возможные последствия для организма, варианты медицинской помощи и поддержки,
        значение выдержки времени для размышления там, где это предусмотрено правилами оказания помощи. Формат беседы
        конфиденциален; при необходимости дальнейшие шаги согласуются с лечащим гинекологом и другими специалистами
        клиники.
      </div>
      <div class="service-text"><b>К консультации стоит подготовить:</b></div>
      <div class="service-text" style="text-align: left;">
        • документы, удостоверяющие личность (по требованию клиники);<br>
        • имеющиеся выписки и результаты обследований (УЗИ, анализы), если они уже были назначены;<br>
        • перечень вопросов, которые вы хотите обсудить со специалистом.<br>
      </div>
      <div class="service-text">
        Запись и уточнение перечня документов — по телефону регистратуры. Точный объём обследований до процедуры
        определяет врач с учётом срока беременности и клинических показаний.
      </div>
      <div class="service-header">Прейскурант</div>
      <div class="price-table">
        <div class="price-line"></div>
        <div v-for="service in services" :key="service.name">
          <div class="price-row">
            <div class="price-name">{{ service.name }}</div>
            <div class="price-price">{{ service.price }}</div>
          </div>
          <div class="price-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-doabort-consulting',
  props: {},
  mounted() {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content =
      'Доабортное консультирование в Клинике здоровья: консультация специалиста, прейскурант.'
    document.body.appendChild(meta)
  },
  data() {
    return {
      services: [
        {
          name: 'Консультация',
          price: '1 500 руб',
        },
      ],
    }
  },
}
</script>

<style>
</style>
