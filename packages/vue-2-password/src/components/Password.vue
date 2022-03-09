<!--
    IDs for Autocomplete attribute:
    https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete-current-password
-->
<template>
    <div class="field">
        <label
            :for="id"
            :class="error ? 'field__label--error' : 'field__label'"
            :id="`label-${id}`"
        >
            {{ label }}
        </label>
        <div class="password">
            <input
                :type="type"
                autocomplete="current-password"
                class="input--text"
                :class="{
                    'input--error' : error,
                    'input--modal' : inModal,
                }"
                :id="id"
                :name="name"
                :aria-labelledby="`label-${id} ${error ? `label-error-${id}` : ''}`"
                :aria-invalid="!!error"
                @input="handleInput"
                @change="handleChange"
            >
            <button
                type="button"
                class="password__btn button button--transparent button--text"
                :class="{ 'password__btn--hidden': empty }"
                :id="`show-login-password-${id}`"
                :aria-pressed="revealed"
                @click="toggle"
            >
                <span class="sr-only">{{ showPasswordLabel }}</span>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                >
                    <path
                        v-if="!revealed"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-3-5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"
                    />
                    <path
                        v-else
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        transform="translate(0 0.5)"
                        d="M2.71 4.54a.996.996 0 010-1.41c.39-.39 1.03-.39 1.42 0l16.31 16.33a.996.996 0 11-1.41 1.41l-2.72-2.72c-1.34.52-2.79.82-4.31.82-5 0-9.27-3.11-11-7.5.77-1.97 2.06-3.67 3.68-4.96L2.71 4.54zM17 11.47c0-2.76-2.24-5-5-5-.51 0-1 .1-1.47.24L8.36 4.54c1.15-.37 2.37-.57 3.64-.57 5 0 9.27 3.11 11 7.49-.69 1.76-1.79 3.3-3.18 4.53l-3.06-3.06c.14-.46.24-.95.24-1.46zm-5 5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07l1.57 1.57c-.65.32-1.37.5-2.14.5zm2.97-5.33a2.97 2.97 0 00-2.64-2.64l2.64 2.64z"
                    />
                </svg>
            </button>
            <span class="sr-only" aria-live="polite">{{ stateText }}</span>
        </div>
        <p
            v-if="error"
            class="field__message--error"
            :id="`label-error-${id}`"
        >
            {{ error }}
        </p>
    </div>
</template>
<script>
import { nanoid } from "nanoid";

export default {
    props: {
        // value received by parent `v-model`
        value: {
            type: String,
            required: true,
            default: ""
        },

        label: {
            type: String,
            required: true,
        },

        showPasswordLabel: {
            type: String,
            required: true,
        },

        passwordHiddenText: {
            type: String,
            required: true,
        },

        passwordShownText: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: false,
            default: "password"
        },

        error: {
            type: String,
            required: false,
            default: "",
        },

        inModal: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    data: function() {
        return {
            id: nanoid(6),
            type: "password",
            empty: true,
        };
    },

    computed: {
        revealed: function() {
            return this.type == "text";
        },

        stateText: function() {
            return this.revealed ? this.passwordShownText : this.passwordHiddenText;
        },
    },

    methods: {
        toggle: function() {
            this.type = this.revealed ? "password" : "text";
        },

        /**
         * Count the characters as the user is typing and decide when to
         * hide/show errors or the revealer button.
         */
        handleInput: function(e) {
            this.empty = !e.target.value.length;

            // reset type to password when becoming empty and revealed
            if (this.empty && this.revealed) {
                this.toggle();
            }
        },

        /**
         * On field blur (`change` event), we send an input event, allowing
         * the parent component to use `v-model`.
         */
        handleChange: function(e) {
            this.$emit("input", e.target.value);
        },
    }
};
</script>
