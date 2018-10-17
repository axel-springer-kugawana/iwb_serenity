<template>
    <div>
        <template v-if="isExternal">
            <a
                :href="href">{{title}}</a>
        </template>
        <template v-else>
            <router-link
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
    },
}
</script>