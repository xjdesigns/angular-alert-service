export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/6px-angular-alert-service.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.spxAlertModule',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/router': 'ng.router',
    '@angular/platform-browser': 'ng.platformBrowser',
    'rxjs/Subject': 'rxjs.Subject'
  }
}
