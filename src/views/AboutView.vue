<template>
  <section id="Profile">
    <Subtitle :subtitle="subtitle"/>
    <div class="container">
    <div class="about">
      <p class="about__content">I’m a junior web developer based in South of France. I have a  passion for making things on my own which I think goes back to school - you know those small projects you make in  technology classes (pocket lamp, alarm…), I loved it - That’s when i decided to study electronics and where i  started coding but, back then, it was not as easy as it is today to learn new tech. So I moved on to greener land  - or more precisely to London ! -  and worked for 10 years in the hospitality industry, still keeping this will to   code one day ! </p> 

      <p class="about__content">Back to 2021, my experiein hospitality as a manager made me realise how  much I love solving problems and the pride I get whefind a solution that makes my customers or my co-workers   happy. Having now a little girl to care about,was not possible to carry on with such a difficult schedule and   that’s when my will to code came back lan evidence.</p>

      <p class="about__content">Fast forward to today (andFrance), after following the OpenClassrooms  training and being graduated as a web developer, I am looking to work on ambitious projects with positive people.</p>
    </div>
    <div class="about_img">
    </div>
    </div>
  </section>

</template>

<script>
// @ is an alias to /src
import Subtitle from "@/components/SubTitles.vue"

export default {
  name: 'AboutView',
  components: {
    Subtitle
  },
  data() {
    return {
      subtitle: 'About me...'
    }
  },
}
</script>

<style scoped lang="scss">
#Profile {
  height: 80vh;
  width: 100vw;
  position : relative;
  top: 10vh;
  border : solid blue 1px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 90px; 
}
.about {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>

