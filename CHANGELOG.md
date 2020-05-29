# Changelog

## 2.0.0-rc-4 - 2020-00-00
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

###Added
- Form: Field annotation text

## 2.0.0-rc.3 - 2020-04-06
### Changed
- Form: Input select

## 2.0.0-rc.2 - 2020-04-01
### Changed
- Form: Input select small

###Added
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
- Input Checkbox: Roleback input--checkbox fix (fix issue apply by commit e8d6dcc)
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
- Input Checbox: Add indeterminate state

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
- Change default link state (now undelrine, darke color on hover)
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
- Forms: Force field-label allignement to left
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