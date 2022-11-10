<template>
  <div class="proj-selection">
    <div class="proj-selection__left">
      <img
        :src="selection.screenshot"
        :alt="selection.altTxt"
        class="proj-selection__screenshot"
      />
    </div>
    <div class="proj-selection__right">
      <div class="proj-selection__close">
        <font-awesome-icon
          class="proj-selection__close--icon"
          icon="xmark"
          @click="$emit('closeCard')"
        />
      </div>
      <div class="proj-selection__description">
        <h2 class="proj-selection__title">{{ selection.title }}</h2>
        <h3 class="proj-selection__subtitle">{{ selection.subtitle }}</h3>
        <div class="divider"><!--line divider--></div>

        <ul class="proj-selection__list">
          <li class="proj-selection__item">{{ selection.description[0] }}</li>
          <li class="proj-selection__item">{{ selection.description[1] }}</li>
          <li class="proj-selection__item">{{ selection.description[2] }}</li>
          <li class="proj-selection__item">{{ selection.description[3] }}</li>
        </ul>
      </div>

      <div class="proj-selection__description--bottom">
        <h4 class="proj-selection__languages">
          <span class="js"> {{ selection.languages[0] }}</span>
          <span class="vue">{{ selection.languages[1] }}</span>
          <span class="express"> {{ selection.languages[2] }}</span>
        </h4>
        <a href="${selection.codesource}" class="proj-selection__link"
          ><i class="fa-brands fa-github"></i> Code source</a
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProjectView",
  props: {
    selection: Object,
  },
  methods: {
    close() {
      this.$emit("closeCard");
    },
  },
};
</script>

<style scoped lang="scss">
.proj-selection {
  width: 75%;
  height: 75%;
  box-shadow: 6px 6px 33px 0px rgba(55, 54, 56, 0.75);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__left {
    width: 50%;
    object-fit: contain;
  }
  &__right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: space-around;
  }
  &__close {
    height: 50px;
    text-align: right;

    &--icon {
      font-size: 30px;
      margin: 20px;
    }
  }
  &__screenshot {
    object-fit: contain;
    width: 80%;
    min-width: 350px;
  }
  &__title {
    color: #373638;
    font-size: 50px;
  }
  &__subtitle {
    padding: 10px 0;
    color: #373638;
    margin-right: 30px;
  }
  &__description {
    text-align: justify;
  }
  &__list {
    margin-right: 30px;
    padding: 10px 0;
    color: #373638;
  }
  &__languages {
    padding: 10px 0;
    text-align: left;
    color: #373638;
  }

  &__link {
    text-align: start;
    color: #373638;
    text-decoration: underline;
  }
}
.divider {
  margin: 20px 20px 20px 0;
  border: 1px solid #373638;
}
</style>
