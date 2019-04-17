<template>
    <div class="sd-navbar">
        <ul class="sd-navbar__menu">
            <li class="sd-navbar__menu-item" v-for="navItem in $site.themeConfig.nav">
                <template v-if="navItem.children">
                    <navbarSubmenu
                        :name="navItem.text.toLowerCase()"
                        :title="navItem.text"
                        :children="navItem.children"
                        @openItem="closeAllSubmenu($event)"
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
    </div>
</template>

<script>
import navbarMenuItem from './NavbarMenuItem.vue'
import navbarSubmenu from './NavbarSubmenu.vue'

export default {
    components: {
        navbarMenuItem,
        navbarSubmenu
    },
    methods: {
        closeAllSubmenu: function(activeSubmenu) {
            this.$children.forEach(function(submenu) {
                if (submenu.name !== activeSubmenu) {
                    if (typeof(submenu.closeItem) === "function") {
                        submenu.closeItem();
                    }
                }
            });
        },
    }
}
</script>