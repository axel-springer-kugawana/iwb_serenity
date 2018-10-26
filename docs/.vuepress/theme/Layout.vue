<template>
    <div class="sd-main-container">
        <header class="sd-header">
            <a href="/iwb_serenity" class="title--4">{{$site.title}}</a>
            <navbar></navbar>
        </header>

        <div class="sd-content">
            <div class="container">
                <Content/>
            </div>
        </div>

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