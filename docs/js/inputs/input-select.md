# Input Select

Input select is a Vue.js component acting like a default HTML `<select>` input, but with some specific feature (options styling, etc).

The input select component can be used has a [standalone component](#standalone-select) or inside an [input group select](#input-group-select) in association with an input--text.

:::tip Note
With mobile first approach in mind, the Input Select displays a native `<select>` on screen of width below 992px (This value can be overwrited by specifying the mobileBreakpoint props), then It display the custom serenity version.
:::

## Standalone Select

Standard standalone input-select.

<div class="sd-example">
    <Example-InputSelect></Example-InputSelect>
</div>

```html
<label class="field__label" id="inputSelectExampleLabelId" for="inputSelectExampleId">Default Input Select:</label>
<serenityInputSelect
    id="inputSelectExampleId"
    inputLabelId="inputSelectExampleLabelId"
    :options="[
        {'value': 'select-value-01', 'label': 'Jenny'},
        {'value': 'select-value-02', 'label': 'Boby'},
        {'value': 'select-value-03', 'label': 'Bob'},
        {'value': 'select-value-04', 'label': 'John'},
        {'value': 'select-value-05', 'label': 'Jean', 'disabled': true},
        {'value': 'select-value-06', 'label': 'Robert'},
        {'value': 'select-value-07', 'label': 'Marie'},
        {'value': 'select-value-08', 'label': 'Marc'},
        {'value': 'select-value-09', 'label': 'Julie'}
    ]"
></serenityInputSelect>
```

:::tip Note
Note that an option with a `disabled` key set to true will not be selectable.
:::

### Standalone Select with Grouping Options

Standard standalone input-select with Grouping Options. If `value` key of an entry of `options` props is an array, it will display an options group.

Only one level of grouping is possible.

<div class="sd-example">
    <Example-InputSelectGroupingOptions></Example-InputSelectGroupingOptions>
</div>

```html
<label class="field__label" id="inputSelectGroupingOptionsExampleLabelId" for="inputSelectGroupingOptionsExampleId">Default Input Select:</label>
<serenityInputSelect
    id="inputSelectGroupingOptionsExampleId"
    inputLabelId="inputSelectGroupingOptionsExampleLabelId"
    :options="[
        {
            'value': [
                {'value': 'select-value-01', 'label': 'Jenny'},
                {'value': 'select-value-02', 'label': 'Boby'},
                {'value': 'select-value-03', 'label': 'Bob'},
                {'value': 'select-value-04', 'label': 'John'},
                {'value': 'select-value-05', 'label': 'Robert'},
            ],
            'label': 'Main name'
        },
        {
            'value': [
                {'value': 'select-value-06', 'label': 'Marie'},
                {'value': 'select-value-07', 'label': 'Marie Micheline'},
                {'value': 'select-value-08', 'label': 'Marc'},
                {'value': 'select-value-09', 'label': 'Julie'},
            ],
            'label': 'Secondary name'
        }
    ]"
></serenityInputSelect>
```

### Disabled and readonly

Select can be set to disabled or readonly, by using the boolean props (disabled/readonly).

:::tip Note
Note that an `readonly` cannot be apply to native input select, in concequence the `readonly` mobile version of input select is equivalent to `disabled`.
:::

<div class="sd-example">
    <Example-InputSelectDisabled></Example-InputSelectDisabled>
</div>

```html
<div class="sd-example">
    <div class="field">
        <serenityInputSelect
            :disabled="true"
            id="inputSelectDisabledExampleId"
            inputLabelId="inputSelectDisabledExampleLabelId"
            :options="[...]"
        ></serenityInputSelect>
    </div>
    <div class="field">
        <serenityInputSelect
            :readonly="true"
            id="inputSelectReadonlyExampleId"
            inputLabelId="inputSelectReadonlyExampleLabelId"
            :options="[...]"
        ></serenityInputSelect>
    </div>
</div>
```

## Select size

Serenity provides a boolean prop (small) for small input select.

<div class="sd-example">
    <Example-InputSelectSmall></Example-InputSelectSmall>
</div>

```html
<label class="field__label" id="inputSelectSmallExampleLabelId" for="inputSelectSmallExampleId">Small Input Select:</label>
<serenityInputSelect
    :small="true"
    id="inputSelectSmallExampleId"
    inputLabelId="inputSelectSmallExampleLabelId"
    :options="[
        {'value': 'select-value-01', 'label': 'Jenny'},
        {'value': 'select-value-02', 'label': 'Boby'},
        {'value': 'select-value-03', 'label': 'Bob'},
        {'value': 'select-value-04', 'label': 'John'},
        {'value': 'select-value-05', 'label': 'Jean', 'disabled': true},
        {'value': 'select-value-06', 'label': 'Robert'},
        {'value': 'select-value-07', 'label': 'Marie'},
        {'value': 'select-value-08', 'label': 'Marc'},
        {'value': 'select-value-09', 'label': 'Julie'}
    ]"
></serenityInputSelect>
```

## Error messages

Select can be marked as invalid by setting the prop `invalid` (boolean)  to true. This prop will display the select with a red border, and mark it as invalid.

Keep in mind that you should probably use this in combination with recommendation for [field error messages](../../css/components/forms.md#error-messages). To link the select with the error message, use the prop `inputErrorLabelId`(string), refering to the error message id.

<div class="sd-example">
    <Example-InputSelectError></Example-InputSelectError>
</div>


```html
<div class="sd-example">
    <div class="field">
        <label class="field__label--error" id="inputSelectErrorLabelId" for="inputSelectErrorExampleId">Input Select With Errors:</label>
        <serenityInputSelect
            :invalid="true"
            inputErrorLabelId="inputSelectErrorMessageId"
            id="inputSelectErrorExampleId"
            inputLabelId="inputSelectErrorLabelId"
            :options="[
                {'value': 'select-value-01', 'label': 'Jenny'},
                {'value': 'select-value-02', 'label': 'Boby'},
                {'value': 'select-value-03', 'label': 'Bob'},
                {'value': 'select-value-04', 'label': 'John'},
                {'value': 'select-value-05', 'label': 'Jean', 'disabled': true},
                {'value': 'select-value-06', 'label': 'Robert'},
                {'value': 'select-value-07', 'label': 'Marie'},
                {'value': 'select-value-08', 'label': 'Marc'},
                {'value': 'select-value-09', 'label': 'Julie'}
            ]"
        ></serenityInputSelect>
        <p id="inputSelectErrorMessageId" class="field__message--error">Error message for select</p>
    </div>
</div>
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
    inputLabelId: {
        type: String,
        required: true
    },
    value: {
        type: [String, Number],
        required: false,
        default: ""
    },
    mobileBreakpoint: {
        type: String,
        required: false,
        default: "min-width: 992px"
    },
    maxHeight: {
        type: Number,
        required: false,
        default: 300
    },
    required: {
        type: Boolean,
        required: false,
        default: false
    },
    small: {
        type: Boolean,
        required: false,
        default: false
    },
    invalid: {
        type: Boolean,
        required: false,
        default: false
    },
    inputErrorLabelId: {
        type: String,
        required: false,
        default: ""
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    },
    readonly: {
        type: Boolean,
        required: false,
        default: false
    }
}
```

### Required props:

* *id*:

    A string used has base for various id inside the component.

* *options*:

    An array of object containing a *value* and a *label* keys, where *value*, is the data that will be send to the form and *label* the value display to the user.

* *inputLabelId*:

    A string use has an id for the input label (Use by `aria-labbeledby` attribute for accessibility purpose).

### Optional props:

* *value*:

    A string or number representing the current option (if it match the value key of one of the options).

* *mobileBreakpoint*:

    *default: min-width: 992px*

    A string representing a *mediaquery*, use has a breakpoint by the component to define when the custom JS is display (or the mobile version).

* *maxHeight*:

    *default: 320*

    A number use to define the max-height of the "select list". (Use to define the position of the box)

* *required*:

    *default: false*

    A boolean that define if the element is required or not.

* *small*:

    *default: false*

    A boolean that define if the element is small or not.

* *invalid*:

    *default: false*

    A boolean that define if the element is invalid or not.

* inputErrorLabelId:

    A string use refering to the id of the error message (Use by `aria-labbeledby` attribute for accessibility purpose).

* *disabled*:

    *default: false*

    A boolean that define if the element is disabled or not.

* *readonly*:

    *default: false*

    A boolean that define if the element is readonly or not.