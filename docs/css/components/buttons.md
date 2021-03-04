# Buttons

## Basic button

Display a simple button with the *button* class.

<button class="button">Click me!</button>

```html
<button class="button">Click me!</button>
```

## Button style

Serenity provides a few default styles for your buttons: *primary*, *secondary*, *tertiary* and *text* buttons. Enable them by using a modifier.

<button class="button button--primary"><span class="button__label">Primary button</span></button>
<button class="button button--secondary"><span class="button__label">Secondary button</span></button>
<button class="button button--tertiary"><span class="button__label">Tertiary button</span></button>
<button class="button button--text"><span class="button__label">Text button</span></button>

```html
<button class="button button--primary">
    <span class="button__label">Primary button</span>
</button>
<button class="button button--secondary">
    <span class="button__label">Secondary button</span>
</button>
<button class="button button--tertiary">
    <span class="button__label">Tertiary button</span>
</button>
<button class="button button--text">
    <span class="button__label">Text button</span>
</button>
```

## Button dark theme

Button primary and button secondary also exist in a "dark" theme variation.

The differences with the default theme are not big, but the "dark" theme works better inside a dark background component.

<button class="button button--primary--dark">
    <span class="button__label">Primary dark button</span>
</button>
<button class="button button--secondary--dark">
    <span class="button__label">Secondary dark button</span>
</button>
<button class="button button--tertiary--dark">
    <span class="button__label">Tertiary dark button</span>
</button>
<button class="button button--text--dark">
    <span class="button__label">Text button</span>
</button>

```html
<button class="button button--primary--dark">
    <span class="button__label">Primary dark button</span>
</button>
<button class="button button--secondary--dark">
    <span class="button__label">Secondary dark button</span>
</button>
<button class="button button--tertiary--dark">
    <span class="button__label">Tertiary dark button </span>
</button>
<button class="button button--text--dark">
    <span class="button__label">Text dark button</span>
</button>
```


## Button masquerade theme 

Button primary, button secondary and button tertiary also exist in a "masquerade" theme variation, to stage a type of user in a website.

<button class="button button--primary--masquerade">
    <span class="button__label">Primary masquerade button</span>
</button>
<button class="button button--secondary--masquerade">
    <span class="button__label">Secondary masquerade button</span>
</button>
<button class="button button--tertiary--masquerade">
    <span class="button__label">Tertiary masquerade button</span>
</button>

```html
<button class="button button--primary--masquerade">
    <span class="button__label">Primary masquerade button</span>
</button>
<button class="button button--secondary--masquerade">
    <span class="button__label">Secondary masquerade button</span>
</button>
<button class="button button--tertiary--masquerade">
    <span class="button__label">Tertiary masquerade button </span>
</button>
```

## Button disabled state

All buttons can have a disabled state by adding the attribute *disabled="disabled"*.

<button class="button button--primary" disabled="disabled">
    <span class="button__label">Primary button</span>
</button>
<button class="button button--secondary" disabled="disabled">
    <span class="button__label">Secondary button</span>
</button>
<button class="button button--tertiary" disabled="disabled">
    <span class="button__label">Tertiary button</span>
</button>
<button class="button button--text" disabled="disabled">
    <span class="button__label">Text button</span>
</button>

```html
<button class="button button--primary" disabled="disabled">
    <span class="button__label">Primary button</span>
</button>
<button class="button button--secondary" disabled="disabled">
    <span class="button__label">Secondary button</span>
</button>
<button class="button button--tertiary" disabled="disabled">
    <span class="button__label">Tertiary button</span>
</button>
<button class="button button--text" disabled="disabled">
    <span class="button__label">Text button</span>
</button>
```

If you need to use the disabled state on an ```<a>``` element, keep in mind that it behaves a bit differently than a ```<button>```:

::: warning
* `<a>` don’t support the disabled attribute, so you must add the `.button-disabled` class to make it visually appear disabled.
* Disabled buttons link should include the `aria-disabled="true"` attribute to indicate the state of the element to accessibility devices. Eventually a `tabindex=-'1'`could be add.
:::

<a href="" class="button button--primary button-disabled" aria-disabled="true" tabindex="-1" role="button">
    <span class="button__label">Primary button</span>
</a>
<a href="" class="button button--secondary button-disabled" aria-disabled="true" tabindex="-1" role="button">
    <span class="button__label">Secondary button</span>
</a>
<a href="" class="button button--tertiary button-disabled" aria-disabled="true" tabindex="-1" role="button">
    <span class="button__label">Tertiary button</span>
</a>
<a href="" class="button button--text button-disabled" aria-disabled="true" tabindex="-1" role="button">
    <span class="button__label">Text button</span>
</a>

```html
<a href="#" class="button button--primary button-disabled" aria-disabled="true" tabindex="-1" role="button">
    <span class="button__label">Primary button</span>
</a>
<a href="#" class="button button--secondary button-disabled" aria-disabled="true" tabindex="-1" role="button">
    <span class="button__label">Secondary button</span>
</a>
<a href="" class="button button--tertiary button-disabled" aria-disabled="true" tabindex="-1" role="button">
    <span class="button__label">Tertiary button</span>
</a>
<a href="#" class="button button--text button-disabled" aria-disabled="true" tabindex="-1" role="button">
    <span class="button__label">Text button</span>
</a>
```

:::tip Note
In some case you cannot use the `disabled` html or aria attribute. (e.g. the button should be focusable for accessible reason), but you still need to give it a disabled style. In this case the `.button-disabled` class alone can also be used. Note that the button is still focusable so he have a focus style.
:::

<button class="button button--primary button-disabled">
    <span class="button__label">Primary button</span>
</button>
<button class="button button--secondary button-disabled">
    <span class="button__label">Secondary button</span>
</button>
<button class="button button--tertiary button-disabled">
    <span class="button__label">Tertiary button</span>
</button>
<button class="button button--text button-disabled">
    <span class="button__label">Text button</span>
</button>

```html
<button class="button button--primary button-disabled">
    <span class="button__label">Primary button</span>
</button>
<button class="button button--secondary button-disabled">
    <span class="button__label">Secondary button</span>
</button>
<button class="button button--tertiary button-disabled">
    <span class="button__label">Tertiary button</span>
</button>
<button class="button button--text button-disabled">
    <span class="button__label">Text button</span>
</button>
```

## Button size

Serenity provides a modifier (`size-small`) for small buttons.

<button class="button button--primary button--size-small"><span class="button__label">Small primary button</span></button>
<button class="button button--secondary button--size-small"><span class="button__label">Small secondary button</span></button>
<button class="button button--tertiary button--size-small"><span class="button__label">Small tertiary button</span></button>
<button class="button button--text button--size-small"><span class="button__label">Small text button</span></button>

```html
<button class="button button--primary button--size-small">
    <span class="button__label">Small primary button</span>
</button>
<button class="button button--secondary button--size-small">
    <span class="button__label">Small secondary button</span>
</button>
<button class="button button--tertiary button--size-small">
    <span class="button__label">Small tertiary button</span>
</button>
<button class="button button--text button--size-small">
    <span class="button__label">Small text button</span>
</button>

```

## Button icon

You can put an SVG icon inside a button using the `button__icon` and `button__label` child classes.

<button class="button button--primary button--size-icon">
    <svg class="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
    </svg>
    <span class="button__label">Click me!</span>
</button>
<button class="button button--secondary button--size-icon">
    <svg class="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
    </svg>
    <span class="button__label">Click me!</span>
</button>
<button class="button button--tertiary button--size-icon">
    <svg class="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
    </svg>
    <span class="button__label">Click me!</span>
</button>
<button class="button button--text button--size-icon">
    <svg class="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01L9.3 9.3a.996.996 0 0 1 1.41 0L14 12.59l3.29-3.3c.39-.39 1.03-.39 1.42 0l2.29 2.3zm0 2.84l-3-3.01-3.3 3.28a.996.996 0 0 1-1.41 0L10 11.41l-3.3 3.3a.996.996 0 0 1-1.41 0L3 12.42V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57z"/>
    </svg>
    <span class="button__label">Click me!</span>
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
