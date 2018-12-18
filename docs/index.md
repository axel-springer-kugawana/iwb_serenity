# Introduction

## Quick start

Serenity is Immoweb's internal front-end framework. It is build with [Sass](https://sass-lang.com/) (scss syntax) for styles and [VueJS](https://vuejs.org/) for interactivity.

## Installation

```cli
npm install iwb_serenity
```

## Requirements

### HTML5
Serenity is built for a website using [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5). Make sure your website includes the correct HTML5 doctype.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag
Serenity is a mobile first framework. Make sure your website includes the responsive viewport meta tag inside the `<head>` tag.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Browser Compatibility

Serenity intent to supports the latest, stable releases of all major browsers and platforms. On windows we support Internet Explorer 11 and Microsoft Edge.

You can find the supported range of browsers and their versions in the browserslist section of [package.json](https://github.com/axel-springer-kugawana/iwb_serenity/blob/master/package.json):

```json
"browserslist": [
    "> 0.3%",
    "last 7 versions",
    "Android >= 4",
    "Firefox >= 27",
    "iOS >= 7",
    "Safari >= 7",
    "Chrome >= 30",
    "Explorer >= 11"
]
```

We use Autoprefixer to handle CSS prefixes (based on Browserslist).

