<template>
  <div id="skills" class="Skills">
    Skills
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
//mport HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SkillsView',
  components: {
    //HelloWorld
  }
}
</script>

<style scoped lang="scss">
#skills {
  height: 80vh;
  width: 100vw;
  position : relative;
  top: 10vh;
  border : solid blue 1px;
}
</style>