# 6px Angular Module Starter

> A start for Angular modules

## Getting started

This provides a starter for creating a Angular 2+ module bundle. All files you need live in /src.

Note: There is a `package.json` file inside of the `/dist` which is needed for publishing.

Once you have cloned the repo. From the root you can run `npm run build`. This will run scripts to cleanup, ngc, bundle, minify, and copy.

### Publish
To publish to npm you set this up, then run `npm run npm-to-publish`.
This uses the package noted above.

# Local development
To develop locally you want to do the following:

`npm run build`

`cd dist/`

`npm link`

This creates a symlink to your global node_modules. Then from your working directory:

`npm link 6-comp-test`

Once you are linked to your local copy of the module. In your `systemjs.config.js` file you need to add you mapping.
```javascript
map: {
  app: 'app',
  // angular bundles
  ...
  '6-comp-test': 'node_modules/6-comp-test/bundles/angular-module-starter.umd.js'
}
```
> NOTE: The name of your bundle is created inside your `rollup.config.js` file. Rollup us used for creating the umd module.

Then add this to your app module.
```javascript
import { AngularModuleStarterModule } from '6-comp-test';
```


### Live updates locally
When developing, make your changes and then run `npm run build`. Once this finishes just refresh and your changes should be seen locally.


## Credits

This project is basically a stripped down version of
[angular-async-local-storage](https://github.com/cyrilletuzi/angular-async-local-storage)
by [https://github.com/cyrilletuzi](https://github.com/cyrilletuzi). In his blog he explains how to build a decent
Angular module: [https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464#.9y88ipdk7](https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464#.9y88ipdk7)

## License

MIT
