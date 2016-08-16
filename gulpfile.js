var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browserSync',function(){
	browserSync.init({
		server : {
			baseDir : 'src'
		},
	})
});

gulp.task('watch',['browserSync'],function(){
	gulp.watch('src/*.html',browserSync.reload);
	gulp.watch('src/css/*.css',browserSync.reload);
});


gulp.task('default',function(){
	console.log("hello");
});