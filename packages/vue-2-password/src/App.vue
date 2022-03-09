<template>
    <form
        id="app"
        class="container"
        method="post"
        @submit.prevent
    >
        <label for="user">
            Username:
            <input
                type="text"
                id="user"
                autocomplete="username"
            >
        </label>

        <iw-password
            v-model="password"
            name="login-password"
            :label="`Password`"
            :show-password-label="`Show password`"
            :password-shown-text="`Password is shown`"
            :password-hidden-text="`Password is hidden`"
        />

        <iw-password
            v-model="passwordInModal"
            name="login-password"
            :label="`Password field in a modal`"
            :show-password-label="`Show password`"
            :password-shown-text="`Password is shown`"
            :password-hidden-text="`Password is hidden`"
            :in-modal="true"
        />

        <iw-password
            v-model="passwordWithError"
            name="login-password"
            :label="`Password with an error`"
            :show-password-label="`Show password`"
            :password-shown-text="`Password is shown`"
            :password-hidden-text="`Password is hidden`"
            error="I’m an error message."
        />

        <button class="button button--primary">Submit</button>
    </form>
</template>

<script lang="ts">
import Vue from "vue";

// import Password from "./components/Password.vue";
import Password from "./components/Password-ts.vue";

export default Vue.extend({
    name: "App",
    components: {
        iwPassword: Password,
    },

    data: function() {
        return {
            password: "",
            passwordInModal: "",
            passwordWithError: "",
        };
    },
});
</script>

<style lang="scss">
$public-path: '/public';

@import "iwb_serenity/src/scss/serenity";
@import "components/password";

#app {
    min-height: 100%;

    display: flex;
    gap: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
