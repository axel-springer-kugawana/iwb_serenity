# Buttons

## Basic button

Display a simple button with the *button* class.

<button class="button">Click me!</button>

```html
<button class="button">Click me!</button>
```

## Button style

Serenity provides a few default styles for your buttons: *primary*, *secondary*, *tertiary* and *text* buttons. Enable them by using a modifier.

<button class="button button--primary">Primary button</button>
<button class="button button--secondary">Secondary button</button>
<button class="button button--tertiary">Tertiary button</button>
<button class="button button--text">Text button</button>

```html
<button class="button button--primary">Primary button</button>
<button class="button button--secondary">Secondary button</button>
<button class="button button--tertiary">Tertiary button</button>
<button class="button button--text">Text button</button>
```

## Button dark theme

Button primary and button secondary also exist in a "dark" theme variation.

The differences with the default theme are not big, but the "dark" works better inside a dark background component.

<button class="button button--primary--dark">Primary dark button</button>
<button class="button button--secondary--dark">Secondary dark button</button>
<button class="button button--tertiary--dark">Tertiary dark button</button>
<button class="button button--text--dark">Text button</button>

```html
<button class="button button--primary--dark">Primary dark button</button>
<button class="button button--secondary--dark">Secondary dark button</button>
<button class="button button--tertiary--dark">Tertiary dark button</button>
<button class="button button--text--dark">Text button</button>
```

## Button size

Serenity provides a modifier (`size-small`) for small buttons.

<button class="button button--primary button--size-small">Small primary button </button>
<button class="button button--secondary button--size-small">Small secondary button </button>
<button class="button button--tertiary button--size-small">Small tertiary button </button>

```html
<button class="button button--primary button--size-small">Small primary button </button>
<button class="button button--secondary button--size-small">Small secondary button </button>
<button class="button button--tertiary button--size-small">Small tertiary button </button>
```

## Button icon

You can put an SVG icon inside a button using the `button__icon` and `button__label` child classes.

<button class="button button--primary">
    <svg class="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
    </svg>
    <span class="button__label">Click me!</span>
</button>
<button class="button button--secondary">
    <svg class="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
    </svg>
    <span class="button__label">Click me!</span>
</button>
<button class="button button--tertiary">
    <svg class="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
    </svg>
    <span class="button__label">Click me!</span>
</button>
<button class="button button--text">
    <svg class="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
    </svg><span class="button__label">Click me!</span>
</button>

```html
<button class="button button--primary">
    <svg class="button__icon"><!-- your SVG data goes here --></svg>
    <span class="button__label">Click me!</span>
</button>
<button class="button button--secondary">
    <svg class="button__icon"><!-- your SVG data goes here --></svg>
    <span class="button__label">Click me!</span>
</button>
<button class="button button--tertiary">
    <svg class="button__icon"><!-- your SVG data goes here --></svg>
    <span class="button__label">Click me!</span>
</button>
<button class="button button--text">
    <svg class="button__icon"><!-- your SVG data goes here --></svg>
    <span class="button__label">Click me!</span>
</button>
```

## Button Transparent

Button transparent allows you to declare a button without "any" style. It could be used for an icon acting as a button.

:::warning
For accessibility reasons, don't forget to use an `aria-label` or `aria-labelledby` attribute if you don't have any text label in your button.
:::

<div class="sd-example">
    <button tabindex="0" aria-label="Button label" class="button--transparent">
        <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
        </svg>
    </button>
</div>

```html
<button tabindex="0" aria-label="Button label" class="button--transparent">
    <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
    </svg>
</button>
```
