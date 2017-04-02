const gulp = require('gulp'),
  sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('src/css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', () => {
  gulp.watch('src/css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);