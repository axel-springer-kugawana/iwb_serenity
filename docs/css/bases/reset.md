## Reset

Reset defines the default style for primary elements to reduce browser inconsistencies such as default line heights, margins, heading font sizes, and so on.

The Serenity reset is based on [normalize.css](https://github.com/necolas/normalize.css).

Here is a list of some of the major reset that will occur :

* Update some browser default values to use rems instead of ems for scalable component spacing.
* The box-sizing is globally set on every element—including `*::before` and `*::after`, to border-box so that `width` is not affected by `padding` or `border`.
* To avoid margins collapse and a simple mental layout model, the margin-top of most element are reset to 0.
* For easier scaling across device sizes, margins and padding use *rems*.

:::tip Note
If you want to have a complete overview of what the reset is doing, please refer to the normalize documentation.
:::