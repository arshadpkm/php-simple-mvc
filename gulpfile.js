var gulp = require('gulp');
var googleWebFonts = require('gulp-google-webfonts');

// Include plugins
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

// Define default destination folder
var dest = 'public/assets/';

gulp.task('resources', function() {
    gulp.src(['resources/js/**/*.js'],[''])
        .pipe(plugins.debug())
        .pipe(plugins.concat('app.min.js'))
        // .pipe(plugins.uglify())
        .pipe(gulp.dest(dest + 'js/'));

    gulp.src(['resources/css/**/*.css'])
        .pipe(plugins.debug())
        .pipe(plugins.concat('main.min.css'))
        .pipe(gulp.dest(dest + 'css/'));

});

var options = { };
gulp.task('fonts', function() {
    gulp.src('./fonts.list')
        .pipe(googleWebFonts(options))
        .pipe(gulp.dest(dest + 'css/fonts'));
});

gulp.task('bower', function() {
    gulp.src(plugins.mainBowerFiles())
        .pipe(plugins.debug())
        .pipe(plugins.concat('resources.min.js'))
        // .pipe(plugins.uglify())
        .pipe(gulp.dest(dest + 'js/'));
});

// Compiles LESS > CSS 
gulp.task('build-less', function(){
    return gulp.src('resources/css/styles.less')
        .pipe(plugins.less())
        .pipe(plugins.concat('resources.min.css'))
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest(dest + 'css/'));
});

gulp.task('watch', function() {
    // All files in bower_components
    gulp.watch(['bower.json', 'resources/**'], ['default']);
});

gulp.task('default', ['resources', 'bower', 'fonts']);
