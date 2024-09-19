<template>
  <div class="v-service">
    <div class="service-about">
      <div class="service-header">Гастроэнтеролог</div>
      <div class="service-text">Современный образ жизни, несбалансированное питание, стрессы, малоподвижный образ жизни не лучшим образом сказываются на здоровье человека. Согласно данным статистики количество пациентов с патологий органов желудочно-кишечного тракта растет на 10-15% ежегодно. Боль в животе, изжога, тошнота, отрыжка, расстройство кишечника — ощущения, с которыми хотя бы раз сталкивался каждый человек. Такие симптомы нельзя оставлять без внимания гастроэнтеролога, так как они могут свидетельствовать о начале серьезных расстройств желудочно-кишечного тракта.</div>
      <div class="service-text">Врач—гастроэнтеролог поможет вовремя распознать начало течения болезни, даст рекомендации для быстрого снятия неприятных симптомов и подберет индивидуальную схему лечения.</div>
      <div class="service-header">Услуги</div>
      <div class="price-table">
        <div class="price-line"></div>
        <div class="price-row">
          <div class="price-name">Первичный прием гастроэнтеролога</div>
          <div class="price-price">1 800 руб</div>
        </div>
        <div class="price-line"></div>
        <div class="price-row">
          <div class="price-name">Повторный прием гастроэнтеролога</div>
          <div class="price-price">1 600 руб</div>
        </div>
        <div class="price-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-gastr',
  mounted() {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Клиника здоровья гастроэнтеролог";
    document.body.appendChild(meta);
  },
  props: {
  }
}
</script>

<style>
.price-line{
  height: 2px;
  margin-bottom: 10px;
  background-color: #b9ecad;

}
.price-table{
  padding-top: 20px;
  width: 85%;
  height: auto;
  margin: auto;
  font-size: 18px;
}
.price-row{
  width: 100%;
  height: 50px;
  display: block;
}
.price-name{
  float: left;
  width: 49%;
}
.price-price{
  float: right;
  text-align: right;
  width: 49%;
  color: #358c21;
  font-weight: bold;
}
.service-about {
  overflow: hidden;
  width: 90%;
  height: auto;
  background-color: white;
  padding-bottom: 30px;
  border-radius: 30px;
  margin: auto;
  margin-top: 40px;
  box-shadow: 4px 4px 20px #b9ecad;
}
.service-header {
  padding-top: 20px;
  margin-left: 20px;
  font-size: 40px;
  color: #358c21;
  font-weight: bold;
}
.service-text{
  width: 85%;
  padding-top: 20px;
  margin: auto;
  font-size: 18px;
  text-align: justify;
}
@media screen and (max-width: 700px) {
  .service-header {
    font-size: 27px;
  }
  .price-table{
    font-size: 16px;
  }
  .price-name{
    width: 100%;
  }
  .price-price{
    padding-top: 5px;
    width: 100%;
    font-size: 20px;
    text-align: right;
  }
  .price-row{
    height: 110px;
  }
  .price-line{
    display: block;
  }
}
@media screen and (min-width: 701px) and  (max-width: 1100px){
  .price-row{
    height: 90px;
  }
}
</style>
