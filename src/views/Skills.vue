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
                    Vue.js &middot; Vuex &middot; HTML5 &middot; CSS3 &middot; GraphQL <br>
                    Apollo &middot; Symfony &middot; RESTful API &middot; AJAX &middot; Jekyll
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-hammer"></i> Languages & Tooling
                </h2>
                <Paragraph class="tags">
                    JavaScript &middot; Node.js &middot; PHP &middot; Golang &middot; Python<br>
                    Ruby &middot; Webpack &middot; Jest &middot; Cypress &middot; SASS/SCSS<br>
                    Webpack &middot; Gulp
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-recording"></i> Database & Messaging
                </h2>
                <Paragraph class="tags">
                    MySQL &middot; NoSQL &middot; Kafka &middot; ElasticSearch <br>
                    Eloquent
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-flash"></i> Application & Web Server(less)
                </h2>
                <Paragraph class="tags">
                    NGINX &middot; Lambda &middot; Linux &middot; Kubernetes
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-switch"></i> Deployment & Infrastructure Tools
                </h2>
                <Paragraph class="tags">
                    Docker &middot; Amplify &middot; CiCd &middot; Jenkins &middot; AWS Cli <br>
                    CodePipeline &middot; Terraform &middot; Github Actions
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-bug"></i> Debugging & Monitoring
                </h2>
                <Paragraph class="tags">
                    Bugsnag &middot; New Relic &middot; Datadog &middot; Sentry<br>
                    Chrome developer tools
                </Paragraph>
            </section>
            <section class="skill">
                <h2 class="skill-title">
                    <i class="icon ion-md-git-branch"></i> Versioning and other tools
                </h2>
                <Paragraph class="tags">
                    Git &middot; Bitbucket &middot; Jira &middot; GitHub
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
        //color: $main-light;
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
