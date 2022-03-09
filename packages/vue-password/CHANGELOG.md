# Changelog

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) starting 1.0.

## Unreleased

Nothing

## v0.3.0 (2022-03-09)

### New

- Allow customization of the `autocomplete` attribute with an optional `autocomplete` prop. The default value remains `current-password`.
- Add `aria-required` attribute on the password field.

### Changed

- Allow to show errors when password is empty
- Drop the `hide-password-label` attribute, now unused.
- Add `password-shown-text` and `password-hidden-text` to announce the state of the password visibility to screen readers.

### Fixed

- There was no proper screen reader announcements when the password visibility changes.
- Fix `aria-invalid` being either an empty string either the error message instead of `true` or `false`.
- Keep the same border color when the visibility button is focused: instead of red, it now inherits from the default color (blue).

### Documentation

- Document accessibility decisions.

### Under the hood

- Update `nanoid` and build tools dependencies.
- Move `vue` to dev dependencies, which should lower the installed weight.

### Demo app

- The default value for the “password with error” is now an empty string (was `123`), like other passwords.
- The `<form>` is now a real submittable `POST` form with a `<button>`, but prevented (it doesn’t submit anything).

## v0.2.0 (2022-02-22)

### Changed

Vite users must prepend the styles import path with `/scss` (see documentation).

### Various

The demo app `<html>` now has a `lang` attribute.

## v0.1.0 (2022-02-16)

First published version.
