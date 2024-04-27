<template>
    <section class="aboutHeader">
        <div class="aboutHeader__text">
            <h6>About Me</h6>
            <h2>I'am just making good sh*t<br><span> like there's no tomorrow</span></h2>
            <p>I am a talented web developer and graphic designer with a strong focus on crazy, creative projects. I
                create amazing solutions to provide companies, agencies and individuals, all kinds of websites,
                applications and graphic materials they need. In style. And with lots of laughs guaranteed. I love my
                work.</p>
            <div class="aboutHeader__text--btnWrapper">
                <NuxtLink to="/projects">check my <span>projects</span></NuxtLink>
            </div>
        </div>
        <img class="aboutHeader__boxDoodle" src="assets/img/box-doodle.svg" alt="">
        <img class="aboutHeader__arrowDoodle" src="assets/img/angle-arrow.svg" alt="">
        <p class="aboutHeader__markerDoodle">hate <span>reading</span>?</p>
    </section>
</template>

<script>
export default {
    mounted() {
    if (process.client) {
      const burgerMenu = document.querySelector('.burgerMenu');
      const mainNavigation = document.querySelector('.mainNavigation');
      const lineOne = document.querySelector('.lineOne');
      const lineTwo = document.querySelector('.lineTwo');
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
};
</script>

<style lang="scss" scoped>
.aboutHeader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 4rem;

    &__text {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60rem;

        h6 {
            font-size: 1.6rem;
            font-family: monospace;
            font-weight: 500;
            margin-bottom: 2rem;
        }

        h2 {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 2rem;

            & span {
                color: $color-primary;
            }

            @media (max-width: 1049px) {
            font-size: 3rem;
        }
        }

        & p {
            color: $color-grey;
            margin-bottom: 3rem;
        }

        &--btnWrapper {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
            background-color: $color-white;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $color-white;
            transition: all 0.2s ease-in-out;

            &:hover {
                box-shadow: none;
            }

            & a {
                padding: 1.6rem 4rem;
                font-weight: 600;
                letter-spacing: 0.1rem;

                & span {
                    color: $color-primary;
                }
            }
        }
    }

    &__boxDoodle {
        position: absolute;
        top: 20%;
        left: 12%;
        height: 14rem;

        @media (max-width: 1049px) {
            display: none;
        }
    }

    &__arrowDoodle {
        position: absolute;
        bottom: 27%;
        right: 24%;
        height: 4rem;

        @media (max-width: 1049px) {
            display: none;
        }
    }

    &__markerDoodle {
        position: absolute;
        bottom: 31%;
        right: 15%;
        font-size: 2.4rem;
        font-family: "Permanent Marker", cursive;
        rotate: 12deg;
        color: $color-primary;

        & span {
            color: $color-black;
        }

        @media (max-width: 1049px) {
            display: none;
        }
    }
}
</style>