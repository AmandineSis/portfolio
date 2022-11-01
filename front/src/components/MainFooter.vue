<template>
  <footer class="footer">
    <div class="footer__links">
      <a to="/"><fa-icon class="social-link" icon="fa-brands fa-linkedin" />LinkedIn</a>
      <a to="/"
        ><fa-icon class="social-link" icon="fa-brands fa-square-github" />GitHub</a
      >
    </div>
    <div class="footer__copyright">
      <p>
        © Craft Code 2022<br />
        Amandine Sismondi
      </p>
      <p>All rights reserved</p>
      <a href="">Privacy policy</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style scoped lang="scss">
.footer {
  height: 20vh;
  width: 100vw;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 100;
  &__links {
    display: flex;
    flex-direction: column;
    &__item {
      height: 50px;
      color: black;
    }
  }
  &__copyright {
    height: 5vh;
    width: 16vw;
    text-align: right;
  }
}
.social-link {
  font-size: 30px;
  margin: 5px;
}
</style>
