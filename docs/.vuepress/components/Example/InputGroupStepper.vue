<template>
    <div>
        <label class="field__label" id="inputGroupStepperExampleLabelId" for="inputGroupStepperExampleLabelId">Default Input Group Stepper:</label>
        <serenityInputGroupStepper
            inputMainId="inputGroupStepperExampleLabelId"
            groupLabel="Label of input group stepper"
            :minValue="0"
            :maxValue="100"
        ></serenityInputGroupStepper>
    </div>
</template>

<script>
import serenityInputGroupStepper from '../Serenity/InputGroupStepper.vue';

export default {
    components: {
        serenityInputGroupStepper
    }
}
</script>