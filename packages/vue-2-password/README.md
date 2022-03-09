# Password

A password field as a form of a Vue 2 component for [Serenity](https://github.com/axel-springer-kugawana/iwb_serenity) ([Immoweb](https://immoweb.be)’s design system).

It includes a password reveal button.

## Table of contents

- [Summary usage](#summary-usage)
- [Installation](#installation)
- [Props](#props)
	- [`v-model`](#v-model-string)
	- [`name`](#name-string)
    - [`autocomplete`](#autocomplete-string)
	- [`label`](#label-string)
	- [`show-password-label`](#show-password-label-string-and-hide-password-label-string)
	- [`hide-password-label`](#show-password-label-string-and-hide-password-label-string)
	- [`in-modal`](#in-modal-boolean)
	- [`error`](#error-string)
- [Events](#events)
- [Accessibility](#accessibility)
- Various
	- [Changelog](#changelog)
	- [Development](#development)
	- [License](#license)

## Summary usage

In a Vue component:

```vue
<template>
    <form>
        <!-- fields, buttons… -->

        <iw-password
            v-model="password"
            name="login-password"
            label="Password"
            show-password-label="Show password"
            password-shown-text="Password is shown"
            password-hidden-text="Password is hidden"
        />

    </form>
</template>

<script>
import Vue from "vue";
import iwPassword from "iwb-serenity-password-vue-2";

export default Vue.extend({
    data: function() {
        return {
            password: "", // bound to component with `v-model`
        };
    },
});
</script>
```

Additionally, you can check the [demo app](src/App.vue).

## Installation

This component works in project including:

- [Vue 2](https://vuejs.org/v2/guide) (**for other versions of Vue, see [`iwb-serenity-password`](https://github.com/axel-springer-kugawana/iwb_serenity/packages/vue-password)**)
- [Serenity 2](https://github.com/axel-springer-kugawana/iwb_serenity/tree/b1925e087647ff8b95ce548fe77c5957dedfafa4), for the base CSS used by this package styles.

1. Run this command in your terminal:

```sh
npm install iwb-serenity-password-vue-2
```

2. Register the component in the `<script>` part of a Vue component:

```js
import Vue from "vue";
import iwPassword from "iwb-serenity-password-vue-2";

export default Vue.extend({
    components: {
        iwPassword: Password, // register <iw-password>
    },
});
```

3. Add the styles after an import of Serenity:

```scss
$public-path: "/public";

@import "iwb_serenity/src/scss/serenity";
@import "iwb-serenity-password-vue-2"; // this import the styles
```

⚠️ Projects bundled with [Vite](https://vitejs.dev) should use `@import "iwb-serenity-password-vue-2/scss";` (because Vite doesn’t seem to handle `sass` nor `style` fields in libraries `package.json`).

## Props

The attributes accepted by the component.

- Mandatory: `v-model`, `name`, `label`, `show-password-label`, `hide-password-label`.
- Optional: `in-modal`, `error`.

### `v-model` (string)

Learn [more about `v-model` in Vue’s documentation](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components).

### `name` (?string)

The [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-name) parameter in `<input type="password" name="this-value">`. It defaults to `password`.

### `autocomplete` (?string)

The [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-autocomplete) parameter in `<input type="password" autocomplete="this-value">`. It defaults to [`current-password`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete-current-password), as it’s the most common use case. For a new password or a password change, [`new-password`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete-new-password) is recommended.

### `label` (string)

The displayed label of the field.

### `show-password-label` (string)

The label of the password revealer button.

### `password-hidden-text` (string) and `password-shown-text` (string)

The text announced by screen readers when the password isn’t revealed (`password-hidden-text`) or revealed (`password-shown-text`).

### `in-modal` (?boolean)

Default value: `false`.

When set to `true`, changes the field background from white to [`primary-blue-llll`](https://github.com/axel-springer-kugawana/iwb_serenity/blob/ce117a3091f92193011d93679e5e0e69d0656130/src/scss/utils/_variables.scss#L31).

### `error` (?string)

Default value: an empty string.

When non-empty, an error message associated to the password field.

## Events

You don’t need to listen to any event (`@input="someAction"`) when using `v-model`.

If you still need to listent to its unique event (`input`), be aware that the component only emits it when its internal `<input type="password">` element fires the native `change` event.

Typically, this happens on `blur`, when the field loses its `focus`. The component doesn’t fire an event for each key the user types.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Development

1. Clone the repository:

```sh
git clone git@github.com:axel-springer-kugawana/iwb_serenity.git
```

2. Go to this folder:

```sh
cd iwb_serenity/packages/vue-2-password
```

3. Install dependencies:

```sh
npm install
```

4. You can help preview your changes made in `/src`  by running the demo app:

```sh
npm run serve
```

You can also test the local version of the package in a local app by using the [`npm link` feature](https://docs.npmjs.com/cli/v8/commands/npm-link), as described in the [instructions](https://github.com/axel-springer-kugawana/iwb_serenity#test-serenity-in-your-website-whitout-release) in the root repository documentation.

Be aware that it may not work for testing the styles, and that the project that will use the local version of the package will need to update its symlinks configuration. When using `vue-cli`, in `config.vue.js`:

```js
module.exports = {
    // many things…

    // add this:
    configureWebpack: {
        /**
         * Fix double Vue (or other packages) import when developing and
         * locally testing a component (using `npm link`) meant to be
         * packaged. A warning was printed in the browser console:
         *
         * `[Vue warn]: Invalid VNode type: Symbol(Comment)`
         *
         * https://github.com/vuejs/core/issues/2064#issuecomment-797365133
         */
        resolve: {
            symlinks: false,
            alias: {
                vue: path.resolve('./node_modules/vue')
            },
        },
    },
}
```

5. Ignore TypeScript errors

Though the component can be consumed by an app using TypeScript, it throws a type error while developing. We have chosen to not use [_class components_](https://class-component.vuejs.org/), which is the only way to have Vue 2 packages fully compliant with TypeScript. As a workaround, the entry point still is a TypeScript file (`src/index.ts`) and contains a compatible component declaration.

For reference, this is the type error you can ignore:

`ERROR in …/iwb_serenity/packages/vue-2-password/src/index.ts(8,7):
8:7 Type '{ props: { value: { type: StringConstructor; required: boolean; default: string; }; label: { type: StringConstructor; required: boolean; }; showPasswordLabel: { ...; }; hidePasswordLabel: { ...; }; name: { ...; }; error: { ...; }; inModal: { ...; }; }; data: () => any; computed: { ...; }; methods: { ...; }; }' is missing the following properties from type 'VueConstructor<Vue>': extend, nextTick, set, delete, and 10 more.`

6. (to be documented: add tests)

7. Submit your changes by [opening a pull request](https://github.com/axel-springer-kugawana/iwb_serenity/pulls).

## License

The _iwb-serenity-password-vue-2_ package is open-sourced software licensed under the [MIT license](LICENSE).
