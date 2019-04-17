<template>
    <div>
        <template v-if="isExternal">
            <a
                class="sd-navbar__link"
                :href="href">{{title}}</a>
        </template>
        <template v-else>
            <router-link
                class="sd-navbar__link"
                :class="(linkClass ? `sd-navbar__link--${linkClass}` : false)"
                :to="href">{{title}}</router-link>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        href: {
            type: String,
            default: "#"
        },
        isExternal: {
            type: Boolean,
            default: false
        },
        linkClass: {
            type: String,
            required: false,
            default: ""
        }
    },
}
</script>