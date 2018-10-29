<template>
    <div>
        <serenityInputSelect
            id="inputSelectExampleId"
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