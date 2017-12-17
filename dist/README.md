# 6px Angular Module Starter

> A start for Angular modules

This uses systemjs. Below add the module to your mapping.
``` javascript
map: {
  app: 'app',
  // angular bundles
  ...
  '6-comp-test': 'node_modules/6-comp-test/bundles/angular-module-starter.umd.js'
}
```
Then add this to your app module.
```javascript
import { AngularModuleStarterModule } from '6-comp-test';
```

## Credits

This project is basically a stripped down version of
[angular-async-local-storage](https://github.com/cyrilletuzi/angular-async-local-storage)
by [https://github.com/cyrilletuzi](https://github.com/cyrilletuzi). In his blog he explains how to build a decent
Angular module: [https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464#.9y88ipdk7](https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464#.9y88ipdk7)

## License

MIT
