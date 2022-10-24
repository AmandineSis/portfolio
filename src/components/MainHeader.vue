<template>
    <header class="main-header" v-once>
        <img class="logo" src="@/assets/images/craftCode-logo.png" alt="logo craft code">
        <nav class="top-nav">
            <router-link class="top-nav__item" to="/">Home</router-link>
            <router-link class="top-nav__item"  to="/projects">Projects</router-link>
            <router-link class="top-nav__item"  to="/about">About</router-link>
            <router-link class="top-nav__item"  to="/skills">Skills</router-link>
            <router-link class="top-nav__item"  to="/contact">Contact</router-link>
      </nav>
    </header>
</template>

<script>
export default {
    name: 'MainHeader'
   
}
</script>

<style scoped lang="scss">
 header {
  height: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
}

.logo {
  height: 10vh;
  margin: 0px;
  &__image {
    height: 100%;
    text-align: left;
  }
}
.top-nav {
  margin: 0;
  display: flex;
  justify-content: space-between;
    &__item {
      height: 10vh;
      padding: 30px;
      color: #a39da9;
      &:hover {
        border-bottom: 2px #a39da9 solid;
      }
    }
}
</style>