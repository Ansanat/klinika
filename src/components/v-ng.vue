<template>
  <div class="v-ng">
    <div class="about-zag">График работы в праздники</div>
    <div class="ng-content">
        <div><b>28.12.2024</b> - Приём к специалистам по предварительной записи. Медицинских комиссий нет. Забор анализов.</div>
        <hr>
        <div><b>30.12.2024</b> - Приём к специалистам по предварительной записи. Медицинских комиссий нет. Забора анализов нет.</div><hr>
        <div><b>31.12.2024</b> - Выходной день.</div><hr>
        <div><b>01.01.2025</b> - Выходной день.</div><hr>
        <div><b>02.01.2025</b> - Выходной день.</div><hr>
        <div><b>03.01.2025</b> - Выходной день.</div><hr>
        <div><b>04.01.2025</b> - Приём к специалистам по предварительной записи. Медицинских комиссий нет. Забора анализов нет.</div><hr>
        <div><b>05.01.2025</b> - Приём к специалистам по предварительной записи. Медицинских комиссий нет. Забора анализов нет.</div><hr>
        <div><b>06.01.2025</b> - Приём к специалистам по предварительной записи. Медицинских комиссий нет. Забора анализов нет.</div><hr>
        <div><b>07.01.2025</b> - Выходной день.</div><hr>
        <div><b>08.01.2025</b> - Приём к специалистам по предварительной записи. Медицинских комиссий нет. Забор анализов.</div><hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-about',
  props: {
  }
}
</script>

<style>
.v-ng {
    width: 85%;
    padding-bottom: 30px;
    background-color: white;
    border-radius: 30px;
    margin: auto;
    margin-top: 40px;
    box-shadow: 4px 4px 20px #b9ecad;
}
.about-zag {
    padding-top: 20px;
    margin-left: 20px;
    font-size: 40px;
    color: #358c21;
    font-weight: bold;
}
.ng-content{
    margin-left: 40px;
    margin-top: 40px;
    width: 85%;
    font-size: 18px;
}
.about-item{
    width: 45%;
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    text-align: justify;
    overflow: hidden;
}
.about-img{
    border-radius: 20px;
    width: 90%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}
@media screen and (max-width: 700px) {
    .v-ng {
        width: 95%;
        
    }
    .ng-content{
        margin: 20px auto;
        width: 85%;
        
    }
    .about-img{
        width: 100%;
        aspect-ratio: 3 / 3;
        object-fit: cover;
    }
    .about-item{
        padding-top: 20px;
        margin: auto;
        display: block;
        width: 80%;
        font-size: 15px;
    }
}

@media screen and (min-width: 701px) and  (max-width: 1100px){
    .about-item{
        font-size: 13px;
    }
    .v-ng {
    }
}
</style>
