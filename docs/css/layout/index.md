# Layout

## Overview

Layout, regroup various component helping you laying out your project, including wrapping containers and a grid system.

## Container

Container is the base layout element of serenity framework.

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
By default, container have a specific max-width for each breakpoints:

* x-small: 100%
* small: 540px
* medium: 720px
* desktop: 960px
* widescreen: 1140px

Container also have a padding of 20px for x-small & small breakpoints. This padding is set to 0 for medium and above breakpoints.
:::

### Container No Gutter

The `no-gutter` modifier remove the container padding on the x-small breakpoint, making the container taking 100% of is parent.

<div class="sd-example">
    <div class="container--no-gutter">
        <div class="sd-example-block">
            container
        </div>
    </div>
</div>

```html
<div class="container--no-gutter">
    Container No Gutter
</div>
```

:::tip Note
The padding is still apply on the `small` breakpoint
:::