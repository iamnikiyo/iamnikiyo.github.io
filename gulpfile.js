const gulp = require('gulp'),
    browserSync = require('browser-sync').create();

const sass = require('gulp-sass');


gulp.task('stylesSass',function(){
    gulp.src('./css/*.sass')
      .pipe(sass().on('error',sass.logError))
      .pipe(gulp.dest('./css/'))
});

gulp.task('modules',function(){
    gulp.src('./css/modules/*.sass')
      .pipe(sass().on('error',sass.logError))
      .pipe(gulp.dest('./css/'))
});

gulp.task('default', () => {
    browserSync.init({
        server: './'
    });
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./css/*.sass',['stylesSass']);
    gulp.watch('./css/modules/*.sass',['modules']);
    gulp.watch('./css/*.css').on('change',function() {
      gulp.src('./css/*.sass')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./css/'))
    });
    gulp.watch('./css/*.css').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change',browserSync.reload);
});
