const gulp = require('gulp');
const minify = require('gulp-minify-css');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
	gulp.src('./src/css/main.scss')
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest('./dist/css/'))
});

gulp.task('minjs', function () {
	gulp.src('./src/js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('watch', function () {
	gulp.watch('./src/css/main.scss', ['sass']);
	gulp.watch('./src/js/main.js', ['minjs']);
});