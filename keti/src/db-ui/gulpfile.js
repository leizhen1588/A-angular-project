var path = require('path')
var gulp = require('gulp')
var ora = require('ora')
var nop = require('gulp-nop')
var concat = require('gulp-concat')
var postcss = require('gulp-postcss')
var cssmin = require('gulp-cssmin')
var config = require('./config')

var salad = function (browsers) {
  return require('postcss-salad')({
    browsers: browsers || config.browsers,
    features: config.features
  })
}
 function fonts(opts) {
  var stream = gulp.src('./src/fonts/*')
    .pipe((opts.minimize || config.minimize) ? cssmin({showLog: false}) : nop())
    .pipe(gulp.dest('./../css/db-ui/fonts'))
  return stream
}

 function build(opts) {
  var stream = gulp.src('./src/*.css/')
    .pipe(postcss([salad(opts.browsers)]))
    .pipe(concat('db-ui.min.css'))
    // .pipe((opts.minimize || config.minimize) ? cssmin({showLog: false}) : nop())
    .pipe(gulp.dest('./../css/db-ui'))
  return stream
}

gulp.task('build',build);
gulp.task('fonts',fonts);

gulp.task('w',function(){
	gulp.watch('./src/**',['build']);
});
gulp.task('default',['build'])