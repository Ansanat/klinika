<template>
  <div class="v-footer">
    <div class="footer-contact-block">
        <img src="../images/icons/map.png" class="contact-icon footer-contact-item">
        <div class="footer-contact-item"> Искитим, ул. Комсомольская, 44 </div>
        <br>
        <a href="https://vk.com/klinika_zdoroviya"><img src="../images/icons/VK_logo.png" class="contact-icon social footer-contact-item"></a>
        <a href="https://www.instagram.com/klinika_zdoroviya_iskitim/?hl=es"><img src="../images/icons/Inst_logo.png" class="contact-icon social footer-contact-item"></a>
        <a href="https://t.me/klinika_zdoroviya"><img src="../images/icons/telegram_logo.png" class="contact-icon social footer-contact-item"></a>
    </div>
    <div class="copyright">©Клиника здоровья, 2024 г.</div>
  </div>
</template>

<script>
export default {
  name: 'v-footer',
  props: {
  }
}
</script>

<style>
.v-footer {
    margin-top: 40px;
    background-color: #b9ecad;
}

.footer-contact-block {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.footer-contact-item {
  display: inline;
  vertical-align: middle;
  font-size: 16px;
}

.copyright {
  text-align: center;
  font-size: 13px;
  padding-bottom: 10px;
  opacity: 0.7;
}
</style>
