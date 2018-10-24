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

Field group can be use to group multiple field inside one group. A field group is a container with the `field-group` class. A field group can contain a `title` and a `description`.

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

Fields can contain error messages (e.g. to show validation error related to the input value). Declare a tag containing those messages with the `field__error` class. The error message is prefixed by a "danger"-type icon.

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

## Inputs

### Text

Declare text inputs with the `input--text` class.

An input text can be disabled adding the attribute `disabled="disabled"` to the input.

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

A textarea can be disabled adding the attribute `disabled="disabled"` to the textarea.

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

An input radio can be disabled adding the attribute `disabled="disabled"` to the input.

<div class="sd-example">
    <div class="input--radio">
        <input id="exampleRadioId01" type="radio" value="01" name="inputRadioBox" class="input--radio__input">
        <label for="exampleRadioId01" class="input--radio__label">Input radio</label>
    </div>
    <div class="input--radio">
        <input id="exampleRadioId02" type="radio" value="01" name="inputRadioBox" class="input--radio__input" disabled="disabled">
        <label for="exampleRadioId02" class="input--radio__label">Disabled Input radio</label>
    </div>
</div>

```html
<div class="input--radio">
    <input id="exampleRadioId01" type="radio" value="01" name="inputRadioBox" class="input--radio__input">
    <label for="exampleRadioId01" class="input--radio__label">Input radio</label>
</div>
<div class="input--radio">
    <input id="exampleRadioId02" type="radio" value="01" name="inputRadioBox" class="input--radio__input" disabled="disabled">
    <label for="exampleRadioId02" class="input--radio__label">Input radio</label>
</div>
```

#### Radio group

Enclose multiple input--radio inside a `field` containter with the `role="group"` and a valid `aria-labelledby` attribute to indicate to assistive technologies that these input are part of the same group.

<div class="sd-example">
    <div class="field" role="group" aria-labelledby="exampleRadioGroupId01">
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
<div class="field" role="group" aria-labelledby="exampleRadioGroupId01">
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

By default input--radio inside a group are stacked. If you want to display them inline, you can enclose them inside a `field--ingroup--inline` class.

Then use a `field__label--ingroup--inline`class on the label and a `input--radio--inline` class (in addition to `input--radio`) on each inputs.

<div class="sd-example">
    <div role="group" aria-labelledby="exampleRadioGroupId002" class="field--ingroup--inline">
        <label id="exampleRadioGroupId002" for="exampleRadioId06" class="field__label--ingroup--inline">Input radio group inline</label>
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
    <label id="exampleRadioGroupId002" for="exampleRadioId06" class="field__label--ingroup--inline">Input radio group inline</label>
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
        <input type="checkbox" name="checkboxName" class="input--checkbox__input" value="value" id="exampleCheckboxId01">
        <label for="exampleCheckboxId01" class="input--checkbox__label">Input Checkbox</label>
    </div>
    <div class="input--checkbox">
        <input type="checkbox" name="checkboxName" class="input--checkbox__input" value="value" disabled="disabled" id="exampleCheckboxId02">
        <label for="exampleCheckboxId02" class="input--checkbox__label">Disabled Input Checkbox</label>
    </div>
</div>

```html
<div class="input--checkbox">
    <input type="checkbox" name="checkboxName" class="input--checkbox__input" value="value" id="exampleCheckboxId01">
    <label for="exampleCheckboxId01" class="input--checkbox__label">Input Checkbox</label>
</div>
<div class="input--checkbox">
    <input type="checkbox" name="checkboxName" class="input--checkbox__input" value="value" disabled="disabled" id="exampleCheckboxId02">
    <label for="exampleCheckboxId02" class="input--checkbox__label">Disabled Input Checkbox</label>
</div>
```

## Input Group

Input Group are a group of two (or more) components (input or not) inside one main element.

### Input Group Prepend

Input Group Prepend, allow you to add a text block before an `input--text`.

<div class="field">
    <label id="inputGroupPrependLabel" for="inputGroupPrependExample" class="field__label">Input Group Label</label>
    <div class="input-group">
        <input id="inputGroupPrependExample" type="text" placeholder="Placeholder" aria-labeledby="inputGroupPrependLabel inputGroupPrependPrefix" class="input-group__main--prepend input--text">
        <div id="inputGroupPrependPrefix" class="input-group__prepend">
            <abbr title="Belgium" class="input-group__abbr">Be</abbr>
        </div>
     </div>
</div>

```html
<div class="field">
    <label id="inputGroupPrependLabel" for="inputGroupPrependExample" class="field__label">Input Group Label</label>
    <div class="input-group">
        <input id="inputGroupPrependExample" type="text" placeholder="Placeholder" aria-labeledby="inputGroupPrependLabel inputGroupPrependPrefix" class="input-group__main--prepend input--text">
        <div id="inputGroupPrependPrefix" class="input-group__prepend">
            <abbr title="Belgium" class="input-group__abbr">Be</abbr>
        </div>
     </div>
</div>
```

### Input Group Append

Input Group Append, allow you to add a text block after an `input--text`.

<div class="field">
    <label for="inputGroupApendExample" id="inputGroupApendLabel" class="field__label">Input Group Append</label>
    <div class="input-group">
        <input id="inputGroupApendExample" type="text" placeholder="Placeholder" aria-labeledby="inputGroupApendLabel inputGroupAppendSuffix" class="input-group__main--append input--text">
        <div id="inputGroupAppendSuffix" class="input-group__append">
            <abbr title="Belgium" class="input-group__abbr">Be</abbr>
        </div>
    </div>
</div>

```html
<div class="field">
    <label for="inputGroupApendExample" id="inputGroupApendLabel" class="field__label">Input Group Append</label>
    <div class="input-group">
        <input id="inputGroupApendExample" type="text" placeholder="Placeholder" aria-labeledby="inputGroupApendLabel inputGroupAppendSuffix" class="input-group__main--append input--text">
        <div id="inputGroupAppendSuffix" class="input-group__append">
            <abbr title="Belgium" class="input-group__abbr">Be</abbr>
        </div>
    </div>
</div>
```