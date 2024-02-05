# Changelog

## 3.1.0 - 2024-02-05

### Changes

- The color pallet has changed and the variables with "rb" acronym have the same values with the others.
- The brand logo has a different blue
- The icons and illustrations have been updated with the new colors as well.

### New

- New logo for serenity

## 3.0.0 - 2023-12-20

### Changes

- Primary secondary and tertiary button colors have been changed with some new colors defined with the acronym "rb", example: "rb-primary-blue". These changes were made only for the default theme, on "dark" and "masquerade" the buttons are the same. 
- The brand logo has changed into another svg.
- The "icons" folder contains the icons that are used in the components of Serenity, but these have been updated with the new colors as well.

### New

- New color variables were added for the Rebranding design, all of them starting with "rb", example "rb-primary-blue".
- New icons and illustrations have been added under the following structure:
- The "artworks" folder contains illustrations.
- The "icons-default" folder contains icons that are not colored (they are black/white) as they will be used with CSS classes or copied into JavaScript where they will be used with fill="currentColor" to take on the color of the text (or the respective context).
- The "icons-colored" folder contains colored icons based on the new design colors.

## 2.1.0 - 2022-05-02

### Changes

- The `.input--switch` HTML/CSS component has been replaced by a `.toggle` HTML/CSS component to match more use cases ([bac5aee](https://github.com/axel-springer-kugawana/iwb_serenity/commit/bac5aee1d80230f1d1da1f17467066896c5fc6bb)).
- The fonts stack has been improved, but you now have to declare the fonts by yourself ([cf55585](https://github.com/axel-springer-kugawana/iwb_serenity/commit/cf555858e55fe294795128b89d2508147d34e402)).

### New

- Increase compatibility with [dart-sass](https://github.com/sass/dart-sass) by enforcing `calc` ([9c4950c](https://github.com/axel-springer-kugawana/iwb_serenity/commit/9c4950c99eace8c0b1685340d7fde5ba022e28ed)).

### Fixed

- Wrong project license declaration in package.json ([ec181b1](https://github.com/axel-springer-kugawana/iwb_serenity/commit/ec181b19e12631d04d86ee58c6b3f243d3cc331c)).
- Reduce the number of files include in the package ([c8aa228](https://github.com/axel-springer-kugawana/iwb_serenity/commit/c8aa228ccde50f946acb556009a0f9fba850f70d)).

### Docs

- Fix typo in buttons documentation ([367e1c7](https://github.com/axel-springer-kugawana/iwb_serenity/commit/367e1c71e31dda04a26ae0ea4afbae4822aa1367)).
- The documentation website is now automatically deployed on release tag using a GitHub action ([3ec3bde](https://github.com/axel-springer-kugawana/iwb_serenity/commit/3ec3bdecb38ef6a126a62551f542b769de4d42dd), [27b8460](https://github.com/axel-springer-kugawana/iwb_serenity/commit/27b846061c988285ac08a84a96237792595850f0)).

## 2.0.6 - 2021-03-04

### Fixed

- Form: Input select, fix error js undefined when using $refs 

## 2.0.5 - 2020-11-05

### Added

- Buttons: Masquerade theme

## 2.0.5-rc.5 - 2020-10-21

### Fixed

- Input Select: Fix issue with read-only state

## 2.0.5-rc.4 - 2020-10-20

### Added

- Input Select: Add disabled and read-only state to input-select


### Change
- Form: Force field error in block for input--radio--inline

## 2.0.5-rc.3 - 2020-09-30

### Fix
- Form: Fix readonly on input-text (only apply on input or textarea)

## 2.0.5-rc.2 - 2020-09-30

### Added

- Form: Add readonly and disabled to textarea
- Form: Add readonly and disabled to input-text

### Changed

- Form: Change checkbox checked focus state (lighter background)

## 2.0.5-rc.1 - 2020-09-28

### Changed

- Form: Broader focus style for input

## 2.0.4 - 2020-08-31

### Fixed

- Form: Input select, fix alignment on small breakpoint for Firefox

### Changed

- Buttons: Remove margin on icon if the icon is the only-child.


## 2.0.3 - 2020-08-14

### Fixed

- Form: Fix regression of input Select (increase line-height of selected label)

### Added

- Buttons: Disabled state
- Buttons: Manage small size for text button
- Typography: Bold style

### Changed

- Split mixins files in separated files

## 2.0.2 - 2020-08-12

### Wrong version

## 2.0.1 - 2020-07-09

### Fixed

- Form: Fix regression of input Select (add ellipsis in label if width is too small)

### Added

- Form: Input select error style

## 2.0.0 - 2020-07-07

### Fixed

- Form: Input select label alignment for Safari

## 2.0.0-rc.4 - 2020-06-16

### Changed

- Form: Field row styles
- Form: Input text styles
- Form: Input select styles
- Form: Input radios styles
- Form: Input switch styles
- Form: Textarea switch styles
- Form: Input group styles
- Buttons: Border style
- Colors: Primary-blue-l

### Added
- Form: Field annotation text

## 2.0.0-rc.3 - 2020-04-06

### Changed

- Form: Input select

## 2.0.0-rc.2 - 2020-04-01

### Changed

- Form: Input select small

### Added
- Typography: Dark style

## 2.0.0-rc.1 - 2020-03-18

### Removed

- Buttons:  Disabled state
- Titles: Dark variations (title--X--dark)
- Layout: container--no-gutter
- Colors: Blue, Green, bright, fresh, blue-firefly
- Colors: Secondary dark shade
- Colors: Bright and fresh shade
- Colors: Bright and fresh shade
- Colors: All deprecated colors ($storm-grey, $grey-94, $grey-91, $grey-61, $grey-50)

### Changed

- Colors: functional-success, error and warning
- Colors: color body
- Colors: primary by primary-blue,
- Colors: secondary by primary-green,
- Colors: primary shade by primary-blue shade
- Colors: primary shade by primary-blue shade
- Colors: Secondary light shade by primary-green shade
- Messages: Warning, infos and success styles
- Form: Input text styles
- Form: Input checkbox and radios styles
- Form: Input errors styles
- Form: Input switch styles
- Form: Textarea switch styles
- Input-select: Input styles
- Buttons: Styles
- Typography: Title, text and link typography style
- Top-navigation: Update style
- Icons: Update icon-arrow-down.svg and icon-placeholder.svg
- Rename variable XxxBorderRadius to xxx-border-radius
- Fix typo in doc

### Rename
- Colors: $inputBorderRadius to $input-border-radius
- Colors: $buttonBorderRadius to $button-border-radius
- Colors: $inputGroupSelectLargeBorderRadius to $input-group-select-large-border-radius

### Added

- Input-group-stepper Javascript component
- Form: Input modal theme for input text
- Typography: link--external
- Colors: Add orange-flag

## 1.1.1 - 2019-12-03 - Hevea brasiliensis Hotfix 1

### Changed

- Input-select: Add an optional required prop
- Input-select: Adapt documentation for missing props

## 1.1.0 - 2019-11-06 - Hevea brasiliensis

### Fixed

- Input-select: Input Select: Fix issue with computed flat array option (now contain id for each options)

### Changed

- Convert some fixed size (PX) to relative one (REM) (Form element, mediaqueries)
- Buttons: Refactor button-disable style and behavior
- Forms: Adapt documentation for error-field
- README: Update with instruction to test serenity locally in your project

## 1.0.3 - 2019-09-25 - Nymphaea caerulea Improvement

### Changed

- Alerts: Change font weight body to font weight title and decrease padding to display smaller height

### Removed

- Alerts : Remove border radius

## 1.0.2 - 2019-09-18 - Nymphaea caerulea Hotfix 2

### Fixed

- Input-select: Put the list dropdown higher than top-navigation
- Input-select: Close the list on scroll outside

### Changed

- Role back vue-press version (was causing some issue on documentation generation)

## 1.0.1 - 2019-09-12 - Nymphaea caerulea Hotfix 1

### Fixed

- Fix issue with vuepress/plugins-container

## 1.0.0 - 2019-09-12 - Nymphaea caerulea

### Changed

- Input-select: Add a min width and align the list width the middle of the toggle
- Input Select: Remove vue click away (due to issue with double Vue import) and fix the custom directive
- Various: Update some JS package

### Fixed

- Top Navigation: Remove unused padding on desktop
- Input Checkbox: Rollback input--checkbox fix (fix issue apply by commit e8d6dcc)
- Input Select: Do not focus back on input toggle if click outside the element

### Removed

- Input-Select: Remove input-select in group

## 0.0.14 - 2019-08-29

### Fixed

- Fix input checkbox position bug when used in group

### Changed

- Input Select: Update the colors of the input
- Breakpoints: Add below-desktop breakpoint
- Form: Force uppercase on the first letter of the field-label
- Button: Decrease the font-size of button--text on mobile

## 0.0.13 - 2019-07-04

### Changed

- Input Checkbox: Add indeterminate state

### Fixed

- Fix typo in doc for grid

## 0.0.12 - 2019-05-23

### Changed

- Input Select: Add option-group support (like optgroup)
- Input Select: Add disabled option support
- Input Select: Select an option on space keydown (if it's the first key hit)

### Fixed

- Input Select: Text transform issue with input-group--select

## 0.0.11 - 2019-05-14

### Changed

- Change doc logo

### Fixed

- Display inline error fields
- Input Select: Update active hover color
- Input Select: Close all previous opened select when click

## 0.0.10 - 2019-04-29

### Changed

- Change default link state (now underline, darker color on hover)
- Update docs (Add favicons, logos, refactor menu)

## 0.0.9 - 2019-04-09

### Fixed

- Buttons: Fix margin left issue with button__icon--left

### Changed

- Forms: Increase input-group stepper button font-size (now 24px was 12px)
- Update color scheme (change some grey), and deprecated others

## 0.0.8 - 2019-04-08

### Fixed

- Forms: Change input-select button type to "button" to prevent form submit on click

## 0.0.7 - 2019-04-03

### Added

- Forms: Add field__label--extra
- Add deploy-manual doc

### Changed

- Update color scheme (change primary-ll, primary-lll, add primary-lll)
- Input Select: Increase max-height of input--select__list tp 325px

### Fixed

- Forms: Force field-label alignment to left
- Input Select: Cancel page jump when space is pressed

## 0.0.6 - 2019-02-06

### Added

- Forms: Input Switch

## 0.0.5 - 2019-01-30

### Changed

- Buttons: Remove hover/focus blur effect on primary and secondary button

## 0.0.4 - 2019-01-25

### Changed

- Forms: Refactor input-select (better aria implementation)
- Forms: Change text-counter color to color-body for valid AA color contrast

## 0.0.3 - 2019-01-16

### Changed

- Forms: Change focus color of input-search
- Forms: Refactor input-select responsive behavior whit matchMedia vanilla api (remove enquire)

### Fixed

- Fix min-height issue of input-search__input on Firefox

## 0.0.2 - 2018-12-18

### Added

- Forms: Input-select components
- Buttons: Update buttons styles
- Grid: Grid__item--centered class

## 0.0.1 - 2018-10-24

- Initial Release.
