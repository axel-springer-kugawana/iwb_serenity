# Changelog

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) starting 1.0.

## Unreleased

### Changed

- Allow to show errors when password is empty
- Drop the `hide-password-label` attribute, now unused.
- Add `password-shown-text` and `password-hidden-text` to announce the state of the password visibility to screen readers.

### Fixed

- There was no proper screen reader announcements when the password visibility changes.

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
