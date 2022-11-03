<template>
  <section id="Projects" class="Projects">
    <Subtitle :subtitle="subtitle" />
    <!-- display all projects cards -->
    <div class="proj-container" v-if="initialVue">
      <div class="card">
        <ProjectCard
          v-for="items in projects"
          :key="items._Id"
          :proj-items="items"
          @open-card="openProjectDetails"
        />
      </div>
    </div>
    <!-- display selected project -->
    <div class="proj-container proj-popup" v-else>
      <ProjectPopup :selection="selection" @close-card="closeSelection" />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Subtitle from "@/components/SubTitles.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import ProjectPopup from "@/components/ProjectPopup.vue";
//store
import { mapState, mapGetters, mapActions } from "vuex";

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
  computed: {
    ...mapState({
      selection: "selection",
    }),
    ...mapGetters({
      projects: "GetAllProjects",
    }),
  },
  methods: {
    ...mapActions(["getSelectedProject"]),
    openProjectDetails(id) {
      this.initialVue = false;
      this.getSelectedProject(id).then(() => {
        console.log("getSelectedProject dispatch done !");
      });
    },
    closeSelection() {
      this.initialVue = true;
    },
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

.proj-popup {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
