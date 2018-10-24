# Typography

## Font-family:

By default, the font-family for titles is [Montserrat](https://fonts.google.com/specimen/Montserrat) and [PT Sans](https://fonts.google.com/specimen/PT+Sans) for other text.

If these fonts are not available it will fall back on the generic *sans-serif* family for both.

These two fonts are not loaded inside the CSS, you have to include them in the `<head>` tag of your page.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i">
```

## Title

All HTML headings, `<h1>` through `<h6>`, are available. h2, h3 and h4 also exist in a dark variation.

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

<div class="sd-example">
    <h2 class="title--2--dark">Title Level 2 dark</h2>
    <h4 class="title--4--dark">Title Level 4 dark</h4>
    <h5 class="title--5--dark">Title Level 5 dark</h5>
</div>

```html
<h2 class="title--2--dark">Title Level 2 dark</h2>
<h4 class="title--4--dark">Title Level 4 dark</h4>
<h5 class="title--5--dark">Title Level 5 dark</h5>
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

## Inline text elements

Some inline HTML elements are also available.

<div class="sd-example">
    <p>This line contains a <strong>strong</strong> element</p>
    <p>This line contains a <em>em</em> element</p>
    <p>This line contains a <del>strikethrough</del> element</p>
    <p><u>This line of text will render as underlined</u></p>
</div>

```html
<p>This line contains a <strong>strong</strong> element</p>
<p>This line contains a <em>em</em> element</p>
<p>This line contains a <del>strikethrough</del> element</p>
<p><u>This line of text will render as underlined</u></p>
```

### Small (and small-xs)

`small` is an inline element with some extra variation. It also exists in primary or dark colored variations.

<div class="sd-example">
    <p>This line contains a <small>small</small> element</p>
    <p>This line contains a <small class="small--primary">small (in primary color)</small> element</p>
    <p>This line contains a <small class="small--dark">small (in dark color)</small> element</p>
</div>

```html
    <p>This line contains a <small>small</small> element</p>
    <p>This line contains a <small class="small--primary">small (in primary color)</small> element</p>
    <p>This line contains a <small class="small--dark">small (in dark color)</small> element</p>
```

`small-xs` element (a smaller variation of small) (also exists in primary or dark colored variation).

<div class="sd-example">
    <p>This line contains a <small class="small--xs">small-xs</small> element</p>
    <p>This line contains a <small class="small--xs--primary">small-xs (in primary color)</small> element</p>
    <p>This line contains a <small class="small--xs--dark">small-xs (in dark color)</small> element</p>
</div>

```html
    <p>This line contains a <small class="small--xs">small-xs</small> element</p>
    <p>This line contains a <small class="small--xs--primary">small-xs (in primary color)</small> element</p>
    <p>This line contains a <small class="small--xs--dark">small-xs (in dark color)</small> element</p>
```

### Text Utility

Serenity provides some text utility to help you easily change the alignment or the color of the current text from the markup.

* `text-center` class is used to align text in the center of it's container.
* `text-right` class is used to align text on the right of it's container.
* `text-primary` class is used to set the color of the text with the $color-primary value.

<div class="sd-example">
    <p class="text-center">Centered aligned text</p>
    <p class="text-right">Right aligned text</p>
    <p class="text-primary">Primary colored text</p>
</div>

```html
<p class="text-center">Centered aligned text</p>
<p class="text-right">Right aligned text</p>
<p class="text-primary">Primary colored text</p>
```