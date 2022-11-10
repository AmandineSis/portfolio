<template>
  <div class="project__card">
    <h3 class="project__title">{{ projItems.title }}</h3>
    <p class="project__description">
      {{ projItems.subtitle }}
    </p>
    <img class="project__image" :src="projItems.screenshot" :alt="projItems.altTxt" />
    <button class="project__btn" @click="$emit('openCard', projItems._id)">
      More details...
    </button>
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
  &__description {
    height: 50px;
    margin: 20px;
    color: #373638;
  }
  &__image {
    display: inline-block;
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
  &__btn {
    align-items: center;
    background-color: #d83c65;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    flex: 1 1 auto;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    justify-content: center;
    line-height: 1;
    margin: 10px;
    outline: none;
    padding: 0.8rem 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
    white-space: nowrap;
    border: 0;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover {
      box-shadow: #d83c65 0 0 0 3px, transparent 0 0 0 0;
      color: #a39da9;
      background-color: #fff;
    }
  }
}
</style>
