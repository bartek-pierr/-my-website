<template>
  <div class="burgerWrapper"></div>
</template>

<style lang="scss" scoped>
.burgerWrapper {
  clip-path: polygon(100% 97%, 100% 0, 15% 0, 0 100%);
  width: 8rem;
  height: 8rem;
  background-color: $color-white;
  position: fixed;
  top: 3rem;
  right: 3.5rem;
  z-index: 9999;

  @media (max-width: 1049px) {
    width: 6rem;
    height: 6rem;
    top: 1.5rem;
    right: 1.5rem;
  }
}
</style>