<template>
  <div class="home wrapper">
    <div class="content">
      <!-- <img src="../assets/logo.png"> -->
      <TitleBig>
        Antonio Coppola
      </TitleBig>
      <Subtitle>
        I'm a full-stack web developer based in London, currently working <a href="//evemattress.co.uk" target="_blank" rel="noopener"> @evesleep</a>.
      </Subtitle>
      <Paragraph>
        With 4+ years of experience, I enjoy building beautiful handcrafted web applications using the latest technologies. <br>Always passionate about performances and optimizations, I do eveything in my power to make the web experience as fast as possible from the code to the infrastructure.
      </Paragraph>
    </div>
    <div class="contact-links">
      <ul class="contact-links__list">
        <li class="contact-links__item">
          <i class="icon ion-md-at"></i>
          <a href="mailto:info@antonio-coppola.com">Email</a>
        </li>
        <li class="contact-links__item">
          <i class="icon ion-logo-twitter"></i>
          <a href="https://twitter.com/cuppilekkia" target="_blank" rel="noopener">Twitter</a>
        </li>
        <li class="contact-links__item">
          <i class="icon ion-logo-linkedin"></i>
          <a href="https://www.linkedin.com/in/cuppilekkia" target="_blank" rel="noopener">LinkedIn</a>
        </li>
        <li class="contact-links__item">
          <i class="icon ion-logo-codepen"></i>
          <a href="https://codepen.io/cuppilekkia/" target="_blank" rel="noopener">Codepen</a>
        </li>
        <li class="contact-links__item">
          <i class="icon ion-logo-github"></i>
          <a href="https://github.com/cuppilekkia" target="_blank" rel="noopener">Github</a>
        </li>
        <li class="contact-links__item">
          <i class="icon ion-logo-instagram"></i>
          <a href="https://www.instagram.com/cuppilekkia/" target="_blank" rel="noopener">Instagram</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
