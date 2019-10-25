const mix = require('laravel-mix');

const calcSrcPath = path => `./resources/${path}`;
const calcDistPath = path => `./django_mix/static/${path}`;
const djangoServer = '0.0.0.0:8000';

mix
  .js(calcSrcPath('js/bootstrap.js'), calcDistPath('js'))
  .js(calcSrcPath('js/app.js'), calcDistPath('js'))
  .sass(calcSrcPath('scss/app.scss'), calcDistPath('css'))
  .copy(calcSrcPath('favicon.ico'), calcDistPath('favicon.ico'))
  .copyDirectory(calcSrcPath('vendor'), calcDistPath('vendor'))
  .extract(['bootstrap', 'jquery', 'lodash', 'normalize.css', 'popper.js', 'vue']);

mix
  .setPublicPath(calcDistPath(''))
  .disableSuccessNotifications()
  .browserSync(djangoServer);

if (mix.inProduction()) mix.version();
