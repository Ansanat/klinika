<template>
  <div class="v-feedback-page">  
    <div class="feedback">
      <iframe
        class="feedback-frame"
        id="myReviews__block-widget"
      ></iframe>
    </div>
  </div>
</template>
<script>

export default {
  name: 'v-feedback-page',
  components: {

  },
  mounted() {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Клиника здоровья отзывы";
    document.body.appendChild(meta);

    const script = document.createElement("script");
    script.src = "https://myreviews.dev/widget/dist/index.js";
    document.body.appendChild(script);

    const myReviewsInit = function () {
        new window.myReviews.BlockWidget({
          uuid: "da5e5b58-3e92-4f94-9196-d5b297394b60",
          name: "g47146735",
          additionalFrame:"none",
          lang:"ru",
          widgetId: "2"
        })
        .init();
    };
    if (document.readyState === "loading") {
      document.addEventListener('DOMContentLoaded', function () {
          myReviewsInit()
      });
    } else {
      myReviewsInit();
    }
  }
}
</script>

<style lang="scss">
.feedback {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border-radius: 20px;

  &-frame {
    width: 100%;
    height: 100%;
    max-width: 1170px;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }
}
</style>
