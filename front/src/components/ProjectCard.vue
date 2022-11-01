<template>
  <div class="project__card">
    <h3 class="project__title">Groupomania</h3>
    <img
      class="project__image"
      src="@/assets/images/projects/project_preview_groupomania.png"
      alt="Aperçu site groupomania"
    />
    <p class="project__description">
      Création d'un réseau social d'entreprise permettant une meilleure cohésion d'équipe
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
//store
import { mapActions } from "vuex";

export default {
  name: "ProjectCard",
  beforeMount() {
    this.getAllProjects()
      .then(() => {
        console.log("getAllProjects dispatch done !");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    ...mapActions(["getAllProjects"]),
  },
};
</script>

<style scoped lang="scss">
.project {
  &__card {
    width: 250px;
    margin: 20px;
    background-color: #fff;
    box-shadow: 6px 6px 33px 0px rgba(55, 54, 56, 0.75);
    border-radius: 15px;
  }
  &__title {
    margin: 20px;
    color: #373638;
  }
  &__image {
    display: inline-block;
    width: 200px;
  }
  &__description {
    margin: 20px;
    color: #373638;
  }
}
</style>
