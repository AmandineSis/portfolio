<template>
  <section id="Profile">
    <Subtitle :subtitle="subtitle" />
    <div class="container">
      <div class="about">
        <p class="about__content">
          I’m a junior web developer based in South of France. I have a passion for making
          things on my own which I think goes back to school - you know those small
          projects you make in technology classes (pocket lamp, alarm…), I loved it -
          That’s when I decided to study electronics and where I started coding but, back
          then, it was not as easy as it is today to learn new tech. So I moved on to
          greener land - or more precisely to London ! - and worked for 10 years in the
          hospitality industry, still keeping this will to code one day !
        </p>
        <p class="about__content">
          Back to 2021, my experience in hospitality as a manager made me realise how much
          I love solving problems and the pride I get when I find a solution that makes my
          customers or my co-workers happy. Having now a little girl to care about, it was
          not possible to carry on with such a difficult schedule and that’s when my will
          to code came back as an evidence.
        </p>
        <p class="about__content">
          Fast forward to today (and to France), after following the OpenClassrooms
          training and being graduated as a web developer, I am looking to work on
          ambitious projects with positive people.
        </p>
      </div>
      <div class="about_img"></div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Subtitle from "@/components/SubTitles.vue";

export default {
  name: "AboutView",
  components: {
    Subtitle,
  },
  data() {
    return {
      subtitle: "About me...",
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  background-color: blue;
  width: 100%;
  height: 100%;
  margin-right: 30px;
}
/*.about {
  width: 100%;
  height: 100%;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px;
  text-align: justify;
  color: #373638;
  line-height: 1.2;
}*/
</style>
