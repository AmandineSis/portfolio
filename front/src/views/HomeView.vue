<template>
  <section id="home">
    <div class="hero">
      <p class="hero__title--small">👋 Hi there! My name is</p>
      <h1 class="hero__title">
        Amandine Sismondi, <br />
        <span class="dev">Web Developer</span>
        <!--<span class="dejs">   #Javascript</span><span class="dev vue"> #VueJs</span><span class="dev express"> #API_REST</span>-->
      </h1>
      <p class="hero__about">who loves creating apps and "Did you know" facts !</p>
    </div>
    <div class="hero__image">
      <img
        class="hero__image__file"
        src="@/assets/images/dev_woman.jpg"
        alt="illustration 3d screen development"
      />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
//mport HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "HomeView",
  components: {
    //HelloWorld
  },
};
</script>

<style scoped lang="scss">
#home {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.hero {
  height: 100%;
  width: 60%;
  padding: 170px 0 170px 100px;
  display: flex;
  flex-direction: column;
  text-align: left;
  &__title {
    font-size: 50px;
    color: #373638;
  }
  &__image {
    width: 40%;
    &__file {
      width: 100%;
      padding-right: 100px;
    }
    //padding: 148px 20px;
  }
}
.animation {
}
</style>
