<template>
  <section id="Projects" class="Projects">
    <Subtitle :subtitle="subtitle" />
    <div class="proj-container" v-if="initialVue">
      <div class="card"></div>
    </div>
    <div class="proj-container proj-popup" v-else>popup</div>
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
      subtitle: "Projects",
      initialVue: true,
    };
  },
};
</script>

<style scoped lang="scss">
.proj-container {
  background-color: blue;
  width: 100%;
  height: 100%;
  margin-right: 30px;
}
</style>
