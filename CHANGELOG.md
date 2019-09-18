# Changelog

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