var gulp        = require("gulp");
var sass        = require("gulp-sass");
var browserSync = require("browser-sync").create();
var plumber     = require("gulp-plumber");

gulp.task("serve", function(){
  browserSync.init(['./*', '!./gulpfile.js'], {
    server: {
      baseDir: "./"
    }
  });
});



gulp.task("sass", function(){
  gulp.src('./style.scss')
      .pipe(plumber())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('./'));
});

gulp.task("watch", function(){
  gulp.watch("./*.scss", ['sass']);
});



gulp.task("default", ["watch", "serve"]);
