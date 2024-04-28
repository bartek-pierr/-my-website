<template>
  <div class="burgerMenu">
    <div class="burgerMenu__line lineOne"></div>
    <div class="burgerMenu__line lineTwo"></div>
  </div>

  <nav class="mainNavigation">
    <ul class="mainNavigation__linksWrapper">
      <NuxtLink to="/">
        <li>Home</li>
      </NuxtLink>
      <NuxtLink to="/about">
        <li>About</li>
      </NuxtLink>
      <NuxtLink to="/skills">
        <li>Skills</li>
      </NuxtLink>
      <NuxtLink to="/projects">
        <li>Projects</li>
      </NuxtLink>
      <NuxtLink to="/contact">
        <li>Contact</li>
      </NuxtLink>
      <NuxtLink to="/blog" style="display: none;">
        <li>Blog</li>
      </NuxtLink>
      <NuxtLink to="/brief" style="display: none;">
        <li>Brief</li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      const burgerMenu = document.querySelector('.burgerMenu');
      const mainNavigation = document.querySelector('.mainNavigation');
      const navigationLinks = mainNavigation.querySelectorAll('a');

      burgerMenu.addEventListener('click', () => {
        mainNavigation.classList.toggle('open');
        burgerMenu.classList.toggle('open');
      });

      navigationLinks.forEach(link => {
        link.addEventListener('click', () => {
          mainNavigation.classList.remove('open');
          burgerMenu.classList.remove('open');
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.burgerMenu {
  width: 3rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: fixed;
  top: 6rem;
  right: 6rem;
  z-index: 9999;

  .lineOne,
  .lineTwo {
    width: 100%;
    height: 0.4rem;
    background-color: $color-black;
    transition: transform 0.3s ease;
  }

  &.open .lineOne {
    transform: translateY(0.8rem) rotate(45deg);
  }

  &.open .lineTwo {
    transform: translateY(-0.8rem) rotate(-45deg);
  }

  @media (max-width: 1049px) {
    top: 3rem;
    right: 3rem;
  }
}

.mainNavigation {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(assets/img/navigation-bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  transition: top 0.5s ease;
  z-index: 999;
  padding: 10rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & .router-link-exact-active li {
      opacity: 1;
    }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000000b9;
    z-index: -10;
  }

  &__linksWrapper {
    text-align: right;
    display: flex;
    flex-direction: column;
    z-index: 10000;

    & a li {
      color: $color-white;
      font-size: 5rem;
      font-weight: 800;
      opacity: 0.4;
      transition: all 0.2s ease-in-out;

      &:hover {
        opacity: 1;
        scale: 1.05;
      }
    }
  }

  &.open {
    top: 0;
  }
}
</style>