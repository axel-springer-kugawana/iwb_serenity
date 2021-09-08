# Serenity

Internal front-end framework for [Immoweb](https://immoweb.be).

[Read the Serenity docs](https://axel-springer-kugawana.github.io/iwb_serenity/)

## Table of contents

- [Quick start](#quick-start)
- [Dev](#dev)
- [File structure](#file-structure)
- [Documentation](#documentation)
- [Test your changes without releasing](#test-your-changes-without-releasing)

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

Serenity documentation can be consulted in the `/docs` folder or [online](https://axel-springer-kugawana.github.io/iwb_serenity) (thanks to [GitHub Pages](https://docs.github.com/en/pages).

### Running the documentation locally

1. Make sure you have [Node.js and npm installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
2. Run `npm ci` to install Node.js dependencies.
3. Run `npm start` to compile CSS and JavaScript files, generate the docs, and watch for changes (which is suitable for development) or `npm run docs:build` to build the documentation website in `/doc/.vuepress/dist`.
4. To browse the documentation:
  - If you ran `npm start`, you can browse the documentation on [`http://localhost:8080`](http://localhost:8080).
  - If you ran `npm run docs:build`, the documentation website is in `/doc/.vuepress/dist`.

### Deploying the documentation

Thanks to a [GitHub action](https://github.com/axel-springer-kugawana/iwb_serenity/blob/master/.github/workflows/deploy-doc.yml), the documentation website is automatically deployed when a [release tag](https://github.com/axel-springer-kugawana/iwb_serenity/releases) is created.

To trigger a deployment at another moment:
1. Go to _Actions_ / [_Deploy Documentation_](https://github.com/axel-springer-kugawana/iwb_serenity/actions/workflows/deploy-doc.yml).
2. Click _Run workflow_, let the default branch on `master` and click _Run workflow_.
3. Wait a couple of seconds for the dispatched action to appear in the list below the button.

## Test your changes without releasing

To test your changes in a real-world project before publishing a new version of Serenity, use the [`npm link`](https://docs.npmjs.com/cli/link.html) feature.

In the following how-to, `Serenity Project` refers to your local Serenity source, `Your Project` refers to your local project that use Serenity.

1. Inside `Your Project`, manually delete `node_modules/iwb_serenity`.
2. Inside the `Serenity Project`, run `npm link`.
3. Inside `Your Project`, run `npm link iwb_serenity`.

Now your project uses the `iwb_serenity` local version.

To roll back to the default state:

1. Inside `Your Project`, run `npm unlink iwb_serenity`.
2. Inside the `Serenity Project`, run `npm unlink`.
3. Inside `Your Project`, eventually reinstall the desired version of serenity (`npm install iwb_serenity`).