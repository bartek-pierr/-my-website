<template>
  <section class="hero">
    <div class="hero__content">
      <div>
        <img src="assets/img/logo-hero.svg" alt="">
      </div>
      <h1>Creative developer specialized in <span class="mainBox"><span class="mainBox__main">beautiful<img
              class="mainBox-main--img" src="assets/img/doodles.svg" alt=""></span><span
            class="mainBox__rotate">crazy</span></span> creative sh<span class="colorTxt">*</span>t</h1>
      <p>I create amazing websites and graphics for amazing brands, and my creativity is off the charts. Don't
        believe
        me? Check out my projects and don't be a stranger, I'm just a call away.</p>
    </div>

    <div class="hero__photo">
      <img src="assets/img/photo-hero.png" alt="">
    </div>

    <a href="#homeAbout" class="scrollDown"><span class="scrollArrow">&#8592;</span> <p>scroll</p></a>
  </section>

  <section class="homeAbout" id="homeAbout">
    <div class="homeAbout__left">
      <p>About Me</p>
      <h2>I help businesses transform emotions into implementation of <span>solutions</span> and
        <span>automations</span>.
      </h2>
      <div>
        <img src="assets/img/photo-about.png" alt="">
      </div>
    </div>
    <div class="homeAbout__right">
      <div class="homeAbout__right--imgWrapper" id="floatBox">
        <img src="assets/img/box-doodle-2.svg" alt="">
      </div>
      <p>Hey you! Bartek Pierr has been operating as a brand since 2021. I wanted to create a web design and
        development company, branding elements and utility graphics to bring my crazy ideas to the world and have fun
        along the way. Over the years, I realized that actually, I was quite good at this stuff. But my work best speaks
        for itself, so take a look at my projects below.</p>
    </div>
  </section>

  <section class="carousel">
    
  </section>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      const floatBox = document.getElementById('floatBox');
      let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
      let isScrollingDown = true;
      const easing = 0.01;

      const animateFloatBox = () => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        const deltaY = currentScrollTop - lastScrollTop;

        if (deltaY > 0) {
          isScrollingDown = true;
        } else if (deltaY < 0) {
          isScrollingDown = false;
        }

        const targetTranslateY = isScrollingDown ? 100 : -100;

        const translateY = parseFloat(floatBox.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
        const interpolatedTranslateY = translateY + (targetTranslateY - translateY) * easing;

        floatBox.style.transform = `translateY(${interpolatedTranslateY}px)`;

        lastScrollTop = currentScrollTop;
        requestAnimationFrame(animateFloatBox);
      };

      animateFloatBox();
    }
  }
};

</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  height: 100vh;
  width: 100%;

  &__content {
    background-color: $color-white;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    text-align: left;
    padding: 10rem 10rem 4rem 10rem;

    & div {
      height: 6rem;

      & img {
        width: 100%;
        height: 100%;
      }
    }

    & h1 {
      font-size: 4rem;
      font-weight: 800;

      .colorTxt {
        color: $color-primary;
      }

      @media (max-width: 1049px) {
        font-size: 3rem;
      }
    }

    & p {
      width: 100%;
      font-weight: 500;
      font-size: 1.6rem;
      font-family: monospace;
    }

    @media (max-width: 1049px) {
      width: 100%;
      height: 60%;
      text-align: center;
      padding: 8rem 4rem 4rem 4rem;
      align-items: center;
    }
  }

  &__photo {
    background-color: $color-white;
    width: 50%;

    & img {
      clip-path: polygon(16% 0, 0 36%, 11% 100%, 100% 100%, 100% 0);
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: $color-primary;

      @media (max-width: 1049px) {
        clip-path: none;
      }
    }

    @media (max-width: 1049px) {
      width: 100%;
      height: 40%;
    }
  }

  @media (max-width: 1049px) {
    flex-direction: column;
  }

  .scrollDown {
    display: flex;
    align-items: center;
    gap: 1rem;
    rotate: -90deg;
    position: absolute;
    bottom: 8rem;
    left: 2rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 0.1rem;

    .scrollArrow {
    transition: all 0.5 ease-in-out;
    }

    & span {
      font-size: 2rem;
    }

    &:hover .scrollArrow {
      transform: translateX(-1rem);
    }
  }
}

.mainBox {
  position: relative;

  &__main {
    position: relative;

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__rotate {
    position: absolute;
    top: -4.3rem;
    left: 3rem;
    color: $color-primary;
    font-family: "Permanent Marker", cursive;
    rotate: -6deg;

    @media (max-width: 1049px) {
      top: -3.2rem;
    }
  }
}

.homeAbout {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: $color-black;
  padding: 10rem;

  &__left {
    display: flex;
    flex-direction: column;
    width: 48%;

    & p {
      color: $color-white;
      font-family: monospace;
      margin-bottom: 4rem;
    }

    & h2 {
      color: $color-primary;
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 4rem;

      & span {
        color: $color-white;
      }

      @media (max-width: 1049px) {
        font-size: 3rem;
      }
    }

    & div {
      height: 40rem;
      width: 40rem;
      background-color: $color-primary;
      clip-path: polygon(100% 97%, 100% 0, 0 0, 19% 84%);

      &:hover {
        background-color: $color-white;
      }

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media (max-width: 1049px) {
        width: 100%;
      }
    }

    @media (max-width: 1049px) {
      width: 100%;
    }
  }

  &__right {
    width: 48%;
    display: flex;
    flex-direction: column;

    &--imgWrapper {
      height: 20rem;
      width: fit-content;
      margin-bottom: 10rem;

      & img {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 1049px) {
        display: none;
      }
    }

    & p {
      color: $color-white;
      font-family: monospace;
    }

    @media (max-width: 1049px) {
      width: 100%;
    }
  }

  @media (max-width: 1049px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    padding: 4rem;
  }
}
</style>