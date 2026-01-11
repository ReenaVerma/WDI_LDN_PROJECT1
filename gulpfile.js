const pump = require('pump');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();
const gulpIf = require('gulp-if');
const { series, parallel } = gulp;

let production = false;

/* ================= CLEAN TASKS ================= */

function cleanCss() {
  return del(['public/css']);
}

function cleanJs() {
  return del(['public/js']);
}

function cleanHtml() {
  return del(['public/index.html']);
}

function cleanFonts() {
  return del(['public/fonts/**']);
}

function cleanImages() {
  return del(['public/images/**']);
}

function cleanSounds() {
  return del(['public/sounds/**']);
}

/* ================= COPY TASKS ================= */

function fonts() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('public/fonts'));
}

function images() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('public/images'));
}

function sounds() {
  return gulp.src('src/sounds/**/*')
    .pipe(gulp.dest('public/sounds'));
}

function html() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('public/'));
}

/* ================= BUILD TASKS ================= */

function css(done) {
  pump([
    gulp.src('src/scss/style.scss'),
    gulpIf(!production, sourcemaps.init()),
    sass({ outputStyle: 'compressed' }).on('error', sass.logError),
    gulpIf(!production, sourcemaps.write()),
    gulp.dest('public/css')
  ], done);
}

function js(done) {
  pump([
    gulp.src('src/js/app.js'),
    gulpIf(!production, sourcemaps.init()),
    babel({ presets: ['env'] }),
    uglify(),
    gulpIf(!production, sourcemaps.write()),
    gulp.dest('public/js')
  ], done);
}

/* ================= COMPOSED TASKS ================= */

const build = series(
  parallel(
    series(cleanFonts, fonts),
    series(cleanImages, images),
    series(cleanSounds, sounds),
    series(cleanHtml, html),
    series(cleanCss, css),
    series(cleanJs, js)
  )
);

function deploy(done) {
  production = true;
  build(done);
}

/* ================= DEV / WATCH ================= */

function serve() {
  browserSync.init({
    server: './public',
    online: false
  });

  gulp.watch('src/images/**', series(cleanImages, images));
  gulp.watch('src/fonts/**', series(cleanFonts, fonts));
  gulp.watch('src/sounds/**', series(cleanSounds, sounds));
  gulp.watch('src/index.html', series(cleanHtml, html)).on('change', browserSync.reload);
  gulp.watch('src/scss/style.scss', series(cleanCss, css)).on('change', browserSync.reload);
  gulp.watch('src/js/app.js', series(cleanJs, js)).on('change', browserSync.reload);
}

/* ================= EXPORTS ================= */

exports.build = build;
exports.deploy = deploy;
exports.default = series(build, serve);
