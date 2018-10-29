<template>
    <div>
        <div
            class="input--select--desktop"
            v-if="displayDesktopInput"
            v-on-clickaway="closeList"
            @blur="closeList"
        >
            <button
                type="button"
                class="input--select__toggle"
                role="combobox"
                aria-haspopup="listbox"
                :id="id"
                :aria-owns="`${id}-list`"
                :aria-expanded="listOpen ? 'true' : 'false'"
                :aria-controls="`${id}-list`"
                :aria-activedescendant="`${id}-item-${currentPosition}`"
                :aria-labelledby="`${inputLabelId} ${id}-item-${currentPosition}`"
                @keydown.up="handleKeyUp"
                @keydown.down="handleKeyDown"
                @keydown.tab="handleKeyTab"
                @keydown.esc="closeList"
                @click="toggleList">
                <span class="input--select__toggle-label">
                    {{ currentOptionLabel }}
                </span>
            </button>
            <ul
                class="input--select__list"
                role="listbox"
                v-show="listOpen"
                :id="`${id}-list`"
                @keydown.esc="closeList"
            >
                <li
                    v-for="(option, index) in options"
                    role="option"
                    class="input--select__option"
                    :class="{' active': internalValue === option.value }"
                    :aria-selected="(internalValue === option.value) ? 'true' : false"
                    :key="`option-${index}`"
                    :id="`${id}-item-${index}`"
                    :data-value="option.value"
                    @click="selectOption"
                    @mouseover="preSelectOption">
                    {{ option.label }}
                </li>
            </ul>
        </div>
        <select
            class="input--select input--select--mobile"
            v-model="internalValue"
            @change="updateMobileValue">
            <option
                v-for="(option, index) in options"
                :key="`option-${index}`"
                :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
    name: "InputSelect",
    mixins: [clickaway],
    props: {
        id: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            default: ""
        },
        inputLabelId: {
            type: String,
            default: ""
        },
        mobileBreakpoint: {
            type: String,
            default: "min-width: 768px"
        }
    },
    data() {
        return {
            internalValue: this.value,
            listOpen: false,
            groupFocused: false,
            currentOptionLabel: "",
            currentPosition: 0,
            preSelectPosition: 0,
            displayDesktopInput: false,
        };
    },
    watch: {
        value: function(newValue) {
            // If value is not a visible one reset it to first value of list else update the options list
            const position = this.getObjectIndexByKey(this.options, "value", newValue);
            if(position === -1) {
                this.updateCurrentOption(0);
            } else {
                this.updateCurrentOption(position);
            }
        },
        options: {
            immediate: true,
            handler(newValues) {
                // If value is not a visible one reset it to first value of list else update the options list
                const position = this.getObjectIndexByKey(newValues, "value", this.internalValue);
                if(position === -1) {
                    this.updateCurrentOption(0);
                    this.$emit("update-value", this.internalValue);
                } else {
                    this.updateCurrentOption(position);
                }
            }
        }
    },
    mounted: function() {
        import('enquire.js').then(enquire => {
            // Responsive Behavior
            /* istanbul ignore next */
            enquire.register(
                "screen and (" + this.mobileBreakpoint + ")",
                {
                    match: () => {
                        this.displayDesktopInput = true;
                    },
                    unmatch: () => {
                        this.displayDesktopInput = false;
                    }
                }
            );
        });
    },
    methods: {
        /**
         * [toggleList Open / Close the options list based on current status]
         */
        toggleList: function() {
            if (this.listOpen === true) {
                this.closeList();
            } else {
                this.openList();
            }
        },
        /**
         * [openList Open the options list]
         */
        openList: function() {
            this.listOpen = true;
        },
        /**
         * [closeList Close the options list]
         */
        closeList: function() {
            if(this.listOpen === true) {
                this.listOpen = false;
                // Each time the list is closed, emit the value to parent
                this.$emit("update-value", this.internalValue);
            }
        },
        /**
         * [selectOption Select an option (generaly on click)]
         * @param  {object} event [Native Dom Evenet]
         */
        selectOption: function(event) {
            const value = event.target.dataset.value;
            const position = this.getObjectIndexByKey(this.options, "value", value);

            this.updateCurrentOption(position);

            this.closeList();
        },
        /**
         * [preSelectOption Preselect an option (generaly on hover)]
         * @param  {object} event [Native Dom Evenet]
         */
        preSelectOption: function(event) {
            const value = event.target.dataset.value;
            const position = this.getObjectIndexByKey(this.options, "value", value);

            this.preSelectPosition = position;
        },
        /**
         * [handleKeyUp Select the above node in the options list (if there is one)]
         * @param  {object} event [Native Dom Event]
         */
        handleKeyUp: function(event) {
            event.preventDefault();

            if(this.listOpen === false) {
                this.openList();
            }

            if (this.currentPosition > 0) {
                this.currentPosition = this.currentPosition - 1;
                this.updateCurrentOption(this.currentPosition);
            }
        },
        /**
         * [handleKeyDown Select the below node in the options list (if there is one)]
         * @param  {object} event [Native Dom Event]
         */
        handleKeyDown: function(event) {
            event.preventDefault();


            if(this.listOpen === false) {
                this.openList();
            }

            if (this.currentPosition < this.options.length - 1) {
                this.currentPosition = this.currentPosition + 1;
                this.updateCurrentOption(this.currentPosition);
            }
        },
        /**
         * [handleKeyTab On key tab pressed, select the current "hovered" options (preSelectPosition).
         * Keep in mind that preSelectPosition is reseted to position each time the key up/down are pressed]
         * @param  {object} event [Native Dom Event]
         */
        handleKeyTab: function(event) {
            if (this.listOpen === true) {
                event.preventDefault();

                this.closeList();
                this.updateCurrentOption(this.preSelectPosition);
            }
        },
        /**
         * [updateCurrentOption Update the current select option (based on the position in options list)]
         * @param  {int} position [Position of the item to select]
         */
        updateCurrentOption: function (position) {
            // Reset Preselect position
            this.preSelectPosition = position;
            // Define current position
            this.currentPosition = position;
            // Update select label and value
            let label = this.options[position].label;

            this.currentOptionLabel = label;
            this.internalValue = this.options[position].value;
        },
        /**
         * [updateMobileValue On input mobile change, emit the value with custom event update-value]
         */
        updateMobileValue: function () {
            // Each time the list is closed, emit the value to parent
            this.$emit("update-value", this.internalValue);

            // Update Desktop Input Current Option (in case of breakpoint change)
            const position = this.getObjectIndexByKey(this.options, "value", this.internalValue);

            if (position > -1) {
                this.updateCurrentOption(position);
            }
        },
        getObjectIndexByKey: function (array, key, value) {
            const object = array.filter(item => {
                return item[key] === value;
            })[0];
            return array.indexOf(object);
        }
    },
};
</script>