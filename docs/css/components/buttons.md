# Buttons

## Basic button

Display a simple button with the *button* class.

<button class="button">Click me!</button>

```html
<button class="button">Click me!</button>
```

## Button style

Serenity provides a few default styles for your buttons: *primary*, *secondary* and *text* buttons. Enable them by using a modifier to your button.

<button class="button button--primary">Primary button</button>
<button class="button button--secondary">Secondary button</button>
<button class="button button--text">Text button</button>

```html
<button class="button button--primary">Primary button</button>
<button class="button button--secondary">Secondary button</button>
<button class="button button--text">Text button</button>
```

## Button dark theme

Button primary and button secondary also exist in a "dark" theme variation.

The differences with the default theme are not big, but the "dark" work better inside a dark background component.

<button class="button button--primary--dark">Primary dark button</button>
<button class="button button--secondary--dark">Secondary dark button</button>

```html
<button class="button button--primary--dark">Primary dark button</button>
<button class="button button--secondary--dark">Secondary dark button</button>
```

## Button disabled state

All buttons can look like disable adding the attribute *disabled="disabled"*.

<button class="button button--primary" disabled="disabled">Primary button</button>
<button class="button button--secondary" disabled="disabled">Secondary button</button>
<button class="button button--text" disabled="disabled">Text button</button>

```html
<button class="button button--primary" disabled="disabled">Primary button</button>
<button class="button button--secondary" disabled="disabled">Secondary button</button>
<button class="button button--text" disabled="disabled">Text button</button>
```

In case you need to use the disabled state on an ```<a>``` element keep in mind that it behave a bit different than a ```<button>```:

::: warning
* `<a>`s don’t support the disabled attribute, so you must add the `.button-disable` class to make it visually appear disabled.
* Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
:::

<a href="#" class="button button--primary button-disable" aria-disabled="true" tabindex="-1" role="button">Primary button</a>
<a href="#" class="button button--secondary button-disable" aria-disabled="true" tabindex="-1" role="button">Secondary button</a>
<a href="#" class="button button--text button-disable" aria-disabled="true" tabindex="-1" role="button">Text button</a>

```html
<a href="#" class="button button--primary button-disable" aria-disabled="true" tabindex="-1" role="button">Primary button</a>
<a href="#" class="button button--secondary button-disable" aria-disabled="true" tabindex="-1" role="button">Secondary button</a>
<a href="#" class="button button--text button-disable" aria-disabled="true" tabindex="-1" role="button">Text button</a>
```

## Button size

Serenity provides a modifier (`size-small`) for small buttons.

<button class="button button--primary button--size-small">Small Button primary</button>
```html
<button class="button button--size-small">Small Button primary</button>
```

## Button icon

You can put a SVG icon inside a button using the `button__icon` and `button__label` child classes.

<button class="button button--secondary">
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="button__icon"><path fill-opacity="0" d="M17.2 2.5c-1.7 0-3.3.8-4.3 2.2L12 6l-.9-1.3a5.28 5.28 0 0 0-9.6 3.1c0 2.1.8 4 2.3 5.5l8.2 8.2 8.2-8.2c1.5-1.5 2.3-3.4 2.3-5.5 0-2.9-2.4-5.3-5.3-5.3z"></path><path d="M12 4.7l.3-.4c1.1-1.6 3-2.5 4.9-2.5 3.3 0 6 2.7 6 6.1 0 2.3-.9 4.4-2.5 6L12.5 22c-.3.3-.8.3-1.1 0l-8.2-8.2a8.4 8.4 0 0 1-2.5-6c0-2 .9-3.8 2.5-4.9 2.8-2 6.6-1.4 8.5 1.4l.3.4zm7.7 8.1c1.4-1.4 2.1-3.1 2.1-5 0-2.5-2.1-4.6-4.5-4.6-1.5 0-2.8.7-3.7 1.9l-.9 1.3c-.3.4-.9.4-1.2 0l-.9-1.3c-1.4-2-4.3-2.5-6.4-1-1.3.9-2 2.2-2 3.7 0 1.9.7 3.6 2.1 5l7.7 7.7 7.7-7.7z"></path></svg>
    <span class="button__label">Click me!</span>
</button>

```html
<button class="button button--primary">
    <svg class="button__icon"><!-- your SVG data goes here --></svg>
    <span class="button__label">Click me!</span>
</button>
```

## Button Transparent

Button transparent allow you to declare a button whitout "any" style. It can be for an icon acting for has button.

:::warning
For accessibility purpose, don't forget to use an `aria-label` or `aria-labelledby` attribute if you don't have any text label in your button.
:::

<div class="sd-example">
    <button tabindex="0" aria-label="Button label" class="button--transparent">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-opacity="0" d="M17.2 2.5c-1.7 0-3.3.8-4.3 2.2L12 6l-.9-1.3a5.28 5.28 0 0 0-9.6 3.1c0 2.1.8 4 2.3 5.5l8.2 8.2 8.2-8.2c1.5-1.5 2.3-3.4 2.3-5.5 0-2.9-2.4-5.3-5.3-5.3z"></path><path d="M12 4.7l.3-.4c1.1-1.6 3-2.5 4.9-2.5 3.3 0 6 2.7 6 6.1 0 2.3-.9 4.4-2.5 6L12.5 22c-.3.3-.8.3-1.1 0l-8.2-8.2a8.4 8.4 0 0 1-2.5-6c0-2 .9-3.8 2.5-4.9 2.8-2 6.6-1.4 8.5 1.4l.3.4zm7.7 8.1c1.4-1.4 2.1-3.1 2.1-5 0-2.5-2.1-4.6-4.5-4.6-1.5 0-2.8.7-3.7 1.9l-.9 1.3c-.3.4-.9.4-1.2 0l-.9-1.3c-1.4-2-4.3-2.5-6.4-1-1.3.9-2 2.2-2 3.7 0 1.9.7 3.6 2.1 5l7.7 7.7 7.7-7.7z"></path></svg>
    </button>
</div>

```html
<button tabindex="0" aria-label="Button label" class="button--transparent">
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-opacity="0" d="M17.2 2.5c-1.7 0-3.3.8-4.3 2.2L12 6l-.9-1.3a5.28 5.28 0 0 0-9.6 3.1c0 2.1.8 4 2.3 5.5l8.2 8.2 8.2-8.2c1.5-1.5 2.3-3.4 2.3-5.5 0-2.9-2.4-5.3-5.3-5.3z"></path><path d="M12 4.7l.3-.4c1.1-1.6 3-2.5 4.9-2.5 3.3 0 6 2.7 6 6.1 0 2.3-.9 4.4-2.5 6L12.5 22c-.3.3-.8.3-1.1 0l-8.2-8.2a8.4 8.4 0 0 1-2.5-6c0-2 .9-3.8 2.5-4.9 2.8-2 6.6-1.4 8.5 1.4l.3.4zm7.7 8.1c1.4-1.4 2.1-3.1 2.1-5 0-2.5-2.1-4.6-4.5-4.6-1.5 0-2.8.7-3.7 1.9l-.9 1.3c-.3.4-.9.4-1.2 0l-.9-1.3c-1.4-2-4.3-2.5-6.4-1-1.3.9-2 2.2-2 3.7 0 1.9.7 3.6 2.1 5l7.7 7.7 7.7-7.7z"></path></svg>
</button>
```
