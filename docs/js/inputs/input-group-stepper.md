# Input Group Stepper

Input group stepper is a Vue.js component acting like a default HTML `<input type="number">`, but with action buttons to in/decrease the value, and with the management of a range for the accepted value.

The input group stepper component can be used as a [standalone component](#standalone-input-group-stepper), or as a from-to input group for example.

## Standalone Input Group Stepper

Standard standalone input group stepper.

<div class="sd-example">
    <Example-InputGroupStepper></Example-InputGroupStepper>
</div>

```html
<label class="field__label" id="inputGroupStepperExampleLabelId" for="inputGroupStepperExampleLabelId">Default Input Group Stepper:</label>
<serenityInputGroupStepper
    inputMainId="inputGroupStepperExampleLabelId"
    groupLabel="Label of input group stepper"
    :minValue="0"
    :maxValue="100">
</serenityInputGroupStepper>
```

## Props

```json
 {
     groupLabel: {
        type: String,
        required: true
    },
    inputMainId: {
        type: String,
        default: ""
    },
    step: {
        type: Number,
        default: 1
    },
    value: {
        type: Number,
        default: 0
    },
    minValue: {
        type: Number,
        default: null
    },
    maxValue: {
        type: Number,
        default: null
    }
}
```

### Required props:

* *groupLabel*:

    A string used as label for accessibility.

### Optional props:

* *inputMainId*:

    A string used as base for various id inside the component.

* *step*:
    
    *default: 1*

    A number used to add to or subtract from the value of the input.

* *value*:

    *default: 0*
    
    A number used to set the started value of the input.
   
   
* *minValue*:

    *default: null*

    A number use to define the accepted minimum value.

* *maxValue*:

    *default: null*

    A number use to define the accepted maximum value.
