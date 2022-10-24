<template>
    <header class="main-header" v-once>
        <img src="@/assets/images/craftCode-logo.png" alt="logo craft code">
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
 
</style>