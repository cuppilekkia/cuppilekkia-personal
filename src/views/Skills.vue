<template>
    <article class="skills wrapper">
        <div class="content">
            <!-- <img src="../assets/logo.png"> -->
            <TitleBig>
                Skills
            </TitleBig>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-rocket"></i> Web Technologies & Frameworks
                </h2>
                <Paragraph class="tags">
                    Vue.js &middot; HTML5 &middot; CSS3 &middot; Vuex &middot; Node.js <br>
                    Laravel &middot; PHP &middot; RESTful API &middot; Jekyll
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-hammer"></i> Scripts/UI & Tooling
                </h2>
                <Paragraph class="tags">
                    JavaScript &middot; ES6 &middot; OOJS &middot; JQuery &middot; AJAX <br>
                    SASS/SCSS &middot; BEM &middot; Webpack &middot; Gulp
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-recording"></i> Database and ORM
                </h2>
                <Paragraph class="tags">
                    MySQL &middot; NoSQL &middot; Eloquent
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-flash"></i> Application & Web Server(less)
                </h2>
                <Paragraph class="tags">
                    NGINX &middot; Lambda &middot; Linux
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-switch"></i> Deployment & Infrastructure Tools
                </h2>
                <Paragraph class="tags">
                    Docker &middot; Terraform &middot; CiCd &middot; Jenkins <br>
                    AWS Cli &middot; CodePipeline
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-bug"></i> Debugging & Monitoring
                </h2>
                <Paragraph class="tags">
                    Chrome developer tools &middot; Bugsnag &middot; New Relic
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-git-branch"></i> Versioning and other tools
                </h2>
                <Paragraph class="tags">
                    Git &middot; Bitbucket &middot; Jira
                </Paragraph>
            </section>
        </div>
    </article>
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

.skills {
    & .content {
        max-width: 800px;
    }
}
.skill {
    margin-bottom: 40px;

    @media screen and (min-width: $sm) {
        display: flex;

    }

    &-title {
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 5px;
        color: $main-light;
        flex: 1;
    }

    .tags {
        flex: 1;
    }

    .icon {
        margin-right: 5px;
        color: $red;
    }
}
</style>
