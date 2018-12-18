<template>
    <div>
        <label class="field__label" id="inputSelectExampleLabelIdGroup" for="inputSelectExampleIdGroup">Group Input Select:</label>
        <div class="input-group input-group--select">
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
    </div>
</template>

<script>
import serenityInputSelect from '../Serenity/InputSelect.vue';

export default {
    components: {
        serenityInputSelect
    }
}
</script>