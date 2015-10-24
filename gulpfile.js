var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    tsPath = 'src/ts/*.ts',
    compilePath = 'src/js';


gulp.task('typescript', function () {
    var tsResult = gulp.src(tsPath)
                       .pipe(sourcemaps.init())
                       .pipe(ts({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: true
                       }));

    return tsResult.js
                   .pipe(sourcemaps.write('.'))
                   .pipe(gulp.dest(compilePath));
});

gulp.task('watch', function() {

    gulp.watch([tsPath], ['typescript']);

});

gulp.task('default', ['typescript', 'watch']);
