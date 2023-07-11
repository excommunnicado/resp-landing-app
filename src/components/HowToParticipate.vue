<template>
  <h2 class="htp__title">Как принять участие?</h2>
  <div class="htp-container">
    <div class="htp__block htp__block--first">
      <div class="htp__content content-1">
        <img class="content__image" :src="digit1PicPath" alt="digit-1" />
        <h3 class="content__title">
          Оставь <a href="#" class="link">заявку</a>
        </h3>
        <p class="content__text">
          Заполни форму максимально честно, выбери продукты которые хочешь
          тестировать
        </p>
      </div>
      <div class="htp__content content-2">
        <img class="content__image" :src="digit2PicPath" alt="digit-2" />
        <h3 class="content__title">Ожидай приглашения на интервью</h3>
        <p class="content__text">
          Будь на связи :) Мы напишем/позвоним тебе заранее и договоримся об
          удобном времени. Обычно интервью не занимает больше 30-40 минут.
        </p>
      </div>
    </div>
    <div class="htp__block htp__block--second">
      <div class="htp__content content-3">
        <img class="content__image" :src="digit3PicPath" alt="digit-3" />
        <h3 class="content__title">Позаботься об окружении</h3>
        <p class="content__text">
          Выбери спокойное, тихое место с хорошим интернетом. Обязательно
          приноси с собой хорошее настроение 😉
        </p>
      </div>
      <div class="htp__content content-4">
        <img class="content__image" :src="digit4PicPath" alt="digit-4" />
        <h3 class="content__title">Получи клевую ачивку</h3>
        <p class="content__text">
          После первого интервью, в приложении Мой Билайн тебе откроется новая
          ачивка «Яркий ...». Спасибо, что ты с нами!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    digit1PicPath() {
      return this.$store.state.digit1PicPath;
    },
    digit2PicPath() {
      return this.$store.state.digit2PicPath;
    },
    digit3PicPath() {
      return this.$store.state.digit3PicPath;
    },
    digit4PicPath() {
      return this.$store.state.digit4PicPath;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
$primary-font-color: black;
$secondary-font-color: #9492a2;

.htp-container {
  display: flex;
  padding: 0% 0% 7% 0%;

  .htp__block {
    display: flex;
    flex-direction: column;

    &--first {
      padding: 0 15% 0 0;
      gap: 50px;
    }

    &--second {
      gap: 35px;
    }
  }

  .htp__content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .content__image {
      width: 60px;
      height: 60px;
    }

    .link {
      text-decoration: underline;
      color: #0c4dce;
    }

    .content__text {
      color: $secondary-font-color;
    }
  }
}

@mixin adaptive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@mixin adaptive-text {
  width: 100%;
  display: block;
  text-align: center;
}

@media (max-width: 1000px) {
  .htp-container,
  .htp__block,
  .our-mission__text-block {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .htp__block--first {
    padding: 0 !important;
  }

  .htp__block--second {
    gap: 50px;
    padding: 0 !important;
  }

  .htp__content,
  .htp__title {
    @include adaptive;
    width: 80%;
    text-align: center;
  }

  .htp-container {
    gap: 50px;
  }

  .htp__title {
    padding: 7% 0%;
    margin: 0 auto;
  }
}
</style>
