<template>
  <div class="project__card">
    <h3 class="project__title">{{ projItems.title }}</h3>
    <p class="project__description">
      {{ projItems.subtitle }}
    </p>
    <img class="project__image" :src="projItems.screenshot" :alt="projItems.altTxt" />
    <button class="project__btn" @click="$emit('openCard', projItems._id)">More details...</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProjectCard",
  props: {
    projItems: Object,
  },
  methods: {
    submit(projId) {
      this.$emit("openCard", projId);
    },
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
