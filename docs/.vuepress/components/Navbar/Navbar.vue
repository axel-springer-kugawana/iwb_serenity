<template>
    <nav class="sd-navbar">
        <ul class="sd-navbar__menu">
            <li class="sd-navbar__menu-item" v-for="navItem in $site.themeConfig.nav">
                <template v-if="navItem.children">
                    <navbarSubmenu
                        :title="navItem.text"
                        :children="navItem.children"
                    ></navbarSubmenu>
                </template>
                <template v-else>
                    <navbarMenuItem
                        :title="navItem.text"
                        :href="navItem.link"
                        :isExternal="navItem.external">
                    </navbarMenuItem>
                </template>
            </li>
        </ul>
    </nav>
</template>

<script>
import navbarMenuItem from './NavbarMenuItem.vue'
import navbarSubmenu from './NavbarSubmenu.vue'

export default {
    components: {
        navbarMenuItem,
        navbarSubmenu
    }
}
</script>