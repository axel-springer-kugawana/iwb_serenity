<template>
    <div>
        <template v-if="type === 'inputSelectDefault'">
            <div
                class="input--select input--select--desktop"
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
                    :class="`input--select__list--${prefferedOpenDirection}`"
                    role="listbox"
                    v-show="listOpen"
                    :id="`${id}-list`"
                    :style="{ maxHeight: optimizedHeight + 'px' }"
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
                :aria-labelledby="inputLabelId"
                @change="updateMobileValue">
                <option
                    v-for="(option, index) in options"
                    :key="`option-${index}`"
                    :value="option.value">
                    {{ option.label }}
                </option>
            </select>
        </template>
        <template v-else-if="type === 'inputGroupSelect'">
            <div
                class="input--select input--select--ingroup input--select--desktop"
                v-if="displayDesktopInput"
                v-on-clickaway="closeList"
                @blur="closeList"
            >
                <button
                    type="button"
                    class="input-group--select__button input-group--select__button--prepend"
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
                    class="input--select__list input-group--select__list"
                    :class="`input--select__list--${prefferedOpenDirection}`"
                    role="listbox"
                    v-show="listOpen"
                    :id="`${id}-list`"
                    :style="{ maxHeight: optimizedHeight + 'px' }"
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
        </template>
    </div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";
import enquire from "enquire.js";

// Register breakpoint
// Use for enquire.js
const breakpoints = {
    small: 576,
    medium: 768,
    desktop: 992,
    widescreen: 1200
};

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
            type: [String, Number],
            default: ""
        },
        inputLabelId: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: "inputSelectDefault"
        },
        maxHeight: {
            type: Number,
            required: false,
            default: 300
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
            optimizedHeight: this.maxHeight,
            prefferedOpenDirection: "below"
        };
    },
    watch: {
        value: function(newValue) {
            // If value is not a visible one reset it to first value of list else update the options list
            const position = this.getObjetIndexByKey(this.options, "value", newValue);
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
                const position = this.getObjetIndexByKey(newValues, "value", this.internalValue);
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
        // Responsive Behavior
        /* istanbul ignore next */
        enquire.register(
            "screen and (min-width:" + breakpoints.medium + "px)",
            {
                match: () => {
                    this.displayDesktopInput = true;
                },
                unmatch: () => {
                    this.displayDesktopInput = false;
                }
            }
        );
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
            this.adjustPosition();
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
            const position = this.getObjetIndexByKey(this.options, "value", value);

            this.updateCurrentOption(position);

            this.closeList();
        },
        /**
         * [preSelectOption Preselect an option (generaly on hover)]
         * @param  {object} event [Native Dom Evenet]
         */
        preSelectOption: function(event) {
            const value = event.target.dataset.value;
            const position = this.getObjetIndexByKey(this.options, "value", value);

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
            if(this.type === "inputGroupSelect" && label.length > 10) {
                label = this.truncate(label, 11, "...");
            }
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
            const position = this.getObjetIndexByKey(this.options, "value", this.internalValue);

            if (position > -1) {
                this.updateCurrentOption(position);
            }
        },
        /**
         * [adjustPosition On opening define if the list should open below or above the inputSelect]
         */
        adjustPosition () {
            if (typeof window === "undefined") return;

            const spaceAbove = this.$el.getBoundingClientRect().top;
            const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;

            const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;

            if (hasEnoughSpaceBelow || spaceBelow > spaceAbove) {
                this.prefferedOpenDirection = "below";
                this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
            } else {
                this.prefferedOpenDirection = "above";
                this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
            }
        },
        /**
         * [getObjetIndexByKey Return the index of the first object that contain a key equal to a value in an array]
         * @param  {array} array [An array of objects]
         * @param  {string} key   [The key to test]
         * @param  {string} value [The value to test]
         * @return {int}       [The indexOf the first object matching the filter]
         */
        getObjetIndexByKey (array, key, value) {
            const object = array.filter(item => {
                return item[key] === value;
            })[0];
            return array.indexOf(object);
        }
    },
};
</script>