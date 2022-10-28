<template>
  <section id="projects" class="Projects">
    <Subtitle :subtitle="subtitle"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
      subtitle: 'Projects'
    }
  },
}
</script>

<style scoped lang="scss">
#projects {
  border : solid blue 1px;
}
</style>
