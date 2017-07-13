const gulp = require('gulp');
const minify = require('gulp-minify-css');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
	gulp.src('./styles/main.scss')
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest('./dist/css/'))
});

gulp.task('minjs', function () {
	gulp.src('./scripts/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('watch', function () {
	gulp.watch('./styles/main.scss', ['sass']);
	gulp.watch('./scripts/main.js', ['minjs']);
});