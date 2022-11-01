<template>
  <h2 class="section-title">{{ subtitle }}</h2>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    subtitle: String,
  },
};
</script>

<style scoped lang="scss">
.section-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  writing-mode: vertical-rl;
  rotate: 180deg;
  width: 112px;
  height: 100%;
  text-transform: uppercase;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #a39da9;
  -webkit-text-fill-color: transparent;
  font-family: Arial Black, Gadget, sans-serif;
}
</style>
