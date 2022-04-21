<template>
    <div>
         <label
            :for="id"
            class="toggle-label"
            :class="{
                'toggle--margin-left': togglePosition == 'right',
                'toggle--margin-right': togglePosition != 'right',
            }"
        >
            <slot v-if="togglePosition == 'right'">
                I’m a label
            </slot>
            <div
                class="toggle"
                :class="{
                    'toggle--small': small,
                    'toggle--waiting': waiting,
                    'toggle--no-icons': !icons,
                }"
            >
                <input ref="toggle" type="checkbox" class="toggle__input" :id="id" :disabled="disabled" :aria-disabled="ariaDisabled">
                <span class="toggle__checkbox">
                    <!-- Check icon ✔️ -->
                    <svg class="toggle__svg toggle__svg--check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" width="20" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 5.5L3.43934 7.93934L10.3787 1"/></svg>
                    <!-- Cross icon ✖️ -->
                    <svg class="toggle__svg toggle__svg--cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M1.06 1 9 8.94"/><path d="M1 8.94 8.94 1"/></svg>
                    <!-- Bouncing dots ••• -->
                    <span class="toggle__bouncing-dots">
                        <span class="toggle__bouncing-dot"></span>
                    </span>
                </span>
            </div>
            <slot v-if="togglePosition != 'right'">
                I’m a label
            </slot>
        </label>
    </div>
</template>

<script>

export default {
    props: {
        small: {
            default :false,
        },
        icons: {
            default :true,
        },
        disabled: {
            default: false,
        },
        ariaDisabled: {
            default: false,
        },
        indeterminate: {
            default: false,
        },
        waiting: {
            default :false,
        },
        togglePosition: {
            required: false,
            default: 'left',
        }
    },

    data() {
        return {
            id: 'toggle-' + (Math.random() * 1000000).toFixed(0)
        }
    },

    watch: {
        indeterminate(state) {
            this.setIndeterminate(state)
        },
    },

    mounted: function() {
        this.setIndeterminate()
    },

    methods: {
        setIndeterminate(state = this.indeterminate) {
            this.$refs.toggle.indeterminate = state
        },
    },
}
</script>
