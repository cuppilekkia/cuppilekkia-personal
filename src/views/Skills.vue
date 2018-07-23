<template>
    <div class="skills wrapper">
        <div class="content">
            <!-- <img src="../assets/logo.png"> -->
            <TitleBig>
                Skills
            </TitleBig>
            <div class="skill">
                <h2 class="skill-title">
                    Web Technologies & Frameworks
                </h2>
                <Paragraph>
                    Vue.js &middot; HTML5 &middot; CSS3 &middot; Vuex &middot; Node.js <br>
                    Laravel &middot; PHP &middot; RESTful API &middot; Jekyll
                </Paragraph>
            </div>
            <div class="skill">
                <h2 class="skill-title">
                    Scripts/UI & Tooling
                </h2>
                <Paragraph>
                    JavaScript &middot; ES6 &middot; OOJS &middot; JQuery &middot; AJAX <br>
                    SASS/SCSS &middot; BEM &middot; Webpack &middot; Gulp
                </Paragraph>
            </div>
            <div class="skill">
                <h2 class="skill-title">
                    Database and ORM
                </h2>
                <Paragraph>
                    MySQL &middot; NoSQL &middot; Eloquent
                </Paragraph>
            </div>
            <div class="skill">
                <h2 class="skill-title">
                    Application & Web Server(less)
                </h2>
                <Paragraph>
                    NGINX &middot; Lambda &middot; Linux
                </Paragraph>
            </div>
            <div class="skill">
                <h2 class="skill-title">
                    Deployment & Infrastructure Tools
                </h2>
                <Paragraph>
                    Docker &middot; Terraform &middot; CiCd &middot; Jenkins <br>
                    AWS Cli &middot; CodePipeline
                </Paragraph>
            </div>
            <div class="skill">
                <h2 class="skill-title">
                    Debugging & Monitoring
                </h2>
                <Paragraph>
                    Chrome developer tools &middot; Bugsnag &middot; New Relic
                </Paragraph>
            </div>
            <div class="skill">
                <h2 class="skill-title">
                    Versioning and other tools
                </h2>
                <Paragraph>
                    Git &middot; Bitbucket &middot; Jira
                </Paragraph>
            </div>
        </div>
    </div>
</template>

<script>
import TitleBig from '@/components/TitleBig.vue'
import Paragraph from '@/components/Paragraph.vue'

export default {
  name: 'home',
  components: {
    TitleBig,
    Paragraph
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.skill {
    margin-bottom: 20px;

    &-title {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 5px;
        color: $main-light-40;
    }
}
</style>
