<template>
    <div>
        <label for="exampleSwitchIndeterminate" class="switch-label">
            I’m a label
            <div
                class="switch"
                :class="{
                    'switch--small': small,
                    'switch--waiting': waiting,
                    'switch--no-icons': !icons,
                }"
            >
                <input ref="switch" type="checkbox" class="switch__input" id="exampleSwitchIndeterminate" :disabled="disabled" :aria-disabled="ariaDisabled">
                <span class="switch__checkbox">
                    <!-- Check icon ✔️ -->
                    <svg class="switch__svg switch__svg--check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" width="20" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 5.5L3.43934 7.93934L10.3787 1"/></svg>
                    <!-- Cross icon ✖️ -->
                    <svg class="switch__svg switch__svg--cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M1.06 1 9 8.94"/><path d="M1 8.94 8.94 1"/></svg>
                    <!-- Bouncing dots ••• -->
                    <span class="switch__bouncing-dots">
                        <span class="switch__bouncing-dot"></span>
                    </span>
                </span>
            </div>
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
            this.$refs.switch.indeterminate = state
        },
    },
}
</script>
