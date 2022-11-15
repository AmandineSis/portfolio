<template>
  <section id="Contact" class="Contact">
    <Subtitle :subtitle="subtitle" />
    <div class="container">
      <div class="contact__description">
        <p class="content">
          If you wish to <span class="highlights">talk about your project</span>, please
          check the calendly availabilities and
          <span class="highlights">book a meeting</span> at your desired time.<br />
          Don't forget to leave me a short message to describe your project and I will
          call you back !
        </p>

        <!-- Calendly inline widget begin -->
        <div
          class="calendly calendly-inline-widget"
          data-url="https://calendly.com/am-sismondi"
        ></div>
        <!-- Calendly inline widget end -->
      </div>
      <div class="contact__description">
        <p class="content">
          If you just want to <span class="highlights">ask a question</span>, feel free to
          email me :
        </p>
        <div class="link__block">
          <a class="link" href="mailto:amsismondi.dev@gmail.com">send email</a>
        </div>
        <p class="content">Or you can support me here :</p>
        <div class="link__block">
          <a class="link" href="https://www.buymeacoffee.com/dashboard"
            >Buy me a coffee ! ☕</a
          >
        </div>
      </div>
    </div>
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
      subtitle: "Contact",
    };
  },
  mounted() {
    const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact__description {
  width: 50%;
  margin: 30px;
}
.content {
  text-align: justify;
  color: #373638;
  margin-bottom: 20px;
  line-height: 1.5em;
}
.highlights {
  font-weight: bold;
  color: #d83c65;
}
.calendly {
  min-width: 320px;
  width: 100%;
  height: 400px;
  border: 2px solid #d83c65;
}

.link {
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
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 0.8rem 1.2rem;
  width: 250px;
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
  &__block {
    margin: 20px;
  }
}
</style>
