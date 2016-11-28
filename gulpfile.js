const gulp = require('gulp'),
    browserSync = require('browser-sync').create();

const sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

gulp.task('default', () => {
    browserSync.init({
        server: './'
    });
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./css/*.scss',['styles']);
    gulp.watch('./css/*.css').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change',browserSync.reload);
});

