<template>
  <h2 class="container-benefits__title title-center">Какие плюсы?</h2>
  <div class="container-benefits">
    <div
      class="benefit_block benefit_block-first block-transition-by-width"
      :class="{ 'card-focused': card1DescriptionVisible }"
      @mouseover="showCardDescription(0)"
      @mouseout="hideCardDescription(0)"
    >
      <img class="be-first-pic" :src="beFirstPicPath" alt="be-first-pic" />
      <h3 class="benefits_description__title">Будь первым</h3>
      <p
        class="benefits_description"
        :class="{ 'show-description': card1DescriptionVisible }"
      >
        Ты первым увидишь наши новые продукты и поучаствуешь в их разработке
      </p>
    </div>
    <div
      class="benefit_block benefit_block-second block-transition-by-width"
      :class="{ 'card-focused': card2DescriptionVisible }"
      @mouseover="showCardDescription(1)"
      @mouseout="hideCardDescription(1)"
    >
      <img class="share-exp-pic" :src="shareExpPicPath" alt="share-exp-pic" />
      <h3 class="benefits_description__title">Поделись опытом</h3>
      <p
        class="benefits_description"
        :class="{ 'show-description': card2DescriptionVisible }"
      >
        Будем рады узнать о твоем опыте использования наших продуктов
      </p>
    </div>
    <div
      class="benefit_block benefit_block-third block-transition-by-width"
      :class="{ 'card-focused': card3DescriptionVisible }"
      @mouseover="showCardDescription(2)"
      @mouseout="hideCardDescription(2)"
    >
      <img
        class="get-achievment-pic"
        :src="getAchievmentPic"
        alt="get-achievment-pic"
      />
      <h3 class="benefits_description__title">Получи уникальную ачивку</h3>
      <p
        class="benefits_description"
        :class="{ 'show-description': card3DescriptionVisible }"
      >
        Блестящая, свеженькая и такая уникальная ачивка в приложении “Мой
        Билайн”
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["cardDescriptionsVisible"]),
    beFirstPicPath() {
      return this.$store.state.beFirstPicPath;
    },
    shareExpPicPath() {
      return this.$store.state.shareExpPicPath;
    },
    getAchievmentPic() {
      return this.$store.state.getAchievmentPic;
    },
    card1DescriptionVisible() {
      return this.cardDescriptionsVisible[0];
    },
    card2DescriptionVisible() {
      return this.cardDescriptionsVisible[1];
    },
    card3DescriptionVisible() {
      return this.cardDescriptionsVisible[2];
    },
  },
  methods: {
    ...mapMutations(["toggleCardDescription"]),
    showCardDescription(index) {
      this.toggleCardDescription({ index, isVisible: true });
    },
    hideCardDescription(index) {
      this.toggleCardDescription({ index, isVisible: false });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.container-benefits {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0% 0% 7% 0%;
}

.benefit_block {
  width: 290px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: width 0.3s ease;

  &-first {
    background-color: #fff6cc;
  }

  &-second {
    background-color: #eaf4ff;
  }

  &-third {
    background-color: #000;
    color: #fff;
  }

  &-focused {
    width: 360px;
  }

  &:hover {
    width: 330px;

    .benefits_description {
      opacity: 1;
    }
  }

  .benefits_description {
    opacity: 0;
    transition: opacity 0.5s ease;
    padding: 30px;
    color: $third-font-color;
  }

  .be-first-pic,
  .share-exp-pic,
  .get-achievment-pic {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 1000px) {
  .container-benefits {
    flex-direction: column;
  }

  .benefit_block {
    margin: 15px 0;
  }

  .container-benefits__title {
    padding: 7% 0;
    margin: 0 auto;
  }

  .container-benefits__title {
    &.title-center {
      text-align: center;
    }
  }
}
</style>
