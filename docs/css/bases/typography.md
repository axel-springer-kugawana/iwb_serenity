# Typography

## Fonts

By default, the `font-family` for titles is [Montserrat](https://fonts.google.com/specimen/Montserrat) while any other text gets [PT Sans](https://fonts.google.com/specimen/PT+Sans).

If these fonts are not available, they will fall back on other fonts, depending on which ones are available on your system. The font stacks are:

- `"Montserrat", "Verdana", system-ui, -apple-system, sans-serif !default;`
- `"PT Sans", "Trebuchet MS", system-ui, -apple-system, sans-serif !default;`

These two fonts are not loaded by Serenity. You can include them either by using Google Fonts CDN either by (preferably) self-hosting the fonts and writing your own `@font-face` declarations.

Using Google Fonts, link these stylesheets in the `<head>` tag of your page.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i">
```

## Title

All HTML headings, `<h1>` through `<h6>`, are available,

<div class="sd-example">
    <h1>Title Level 1</h1>
    <h2>Title Level 2</h2>
    <h3>Title Level 3</h3>
    <h4>Title Level 4</h4>
    <h5>Title Level 5</h5>
    <h6>Title Level 6</h6>
</div>

```html
<h1>Title Level 1</h1>
<h2>Title Level 2</h2>
<h3>Title Level 3</h3>
<h4>Title Level 4</h4>
<h5>Title Level 5</h5>
<h6>Title Level 6</h6>
```

`.title--1` through `.title--6` classes are also available if you need to match a heading style on another type of element.

<div class="sd-example">
    <p class="title--1">Title Level 1</p>
    <p class="title--2">Title Level 2</p>
    <p class="title--3">Title Level 3</p>
    <p class="title--4">Title Level 4</p>
    <p class="title--5">Title Level 5</p>
    <p class="title--6">Title Level 6</p>
</div>

```html
<p class="title--1">Title Level 1</p>
<p class="title--2">Title Level 2</p>
<p class="title--3">Title Level 3</p>
<p class="title--4">Title Level 4</p>
<p class="title--5">Title Level 5</p>
<p class="title--6">Title Level 6</p>
```

## Link

Links are style by default, there is no need of a specific class use of `a` tag is enought. It include **:hover** and **:focus** style.

`link--external` class can be use to indicated that the link destination is "outside" of the current website.
`link--bold` class can be use to highlight the link.

<div class="sd-example">
    <p>
        This line contains a <a href="#">link</a> element
    </p>
    <p>
        This line contains an external link to <a href="https//immoweb.be" class="link--external" title="Open the Immoweb Website">Immoweb</a>.
    </p>
    <p>
        This line contains a bold <a href="#" class="link--bold">link</a> element
    </p>
</div>

```html
<p>This line contains a <a href="#">link</a> element</p>
<p>This line contains an external link to <a href="https//immoweb.be" class="link--external" title="Open the Immoweb Website">Immoweb</a>.</p>
<p>This line contains a bold <a href="#" class="link--bold">link</a> element</p>

```

## Inline text elements

Some inline HTML elements are also available.

<div class="sd-example">
    <p>This line contains a <span class="dark">dark</span> element</p>
    <p>This line contains a <strong>strong</strong> element</p>
    <p>This line contains a <em>em</em> element</p>
    <p>This line contains a <del>strikethrough</del> element</p>
    <p><u>This line of text will render as underlined</u></p>
</div>

```html
<p>This line contains a <span class="dark">dark</span> element</p>
<p>This line contains a <strong>strong</strong> element</p>
<p>This line contains a <em>em</em> element</p>
<p>This line contains a <del>strikethrough</del> element</p>
<p><u>This line of text will render as underlined</u></p>
```

### Small (and small-xs)

`small` is an inline element with some extra variation. It also exists in dark colored variation.

<div class="sd-example">
    <p>This line contains a <small>small</small> element</p>
    <p>This line contains a <small class="small--dark">small (in dark color)</small> element</p>
</div>

```html
    <p>This line contains a <small>small</small> element</p>
    <p>This line contains a <small class="small--dark">small (in dark color)</small> element</p>
```

`small-xs` element (a smaller variation of small) (also exists in dark colored variation).

<div class="sd-example">
    <p>This line contains a <small class="small--xs">small-xs</small> element</p>
    <p>This line contains a <small class="small--xs--dark">small-xs (in dark color)</small> element</p>
</div>

```html
    <p>This line contains a <small class="small--xs">small-xs</small> element</p>
    <p>This line contains a <small class="small--xs--dark">small-xs (in dark color)</small> element</p>
```

### Text Utility

Serenity provides some text utility to help you easily change the alignment, the color or the highlighting of the current text from the markup.

* `text-center` class is used to align text in the center of it's container.
* `text-right` class is used to align text on the right of it's container.
* `text-bold` class is used to highlight a part or whole of text.

<div class="sd-example">
    <p class="text-center">Centered aligned text</p>
    <p class="text-right">Right aligned text</p>
    <p class="text-bold">Bold text</p>
</div>

```html
<p class="text-center">Centered aligned text</p>
<p class="text-right">Right aligned text</p>
<p class="text-bold">Bold text</p>
```
