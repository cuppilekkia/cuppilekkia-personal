<template>
    <div class="home wrapper">
        <section class="content">
            <!-- <img src="../assets/logo.png"> -->
            <div class="header">
                <TitleBig>
                    Antonio Coppola
                </TitleBig>
                <Subtitle>
                    I'm a full-stack web developer based in London, currently working for <a href="//www.evesleep.co.uk" target="_blank" rel="noopener">evesleep</a>.
                </Subtitle>
            </div>
            <Paragraph>
                With 5+ years of experience, I enjoy building beautiful handcrafted web applications using the latest technologies. <br>Always passionate about performances and optimisations, I do everything in my power to make the web experience as fast as possible from the code to the infrastructure.
            </Paragraph>
        </section>
        <section class="contact-links">
            <ul class="contact-links__list">
                <li class="contact-links__item">
                    <i class="icon ion-logo-twitter"></i>
                    <a href="https://twitter.com/cuppilekkia" target="_blank" rel="noopener">Twitter</a>
                </li>
                <li class="contact-links__item">
                    <i class="icon ion-logo-linkedin"></i>
                    <a href="https://www.linkedin.com/in/cuppilekkia" target="_blank" rel="noopener">LinkedIn</a>
                </li>
                <li class="contact-links__item">
                    <i class="icon ion-md-code"></i>
                    <a href="https://glitch.com/@cuppilekkia" target="_blank" rel="noopener">Glitch.me</a>
                </li>
                <li class="contact-links__item">
                    <i class="icon ion-logo-codepen"></i>
                    <a href="https://codepen.io/cuppilekkia/" target="_blank" rel="noopener">Codepen</a>
                </li>
                <li class="contact-links__item">
                    <i class="icon ion-logo-github"></i>
                    <a href="https://github.com/cuppilekkia" target="_blank" rel="noopener">Github</a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import TitleBig from '@/components/TitleBig.vue'
import Subtitle from '@/components/Subtitle.vue'
import Paragraph from '@/components/Paragraph.vue'

export default {
  name: 'home',
  components: {
    TitleBig,
    Subtitle,
    Paragraph
  }
}
</script>

<style lang="scss" scoped>
.header {
    margin-bottom: 40px;
}
</style>
