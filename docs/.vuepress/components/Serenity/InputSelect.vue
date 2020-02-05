<template>
    <div class="input--select-wrapper">
        <div
            class="input--select input--select--desktop"
            :class="{ 'input--select--small' : small }"
            v-if="displayDesktopInput"
            v-click-outside="handleClickAway"
            @blur="closeList"
        >
            <button
                :required="required ? true : false"
                type="button"
                class="input--select__toggle"
                aria-haspopup="listbox"
                :id="id"
                :aria-expanded="listOpen ? 'true' : 'false'"
                :aria-labelledby="`${inputLabelId} ${id}`"
                @click="toggleList"
                @keydown.down="handleKeyDown">
                <span class="input--select__toggle-label">
                    {{ currentOptionLabel }}
                </span>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="input--select__toggle-icon">
                    <path d="M15.875 9l-3.88 3.88L8.115 9a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
                </svg>
            </button>
            <ul
                tabindex="-1"
                class="input--select__list"
                :class="`input--select__list--${prefferedOpenDirection}`"
                role="listbox"
                v-show="listOpen"
                :id="`${id}-list`"
                :style="{ maxHeight: optimizedHeight + 'px' }"
                :aria-activedescendant="currentOptionId"
                :aria-labelledby="`${inputLabelId}`"
                ref="list"
                @keydown.esc="closeList"
                @keydown.enter="closeList"
                @keydown.up="handleKeyUp"
                @keydown.down="handleKeyDown"
                @keydown.space.prevent="handleKeyPress"
                @keydown.tab="handleKeyTab"
                @keydown.home="handleKeyHome"
                @keydown.end="handleKeyEnd"
                @keyup="handleKeyPress"
            >
                <template v-for="(option, index) in internalOptions">
                    <template v-if="Array.isArray(option.value)">
                        <li role="group" :aria-labelledby="`option-${id}-groupchild-${index}-label`" :key="`option-${id}-${index}`">
                            <div :id="`option-${id}-groupchild-${index}-label`" class="input--select__option-group-title">
                                {{ option.label }}
                            </div>
                            <ul class="input--select__option-group">
                                <li
                                    v-for="(optionGroupChild, subListIndex) in option.value"
                                    role="option"
                                    class="input--select__option"
                                    :class="{' active': internalValue === optionGroupChild.value, 'input--select__option--disabled': optionGroupChild.disabled == true }"
                                    :key="`option-${id}-groupchild-${index}-${subListIndex}`"
                                    :id="`${id}-item-${optionGroupChild.id}`"
                                    :data-value="optionGroupChild.value"
                                    @click="selectOption"
                                    @mouseover="preSelectOption"
                                    :data-disabled="(option.disabled == true) ? true : false"
                                >
                                    {{ optionGroupChild.label }}
                                </li>
                            </ul>
                        </li>
                    </template>
                    <template v-else>
                        <li
                            role="option"
                            class="input--select__option"
                            :class="{' active': internalValue === option.value, 'input--select__option--disabled': option.disabled == true }"
                            :key="`option-${id}-${index}`"
                            :id="`${id}-item-${option.id}`"
                            :data-value="option.value"
                            @click="selectOption"
                            @mouseover="preSelectOption"
                            :data-disabled="(option.disabled == true) ? true : false"
                        >
                            {{ option.label }}
                        </li>
                    </template>
                </template>

            </ul>
        </div>

        <select
            class="input--select input--select--mobile input--select--mobile--collapsed"
            :class="{ 'input--select--small' : small }"
            v-model="internalValue"
            :aria-labelledby="inputLabelId"
            :required="required ? true : false"
            ref="selectMobile"
            @click="manageMobileClass"
            @change="updateMobileValue">
            <template v-for="(option, index) in options">
                <template v-if="Array.isArray(option.value)">
                    <optgroup
                        :key="`option-${id}-${index}`"
                        :label="option.label">
                        <option
                            v-for="(optionGroupChild, index) in option.value"
                            :key="`option-${id}-groupchild-${index}`"
                            :value="optionGroupChild.value"
                            :disabled="(optionGroupChild.disabled == true) ? true : false"
                        >
                            {{ optionGroupChild.label }}</option>
                    </optgroup>
                </template>
                <template v-else>
                    <option
                        :key="`option-${id}-${index}`"
                        :value="option.value"
                        :disabled="(option.disabled == true) ? true : false">
                        {{ option.label }}</option>
                </template>
            </template>
        </select>
    </div>
</template>
<script>

    export default {
        name: "InputSelect",
        directives: {
            "click-outside": {
                bind: function (el, binding, vnode) {
                    el.clickOutsideEvent = function (event) {
                        // here I check that click was outside the el and his childrens
                        if (!(el == event.target || el.contains(event.target))) {
                            // and if it did, call method provided in attribute value
                            vnode.context[binding.expression](event);
                        }
                    };
                    document.body.addEventListener('click', el.clickOutsideEvent)
                },
                unbind: function (el) {
                    document.body.removeEventListener('click', el.clickOutsideEvent)
                },
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
            inputLabelId: {
                type: String,
                required: true
            },
            value: {
                type: [String, Number],
                required: false,
                default: ""
            },
            mobileBreakpoint: {
                type: String,
                required: false,
                default: "min-width: 992px"
            },
            maxHeight: {
                type: Number,
                required: false,
                default: 320
            },
            required: {
                type: Boolean,
                required: false,
                default: false
            },
            small: {
                type: Boolean,
                required: false,
                default: false
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
                searchIndex: 0,
                currentOptionId: null,
                isGlobalScrollEnable: true
            };
        },
        computed: {
            internalOptions: function(e) {
                // Add id to each items to allow maping between flatOptions array and options
                const newArray = [];

                var globalLoopIndex = 0;
                const originalArray = this.options;

                originalArray.forEach(function(option) {
                    if (Array.isArray(option.value)) {
                        var subArray = [];

                        option.value.forEach(function(subOption) {

                            subOption["id"] = globalLoopIndex;

                            subArray.push(subOption);

                            globalLoopIndex = globalLoopIndex + 1;
                        });

                        option['value'] = subArray;

                        newArray.push(option);
                    } else {
                        option['id'] = globalLoopIndex;

                        newArray.push(option);

                        globalLoopIndex = globalLoopIndex + 1;
                    }
                });

                return newArray;
            },
            flatOptions: function(e) {
                const flatArray = [];
                const originalArray = this.internalOptions;

                originalArray.forEach(function(option) {
                    if (Array.isArray(option.value)) {
                        flatArray.push(option.value)
                    } else {
                        flatArray.push(option)
                    }
                });

                return this.flattenDeep(flatArray);
            }
        },
        watch: {
            value: function(newValue) {
                // If value is not a visible one reset it to first value of list else update the options list
                var arrayToTest = [];

                if(Array.isArray(this.flatOptions[this.currentPosition].value)) {
                    arrayToTest = this.flatOptions[this.currentPosition].value[0];
                } else {
                    arrayToTest = this.flatOptions;
                }

                const position = this.getObjetIndexByKey(arrayToTest, "value", newValue);

                if(position === -1) {
                    this.updateCurrentOption(0);
                } else {
                    this.updateCurrentOption(position);
                }
            },
            flatOptions: {
                handler(newValues) {
                    // If value is not a visible one reset it to first value of list, else update the options list
                    if(this.internalValue !== "") {
                        const position = this.getObjetIndexByKey(newValues, "value", this.internalValue);
                        if(position === -1) {
                            this.updateCurrentOption(0);
                            this.$emit("update-value", this.internalValue);
                        } else {
                            this.updateCurrentOption(position);
                        }
                    } else {
                        this.updateCurrentOption(0);
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

            const position = this.getObjetIndexByKey(this.flatOptions, "value", this.internalValue);
            if(position === -1) {
                this.updateCurrentOption(0);
                this.$emit("update-value", this.internalValue);
            } else {
                this.updateCurrentOption(position);
            }
        },
        methods: {
            /**
             * [toggleList Open / Close the options list based on current status]
             */
            toggleList: function() {
                // Close previous opened list
                var listComponent = document.getElementsByClassName("input--select-wrapper");
                if (listComponent.length > 0) {
                    for (var z = 0; z < listComponent.length; z++) {
                        if (this.id != listComponent[z].__vue__.id) {
                            if (listComponent[z].__vue__.listOpen != false) {
                                listComponent[z].__vue__.listOpen = false;
                            }
                        }
                    }
                }

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

                    window.addEventListener("wheel", this.handleScrollWhenListIsOpened, {passive: false});
                    window.addEventListener("DOMMouseScroll", this.handleScrollWhenListIsOpened, {passive: false});
                }, 0);
            },
            /**
             * [closeList Close the options list]
             */
            closeList: function(focusOnToggle = true) {
                if(this.listOpen === true) {
                    this.listOpen = false;

                    if (focusOnToggle) {
                        const listToggle = document.getElementById(`${this.id}`);

                        // Dirty timeout 0s to makesure listToggle is present in dom and allow focus on it
                        // Could probably be replace by a Vue.nextThick()
                        window.setTimeout(() => {
                            listToggle.focus();
                        }, 0);
                    }

                    window.removeEventListener("wheel", this.handleScrollWhenListIsOpened);
                    window.removeEventListener("DOMMouseScroll", this.handleScrollWhenListIsOpened);
                    // Each time the list is closed, emit the value to parent
                    this.$emit("update-value", this.internalValue);
                }
            },
            /**
             * [handleScrollWhenListIsOpened If the mouse is outside the input-select list during the scroll, close the list ]
             */
            handleScrollWhenListIsOpened: function(event) {
                function isDescendant(parent, child) {
                    var node = child.parentNode;
                    while (node != null) {
                        if (node == parent) {
                            return true;
                        }
                        node = node.parentNode;
                    }
                    return false;
                }

                var selectList = document.getElementById(`${this.id}-list`);
                var isTargetIsDescendantOfSelectList = isDescendant(selectList, event.target);

                if(!isTargetIsDescendantOfSelectList) {
                    if(event.target.id !== `${this.id}-list`) {
                        this.closeList();
                    }
                }
            },
            /**
             * [selectOption Select an option (generaly on click)]
             * @param  {object} event [Native Dom Evenet]
             */
            selectOption: function(event) {
                const value = event.target.dataset.value;
                const position = this.getObjetIndexByKey(this.flatOptions, "value", value);

                this.updateCurrentOption(position);

                this.closeList();
            },
            /**
             * [preSelectOption Preselect an option (generaly on hover)]
             * @param  {object} event [Native Dom Evenet]
             */
            preSelectOption: function(event) {
                const value = event.target.dataset.value;
                const position = this.getObjetIndexByKey(this.flatOptions, "value", value);

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
                    var position = this.currentPosition - 1;
                    this.updateCurrentOption(position);
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

                if (this.currentPosition < this.flatOptions.length - 1) {
                    var position = this.currentPosition + 1;
                    this.updateCurrentOption(position);
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

                    this.updateCurrentOption(this.flatOptions.length - 1);
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
             * [handleClickAway On click outside the element close the list whitout focusing back to toggleList]
             */
            handleClickAway: function() {
                this.closeList(false);
            },
            /**
             * [findItemByCharacter Find and item based on the first letter of the key press]
             * @param  {string} key [The key pressed by the user]
             */
            findItemByCharacter: function(key) {
                var character = key.charAt(0).toLowerCase();

                if (!this.currentKeysString) {

                    if (key === " ") {
                        this.updateCurrentOption(this.currentPosition);
                        this.closeList();
                    } else {
                        for (var i = 0; i < this.flatOptions.length; i++) {
                            if (this.flatOptions[i].value === this.internalValue) {
                                this.searchIndex = i;
                            }
                        }
                    }

                }

                this.currentKeysString += character;

                this.clearCurrentKeysStringAfterDelay();

                var nextMatch = this.findMatchInRange(
                    this.searchIndex + 1,
                    this.flatOptions.length
                );


                if (!nextMatch) {
                    nextMatch = this.findMatchInRange(
                        0,
                        this.searchIndex
                    );
                }

                if(nextMatch) {
                    const position = this.getObjetIndexByKey(this.flatOptions, "value", nextMatch.value);
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
                    var label = this.flatOptions[n].label;

                    if (label && label.toLowerCase().indexOf(this.currentKeysString) === 0) {
                        return this.flatOptions[n];
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
                var newPosition = position;

                if (this.flatOptions[position].disabled) {
                    if (this.currentPosition < position) {
                        newPosition = position + 1;
                    } else if (this.currentPosition > position) {
                        newPosition = position - 1;
                    }
                }

                // Reset Preselect position
                this.preSelectPosition = newPosition;
                // Define current position
                this.currentPosition = newPosition;

                let label = this.flatOptions[newPosition].label;

                this.currentOptionLabel = label;
                this.internalValue = this.flatOptions[newPosition].value;
                this.currentOptionId = `${this.id}-item-${this.flatOptions[newPosition].id}`;

                const currentOption = document.getElementById(this.currentOptionId);

                if(currentOption !== null) {
                    const currentOptionTop = currentOption.offsetTop;
                    const currentOptionHeight = currentOption.offsetHeight;

                    const optionsListHeight = this.$refs.list.offsetHeight;

                    if (currentOptionTop >= optionsListHeight) {
                        this.$refs.list.scrollTop = currentOptionTop;
                    }

                    if (currentOptionTop <= this.$refs.list.scrollTop) {
                        this.$refs.list.scrollTop = currentOptionTop;
                    }
                }
            },
            /**
             * [updateMobileValue On input mobile change, emit the value with custom event update-value]
             */
            updateMobileValue: function () {
                // Each time the list is closed, emit the value to parent
                this.$emit("update-value", this.internalValue);

                // Update Desktop Input Current Option (in case of breakpoint change)
                const position = this.getObjetIndexByKey(this.flatOptions, "value", this.internalValue);

                if (position > -1) {
                    this.updateCurrentOption(position);
                }
            },
            manageMobileClass: function() {
                let toCollapse = false;
                let selectMobile = this.$refs.selectMobile;
                let classnameMobile = "input--select input--select--mobile input--select--mobile--";
                if(selectMobile) {
                    let selectMobileClass = selectMobile.className.split(" ");
                    for(let index = 0; index < selectMobileClass.length; index++) {
                        if(selectMobileClass[index] === "input--select--mobile--expanded") {
                            toCollapse = true;
                            index = selectMobileClass.length + 1;
                        }
                    }
                }

                if(toCollapse) {
                    selectMobile.className = classnameMobile + "collapsed"
                }
                else {
                    selectMobile.className = classnameMobile + "expanded"
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
            },
            /**
             * [flattenDeep Return a flat array]
             * @param  {array} array [The initial array to flat]
             * @return {array}       [A flatten array]
             * @url https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#reduce_and_concat
             */
            flattenDeep (array) {
                return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(this.flattenDeep(val)) : acc.concat(val), []);
            }
        },
    };
</script>