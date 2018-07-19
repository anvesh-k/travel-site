var gulpVar = require('gulp'),
postcssVar = require('gulp-postcss'),
autoprefixerVar = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImportVar = require('postcss-import'),
mixinsVar = require('postcss-mixins')
;

gulpVar.task('styles', function () {
  console.log('Imagine SaaS or PostCSS tasks running here');
  return gulpVar.src('./app/assets/styles//styles.css')
  .pipe(postcssVar([cssImportVar, mixinsVar, cssvars, nested, autoprefixerVar]))
  .on('error', function (errorInfo) {
    console.log(errorInfo.toString())
    this.emit('end');
  })
  .pipe(gulpVar.dest('./app/temp/styles'));
});
