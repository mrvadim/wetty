/* eslint-disable @typescript-eslint/no-var-requires */

const { task, src, dest, series } = require('gulp');
const del = require('del');
const babel = require('gulp-babel');

const sourcemaps = require('gulp-sourcemaps');

task('clean', () => del('dist/**', {force:true}));

task('copy', () => src(['build/**/*', '!build/**/*.map']).pipe(dest('dist')));

/**
 * Converts ES module project to CommonJS.
 */
task('convert', () =>
    src(['dist/**/*.js', '!dist/client/**', '!dist/web_modules/**', '!dist/assets/**'])
    .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: [
              '@babel/plugin-transform-modules-commonjs',
              'babel-plugin-transform-import-meta'
            ]
        }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist')));

/**
 * Removes dist folder, copy files from build and convert all js files to CommonJS.
 */
exports.default = series('clean', 'copy', 'convert');