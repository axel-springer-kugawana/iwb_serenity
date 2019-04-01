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

Field group can be used to group multiple fields inside a group. A field group is a container with the `field-group` class. A field group can contain a `title` and a `description`.

A field label inside a `field-group` should use the `field__label--ingroup` class.

<div class="sd-example">
    <div class="field-group">
        <h2 class="field__title">Field Group Title</h2>
        <p class="field__description">Field Group description</p>
        <div class="field">
            <label for="exampleInputId01" class="field__label--ingroup">Field label in group</label>
            <input id="exampleInputId01" class="input--text" value="text goes here">
        </div>
        <div class="field">
            <label for="exampleInputId02" class="field__label--ingroup">Field label in group</label>
            <input id="exampleInputId02" class="input--text" value="text goes here">
        </div>
    </div>
</div>

```html
<div class="field-group">
    <h2 class="field__title">Field Group Title</h2>
    <p class="field__description">Field Group description</p>
    <div class="field">
        <label for="exampleInputId01" class="field__label--ingroup">Field label in group</label>
        <input id="exampleInputId01" class="input--text" value="text goes here">
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

Fields can contain error messages (e.g. to show validation errors related to the input value). Declare a tag containing these messages with the `field__error` class. The error message is prefixed by a "danger"-type icon.

<div class="sd-example">
    <div class="field">
        <label for="exampleInputId05" class="field__label">Label goes here</label>
        <input id="exampleInputId05" class="input--text" value="text goes here">
        <p class="field__error">Error message goes here</p>
    </div>
</div>

```html
<div class="field">
    <label for="exampleInputId05" class="field__label">Label goes here</label>
    <input id="exampleInputId05" class="input--text" value="text goes here">
    <p class="field__error">Error message goes here</p>
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
        <label for="exampleInputLabelExtra00" class="field__label">Field Label <span class="field__label--extra">(extra informations)</span></label>
        <input id="exampleInputLabelExtra00" class="input--text" value="text goes here">
    </div>
</div>

```html
<div class="field">
    <label for="exampleInputLabelOptional00" class="field__label">Field Label <span class="field__label--optional">(optional)</span></label>
    <input id="exampleInputLabelOptional00" class="input--text" value="text goes here">
</div>
```

## Inputs

### Text

Declare text inputs with the `input--text` class.

An input text can be disabled by adding the attribute `disabled="disabled"` to the input.

<div class="sd-example">
    <div class="field">
        <input class="input--text" value="text goes here">
    </div>
    <div class="field">
        <input class="input--text" placeholder="Disabled input" disabled="disabled">
    </div>
</div>

```html
<input class="input--text" value="text goes here">
<input class="input--text" placeholder="Disabled input" disabled="disabled">
```

### Text area

Declare text area inputs with the `input--textarea` class.

A textarea can be disabled by adding the attribute `disabled="disabled"` to the textarea.

<div class="sd-example">
    <div class="field">
        <textarea class="input--textarea">Text goes here</textarea>
    </div>
    <div class="field">
        <textarea class="input--textarea" disabled="disabled">Disabled text area</textarea>
    </div>
</div>

```html
<textarea class="input--textarea">Text goes here</textarea>
<textarea class="input--textarea" disabled="disabled">Disabled text area</textarea>
```

### Radio

Enclose radio inputs within a container with the `input--radio` class. Then give the `input--radio__label` class to the label and the `input--radio__input` class to the input itself.

An input radio can be disabled by adding the attribute `disabled="disabled"` to the input.

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
    <div class="field" role="group" aria-labelledby="exampleRadioGroupId03">
        <label id="exampleRadioGroupId03" class="field__label">Field radios</label>
        <div class="input--radio">
            <input type="radio" value="01" name="inputRadioBox" class="input--radio__input" id="exampleRadioId03">
            <label for="exampleRadioId03" class="input--radio__label">Input radio</label>
        </div>
        <div class="input--radio">
            <input type="radio" value="02" name="inputRadioBox" class="input--radio__input" id="exampleRadioId04">
            <label for="exampleRadioId04" class="input--radio__label">Input radio</label>
        </div>
        <div class="input--radio">
            <input type="radio" value="03" name="inputRadioBox" disabled="disabled" class="input--radio__input" id="exampleRadioId05">
            <label for="exampleRadioId05" class="input--radio__label">Disabled input radio</label>
        </div>
    </div>
</div>

```html
<div class="field" role="group" aria-labelledby="exampleRadioGroupId03">
    <label id="exampleRadioGroupId03" class="field__label">Field radios</label>
    <div class="input--radio">
        <input type="radio" value="01" name="inputRadioBox" class="input--radio__input" id="exampleRadioId03">
        <label for="exampleRadioId03" class="input--radio__label">Input radio</label>
    </div>
    <div class="input--radio">
        <input type="radio" value="02" name="inputRadioBox" class="input--radio__input" id="exampleRadioId04">
        <label for="exampleRadioId04" class="input--radio__label">Input radio</label>
    </div>
    <div class="input--radio">
        <input type="radio" value="03" name="inputRadioBox" disabled="disabled" class="input--radio__input" id="exampleRadioId05">
        <label for="exampleRadioId05" class="input--radio__label">Disabled input radio</label>
    </div>
</div>
```

By default input--radio fields inside a group are stacked. If you want to display them inline, you can enclose them inside a `field--ingroup--inline` class.

Then use a `field__label--ingroup--inline`class on the label and a `input--radio--inline` class (in addition to `input--radio`) on each input.

<div class="sd-example">
    <div role="group" aria-labelledby="exampleRadioGroupId002" class="field--ingroup--inline">
        <label id="exampleRadioGroupId002" class="field__label--ingroup--inline">Input radio group inline</label>
        <div class="input--ingroup--inline">
            <div class="input--radio input--radio--inline">
                <input type="radio" value="true" name="radioName" class="input--radio__input" id="exampleRadioId06">
                <label for="exampleRadioId06" class="input--radio__label">Input radio inline</label>
            </div>
            <div class="input--radio input--radio--inline">
                <input type="radio" value="false" name="radioName" class="input--radio__input" id="exampleRadioId07">
                <label for="exampleRadioId07" class="input--radio__label">Input radio inline</label>
            </div>
            <div class="input--radio input--radio--inline">
                <input type="radio" value="skip" name="radioName" class="input--radio__input" id="exampleRadioId08">
                <label for="exampleRadioId08" class="input--radio__label">Input radio inline</label>
            </div>
        </div>
    </div>
</div>

```html
<div role="group" aria-labelledby="exampleRadioGroupId002" class="field--ingroup--inline">
    <label id="exampleRadioGroupId002" class="field__label--ingroup--inline">Input radio group inline</label>
    <div class="input--ingroup--inline">
        <div class="input--radio input--radio--inline">
            <input type="radio" value="true" name="radioName" class="input--radio__input" id="exampleRadioId06">
            <label for="exampleRadioId06" class="input--radio__label">Input radio inline</label>
        </div>
        <div class="input--radio input--radio--inline">
            <input type="radio" value="false" name="radioName" class="input--radio__input" id="exampleRadioId07">
            <label for="exampleRadioId07" class="input--radio__label">Input radio inline</label>
        </div>
        <div class="input--radio input--radio--inline">
            <input type="radio" value="skip" name="radioName" class="input--radio__input" id="exampleRadioId08">
            <label for="exampleRadioId08" class="input--radio__label">Input radio inline</label>
        </div>
    </div>
</div>
```

### Checkbox

Enclose checkbox inputs within a container with the `input--checkbox` class. Then give the `input--checkbox__label` class to the label and the `input--checkbox__input` class to the input itself.

An input checkbox can be disabled adding the attribute `disabled="disabled"` to the input.

<div class="sd-example">
    <div class="input--checkbox">
        <input type="checkbox" name="checkboxName01" class="input--checkbox__input" value="value" id="exampleCheckboxId01">
        <label for="exampleCheckboxId01" class="input--checkbox__label">Input Checkbox</label>
    </div>
    <div class="input--checkbox">
        <input type="checkbox" name="checkboxName02" class="input--checkbox__input" value="value" disabled="disabled" id="exampleCheckboxId02">
        <label for="exampleCheckboxId02" class="input--checkbox__label">Disabled Input Checkbox</label>
    </div>
</div>

```html
<div class="input--checkbox">
    <input type="checkbox" name="checkboxName01" class="input--checkbox__input" value="value" id="exampleCheckboxId01">
    <label for="exampleCheckboxId01" class="input--checkbox__label">Input Checkbox</label>
</div>
<div class="input--checkbox">
    <input type="checkbox" name="checkboxName02" class="input--checkbox__input" value="value" disabled="disabled" id="exampleCheckboxId02">
    <label for="exampleCheckboxId02" class="input--checkbox__label">Disabled Input Checkbox</label>
</div>
```

### Input Switch

The `input--switch` take 100% of the width of is container, the label is display on the left and the "switch" button on the right.

To display checkbox input as a switch, enclose it within a label with the `input--swicth` class.
Then give the `input--switch__input` class to the input and the `input--switch__label` class to the span containing the label of the input.

An input checkbox can be disabled adding the attribute `disabled="disabled"` to the input.

<div class="sd-example">
    <label for="exampleSwitchId01" class="input--switch">
        <input type="checkbox" name="swicthName01" class="input--switch__input" value="value" id="exampleSwitchId01">
        <span class="input--switch__label">Input Switch Label</span>
    </label>
    <label for="exampleSwitchId02" class="input--switch">
        <input type="checkbox" name="swicthName02" class="input--switch__input" value="value" disabled="disabled" id="exampleSwitchId02">
        <span class="input--switch__label">Disabled Input Switch Label</span>
    </label>
</div>

```html
<label for="exampleSwitchId01" class="input--switch">
    <input type="checkbox" name="swicthName01" class="input--switch__input" value="value" id="exampleSwitchId01">
    <span class="input--switch__label">Input Switch Label</span>
</label>
<label for="exampleSwitchId02" class="input--switch">
    <input type="checkbox" name="swicthName02" class="input--switch__input" value="value" disabled="disabled" id="exampleSwitchId02">
    <span class="input--switch__label">Disabled Input Switch Label</span>
</label>
```

## Input Group

Input Group are a group of two (or more) components (input or not) inside one main element.

### Input Group Prepend

Input Group Prepend, allow you to add a text block before an `input--text`.

<div class="sd-example">
    <div class="field">
        <label id="inputGroupPrependLabel" for="inputGroupPrependExample" class="field__label">Input Group Label</label>
        <div class="input-group">
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
    <div class="input-group">
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
        <div class="input-group">
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
    <div class="input-group">
        <input id="inputGroupApendExample" name="inputGroupApendName" type="text" placeholder="Placeholder" aria-labelledby="inputGroupApendLabel inputGroupAppendSuffix" class="input-group__main--append input--text">
        <div id="inputGroupAppendSuffix" class="input-group__append">
            <abbr title="Belgium" class="input-group__abbr">Be</abbr>
        </div>
    </div>
</div>
```
### Input Group Select

Input group select allow you to mix input-select and other input together, it can be usefull to build a search form or similar element.

The input-group-select is build with a wrapper div with both class `input-group` and `input-group--select`.
This wrapper should contain an input-select component with the `type` props set to *inputGroupSelect* and a div with both class `input-group__main` and `input-group--select__main`.
The `input-group__main` should contain an input with `input-group--select__input`. It can eventualy contain a `input-group--select__submit` div with any button type inside it.


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