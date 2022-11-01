<template>
  <section id="Projects" class="Projects">
    <Subtitle :subtitle="subtitle" />
    <div class="proj-container" v-if="initialVue">
      <div class="card">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
    <div class="proj-container proj-popup" v-else>
      <ProjectPopup />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Subtitle from "@/components/SubTitles.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import ProjectPopup from "@/components/ProjectPopup.vue";

export default {
  name: "ProjectView",
  components: {
    Subtitle,
    ProjectCard,
    ProjectPopup,
  },
  data() {
    return {
      subtitle: "Projects",
      initialVue: true,
    };
  },
};
</script>

<style scoped lang="scss">
.proj-container {
  width: 100%;
  height: 100%;
  margin-right: 30px;
  background-color: white;
}

.card {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
