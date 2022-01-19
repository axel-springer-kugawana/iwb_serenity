<template>
    <form
        id="app"
        class="container"
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
            :hide-password-label="`Hide password`"
        />

        <iw-password
            v-model="passwordInModal"
            name="login-password"
            :label="`Password field in a modal`"
            :show-password-label="`Show password`"
            :hide-password-label="`Hide password`"
            :in-modal="true"
        />

        <iw-password
            v-model="passwordWithError"
            name="login-password"
            :label="`Password with an error`"
            :show-password-label="`Show password`"
            :hide-password-label="`Hide password`"
            error="I’m an error message."
        />
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
            passwordWithError: "123",
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
