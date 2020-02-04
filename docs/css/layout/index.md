# Layout

## Overview

Layout, regroups various component helping you to lay out your project, including wrapping containers and a grid system.

## Container

Container is Serenity framework's base layout element.

<div class="sd-example">
    <div class="container">
        <div class="sd-example-block">
            container
        </div>
    </div>
</div>

```html
<div class="container">
    Container
</div>
```

:::tip Note
By default, container has a specific max-width for each breakpoint:

* x-small: 100%
* small: 540px
* medium: 720px
* desktop: 960px
* widescreen: 1140px

Container also has a padding of 20px for x-small & small breakpoints. This padding is set to 0 for medium and above breakpoints.
:::