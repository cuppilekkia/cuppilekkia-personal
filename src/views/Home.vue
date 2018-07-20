<template>
  <div class="home content theme-dark">
    <!-- <img src="../assets/logo.png"> -->
    <TitleBig>
      Antonio Coppola
    </TitleBig>
    <Subtitle>
      I'm a fullstack web developer based in London, currently working @evesleep.
    </Subtitle>
    <Paragraph>
      With 4+ years of experience, I enjoy building beautiful handcrafted web applications using the latest technologies. <br>Always passionate about performances and optimizations, I do eveything in my power to make the web experience as fast as possible from the code to the infrastructure.
    </Paragraph>
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
