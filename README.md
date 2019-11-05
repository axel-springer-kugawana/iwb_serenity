# iwb_serenity

Internal front-end framework for Immoweb.

[Read the Serenity docs](https://axel-springer-kugawana.github.io/iwb_serenity/)

## Table of contents

- [Quick start](#quick-start)
- [Dev](#dev)
- [File structure](#file-structure)
- [Documentation](#documentation)

## Quick start

- Clone the repo: `git@github.com:axel-springer-kugawana/iwb_serenity.git`

## Dev

Compile CSS (include lint, scss compilation, autoprefixer and minification)

```
    npm run css
```

For development purpose (Watch scss files change and launch compilation)

```
    npm run watch:css
```

## File Structure

Source files are saved inside /src folder.
Compiled files are saved inside /dist folder.

```
iwb_serenity/
├── dist/
│   ├── css/
│   │   ├── serenity.css
│   │   ├── serenity.css.map
│   │   ├── serenity.min.css
│   │   └── serenity.min.css.map
└───┴── src/
        └── scss/
            ├── utils/
            │   └── ...
            └── serenity.scss
```

## Documentation

Serenity documentation, included in this repo inside the `/docs` folder, is built with [Vue Press](https://vuepress.vuejs.org/) and publicly hosted on GitHub Pages. The docs may also be run locally.

### Running documentation locally

1. Make sure you have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm start` to compile CSS and JavaScript files, generate the docs, and watch for changes.
4. The doc is accessible in your browser at this url `http://localhost:8080`.

#### Test Serenity in your Website whitout release

It could be usefull to test your change in your real environement before publishing them, it can be easily achieve with the [npm link](https://docs.npmjs.com/cli/link.html) feature.

In the following how to, `Serenity Project` refers to your local Serenity source, `Your Project` refers to your local project that use Serenity.

1. Inside `Your Project`, manually delete the iwb_serenity folder in the node_modules folder.
2. Inside the `Serenity Project`, run `npm link`.
3. Inside `Your Project`, run `npm link iwb_serenity`.

Now your project use the iwb_serenity local version.

To role back this to a default state (Use the release Serenity version).

1. Inside `Your Project`, run `npm unlink iwb_serenity`.
2. Inside the `Serenity Project`, run `npm unlink`.
3. Inside `Your Project`, eventually reinstall the desired version of serenity, run `npm install iwb_serenity`.

### Deploy documentation

To deploy the documentation on [Github Pages](https://axel-springer-kugawana.github.io/iwb_serenity/), run `deploy.sh` script (It may ask your credential). It will generate the build of the documentation and push it on the *gh-pages* branch (use by github to display the documentation page).
