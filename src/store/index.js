import { createStore } from "vuex";

export default createStore({
  state: {
    logoPath: require("@/assets/beelogo.png"),
    mainPicPath: require("@/assets/header-main-pic.png"),
    beFirstPicPath: require("@/assets/be-first-pic.png"),
    shareExpPicPath: require("@/assets/share-exp-pic.png"),
    getAchievmentPic: require("@/assets/get-achievment-pic.png"),
    digit1PicPath: require("@/assets/digit-1-pic.png"),
    digit2PicPath: require("@/assets/digit-2-pic.png"),
    digit3PicPath: require("@/assets/digit-3-pic.png"),
    digit4PicPath: require("@/assets/digit-4-pic.png"),
    ourMissionMainPicPath: require("@/assets/our-mission-main-pc.png"),
    openAdaptiveMenuIconPath: require("@/assets/open-adaptive-menu-icon.png"),
    closeAdaptiveMenuIconPath: require("@/assets/close-adaptive-menu-button.png"),
    cardDescriptionsVisible: [false, false, false],
    showMenu: false,
  },
  getters: {},
  mutations: {
    toggleCardDescription(state, payload) {
      state.cardDescriptionsVisible[payload.index] = payload.isVisible;
    },
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
  },
  actions: {},
  modules: {},
});
