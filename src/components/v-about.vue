<template>
  <div class="v-about">
    <div class="about-zag">Клиника Здоровья</div>
    <div class="about-content">
        <div class="about-item"><img src="../images/about/enter.jpeg" class="about-img"/></div>
        <div class="about-item">Многопрофильный медицинский центр организован в 2010 году и за эти годы зарекомендовал себя как надежный партнер, индивидуальные подходы к решению многих многогранных и нестандартных задач, дружный и сплоченный коллектив, постоянная работа над собой для лучшего плодотворного сотрудничества с организациями, мы работаем в разных областях Российской Федерации, нам доверяют профессионалы.</div>
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
.v-about {
    width: 85%;
    height: 500px;
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
.about-content{
    margin-left: 40px;
    margin-top: 40px;
    width: 100%;
    height: 300px;
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
    .v-about {
        width: 95%;
        height: 800px;
    }
    .about-content{
        margin: auto;
        width: 100%;
        height: 300px;
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
    .v-about {
        height: 400px;
    }
}
</style>
