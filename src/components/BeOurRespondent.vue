<template>
  <div class="be-our-resp__main">
    <div class="be-our-resp__content">
      <div class="be-our-resp__text-block">
        <h1 class="be-our-resp__title">Стань нашим респондентом</h1>
        <p class="be-our-resp__description">
          Мы хотим услышать твое мнение, опыт и боли общения с цифровыми
          продуктами Beeline.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform"
          class="i-am-ready_btn"
          target="_blank"
          >Я готов!</a
        >
      </div>
      <div class="be-our-resp__main-pic-block">
        <img class="be-our-resp__main-pic" :src="mainPicPath" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mainPicPath() {
      return this.$store.state.mainPicPath;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.be-our-resp__main {
  .be-our-resp__content {
    margin: 0 0 0 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2% 0;

    .be-our-resp__text-block {
      display: block;
      max-width: 450px;
      flex-shrink: 0;
      padding: 7% 0;
      font-weight: 400;
      font-style: normal;
      line-height: 24px;
      flex-wrap: wrap;
      align-items: start;

      .be-our-resp__title {
        line-height: 48px;
      }

      .be-our-resp__description {
        display: flex;
        padding: 30px 0;
        line-height: 24px;
        color: $secondary-font-color;
      }
    }

    .i-am-ready_btn {
      display: flex;
      width: 100px;
      height: 56px;
      padding: 0 32px;
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

    .be-our-resp__main-pic-block {
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 0;
    }

    .be-our-resp__main-pic {
      max-width: 100%;
      height: auto;
      display: block;
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

@media (max-width: 1200px) {
  .be-our-resp__content {
    @include adaptive;

    .be-our-resp__text-block {
      @include adaptive-text;
      margin: 0 auto;
      padding: 0 0 7% 0 !important;
    }

    .i-am-ready_btn {
      margin: 0 auto;
    }
  }
}

@media (max-width: 500px) {
  .be-our-resp__text-block {
    padding: 0 50px;
  }
}
</style>
