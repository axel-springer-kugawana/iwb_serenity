# Input Select

Input select is a Vue.js component acting like a default HTML `<select>` input, but with some specific feature (options styling, etc).

:::tip Note
With mobile first approach in mind, the Input Select displays a native `<select>` on screen of width below 768px (This value can be overwrited by specifying the mobileBreakpoint props), then It display the custom serenity version.
:::

<div class="sd-example">
    <Example-InputSelect></Example-InputSelect>
</div>

```js
<serenityInputSelect
    id="inputSelectExampleId"
    :options="[
        {'value': 'select-value-01', 'label': 'Option 01'},
        {'value': 'select-value-02', 'label': 'Option 02'},
        {'value': 'select-value-03', 'label': 'Option 03'},
        {'value': 'select-value-04', 'label': 'Option 04'},
        {'value': 'select-value-05', 'label': 'Option 05'},
        {'value': 'select-value-06', 'label': 'Option 06'},
        {'value': 'select-value-07', 'label': 'Option 07'},
        {'value': 'select-value-08', 'label': 'Option 08'},
    ]"
></serenityInputSelect>
```

## Props

```json
 {
    id: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    value: {
        type: String,
        default: ""
    },
    inputLabelId: {
        type: String,
        default: ""
    },
    mobileBreakpoint: {
        type: String,
        default: "min-width: 768px"
    }
}
```

### Required props:

* *id*:

    A string used has base for various id inside the component.

* *options*:

    An array of object containing a *value* and a *label* keys, where *value*, is the data that will be send to the form and *label* the value display to the user.

### Optional props:

* *value*:

    A string representing the current option (if it match the value key of one of the options).

* *inputLabelId*:

    A string use has an id for the input label (Use by `aria-labbeledby` attribute for accessibility purpose).

* *mobileBreakpoint*:

    *default: min-width: 768px*

    A string representing a *mediaquery*, use has a breakpoint by the component to define when the custom JS is display (or the mobile version).