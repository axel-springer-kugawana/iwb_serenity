<template>
    <div>
        <div class="input--checkbox">
            <input type="checkbox" name="checkboxName01" class="input--checkbox__input" value="value" id="exampleCheckboxId01">
            <label for="exampleCheckboxId01" class="input--checkbox__label">Input Checkbox</label>
        </div>
        <div class="input--checkbox">
            <input type="checkbox" name="checkboxName02" class="input--checkbox__input" value="value" id="exampleCheckboxId02" checked="checked">
            <label for="exampleCheckboxId02" class="input--checkbox__label">Checked Input Checkbox</label>
        </div>
        <div class="input--checkbox">
            <input type="checkbox" name="checkboxName03" class="input--checkbox__input" value="value" id="exampleCheckboxId03">
            <label for="exampleCheckboxId03" class="input--checkbox__label">Indeterminate Input Checkbox</label>
        </div>
        <div class="input--checkbox input--error">
            <input type="checkbox" name="checkboxName04" class="input--checkbox__input" value="value" id="exampleCheckboxId04" aria-labelledby="exampleInputCheckbox01ErrorId exampleInputCheckbox04LabelId" aria-invalid="true">
            <label id="exampleInputCheckbox04LabelId" for="exampleCheckboxId04" class="input--checkbox__label">Error Input Checkbox</label>
        </div>
        <p id="exampleInputCheckbox01ErrorId" class="field__message--error">Error message for input checkbox</p>
    </div>
</template>

<script>

export default {
    mounted: function() {
        var exampleCheckboxId03 = document.getElementById("exampleCheckboxId03");
        exampleCheckboxId03.indeterminate = true;
    },
}
</script>