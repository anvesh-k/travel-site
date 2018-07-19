var gulpVar = require('gulp'),
watchVar = require('gulp-watch'),
browseerSyncVar = require('browser-sync').create()
;

gulpVar.task('watchVar', function () {
  browseerSyncVar.init({
    notify: false,
    server: {
      baseDir : "app"
    }
  });
  watchVar('./app/index.html', function () {
    //gulpVar.start('html');
    browseerSyncVar.reload();
  });

  watchVar('./app/assets/styles/**/*.css', function () {
    gulpVar.start('cssInject');

  });
});

gulpVar.task('cssInject', ['styles'], function () {
  return gulpVar.src('./app/temp/styles/styles.css')
  .pipe(browseerSyncVar.stream());
});
