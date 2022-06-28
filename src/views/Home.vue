<template>
    <div class="home wrapper">
        <section class="content">
            <!-- <img src="../assets/logo.png"> -->
            <div class="header">
                <TitleBig>
                    Antonio Coppola
                </TitleBig>
                <Subtitle>
                    I'm a senior software engineer currently based in Italy, working remotely for <a href="https://onvi.com/" target="_blank" rel="noopener">Onvi</a>.
                </Subtitle>
                <Subtitle>
                    More experiences <router-link to="/works">here</router-link>.
                </Subtitle>
            </div>
            <Paragraph>
                I enjoy building powerful handcrafted web applications using the latest technologies.
                Passionate about problem solving, business logic, performances and optimizations,
                I do everything in my power to make the web experience as fast as possible from the code to the infrastructure.
                Currently on the path to become a Solutions Architect.
            </Paragraph>
        </section>
        <section class="contact-links">
            <ul class="contact-links__list">
                <li class="contact-links__item">
                    <i class="icon ion-logo-linkedin"></i>
                    <a href="https://www.linkedin.com/in/cuppilekkia" target="_blank" rel="noopener">LinkedIn</a>
                </li>
                <li class="contact-links__item">
                    <i class="icon ion-logo-github"></i>
                    <a href="https://github.com/cuppilekkia" target="_blank" rel="noopener">Github</a>
                </li>
                <li class="contact-links__item">
                    <i class="icon ion-logo-twitter"></i>
                    <a href="https://twitter.com/cuppilekkia" target="_blank" rel="noopener">Twitter</a>
                </li>
                <li class="contact-links__item">
                    <i class="icon ion-md-code"></i>
                    <a href="https://glitch.com/@cuppilekkia" target="_blank" rel="noopener">Glitch.me</a>
                </li>
                <li class="contact-links__item">
                    <i class="icon ion-logo-codepen"></i>
                    <a href="https://codepen.io/cuppilekkia/" target="_blank" rel="noopener">Codepen</a>
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
