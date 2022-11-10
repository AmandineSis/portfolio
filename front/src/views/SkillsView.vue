<template>
  <section id="Skills" class="skills">
    <Subtitle :subtitle="subtitle" />
    <div class="skills__container">
      <div class="skills__name">
        <div class="skills__item">
          <i class="skills__icon fa-brands fa-html5"></i>HTML5
        </div>
        <div class="skills__item">
          <i class="skills__icon fa-brands fa-css3-alt"></i>CSS3
        </div>
        <div class="skills__item">
          <i class="skills__icon fa-brands fa-js"></i>Javascript
        </div>
        <div class="skills__item">
          <i class="skills__icon fa-brands fa-node"></i>NodeJs
        </div>
        <div class="skills__item"><i class="skills__icon fa-brands fa-sass"></i>Sass</div>
        <div class="skills__item">
          <i class="skills__icon fa-brands fa-vuejs"></i>VueJs
        </div>
        <div class="skills__item">API REST</div>
        <div class="skills__item">ExpressJs</div>
        <div class="skills__item">MongoDB</div>
        <div class="skills__item">MySQL</div>
        <div class="skills__item">SEO</div>
        <div class="skills__item">
          <i class="skills__icon fa-brands fa-square-github"></i>Git/GitHub
        </div>
      </div>
      <div class="skills__container--cv">
        <p class="skills__divider">--- OR ---</p>
        <a class="skills__btn" href="./assets/static/cv.pdf">View CV</a>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Subtitle from "@/components/SubTitles.vue";

export default {
  name: "ProjectView",
  components: {
    Subtitle,
  },
  data() {
    return {
      subtitle: "Skills",
    };
  },
};
</script>

<style scoped lang="scss">
#skills {
  border: solid blue 1px;
  display: flex;
  flex-direction: row;
}

.skills {
  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
  }
  &__name {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
    grid-gap: 5px;
    width: 100%;
    height: 50%;
    font-weight: bold;
    &--cv {
      width: 200px;
      height: 50px;
      text-align: center;
    }
  }
  &__item {
    border: 1.5px solid #d83c65;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__divider {
    margin: 20px;
    font-weight: bold;
  }
  &__btn {
    align-items: center;
    background-color: #d83c65;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    flex: 1 1 auto;
    font-family: Inter, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    justify-content: center;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 1rem 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
    white-space: nowrap;
    border: 0;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover {
      box-shadow: #d83c65 0 0 0 3px, transparent 0 0 0 0;
      color: #a39da9;
      background-color: #fff;
    }
  }
}
</style>
