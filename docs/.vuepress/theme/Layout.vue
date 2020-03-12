<template>
    <div class="sd-main-container">
        <nav
            role="navigation"
            class="top-navigation sd-top-navigation">
            <div class="container--top-navigation">
                <div class="top-navigation__header">
                    <div class="top-navigation__logo sd-top-navigation-logo">
                        <a href="/iwb_serenity" class="top-navigation__logo-link">
                            <img src="/iwb_serenity/images/logos/immoweb-serenity.svg" :alt="$site.title" class="top-navigation__image"/>
                        </a>
                    </div>
                </div>
                <navbar></navbar>
            </div>
        </nav>

        <main id="main-content">
            <div class="sd-content">
                <div class="container">
                    <Content/>
                </div>
            </div>
        </main>

        <footer class="sd-footer">
            <div class="container">
                <p>Built and maintained by the Immoweb PHP team.</p>
                <p>
                    Code licensed  <a href="https://github.com/axel-springer-kugawana/iwb_serenity/blob/master/LICENSE" target="_blank" rel="license noopener">MIT</a>.
                </p>
            </div>
        </footer>
    </div>
</template>
<script>

import navbar from '../components/Navbar/Navbar.vue'

export default {
    components: {
        navbar
    },
};
</script>