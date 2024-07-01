<template>
    <div class="v-specialist-card">
      <img :src="`../images/doctors/${img}`" class="doctor-img"/>
      <div class="doctor-name">
          {{name}}
      </div>
      <div class="doctor-spec">
          {{spec}}
      </div>
      <!-- <Button text="Подробнее" class="doctor-button"/> -->
    </div>
</template>

<script>
// import Button from '@/components/v-button.vue'

export default {
    name: 'v-specialist-card',
    components: {
      // Button,
    },
    props: {
      name: String,
      spec: String,
      img: String
    }
}
</script>

<style>

.v-specialist-card {
  box-sizing: border-box;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
  display: inline-block;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 40px;
  padding-bottom: 30px;
  width: 315px;
  height: 280px;
  background-color: white;
  box-shadow: 3px 3px 10px gray;
}

.doctor-name {
  padding-top: 10px;
  margin: auto;
  text-align: center;
  font-size: 17px;
  width: 310px;
}

.doctor-button {
  font-size: 15px;
  margin: auto;
  margin-top: 10px;
  height: 30px;
}

.doctor-spec {
  text-align: center;
  font-weight: bold;
  margin-top: 4px;
  font-size: 14px;
}

.v-specialist-card:hover {
  box-shadow: 3px 3px 20px gray;
}

.doctor-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

@media screen and (max-width: 700px) {

}
@media screen and (min-width: 701px) and  (max-width: 1100px){

}
</style>
