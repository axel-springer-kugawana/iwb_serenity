# Grid system


## Overview

The Serenity grid is a twelve column system, based on Flexbox, with 20px gutters.

<div class="sd-example">
    <div class="grid">
        <div class="grid__item desktop--12">
            <div class="sd-example-block">
                <p>12</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--11">
            <div class="sd-example-block">
                <p>11</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--10">
            <div class="sd-example-block">
                <p>10</p>
            </div>
        </div>
        <div class="grid__item desktop--2">
            <div class="sd-example-block">
                <p>2</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--9">
            <div class="sd-example-block">
                <p>9</p>
            </div>
        </div>
        <div class="grid__item desktop--3">
            <div class="sd-example-block">
                <p>3</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--8">
            <div class="sd-example-block">
                <p>8</p>
            </div>
        </div>
        <div class="grid__item desktop--4">
            <div class="sd-example-block">
                <p>4</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--7">
            <div class="sd-example-block">
                <p>7</p>
            </div>
        </div>
        <div class="grid__item desktop--5">
            <div class="sd-example-block">
                <p>5</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--6">
            <div class="sd-example-block">
                <p>6</p>
            </div>
        </div>
        <div class="grid__item desktop--6">
            <div class="sd-example-block">
                <p>6</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--4">
            <div class="sd-example-block">
                <p>4</p>
            </div>
        </div>
        <div class="grid__item desktop--4">
            <div class="sd-example-block">
                <p>4</p>
            </div>
        </div>
        <div class="grid__item desktop--4">
            <div class="sd-example-block">
                <p>4</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--3">
            <div class="sd-example-block">
                <p>3</p>
            </div>
        </div>
        <div class="grid__item desktop--3">
            <div class="sd-example-block">
                <p>3</p>
            </div>
        </div>
        <div class="grid__item desktop--3">
            <div class="sd-example-block">
                <p>3</p>
            </div>
        </div>
        <div class="grid__item desktop--3">
            <div class="sd-example-block">
                <p>3</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--2">
            <div class="sd-example-block">
                <p>2</p>
            </div>
        </div>
        <div class="grid__item desktop--2">
            <div class="sd-example-block">
                <p>2</p>
            </div>
        </div>
        <div class="grid__item desktop--2">
            <div class="sd-example-block">
                <p>2</p>
            </div>
        </div>
        <div class="grid__item desktop--2">
            <div class="sd-example-block">
                <p>2</p>
            </div>
        </div>
        <div class="grid__item desktop--2">
            <div class="sd-example-block">
                <p>2</p>
            </div>
        </div>
        <div class="grid__item desktop--2">
            <div class="sd-example-block">
                <p>2</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
        <div class="grid__item desktop--1">
            <div class="sd-example-block">
                <p>1</p>
            </div>
        </div>
    </div>
</div>

## Basic grid

Start a grid with the `grid` class then add content by stacking items with the class `grid__item`. They will be added top to bottom, taking 100% of the width by default.

<div class="sd-example">
    <div class="grid">
        <div class="grid__item">
            <div class="sd-example-block">
                First line.
            </div>
        </div>
        <div class="grid__item">
            <div class="sd-example-block">
                Second line.
            </div>
        </div>
    </div>
</div>

```html
<div class="grid">
    <div class="grid__item">
        First line.
    </div>
    <div class="grid__item">
        Second line.
    </div>
</div>
```

## Columns

To position grid items next to each other, you have to specify modifiers by specifying the relative width of the desired columns. Use a number between 1 (minimum) and 12 (maximum).

In that system, a 50% width column would have a modifier of 6.

The modifier is prefixed by the breakpoint for which it is active. Possible breakpoints are: *x-small*, *small*, *medium*, *desktop*, *widescreen*.

The following example would show 2 lines on mobile, but two columns on desktop and larger:

<div class="sd-example">
    <div class="grid">
        <div class="grid__item desktop--6">
            <div class="sd-example-block">
                Left column.
            </div>
        </div>
        <div class="grid__item desktop--6">
            <div class="sd-example-block">
                Right column.
            </div>
        </div>
    </div>
</div>

```html
<div class="grid">
    <div class="grid__item desktop--6">
        Left column.
    </div>
    <div class="grid__item desktop--6">
        Right column.
    </div>
</div>
```

## Push and pull

If you want to leave some white space between columns, you can specify a modifier with the width of the desired gap on the left (`push`) or on the right (`pull`) of the grid item.

Just like columns modifiers, the push and pull modifiers are prefixed by the breakpoint from which they are active.

In the following example, the left columns is pushed 3 steps to the right on desktop and larger:

<div class="sd-example">
    <div class="grid">
        <div class="grid__item desktop--3 desktop--push--3">
            <div class="sd-example-block">
                Smaller left column with space on the left.
            </div>
        </div>
        <div class="grid__item desktop--6">
            <div class="sd-example-block">
                Right column.
            </div>
        </div>
    </div>
</div>

```html
<div class="grid">
    <div class="grid__item desktop--3 desktop--push--3">
        Smaller left column with space on the left.
    </div>
    <div class="grid__item desktop--6">
        Right column.
    </div>
</div>
```

## Horizontal modifier

For some specific cases you want to force a grid to align their children from right to left or in the center. You can use the `horizontal--end` (aligned to the right) and `horizontal--center` (aligned to the center) on the grid container.

Just like columns modifiers, the horizontal modifiers are prefixed by the breakpoint for which they are active.

<div class="sd-example">
    <p><strong>Horizontal right alligned grid</strong></p>
    <div class="grid desktop--horizontal--end">
        <div class="grid__item desktop--3">
            <div class="sd-example-block">
               Left column.
            </div>
        </div>
        <div class="grid__item desktop--6">
            <div class="sd-example-block">
                Right column.
            </div>
        </div>
    </div>
    <p><strong>Horizontal center aligned grid</strong></p>
    <div class="grid desktop--horizontal--center">
        <div class="grid__item desktop--3">
            <div class="sd-example-block">
               Left column.
            </div>
        </div>
        <div class="grid__item desktop--6">
            <div class="sd-example-block">
                Right column.
            </div>
        </div>
    </div>
</div>

```html
<p><strong>Horizontal right aligned grid</strong></p>
<div class="grid desktop--horizontal--end">
    <div class="grid__item desktop--3">
        <div class="sd-example-block">
           Left column.
        </div>
    </div>
    <div class="grid__item desktop--6">
        <div class="sd-example-block">
            Right column.
        </div>
    </div>
</div>
<p><strong>Horizontal center aligned grid</strong></p>
<div class="grid desktop--horizontal--center">
    <div class="grid__item desktop--3">
        <div class="sd-example-block">
           Left column.
        </div>
    </div>
    <div class="grid__item desktop--6">
        <div class="sd-example-block">
            Right column.
        </div>
    </div>
</div>
```

## Vertical modifier

By default all children of a grid are aligned on top of the grid. If you want to align them in the center you can use `vertical--center` on the grid container.

Just like columns modifiers, the horizontal modifiers are prefixed by the breakpoint for which they are active.

<div class="sd-example">
    <div class="grid desktop--vertical--centered">
        <div class="grid__item desktop--2">
            <div class="sd-example-block">
               Column with long content and bigger height than the other column
            </div>
        </div>
        <div class="grid__item desktop--6">
            <div class="sd-example-block">
                Right column.
            </div>
        </div>
    </div>
</div>

```html
<div class="sd-example">
    <div class="grid desktop--vertical--centered">
        <div class="grid__item desktop--2">
            <div class="sd-example-block">
               Column with long content and bigger height than the other column
            </div>
        </div>
        <div class="grid__item desktop--6">
            <div class="sd-example-block">
                Right column.
            </div>
        </div>
    </div>
</div>
```


## Centered grid

There is a special modifier for cases where the total number of grid items is less than 12, but you want them to be evenly spaced.

In that case, put the `centered` modifier on your grid.

<div class="sd-example">
    <div class="grid grid--centered">
        <div class="grid__item desktop--3">
            <div class="sd-example-block">
                Left column.
            </div>
        </div>
        <div class="grid__item desktop--4">
            <div class="sd-example-block">
                Right column.
            </div>
        </div>
    </div>
</div>

```html
<div class="grid grid--centered">
    <div class="grid__item desktop--3">
        Left column.
    </div>
    <div class="grid__item desktop--4">
        Right column.
    </div>
</div>
```