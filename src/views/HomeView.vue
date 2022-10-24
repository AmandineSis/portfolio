<template>
  <section id="home">
    <div class="hero">
      <p class="hero__title--small">👋 Hi there! My name is </p>
      <h1 class="hero__title">Amandine Sismondi, <br> <span class="dev">Web Developer</span> <!--<span class="dejs">   #Javascript</span><span class="dev vue"> #VueJs</span><span class="dev express"> #API_REST</span>--></h1> 
      <p class="hero__about">who loves creating apps and "Did you know" facts !</p>
    </div>
    <div class="animation">
    <img src="@/assets/images/hero_img.jpg" alt="illustration 3d screen development"/>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
//mport HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
  }
}
</script>

<style scoped lang="scss">
#home {
  height: 80vh;
  width: 100vw;
  position: relative;
  top: 10vh;
  display: flex;
  flex-direction: row;
  //border : solid blue 1px;
}
.hero {
  height: 100%;
  width: 60%;
  padding: 170px 0 170px 90px;
  display: flex;
  flex-direction: column;
  text-align: left;
  //border : solid red 1px;
  &__title{
    font-size: 50px;
    color: #373638;
  }
}
.animation {
  height: 100%;
  width: 30%;
  padding: 148px 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  //border : solid green 1px;
}
</style>
