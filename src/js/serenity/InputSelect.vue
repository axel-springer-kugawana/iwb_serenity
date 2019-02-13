<template>
    <div class="input--select-wrapper">
        <template v-if="type === 'inputSelectDefault'">
            <div
                class="input--select input--select--desktop"
                v-if="displayDesktopInput"
                v-click-outside="closeList"
                @blur="closeList"
            >
                <button
                    class="input--select__toggle"
                    aria-haspopup="listbox"
                    :id="id"
                    :aria-expanded="listOpen ? 'true' : 'false'"
                    :aria-labelledby="`${inputLabelId} ${id}-item-${currentPosition}`"
                    @click="toggleList"
                    @keydown.down="handleKeyDown">
                    <span class="input--select__toggle-label">
                        {{ currentOptionLabel }}
                    </span>
                </button>
                <ul
                    tabindex="0"
                    class="input--select__list"
                    :class="`input--select__list--${prefferedOpenDirection}`"
                    role="listbox"
                    v-show="listOpen"
                    :id="`${id}-list`"
                    :style="{ maxHeight: optimizedHeight + 'px' }"
                    :aria-activedescendant="`${id}-item-${currentPosition}`"
                    @keydown.esc="closeList"
                    @keydown.enter="closeList"
                    @keydown.up="handleKeyUp"
                    @keydown.down="handleKeyDown"
                    @keydown.space.prevent="handleKeyUp"
                    @keydown.tab="handleKeyTab"
                    @keydown.home="handleKeyHome"
                    @keydown.end="handleKeyEnd"
                    @keyup="handleKeyPress"
                >
                    <li
                        v-for="(option, index) in options"
                        role="option"
                        class="input--select__option"
                        :class="{' active': internalValue === option.value }"
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
                v-click-outside="closeList"
                @blur="closeList"
            >
                <button
                    class="input-group--select__button input-group--select__button--prepend"
                    aria-haspopup="listbox"
                    :id="id"
                    :aria-expanded="listOpen ? 'true' : 'false'"
                    :aria-labelledby="`${inputLabelId} ${id}-item-${currentPosition}`"
                    @keydown.down="handleKeyDown"
                    @click="toggleList">
                    <span class="input--select__toggle-label">
                        {{ currentOptionLabel }}
                    </span>
                </button>
                <ul
                    tabindex="0"
                    class="input--select__list input-group--select__list"
                    :class="`input--select__list--${prefferedOpenDirection}`"
                    role="listbox"
                    v-show="listOpen"
                    :id="`${id}-list`"
                    :style="{ maxHeight: optimizedHeight + 'px' }"
                    :aria-activedescendant="`${id}-item-${currentPosition}`"
                    @keydown.esc="closeList"
                    @keydown.enter="closeList"
                    @keydown.up="handleKeyUp"
                    @keydown.down="handleKeyDown"
                    @keydown.tab="handleKeyTab"
                    @keydown.home="handleKeyHome"
                    @keydown.end="handleKeyEnd"
                    @keyup="handleKeyPress"
                >
                    <li
                        v-for="(option, index) in options"
                        role="option"
                        class="input--select__option"
                        :class="{' active': internalValue === option.value }"
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
    </div>
</template>
<script>

export default {
    name: "InputSelect",
    directives: {
        'clickOutside': {
            bind (el, binding) {
                el.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
                document.body.addEventListener('click', binding.value);
            },
            unbind(el, binding) {
                document.body.removeEventListener('click', binding.value);
            }
        }
    },
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
        mobileBreakpoint: {
            type: String,
            required: false,
            default: "min-width: 992px"
        },
        maxHeight: {
            type: Number,
            required: false,
            default: 325
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
            prefferedOpenDirection: "below",
            actionKeysArray: ["End", "Home", "ArrowDown", "ArrowUp", "Esc", "Enter", "Shift"],
            currentKeysString: "",
            keyClear: null,
            searchIndex: 0
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
        var mediaQueriesList = window.matchMedia("screen and (" + this.mobileBreakpoint + ")");

        var screenTest = (e) => {
            if (e.matches) {
                this.displayDesktopInput = true;
            } else {
                this.displayDesktopInput = false;
            }
        };

        screenTest(mediaQueriesList);
        mediaQueriesList.addListener(screenTest);
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

            const listbox = document.getElementById(`${this.id}-list`);

            // Dirty timeout 0s to makesure listbox is present in dom and allow focus on it
            // Could probably be replace by a Vue.nextThick()
            window.setTimeout(() => {
                listbox.focus();
            }, 0);
        },
        /**
         * [closeList Close the options list]
         */
        closeList: function() {
            if(this.listOpen === true) {
                this.listOpen = false;

                const listToggle = document.getElementById(`${this.id}`);

                // Dirty timeout 0s to makesure listToggle is present in dom and allow focus on it
                // Could probably be replace by a Vue.nextThick()
                window.setTimeout(() => {
                    listToggle.focus();
                }, 0);

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
         * [handleKeyHome On key home pressed, select the first options]
         * @param  {object} event [Native Dom Event]
         */
        handleKeyHome: function(event) {
            if (this.listOpen === true) {
                event.preventDefault();

                this.updateCurrentOption(0);
            }
        },
        /**
         * [handleKeyEnd On key end pressed, select the last options]
         * @param  {object} event [Native Dom Event]
         */
        handleKeyEnd: function(event) {
            if (this.listOpen === true) {
                event.preventDefault();

                this.updateCurrentOption(this.options.length - 1);
            }
        },
        /**
         * [handleKeyPress On any key pressed, verify if it's not an action key (home, end, up, down, enter, etc) and call findItemByCharacter]
         * @param  {object} event [Native Dom Event]
         */
        handleKeyPress: function(event) {
            if (this.listOpen === true) {
                event.preventDefault();

                var key = event.key;

                if(this.actionKeysArray.indexOf(key) === -1) {
                    this.findItemByCharacter(key);
                }
            }
        },
        /**
         * [findItemByCharacter Find and item based on the first letter of the key press]
         * @param  {string} key [The key pressed by the user]
         */
        findItemByCharacter: function(key) {
            var character = key.charAt(0).toLowerCase();

            if (!this.currentKeysString) {
                for (var i = 0; i < this.options.length; i++) {
                    if (this.options[i].value === this.internalValue) {
                        this.searchIndex = i;
                    }
                }
            }

            this.currentKeysString += character;

            this.clearCurrentKeysStringAfterDelay();

            var nextMatch = this.findMatchInRange(
                this.searchIndex + 1,
                this.options.length
            );


            if (!nextMatch) {
                nextMatch = this.findMatchInRange(
                    0,
                    this.searchIndex
                );
            }

            if(nextMatch) {
                const position = this.getObjetIndexByKey(this.options, "value", nextMatch.value);
                this.updateCurrentOption(position);
            }
        },
        /**
         * [findMatchInRange Find a entry in an array that start with the given letter(s)]
         * @param  {int} startIndex [Index to start searching in the options list]
         * @param  {int} endIndex   [Index to stop searching in the options list]
         * @return {object}         [The closest options (based on current position in list) that match the current key string)]
         */
        findMatchInRange: function(startIndex, endIndex) {
            // Find the first item starting with the currentKeysString substring, searching in
            // the specified range of items
            for (var n = startIndex; n < endIndex; n++) {
                var label = this.options[n].label;

                if (label && label.toLowerCase().indexOf(this.currentKeysString) === 0) {
                    return this.options[n];
                }
            }
            return null;
        },
        /**
         * [clearCurrentKeysStringAfterDelay Clear the currentKeyString after X time]
         */
        clearCurrentKeysStringAfterDelay: function() {
            if (this.keyClear) {
                clearTimeout(this.keyClear);
                this.keyClear = null;
            }
            this.keyClear = setTimeout(() => {
                this.currentKeysString = "";
                this.keyClear = null;
            }, 500);
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