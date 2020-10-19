<template>
    <div>
        <div class="field">
            <label class="field__label" id="inputSelectDisabledExampleLabelId" for="inputSelectDisabledExampleId">Disabled Input Select:</label>
            <serenityInputSelect
                :disabled="true"
                id="inputSelectDisabledExampleId"
                inputLabelId="inputSelectDisabledExampleLabelId"
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
        </div>

        <div class="field">
            <label class="field__label" id="inputSelectReadonlyExampleLabelId" for="inputSelectReadonlyExampleId">Readonly Input Select:</label>
            <serenityInputSelect
                :readonly="true"
                id="inputSelectReadonlyExampleId"
                inputLabelId="inputSelectReadonlyExampleLabelId"
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