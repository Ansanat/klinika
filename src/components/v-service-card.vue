<template>
    <div class="v-service-card">
      <img :src="`../images/service/${img}`" class="service-img"/>
      <div class="service-name">
        {{name}}
      </div>
      <div class="service-description">
        {{desc}}
      </div>
      <Button text="Подробнее" class="service-button"/>
    </div>
</template>

<script>
import Button from '@/components/v-button.vue'

export default {
    name: 'v-service-card',
    components: {
      Button,
    },
    props: {
      name: String,
      desc: String,
      img: String
    }
}
</script>

<style>

.v-service-card{
  color: black;
  text-decoration: none;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 40px;
  height: 400px;
  width: 430px;
  background-color: white;
  box-shadow: 3px 3px 10px gray;
}

.service-name{
  padding-top: 10px;
  margin: auto;
  text-align: center;
  font-size: 25px;
  width: 310px;
  font-weight: bold;
}

.service-button{
  font-size: 15px;
  margin: auto;
  margin-top: 10px;
  height: 30px;
}

.service-description{
  padding-top: 4px;
  margin: auto;
  text-align: center;
  width: 420px;
  height: 90px;
}

.v-service-card:hover{
  box-shadow: 3px 3px 20px gray;
}

.service-img{
  width: 100%;
  aspect-ratio: 16 / 7;
  object-fit: cover;
}

@media screen and (max-width: 700px) {
  .v-service-card{
    text-align: center;
    width: 85%;
    height: auto;
    padding-bottom: 10px;
  }
  .service-description{
    width: 290px;
    height: auto;
  }

}
@media screen and (min-width: 701px) and  (max-width: 1100px){
  .v-service-card{
    text-align: center;
    width: 85%;
    height: auto;
    padding-bottom: 10px;
  }
}
</style>
