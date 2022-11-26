'use strict';

var GLOBAL = {
    dirs: {
        gulp: './gulp/',
        sass: './src/sass/',
        pug: './src/pug/',
        docs: './src/documentation/',
        assets: './assets/',
        css: './assets/css/',
        libs: './libs/',
        bytebakers: './bytebakers/'
    },
    themeName: 'bytebakers'
};

var gulp = require('gulp');

gulp.task('sass', require(GLOBAL.dirs.gulp + 'sass')(GLOBAL, gulp));
gulp.task('min:css', require(GLOBAL.dirs.gulp + 'build')(GLOBAL, gulp));
gulp.task('pug', require(GLOBAL.dirs.gulp + 'pug')(GLOBAL, gulp));
gulp.task('watch', require(GLOBAL.dirs.gulp + 'watch')(GLOBAL, gulp));
gulp.task('imagemin', require(GLOBAL.dirs.gulp + 'imagemin')(GLOBAL, gulp));

gulp.task('bytebakers', ['bytebakersuild'], function () {
    gulp.start(['bytebakersmailconfig']);
});

gulp.task('bytebakersbuild', require(GLOBAL.dirs.gulp + 'bytebakersbuild')(GLOBAL, gulp));
gulp.task('bytebakerspixelate', require(GLOBAL.dirs.gulp + 'bytebakerspixelate')(GLOBAL, gulp));
gulp.task('bytebakersmailconfig', require(GLOBAL.dirs.gulp + 'bytebakersailconfig')(GLOBAL, gulp));

gulp.task('bytebakerszip', require(GLOBAL.dirs.gulp + 'bytebakerszip')(GLOBAL, gulp));

gulp.task('default', ['sass', 'pug', 'watch']);

gulp.task('docs', require(GLOBAL.dirs.gulp + 'docs')(GLOBAL, gulp));
