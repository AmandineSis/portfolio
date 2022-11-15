<template>
  <div class="app">
    <MainHeader />
    <router-view class="router-view" :key="$route.path" />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="scss">
/*************FONTS************ */

@font-face {
  font-family: Montserrat;
  src: url(./assets/fonts/Montserrat-VariableFont_wght.ttf);
}
/******************************* */
#app {
  max-width: 100vw;
  height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #373638;
}
.router-view {
  padding: 0;
}

section {
  height: 80vh;
  width: 100vw;
  position: relative;
  top: 10vh;
}

#Projects,
#Profile,
#Skills,
#Contact {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
