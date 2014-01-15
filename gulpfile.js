var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile Scss
gulp.task('sass', function () {
	gulp.src('./assets/sass/main.scss')
		.pipe(sass({ includePaths : ['./assets/sass/']}))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('default', function() {
	gulp.run('sass');
})