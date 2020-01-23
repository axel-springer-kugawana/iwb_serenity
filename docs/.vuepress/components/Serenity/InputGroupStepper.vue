
<template>
    <div
        class="input-group input-group--stepper"
        :class="{'focused' : groupFocused}">
        <button
            type="button"
            class="input-group--stepper__button input-group--stepper__button--prepend"
            :aria-label="`${groupLabel} decrease`"
            :disabled="decreaseButtonDisable"
            @click="decreaseValue">
            -
        </button>
        <input
            type="number"
            class="input-group__main input-group--stepper__main input-group__main--prepend input-group__main--append input--text"
            placeholder="0"
            :aria-label="`${groupLabel}`"
            v-model.number="internalValue"
            aria-live="assertive"
            aria-atomic="true"
            inputmode="numeric"
            pattern="[0-9]*"
            :id="inputMainId"
            :min="setMinValue"
            :max="setMaxValue"
            :step="step"
            @focus="onFocus"
            @blur="onBlur"
        >
        <button
            type="button"
            class="input-group--stepper__button input-group--stepper__button--append"
            :aria-label="`${groupLabel} increase`"
            :disabled="increaseButtonDisable"
            @click="increaseValue">
            +
        </button>
    </div>
</template>
<script>

export default {
    props: {
        groupLabel: {
            type: String,
            required: true
        },
        inputMainId: {
            type: String,
            default: ""
        },
        step: {
            type: Number,
            default: 1
        },
        value: {
            type: Number,
            default: 0
        },
        minValue: {
            type: Number,
            default: null
        },
        maxValue: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            groupFocused: false,
            options: {
                currency: "",
                currencyPosition: "suffix",
                precision: 2,
                separator: " ",
                min: 0,
                max: 999999999
            },
            internalValue: this.value,
        }
    },
    computed: {
        decreaseButtonDisable: function() {
            if(this.min !== null) {
                if (this.internalValue !== null) {
                    return this.internalValue <= this.setMinValue;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },
        increaseButtonDisable: function() {
            if(this.max !== null) {
                return this.internalValue >= this.setMaxValue;
            } else {
                return false;
            }
        },
        setMinValue: function() {
            var minValue = this.minValue;
            if(minValue === null) {
                minValue = this.options.min;
            }
            return minValue;
        },
        setMaxValue: function() {
            var maxValue = this.maxValue;
            if(maxValue === null) {
                maxValue = this.options.max;
            }
            return maxValue;
        }
    },
    methods: {
        onFocus: function() {
            this.groupFocused = true;
        },
        onBlur: function() {
            this.groupFocused = false;
            var value = this.internalValue;
            this.internalValue = this.validateValue(value);
        },
        decreaseValue: function() {
            if(!this.decreaseButtonDisable) {
                var value = this.internalValue - this.step;
                this.internalValue = this.validateValue(value);
            }
        },
        increaseValue: function() {
            console.log("increaseValue - Test");
            if(!this.increaseButtonDisable) {
                var value = this.internalValue + this.step;
                this.internalValue = this.validateValue(value);
            }
        },
        validateValue: function(value) {
            if(this.setMinValue !== null && value < this.setMinValue) {
                return this.setMinValue;
            } else if(this.setMaxValue !== null && value > this.setMaxValue ) {
                return this.setMaxValue;
            } else {
                return value;
            }
        }
    },
};
</script>
