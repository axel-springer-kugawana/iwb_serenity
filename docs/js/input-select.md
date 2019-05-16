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

## Input Group Select

Input select can also be used inside an **input-group** in association with an input--text.

Init the input-select component with the `type` props set to *inputGroupSelect*. Then wrap it inside a div with both class `input-group` and `input-group--select`.

For more informations about the way to build this element, refer to [Forms: Input Group Select section](../css/components/forms.md#input-group-select).

<div class="sd-example">
    <Example-InputSelectGroup></Example-InputSelectGroup>
</div>

```html
<label class="field__label" id="inputSelectExampleLabelIdGroup" for="inputSelectExampleIdGroup">Group Input Select:</label>
<div class="input-group input-group--select input-group--select--large">
    <serenityInputSelect
        id="inputSelectExampleIdGroup"
        inputLabelId="inputSelectExampleLabelIdGroup"
        type="inputGroupSelect"
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
    <div class="input-group__main input-group--select__main">
        <input type="text" class="input-group--select__input" placeholder="Enter a city, a postal code..." />
        <div class="input-group--select__submit">
            <button id="searchBoxSubmitButtonDesktop" type="submit" class="button button--primary">Search</button>
        </div>
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
    value: {
        type: String,
        required: false,
        default: ""
    },
    inputLabelId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false,
        default: "inputSelectDefault"
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

    A string representing the current option (if it match the value key of one of the options).

* *type*:

    *default: inputSelectDefault*

    A string use to define the type of the input select:

        * *inputSelectDefault*: Default input select, display a standalone input.
        * *inputGroupSelect*: Display a input select intended to be associated with a text input inside a group.

* *mobileBreakpoint*:

    *default: min-width: 992px*

    A string representing a *mediaquery*, use has a breakpoint by the component to define when the custom JS is display (or the mobile version).

* *maxHeight*:

    *default: 300*

    A number use to define the max-height of the "select list". (Use to define the position of the box)
