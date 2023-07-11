<template>
  <div class="respondent-description">
    <h2 class="respondent-description__title">Кто такой респондент?</h2>
    <p class="respondent-description__text">
      Респондент - человек, принимающий участие в опросе, интервью или
      тестировании дизайна. Мы используем твои ответы в проектировании новых
      продуктов, чтобы сделать их понятнее, удобнее и приятнее для
      пользователей.
    </p>
  </div>
</template>

<script></script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.respondent-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7% 0%;
  flex-wrap: wrap;

  &__title,
  &__text {
    text-align: center;
    line-height: 30px;
  }

  &__title {
    padding-bottom: 30px;
  }

  &__text {
    display: flex;
    justify-content: center;
    color: $secondary-font-color;
    padding: 0% 20%;
  }
}

@media (max-width: 1150px) {
  .respondent-description__text {
    line-height: 20px;
  }
}
</style>
