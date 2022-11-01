<template>
  <section id="Contact" class="Contact">
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
      subtitle: 'Contact'
    }
  },
}
</script>

<style scoped lang="scss">
#contact {
  border : solid blue 1px;
}
</style>
