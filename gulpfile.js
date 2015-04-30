var gulp = require('gulp'),
	size = require('gulp-size'),
	svg = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),
	html2jade = require('gulp-html2jade');

gulp.task('svg', function () {
    return gulp
        .src('icons/*.svg')
        .pipe(svgmin())
        .pipe(svg())
        .pipe(gulp.dest('sprites/'))
        .pipe(size());
});

gulp.task('jade', function () {
    return gulp
        .src('sprites/*.svg')
        .pipe(html2jade())
    	.pipe(gulp.dest('jade'))
    	.pipe(size());
});