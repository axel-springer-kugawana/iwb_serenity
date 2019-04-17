<template>
    <div v-click-outside="closeItem">
        <a
            :role="children && children.length > 0 ? 'button' : false"
            :href="href.length > 0 ? href : '#'"
            tabindex="0"
            :aria-expanded="isExpanded"
            class="sd-navbar__link sd-navbar__sub-menu-toggle"
            :class="(open ? 'open' : '')"
            @click="toggleItem"
        >
            <span>
                <span class="sd-navbar__sub-menu-title">{{ title }}</span>
                <span class="sd-arrow-down"></span>
            </span>
        </a>
        <div
            v-if="children && children.length > 0"
            class="sd-navbar__sub-menu"
            :class="{ open: open }">
            <div class="container">
                <ul class="sd-navbar__sub-menu-list">
                    <li v-for="child in children">
                        <navbarMenuItem
                            link-class="submenu"
                            :title="child.text"
                            :href="child.link"
                            :isExternal="child.external">
                        </navbarMenuItem>
                        <template v-if="child.children && child.children.length > 0">
                            <ul class="">
                                <li v-for="subChild in child.children">
                                    <navbarMenuItem
                                        link-class="submenu"
                                        :title="subChild.text"
                                        :href="subChild.link"
                                        :isExternal="subChild.external">
                                    </navbarMenuItem>
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import navbarMenuItem from './NavbarMenuItem.vue';

export default {

    components: {
        navbarMenuItem
    },

    directives: {
        'clickOutside': {
            bind (el, binding) {
                el.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
                document.body.addEventListener('click', binding.value);
            },
            unbind(el, binding) {
                document.body.removeEventListener('click', binding.value);
            }
        }
    },

    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        href: {
            type: String,
            required: false,
            default: "#"
        },
        children: {
            type: Array,
            required: false,
            default: []
        }
    },

    data() {
        return {
            open: false,
            id: null,
            targetBlankString: "",
            noopenerNoreferrerString: ""
        };
    },

    watch: {
        '$route': function(value) {
            // On route change close item
            this.closeItem();
        }
    },

    computed: {
        isExpanded: function() {
            if(this.subMenu) {
                if (this.open) {
                    return true;
                } else {
                    return "false";
                }
            }

            return false;
        }
    },

    methods: {
        toggleItem: function(e) {
            // If there is a slot
            // Handle the link as a submenu button (toggle submenu)
            // If not do nothing special (follow the default link behavior)
            if (this.children.length > 0) {
                e.preventDefault();

                if (this.open === true) {
                    this.closeItem();
                } else {
                    this.openItem();
                }
            }
        },
        openItem: function() {
            this.open = true;
            this.$emit('openItem', this.name);
        },
        closeItem: function() {
            this.open = false;
        }
    }
}
</script>