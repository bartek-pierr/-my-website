<template>
  <div class="burgerMenu">
    <div class="burgerMenu__line lineOne"></div>
    <div class="burgerMenu__line lineTwo"></div>
  </div>

  <nav class="mainNavigation">
    <ul class="mainNavigation__linksWrapper">
      <a href="/">
        <li>Home</li>
      </a>
      <a href="/about">
        <li>About</li>
      </a>
      <a href="#skills">
        <li>Skills</li>
      </a>
      <a href="#work"
        style="box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;">
        <li>Work</li>
      </a>
      <a href="#contact">
        <li>Contact</li>
      </a>
      <a href="/blog">
        <li>Blog</li>
      </a>
      <a href="/brief">
        <li>Brief</li>
      </a>
    </ul>
  </nav>
</template>

<script>

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
}

.mainNavigation {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(assets/img/navigation-bg.jpg);
  background-size: cover;
  transition: top 0.5s ease;
  z-index: 999;
  padding: 10rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

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

    & .router-link-exact-active {
      opacity: 1;
      color: white;
    }

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