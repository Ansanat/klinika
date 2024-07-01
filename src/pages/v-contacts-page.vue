<template>
  <div class="v-contacts-page">
    <div style="display:flex;">
      <div class="contacts-block">
        <div class="contact">
          <img src="../images/icons/map.png" class="contact-icon">
          <div class="contact-text"> Искитим, ул. Комсомольская, 44 </div>
        </div>
        <div class="contact">
          <img src="../images/icons/phone.png" class="contact-icon">
          <div class="contact-text"> +7 (383) 312-19-21 </div>
        </div>
        <div class="contact">
          <img  class="contact-icon">
          <div class="contact-text"> +7 (913) 200-29-24 </div>
        </div>
        <div class="contact" style="margin-top: 10px">
          <img class="contact-icon">
          <div class="contact-text"> +7 (913) 465-36-68 </div>
        </div>
        <div class="contact">
          <img src="../images/icons/mail.png" class="contact-icon">
          <div class="contact-text"> pulsar-iskitim@mail.ru </div>
        </div>
        <div class="contact">
          <a href="https://vk.com/klinika_zdoroviya"><img src="../images/icons/VK_logo.png" class="contact-icon social"></a>
          <a href="https://www.instagram.com/klinika_zdoroviya_iskitim/?hl=es"><img src="../images/icons/Inst_logo.png" class="contact-icon social"></a>
        </div>
      </div>
      <div class="img-block">
        <img src="../images/about/enter.jpeg" class="enter-img"/>
      </div>
    </div>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Af2d4d3c4013672e965e1bb7b296c69c6a8079a39ae7021fe616e70bec5454f52&amp;source=constructor" 
      frameborder="0"
      class="yandex-map"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'v-contacts-page',
  props: {
  }
}
</script>

<style>
.v-contacts-page {
  width: 80%;
  margin:auto;
}

.contacts-block {
  width: 49%;
  margin-top: 50px;
}

.contact {
  position: relative;
  padding-top: 10px;
  width: 100%;
}

.contact-icon {
  width: 35px;
}

.social {
  margin-right: 10px;
  width: 40px;
}

.contact-text {
  font-size: 18px;
  position: absolute;
  left: 40px;
  top: 55%;
  transform: translateY(-50%);
}

.yandex-map {
  width: 100%;
  border: 3px solid #358c21;
  border-radius: 20px;
  height: 400px;
  margin-top: 50px;
}

.img-block {
  width: 51%;
}

.enter-img {
  width: 100%;
  margin-top: 50px;
  border: 3px solid #358c21;
  border-radius: 20px;
}

@media screen and (max-width: 700px) {
  .img-block {
    display: none;
  }

  .contacts-block {
    width: 100%;
    margin-top: 50px;
  }
}
</style>
