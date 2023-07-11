<template>
  <div class="app">
    <div class="for-grey-background">
      <div class="wrapper">
        <AppHeader />
        <BeOurRespondent />
      </div>
    </div>
    <div class="secondary-wrapper">
      <RespondentDescription />
      <BenefitCards />
      <HowToParticipate />
    </div>
    <div class="wrapper">
      <OurMission />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import BeOurRespondent from "./components/BeOurRespondent.vue";
import RespondentDescription from "./components/RespondentDescription.vue";
import BenefitCards from "./components/BenefitCards.vue";
import HowToParticipate from "./components/HowToParticipate.vue";
import OurMission from "./components/OurMission.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    BeOurRespondent,
    RespondentDescription,
    BenefitCards,
    HowToParticipate,
    OurMission,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
body {
  font-family: "Roboto", sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

h2 {
  font-size: 30px;
  padding: 0 0 30px 0;
}

.wrapper {
  max-width: 1200px;
}

.secondary-wrapper {
  max-width: 1000px;
}

.wrapper,
.secondary-wrapper {
  width: 100%;
  margin: 0 auto;
}

.for-grey-background {
  width: 100%;
  background-color: #f1f1f4;
}
</style>
