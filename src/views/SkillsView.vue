<template>
  <section id="skills" class="Skills">
    <Subtitle :subtitle="subtitle"/>
    <div class="skills__container">
      <div class="skills__item"><i class="skills__icon fa-brands fa-html5"></i>HTML5</div>
      <div class="skills__item"><i class="skills__icon fa-brands fa-css3-alt"></i>CSS3</div>
      <div class="skills__item"><i class="skills__icon fa-brands fa-js"></i>Javascript</div>
      <div class="skills__item"><i class="skills__icon fa-brands fa-node"></i>NodeJs</div>
      <div class="skills__item"><i class="skills__icon fa-brands fa-sass"></i>Sass</div>
      <div class="skills__item"><i class="skills__icon fa-brands fa-vuejs"></i>VueJs</div>
      <div class="skills__item">API REST</div>
      <div class="skills__item">ExpressJs</div>
      <div class="skills__item">MongoDB</div>
      <div class="skills__item">MySQL</div>
      <div class="skills__item">SEO</div>
      <div class="skills__item"><i class="skills__icon fa-brands fa-square-github"></i>Git/GitHub</div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Subtitle from "@/components/SubTitles.vue"

export default {
  name: 'ProjectView',
  components: {
    Subtitle
  },
  data() {
    return {
      subtitle: 'Skills'
    }
  },
}
</script>

<style scoped lang="scss">

</style>