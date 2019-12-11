<template>
    <div>
        <label class="field__label" id="inputSelectSmallExampleLabelId" for="inputSelectSmallExampleId">Small Input Select:</label>
        <serenityInputSelect
            :small="true"
            id="inputSelectSmallExampleId"
            inputLabelId="inputSelectSmallExampleLabelId"
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
</template>

<script>
import serenityInputSelect from '../Serenity/InputSelect.vue';

export default {
    components: {
        serenityInputSelect
    }
}
</script>