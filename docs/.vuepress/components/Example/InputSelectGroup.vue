<template>
    <div>
        <label class="field__label" id="inputSelectExampleLabelIdGroup" for="inputSelectExampleIdGroup">Group Input Select:</label>
        <div class="input-group input-group--select">
            <serenityInputSelect
                id="inputSelectExampleIdGroup"
                inputLabelId="inputSelectExampleLabelIdGroup"
                type="inputGroupSelect"
                :options="[
                    {'value': 'select-value-01', 'label': 'Jenny'},
                    {'value': 'select-value-02', 'label': 'Boby'},
                    {'value': 'select-value-03', 'label': 'Bob'},
                    {'value': 'select-value-04', 'label': 'John'},
                    {'value': 'select-value-05', 'label': 'Robert'},
                    {'value': 'select-value-06', 'label': 'Marie'},
                    {'value': 'select-value-07', 'label': 'Marc'},
                    {'value': 'select-value-08', 'label': 'Julie'},
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