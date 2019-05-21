<template>
    <div>
        <label class="field__label" id="inputSelectGroupingOptionsExampleLabelId" for="inputSelectGroupingOptionsExampleId">Input Select with Grouping Options:</label>
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
                },
                {
                    'value': [
                        {'value': 'select-value-10', 'label': 'Blaise'},
                        {'value': 'select-value-11', 'label': 'Hector'},
                        {'value': 'select-value-12', 'label': 'Jean'},
                        {'value': 'select-value-13', 'label': 'Antoine'},
                    ],
                    'label': 'Third name'
                }
            ]"
        ></serenityInputSelect>
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