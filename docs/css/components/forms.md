# Forms

## Field

A field is the grouping of a `label` and an `input`. Enclose those within a div with the class `field`.

<div class="sd-example">
    <div class="field">
        <label for="exampleInputId00" class="field__label">Field Label</label>
        <input id="exampleInputId00" class="input--text" value="text goes here">
    </div>
</div>

```html
<div class="field">
    <label for="exampleInputId00" class="field__label">Field Label in group</label>
    <input id="exampleInputId00" class="input--text" value="text goes here">
</div>
```

## Field Group

Field group can be used to group multiple fields inside a group. A field group is a container with the `field-group` class. A field group can contain a `title`, a `description` and an `annotation-text`.

A field label inside a `field-group` should use the `field__label--ingroup` class.

<div class="sd-example">
    <div class="field-group">
        <h5 class="field__title">Field Group Title</h5>
        <p class="field__description">Field Group description</p>
        <div class="field">
            <label for="exampleInputId01" class="field__label--ingroup">Field label in group</label>
            <input id="exampleInputId01" class="input--text" value="text goes here">
            <p class="field__annotation-text">Annotation text to provide extra information about an input or a field.</p>
        </div>
        <div class="field">
            <label for="exampleInputId02" class="field__label--ingroup">Field label in group</label>
            <input id="exampleInputId02" class="input--text" value="text goes here">
        </div>
    </div>
</div>

```html
<div class="field-group">
    <h5 class="field__title">Field Group Title</h5>
    <p class="field__description">Field Group description</p>
    <div class="field">
        <label for="exampleInputId01" class="field__label--ingroup">Field label in group</label>
        <input id="exampleInputId01" class="input--text" value="text goes here">
        <p class="field__annotation-text">Annotation text to provide extra information about an input or a field.</p>
    </div>
    <div class="field">
        <label for="exampleInputId02" class="field__label--ingroup">Field label in group</label>
        <input id="exampleInputId02" class="input--text" value="text goes here">
    </div>
</div>
```

## Field row

By default, each field will be displayed on each line. To display two fields side by side, use the `field-row` class on the enclosing div and the `field-row__item` class on each field.

For a more complex layout (3+ columns) or different layout per breakpoint, use the [grid](/css/layout/grid.html) instead.

<div class="sd-example">
    <div class="field-row">
        <div class="field-row__item">
            <label for="exampleInputId03" class="field__label">Label goes here</label>
            <input id="exampleInputId03" class="input--text" value="text goes here">
        </div>
        <div class="field-row__item">
            <label for="exampleInputId04" class="field__label">Label goes here</label>
            <input id="exampleInputId04" class="input--text" value="text goes here">
        </div>
    </div>
</div>

```html
<div class="field-row">
    <div class="field-row__item">
        <label for="exampleInputId03" class="field__label">Label goes here</label>
        <input id="exampleInputId03" class="input--text" value="text goes here">
    </div>
    <div class="field-row__item">
        <label for="exampleInputId04" class="field__label">Label goes here</label>
        <input id="exampleInputId04" class="input--text" value="text goes here">
    </div>
</div>
```

## Error messages

Fields can contain error messages (e.g. to show validation errors related to the input value). Add the class `field__label--error` to the label of the field and the class `input--error` to the field. Declare a tag containing these messages with the `field__error` class. Link the error tag and the input with an `aria-labbelledby` refering to the error tag id. Don't forget to add `aria-invalid="true"` on the input. The error message is prefixed by a "danger"-type icon.

<div class="sd-example">
    <div class="field">
        <label id="exampleInput05LabelId" for="exampleInputId05" class="field__label--error">Label of the Input</label>
        <input id="exampleInputId05" class="input--text input--error" value="" aria-labelledby="exampleInput05LabelId exampleInput05ErrorId" aria-invalid="true">
        <p id="exampleInput05ErrorId" class="field__message--error">Error message for input</p>
    </div>
</div>

```html
<div class="field">
    <label id="exampleInput05LabelId" for="exampleInputId05" class="field__label--error">Label of the Input</label>
    <input id="exampleInputId05" class="input--text input--error" value="" aria-labelledby="exampleInput05LabelId exampleInput05ErrorId" aria-invalid="true">
    <p id="exampleInput05ErrorId" class="field__message--error">Error message for input</p>
</div>
```

## Warning messages

Fields can contain warning messages (e.g. to show validation warning related to the input value). Declare a tag containing these messages with the `field__warning` class. Link the warning tag and the input with an `aria-labbelledby` refering to the warning tag id. Don't forget to add `aria-invalid="true"` on the input. The warning message is prefixed by a "exclamation"-type icon.

<div class="sd-example">
    <div class="field">
        <label id="exampleInput06LabelId" for="exampleInputId06" class="field__label">Label of the Input</label>
        <input id="exampleInputId06" class="input--text input--warning" value="" aria-labelledby="exampleInput06LabelId exampleInput06WarningId">
        <p id="exampleInput06WarningId" class="field__message--warning">Warning message for input</p>
    </div>
</div>

```html
<div class="field">
    <label id="exampleInput06LabelId" for="exampleInputId06" class="field__label">Label of the Input</label>
    <input id="exampleInputId06" class="input--text" value="" aria-labelledby="exampleInput06LabelId exampleInput06WarningId">
    <p id="exampleInput06WarningId" class="field__message--warning">Warning message for input</p>
</div>
```

## Success messages

Fields can contain success messages (e.g. to show well right format value encoded related to the input value). Declare a tag containing these messages with the `field__success` class. Link the info tag and the input with an `aria-labbelledby` refering to the info tag id. Don't forget to add `aria-invalid="true"` on the input. The success message is prefixed by a "ok"-type icon.

<div class="sd-example">
    <div class="field">
        <label id="exampleInput08LabelId" for="exampleInputId08" class="field__label">Label of the Input</label>
        <input id="exampleInputId08" class="input--text" value="" aria-labelledby="exampleInput08LabelId exampleInput08SuccessId">
        <p id="exampleInput08SuccessId" class="field__message--success">Success message for input</p>
    </div>
</div>

```html
<div class="field">
    <div class="field">
        <label id="exampleInput08LabelId" for="exampleInputId08" class="field__label">Label of the Input</label>
        <input id="exampleInputId08" class="input--text" value="" aria-labelledby="exampleInput08LabelId exampleInput08SuccessId">
        <p id="exampleInput08SuccessId" class="field__message--success">Success message for input</p>
    </div>
</div>
```

## Info messages

Fields can contain info messages (e.g. to show waiting format value related to the input value). Declare a tag containing these messages with the `field__info` class. Link the info tag and the input with an `aria-labbelledby` refering to the info tag id. Don't forget to add `aria-invalid="true"` on the input. The info message is prefixed by a "info"-type icon.

<div class="sd-example">
    <div class="field">
        <label id="exampleInput07LabelId" for="exampleInputId07" class="field__label">Label of the Input</label>
        <input id="exampleInputId07" class="input--text" value="" aria-labelledby="exampleInput07LabelId exampleInput07InfoId">
        <p id="exampleInput07InfoId" class="field__message--info">Info message for input</p>
    </div>
</div>

```html
<div class="field">
    <label id="exampleInput07LabelId" for="exampleInputId07" class="field__label">Label of the Input</label>
    <input id="exampleInputId07" class="input--text" value="" aria-labelledby="exampleInput07LabelId exampleInput07InfoId">
    <p id="exampleInput07InfoId" class="field__message--info">Info message for input</p>
</div>
```

## Optional Field Label

A field `label` can be notified as optional by adding an extra `span` with a `field__label--optional` class inside the `label`.

<div class="sd-example">
    <div class="field">
        <label for="exampleInputLabelOptional00" class="field__label">Field Label <span class="field__label--optional">(optional)</span></label>
        <input id="exampleInputLabelOptional00" class="input--text" value="text goes here">
    </div>
</div>

```html
<div class="field">
    <label for="exampleInputLabelOptional00" class="field__label">Field Label <span class="field__label--optional">(optional)</span></label>
    <input id="exampleInputLabelOptional00" class="input--text" value="text goes here">
</div>
```

## Extra Field Label

A field `label` can be enhanced with an extra `span` with a `field__label--extra` class inside the `label` to provide extra information.

<div class="sd-example">
    <div class="field">
        <label for="exampleInputLabelExtra00" class="field__label">Field Label <span class="field__label--extra">(extra information)</span></label>
        <input id="exampleInputLabelExtra00" class="input--text" value="text goes here">
    </div>
</div>

```html
<div class="field">
    <label for="exampleInputLabelExtra00" class="field__label">Field Label <span class="field__label--extra">(extra information)</span></label>
    <input id="exampleInputLabelExtra00" class="input--text" value="text goes here">
</div>
```

## Inputs

### Text

Declare text inputs with the `input--text` class.

<div class="sd-example">
    <div class="field">
        <input class="input--text" value="text goes here">
    </div>
</div>

```html
<input class="input--text" value="text goes here">
```

An input-text can also be set has `readonly` or `disabled`.

<div class="sd-example">
    <div class="field">
        <input class="input--text" readonly value="Readonly input">
    </div>
    <div class="field">
        <input class="input--text" disabled value="Disabled input">
    </div>
</div>

```html
<input class="input--text" readonly value="Readonly input">
<input class="input--text" disabled value="Disabled input">
```

### Text area

Declare text area inputs with the `input--textarea` class.

<div class="sd-example">
    <div class="field">
        <textarea class="input--textarea">Text goes here</textarea>
    </div>
</div>

```html
<textarea class="input--textarea">Text goes here</textarea>
```

An input-text can also be set has `readonly` or `disabled`.

<div class="sd-example">
    <div class="field">
        <textarea class="input--textarea" readonly>Readonly textarea</textarea>
    </div>
    <div class="field">
        <textarea class="input--textarea" disabled>Disabled textarea</textarea>
    </div>
</div>

```html
<textarea class="input--textarea" readonly>Readonly textarea</textarea>
<textarea class="input--textarea" disabled>Disabled textarea</textarea>
```

### Radio

Enclose radio inputs within a container with the `input--radio` class. Then give the `input--radio__label` class to the label and the `input--radio__input` class to the input itself.

<div class="sd-example">
    <div class="input--radio">
        <input id="exampleRadioId01" type="radio" value="01" name="inputRadioBox01" class="input--radio__input">
        <label for="exampleRadioId01" class="input--radio__label">Input radio</label>
    </div>
    <div class="input--radio">
        <input id="exampleRadioId02" type="radio" value="01" name="inputRadioBox02" class="input--radio__input" disabled="disabled">
        <label for="exampleRadioId02" class="input--radio__label">Disabled Input radio</label>
    </div>
</div>

```html
<div class="input--radio">
    <input id="exampleRadioId01" type="radio" value="01" name="inputRadioBox01" class="input--radio__input">
    <label for="exampleRadioId01" class="input--radio__label">Input radio</label>
</div>
<div class="input--radio">
    <input id="exampleRadioId02" type="radio" value="01" name="inputRadioBox02" class="input--radio__input" disabled="disabled">
    <label for="exampleRadioId02" class="input--radio__label">Disabled Input radio</label>
</div>

```

#### Radio group

Enclose multiple input--radio inside a `field` containter with the `role="group"` and a valid `aria-labelledby` attribute to indicate to assistive technologies that these input are part of the same group.

<div class="sd-example">
    <div class="field" role="group" aria-labelledby="exampleRadioGroupId01">
        <label id="exampleRadioGroupId01" class="field__label">Field radios</label>
        <div class="input--radio">
            <input type="radio" value="01" name="inputRadioBox" class="input--radio__input" id="exampleRadioId03">
            <label for="exampleRadioId03" class="input--radio__label">Input radio</label>
        </div>
        <div class="input--radio">
            <input type="radio" value="02" name="inputRadioBox" class="input--radio__input" id="exampleRadioId04">
            <label for="exampleRadioId04" class="input--radio__label">Input radio</label>
        </div>
        <div class="input--radio">
            <input type="radio" value="03" name="inputRadioBox" class="input--radio__input" disabled="disabled" id="exampleRadioId05">
            <label for="exampleRadioId05" class="input--radio__label">Disabled Input radio</label>
        </div>
    </div>
</div>

```html
<div class="field" role="group" aria-labelledby="exampleRadioGroupId01">
    <label id="exampleRadioGroupId01" class="field__label">Field radios</label>
    <div class="input--radio">
        <input type="radio" value="01" name="inputRadioBox" class="input--radio__input" id="exampleRadioId03">
        <label for="exampleRadioId03" class="input--radio__label">Input radio</label>
    </div>
    <div class="input--radio">
        <input type="radio" value="02" name="inputRadioBox" class="input--radio__input" id="exampleRadioId04">
        <label for="exampleRadioId04" class="input--radio__label">Input radio</label>
    </div>
    <div class="input--radio">
        <input type="radio" value="03" name="inputRadioBox" class="input--radio__input" disabled="disabled" id="exampleRadioId05">
        <label for="exampleRadioId05" class="input--radio__label">Disabled Input radio</label>
    </div>
</div>
```

Input radio group can contain error messages (e.g. to show validation errors related to check of the input radio group). Add the class `input-error` to the container of the input itself. Declare a tag containing these messages with the `field__error` class. Link the error tag and the input with an `aria-labbelledby` refering to the error tag id. Don't forget to add `aria-invalid="true"` on the input. The error message is prefixed by a "danger"-type icon.

<div class="sd-example">
    <div class="field" role="group" aria-labelledby="exampleRadioGroupId02">
        <label id="exampleRadioGroupId02" class="field__label--error">Field radios with error</label>
        <div class="input--radio input--error">
            <input type="radio" value="03" name="inputRadioBoxError" class="input--radio__input" id="exampleRadioId06" aria-labelledby="exampleInputRadio01ErrorId exampleInput0Radio4LabelId" aria-invalid="true">
            <label id="exampleInput0Radio6LabelId" for="exampleRadioId06" class="input--radio__label">Input radio</label>
        </div>
        <div class="input--radio input--error">
            <input type="radio" value="04" name="inputRadioBoxError" class="input--radio__input" id="exampleRadioId07" aria-labelledby="exampleInputRadio01ErrorId exampleInput0Radio5LabelId" aria-invalid="true">
            <label id="exampleInput0Radio7LabelId" for="exampleRadioId07" class="input--radio__label">Input radio</label>
        </div>
        <p id="exampleInputRadio01ErrorId" class="field__message--error">Error message for input radio</p>
    </div>
</div>

```html
<div class="field" role="group" aria-labelledby="exampleRadioGroupId02">
    <label id="exampleRadioGroupId02" class="field__label--error">Field radios with error</label>
    <div class="input--radio input--error">
        <input type="radio" value="03" name="inputRadioBoxError" class="input--radio__input" id="exampleRadioId06" aria-labelledby="exampleInputRadio01ErrorId exampleInput0Radio4LabelId" aria-invalid="true">
        <label id="exampleInput0Radio6LabelId" for="exampleRadioId06" class="input--radio__label">Input radio</label>
    </div>
    <div class="input--radio input--error">
        <input type="radio" value="04" name="inputRadioBoxError" class="input--radio__input" id="exampleRadioId07" aria-labelledby="exampleInputRadio01ErrorId exampleInput0Radio5LabelId" aria-invalid="true">
        <label id="exampleInput0Radio7LabelId" for="exampleRadioId07" class="input--radio__label">Input radio</label>
    </div>
    <p id="exampleInputRadio01ErrorId" class="field__error">Error message for input radio</p>
</div>
```

By default input--radio fields inside a group are stacked. If you want to display them inline, you can enclose them inside a `field--ingroup--inline` class.

Then use a `field__label--ingroup--inline`class on the label and a `input--radio--inline` class (in addition to `input--radio`) on each input.

<div class="sd-example">
    <div role="group" aria-labelledby="exampleRadioGroupId002" class="field--ingroup--inline">
        <label id="exampleRadioGroupId002" class="field__label--ingroup--inline">Input radio group inline</label>
        <div class="input--ingroup--inline">
            <div class="input--radio input--radio--inline">
                <input type="radio" value="true" name="radioName" class="input--radio__input" id="exampleRadioId08">
                <label for="exampleRadioId08" class="input--radio__label">Input radio inline</label>
            </div>
            <div class="input--radio input--radio--inline">
                <input type="radio" value="false" name="radioName" class="input--radio__input" id="exampleRadioId09">
                <label for="exampleRadioId09" class="input--radio__label">Input radio inline</label>
            </div>
            <div class="input--radio input--radio--inline">
                <input type="radio" value="skip" name="radioName" class="input--radio__input" id="exampleRadioId10">
                <label for="exampleRadioId10" class="input--radio__label">Input radio inline</label>
            </div>
        </div>
    </div>
</div>

```html
<div role="group" aria-labelledby="exampleRadioGroupId002" class="field--ingroup--inline">
    <label id="exampleRadioGroupId002" class="field__label--ingroup--inline">Input radio group inline</label>
    <div class="input--ingroup--inline">
        <div class="input--radio input--radio--inline">
            <input type="radio" value="true" name="radioName" class="input--radio__input" id="exampleRadioId08">
            <label for="exampleRadioId08" class="input--radio__label">Input radio inline</label>
        </div>
        <div class="input--radio input--radio--inline">
            <input type="radio" value="false" name="radioName" class="input--radio__input" id="exampleRadioId09">
            <label for="exampleRadioId09" class="input--radio__label">Input radio inline</label>
        </div>
        <div class="input--radio input--radio--inline">
            <input type="radio" value="skip" name="radioName" class="input--radio__input" id="exampleRadioId10">
            <label for="exampleRadioId10" class="input--radio__label">Input radio inline</label>
        </div>
    </div>
</div>
```

### Checkbox

Enclose checkbox inputs within a container with the `input--checkbox` class. Then give the `input--checkbox__label` class to the label and the `input--checkbox__input` class to the input itself.

An input checkbox can be checked adding the attribute `checked="checked"`to the input.

An input checkbox can be set has indeterminate, but it's impossible to do it with an html attribute. To do so, you need to set the element with Javascript.


```js
inputInstance.indeterminate = true;
```

[See more about Indeterminate checkbox on Mozzila Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)

<div class="sd-example">
    <Example-InputCheckbox></Example-InputCheckbox>
</div>

```html
<div class="input--checkbox">
    <input type="checkbox" name="checkboxName01" class="input--checkbox__input" value="value" id="exampleCheckboxId01">
    <label for="exampleCheckboxId01" class="input--checkbox__label">Input Checkbox</label>
</div>
<div class="input--checkbox">
    <input type="checkbox" name="checkboxName02" class="input--checkbox__input" value="value" id="exampleCheckboxId02" checked="checked">
    <label for="exampleCheckboxId02" class="input--checkbox__label">Checked Input Checkbox</label>
</div>
<div class="input--checkbox">
    <input type="checkbox" name="checkboxName03" class="input--checkbox__input" value="value" disabled="disabled" id="exampleCheckboxId03">
    <label for="exampleCheckboxId03" class="input--checkbox__label">Disabled Input Checkbox</label>
</div>
<div class="input--checkbox">
    <input type="checkbox" name="checkboxName04" class="input--checkbox__input" value="value" id="exampleCheckboxId04">
    <label for="exampleCheckboxId04" class="input--checkbox__label">Indeterminate Input Checkbox</label>
</div>
```

Input checkbox can contain error messages (e.g. to show validation errors related to check of the input checkbox group). Add the class `input-error` to the container of the input itself. Declare a tag containing these messages with the `field__error` class. Link the error tag and the input with an `aria-labbelledby` refering to the error tag id. Don't forget to add `aria-invalid="true"` on the input. The error message is prefixed by a "danger"-type icon.

<div class="sd-example">
    <div class="field" aria-labelledby="exampleCheckboxLabelId04">
    <label id="exampleCheckboxLabelId05" class="field__label--error">Field checkbox with error</label>
       <div class="input--checkbox input--error">
           <input type="checkbox" name="checkboxName05" class="input--checkbox__input" value="value" id="exampleCheckboxId05" aria-labelledby="exampleInputCheckbox01ErrorId exampleCheckboxId04" aria-invalid="true">
           <label for="exampleCheckboxId05" class="input--checkbox__label">Error Input Checkbox</label>
       </div>
       <p id="exampleInputCheckbox01ErrorId" class="field__message--error">Error message for input checkbox</p>
    </div>
</div>

```html
<div class="field" aria-labelledby="exampleCheckboxId">
    <label id="exampleCheckboxId" class="field__label--error">Field checkbox with error</label>
   <div class="input--checkbox input--error">
       <input type="checkbox" name="checkboxName05" class="input--checkbox__input" value="value" id="exampleCheckboxId05"  aria-labelledby="exampleInputCheckbox01ErrorId exampleCheckboxId05" aria-invalid="true">
       <label for="exampleCheckboxId05" class="input--checkbox__label">Error Input Checkbox</label>
   </div>
   <p id="exampleInputCheckbox01ErrorId" class="field__message--error">Error message for input checkbox</p>
</div>
```

### Input Switch

The _switch_ is a checkbox looking like a _toggle_. It comes with the following features:
- can be wrapped in `<label class="switch-label">`, which provides minimal vertical alignment;
- two sizes: the default is the “Big” one, and `.switch--small` is the small one;
- customizable space around the switch checkbox, using classes and custom properties;
- optional icons near the toggle;
- support for [checkboxes with an `indeterminate` state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes), `disabled` and `aria-disabled`;
- a “waiting” state (`.switch--waiting`), showing small bouncing dots;
- motion.

::: warning
> This replaces the previous `.input--switch` component. Though it’s a breaking change, it was not used in any app. If you’ve used it in the past, you can replicate the same behaviour with the following replacement.
:::

#### Switch without label nor icons

The `.switch__checkbox` element is the one shaping the visual toggle.

The default size is _Big_ and the small one requires the `.switch--small` class.

<div class="sd-example">
    <div class="switch">
        <input type="checkbox" class="switch__input">
        <span class="switch__checkbox"></span>
    </div>
</div>

<div class="sd-example">
    <div class="switch switch--small">
        <input type="checkbox" class="switch__input">
        <span class="switch__checkbox"></span>
    </div>
</div>

```html
<!-- Default size -->
<div class="switch">
    <input type="checkbox" class="switch__input">
    <span class="switch__checkbox"></span>
</div>

<!-- Small size -->
<div class="switch switch--small">  <!-- 👈  CSS class -->
    <input type="checkbox" class="switch__input">
    <span class="switch__checkbox"></span>
</div>
```

#### Switch label and space around the switch

The same in a label (`.switch-label`). This class only helps with vertical alignment.

<div class="sd-example">
    <label for="exampleSwitchMinimal" class="switch-label">
        I’m the label and there’s no space before the checkbox.
        <div class="switch switch--small">
            <input type="checkbox" class="switch__input" id="exampleSwitchMinimal">
            <span class="switch__checkbox"></span>
        </div>
    </label>
</div>

```html
<label for="exampleSwitchMinimalSmall" class="switch-label">
    I’m the label and there’s no space before the checkbox.
    <div class="switch switch--small">
        <input type="checkbox" class="switch__input" id="exampleSwitchMinimalSmall">
        <span class="switch__checkbox"></span>
    </div>
</label>
```

The previous example lacks of space around the checkbox, which can be solved using `.switch--margin-right` or `.switch--margin-left` to set a default margin (8px). To customize the space between the switch and its label, use the following custom properties: `--switch-margin-right` and `--switch-margin-left`.

<div class="sd-example">
    <label for="exampleSwitchMinimalNoSpace" class="switch-label">
        <div class="switch">
            <input type="checkbox" class="switch__input" id="exampleSwitchMinimalNoSpace">
            <span class="switch__checkbox"></span>
        </div>
        <span>I’m a label and there’s <strong>no space before the checkbox</strong></span>.
    </label>
    <Example-InputSwitch :icons="false" switch-position="left">
        <span>I’m a label on the left with <strong>default space</strong> on the right.</span>
    </Example-InputSwitch>
    <Example-InputSwitch :icons="false" switch-position="left" style="--switch-margin-right: 3rem;">
        <span>I’m a label on the left with <strong>custom space</strong> on the right.</span>
    </Example-InputSwitch>
</div>

```html
<!-- No space -->
<label for="exampleSwitchMinimalNoSpace" class="switch-label">
    <div class="switch">
        <input type="checkbox" class="switch__input" id="exampleSwitchMinimalNoSpace">
        <span class="switch__checkbox"></span>
    </div>
    <span>I’m a label and there’s <strong>no space before the checkbox</strong></span>.
</label>

<!-- Default space -->
<label for="exampleSwitchWithDefaultSpace" class="switch-label">
    <div class="switch switch--margin-right"> <!-- 👈  CSS class -->
        <input type="checkbox" class="switch__input" id="exampleSwitchWithDefaultSpace">
        <span class="switch__checkbox"></span>
    </div>
    <span>I’m a label on the left with <strong>default space</strong> on the right.</span>
</label>

<!-- Custom space -->
<label for="exampleSwitchWithCustomSpace" class="switch-label">
    <div class="switch" style="--switch-margin-left: 3rem;"> <!-- 👈  CSS custom property -->
        <input type="checkbox" class="switch__input" id="exampleSwitchWithCustomSpace">
        <span class="switch__checkbox"></span>
    </div>
    <span>I’m a label on the left with <strong>custom space</strong> on the right.</span>
</label>
```

In the previous examples, the label is after the `.switch`. To accomplish that, change the HTML order.

#### Switch icons and waiting state

With icons and bouncing dots (you won’t see them bouncing here):

<div class="sd-example">
    <Example-InputSwitch/>
</div>

```html
<label for="exampleSwitchWithMostFeatures" class="switch-label">
    I’m a label
    <div class="switch switch--margin-right">
        <input type="checkbox" class="switch__input" id="exampleSwitchWithMostFeatures">
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
```

To put the switch in a waiting state:
- use the `switch--waiting` class;
- add `aria-disabled="true"` (or `disabled`);
- use JavaScript to set `element.indeterminate` to true;
- make sure the HTML contains the `.switch__bouncing-dots` element in the visual checkbox.

Once the waiting state is over, reverse the 3 first step.

<div class="sd-example">
    <Example-InputSwitch
        :icons="false"
        :indeterminate="true"
        :disabled="true"
        :waiting="true"
    />
</div>

```html
<label for="exampleSwitchIdWaiting" class="switch-label">
    I’m a label
    <div class="switch switch--margin-right switch--waiting"> <!-- 👈  CSS class -->
        <input type="checkbox" disabled class="switch__input" id="exampleSwitchIdWaiting">
        <span class="switch__checkbox">
            <span class="switch__bouncing-dots">
                <span class="switch__bouncing-dot"></span>
            </span>
        </span>
    </div>
</label>
```

#### Indeterminate switch

A switch can be in an indeterminate state without being disabled or in a waiting state:

<div class="sd-example">
    <Example-InputSwitch :indeterminate="true" :small="true" />
</div>

```html
<label for="exampleSwitchIndeterminate" class="switch-label">
    I’m a label
    <div class="switch switch--small switch--margin-right">
        <input type="checkbox" class="switch__input" id="exampleSwitchIndeterminate">
        <span class="switch__checkbox"></span>
    </div>
</label>
```

#### Disabled switch

And finally, a disabled unchecked switch:


<div class="sd-example">
    <Example-InputSwitch :disabled="true"/>
</div>

```html

<label for="exampleSwitchDisabled" class="switch-label">
    I’m a label
    <div class="switch switch--margin-right">
        <!-- `disabled` attribute 👇 -->
        <input type="checkbox" disabled class="switch__input" id="exampleSwitchDisabled">
        <span class="switch__checkbox"></span>
    </div>
</label>
```

If for some reason you can’t access the HTML (when the switch is a framework component, for example) and you don’t want the icons, you can still use the `switch--no-icons` CSS class.

## Input Group

Input Group are a group of two (or more) components (input or not) inside one main element.

### Input Group Prepend

Input Group Prepend, allow you to add a text block before an `input--text`.

<div class="sd-example">
    <div class="field">
        <label id="inputGroupPrependLabel" for="inputGroupPrependExample" class="field__label">Input Group Label</label>
        <div class="input-group input-group--prepend">
            <input id="inputGroupPrependExample" name="inputGroupPrependName" type="text" placeholder="Placeholder" aria-labelledby="inputGroupPrependLabel inputGroupPrependPrefix" class="input-group__main--prepend input--text">
            <div id="inputGroupPrependPrefix" class="input-group__prepend">
                <abbr title="Belgium" class="input-group__abbr">Be</abbr>
            </div>
         </div>
    </div>
</div>

```html
<div class="field">
    <label id="inputGroupPrependLabel" for="inputGroupPrependExample" class="field__label">Input Group Label</label>
    <div class="input-group input-group--prepend">
        <input id="inputGroupPrependExample" name="inputGroupPrependName" type="text" placeholder="Placeholder" aria-labelledby="inputGroupPrependLabel inputGroupPrependPrefix" class="input-group__main--prepend input--text">
        <div id="inputGroupPrependPrefix" class="input-group__prepend">
            <abbr title="Belgium" class="input-group__abbr">Be</abbr>
        </div>
     </div>
</div>
```

### Input Group Append

Input Group Append, allow you to add a text block after an `input--text`.

<div class="sd-example">
    <div class="field">
        <label for="inputGroupApendExample" id="inputGroupApendLabel" class="field__label">Input Group Append</label>
        <div class="input-group input-group--append">
            <input id="inputGroupApendExample" name="inputGroupApendName" type="text" placeholder="Placeholder" aria-labelledby="inputGroupApendLabel inputGroupAppendSuffix" class="input-group__main--append input--text">
            <div id="inputGroupAppendSuffix" class="input-group__append">
                <abbr title="Belgium" class="input-group__abbr">Be</abbr>
            </div>
        </div>
    </div>
</div>

```html
<div class="field">
    <label for="inputGroupApendExample" id="inputGroupApendLabel" class="field__label">Input Group Append</label>
    <div class="input-group input-group--append">
        <input id="inputGroupApendExample" name="inputGroupApendName" type="text" placeholder="Placeholder" aria-labelledby="inputGroupApendLabel inputGroupAppendSuffix" class="input-group__main--append input--text">
        <div id="inputGroupAppendSuffix" class="input-group__append">
            <abbr title="Belgium" class="input-group__abbr">Be</abbr>
        </div>
    </div>
</div>
```

## Input modal theme

Input also exists in a "modal" theme variation.

The "modal" theme works better inside a very light blue background component.

<div class="sd-example">
    <div class="field">
        <label for="exampleInputId09" class="field__label">Field Label</label>
        <input id="exampleInputId09" class="input--text input--modal" value="text goes here">
    </div>
</div>

```html
<div class="field">
    <label for="exampleInputId09" class="field__label">Field Label in group</label>
    <input id="exampleInputId09" class="input--text input--modal" value="text goes here">
</div>
```
