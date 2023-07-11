<template>
  <div class="our-mission-main">
    <div class="our-mission__content">
      <div class="our-mission__main-pic-block">
        <img
          class="our-mission__main-pic"
          :src="ourMissionMainPicPath"
          alt="logo"
        />
      </div>
      <div class="our-mission__text-block">
        <h1 class="our-mission__title">Наша миссия</h1>
        <p class="our-mission__description">
          Тебя тоже раздражает, когда ты пользуешься приложением или сайтом и
          непонятно куда нажать? Когда попадаешь на пустой экран после ввода
          данных?
        </p>
        <p class="our-mission__description">Нам тоже это не нравится!</p>
        <p class="our-mission__description">
          Мы хотим улучшать наши продукты, делать их проще и удобнее для
          пользователя. Присоединяйся, без тебя нам не обойтись!
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform"
          class="join_btn"
          target="_blank"
          >Присоединиться</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ourMissionMainPicPath() {
      return this.$store.state.ourMissionMainPicPath;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
$primary-font-color: black;
$secondary-font-color: #636369;

.our-mission__content {
  margin: $primary-margin;
  display: flex;
  justify-content: space-between;
  gap: 4%;
  flex-wrap: wrap;
  padding: 0% 0% 4% 0%;

  .our-mission__text-block {
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: flex-start;
    flex-shrink: 0;
    padding: 50px 0px;
    font-weight: 400;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    flex-wrap: wrap;

    .our-mission__title {
      line-height: 48px;
    }

    .our-mission__description {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 0px 0px 0px;
      line-height: 24px;
      color: $secondary-font-color;
    }
  }

  .join_btn {
    display: flex;
    width: 158px;
    height: 56px;
    padding: 0px 32px;
    margin: 40px 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    background: var(--ui-buttons-primary-active, #ffe14d);
  }

  .our-mission__main-pic-block {
    display: flex;
    flex-wrap: wrap;
  }

  .our-mission__main-pic {
    max-width: 100%;
    height: auto;
    display: block;
    padding: 10px 0px;
  }
}

@mixin adaptive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1000px) {
  .our-mission__content {
    @include adaptive;
    justify-content: center;
    text-align: center;

    .join_btn {
      margin: 50px auto;
    }

    .our-mission__description {
      text-align: center;
      margin: 0 auto;
      padding: 0;
    }

    .our-mission__text-block {
      width: 80%;
    }
  }

  .our-mission__description {
    line-height: 20px !important;
  }
}
</style>
