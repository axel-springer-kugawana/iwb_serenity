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

### Documentation

Serenity documentation, included in this repo inside the `/docs` folder, is built with [Vue Press](https://vuepress.vuejs.org/) and publicly hosted on GitHub Pages. The docs may also be run locally.

#### Running documentation locally

1. Make sure you have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm start` to compile CSS and JavaScript files, generate the docs, and watch for changes.
4. The doc is accessible in your browser at this url `http://localhost:8080`.

#### Deploy documentation

To deploy the documentation on [Github Pages](https://axel-springer-kugawana.github.io/iwb_serenity/), run `deploy.sh` script (It may ask your credential). It will generate the build of the documentation and push it on the *gh-pages* branch (use by github to display the documentation page).
