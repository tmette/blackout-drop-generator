const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');

gulp.task('sass', () => {
    return gulp.src(['assets/scss/index.scss', 'assets/scss/**/*.scss'])
        .pipe(concat('index.scss'))
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('assets/css'));
});


gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./",
			https: true
		}
	});
});

gulp.task('watch', () => {
    gulp.watch(['index.scss', 'assets/scss/**/*.scss'], ['sass']);
});