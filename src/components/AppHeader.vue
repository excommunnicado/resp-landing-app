<template>
  <div class="for-grey-background">
    <header class="header__main">
      <img class="header__logo" :src="logoPath" alt="logo" />
      <nav>
        <ul class="header__list" :class="{ 'show-menu': showMenu }">
          <li class="header__item"><a href="#">Какие плюсы?</a></li>
          <li class="header__item"><a href="#">Что потребуется от тебя</a></li>
          <li class="header__item"><a href="#">Наша миссия</a></li>
          <li class="header__item"><a href="#">Присоединиться</a></li>
        </ul>
        <button class="open-adaptive-menu-button" @click="toggleMenu">
          <img
            :src="openAdaptiveMenuIconPath"
            class="open-adaptive-menu-icon"
            alt="open-adaptive-menu-icon"
          />
        </button>
        <ul v-if="showMenu" class="header__list-adaptive-menu full-screen-menu">
          <li class="header__item-adaptive-menu">
            <a href="#">Какие плюсы?</a>
          </li>
          <li class="header__item-adaptive-menu">
            <a href="#">Что потребуется от тебя</a>
          </li>
          <li class="header__item-adaptive-menu">
            <a href="#">Наша миссия</a>
          </li>
          <li class="header__item-adaptive-menu">
            <a href="#">Присоединиться</a>
          </li>
        </ul>
        <button
          v-if="showMenu"
          class="close-adaptive-menu-button"
          @click="toggleMenu"
        >
          <img
            :src="closeAdaptiveMenuIconPath"
            class="close-adaptive-menu-icon"
            alt="close-adaptive-menu-icon"
          />
        </button>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState([
      "showMenu",
      "logoPath",
      "openAdaptiveMenuIconPath",
      "closeAdaptiveMenuIconPath",
    ]),
  },
  methods: {
    ...mapMutations(["toggleMenu"]),
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";

.for-grey-background {
  .header__main {
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    flex-wrap: wrap;
    background-color: #f1f1f4;

    .header__logo {
      width: 80px;
      height: 80px;
    }

    .header__list {
      display: flex;
      justify-content: space-between;
      list-style: none;
      font-weight: 700;
      font-size: 16px;
      font-style: normal;
      line-height: 22px;
      flex-wrap: wrap;

      .header__item {
        margin-right: 55px;

        a {
          &:hover {
            color: #ffd400;
          }
        }
      }
    }

    &.show-menu {
      display: flex;
      flex-direction: column;
    }
  }

  .open-adaptive-menu-button {
    display: none;
  }

  .header__list-adaptive-menu {
    display: none;
    flex-direction: column;

    &.full-screen-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(255, 255, 255, 0.9);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 24px;
      line-height: 70px;
      list-style: none;
    }
  }

  .close-adaptive-menu-button {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: #fff;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .open-adaptive-menu-button {
      display: block;
      border: none;
    }

    .header__list {
      display: none !important;
    }

    .header__main {
      .open-adaptive-menu-icon,
      .close-adaptive-menu-icon {
        border: none;
        width: 50px;
        height: 50px;
      }

      .close-adaptive-menu-icon {
        padding-top: 10px;
      }
    }
  }
}
</style>
