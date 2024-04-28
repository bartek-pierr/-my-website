<template>
<section class="contact">
    <div class="contact__content">
        <p>Contact</p>
        <span>Like what you see? Have a project you'd like to talk about? Want to ask me a personal question?</span>
        <a class="contact__content--mail" href="mailto:bartek.pierr@gmail.com"><span>bartek.pierr</span>@gmail.com</a>
        <div>
            <img src="assets/img/doodle-contact.svg" alt="">
        </div>
    </div>
    <div class="contact__photo">
        <img src="assets/img/photo-contact.jpg" alt="">
    </div>
</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contact {
    display: flex;
    width: 100%;
    height: 100vh;

    &__content {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 10rem;

        & p {
            font-family: monospace;
            margin-bottom: 2rem;
        }

        & span {
            color: $color-grey;
            margin-bottom: 2rem;
        }

        &--mail {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 4rem;

            & span {
                color: $color-primary;
            }
        }

        & div {
            width: 100%;
            height: 20rem;

            & img {
                width: 100%;
                height: 100%;
            }
        }
    }

    &__photo {
        width: 50%;
        height: 100%;
        clip-path: polygon(100% 100%, 100% 0, 0 0, 19% 100%);

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.2s ease-in-out;

            &:hover {
                scale: 1.2;
            }
        }
    }
}
</style>