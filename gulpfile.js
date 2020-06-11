const {src, dest, watch, series, task, parallel } = require('gulp');
const sass = require('gulp-sass');

const bourbon = require('node-bourbon').includePaths;


// -- Components ---
let blocks = [
    'button',
]


blocks.forEach((blockName) => {
    task('compile:' + blockName, () => {
        return src(`src/${blockName}/${blockName}.sass`)
            .pipe(sass({
                outputStyle: 'compressed',
                sourceComments: 'map',
                sourceMap: 'sass',
                includePaths: bourbon
            }).on('error', sass.logError))
            .pipe(dest(`src/${blockName}`))
    })

    task('watch:' + blockName, () => {
        watch(`src/${blockName}/${blockName}.sass`, series(`compile:${blockName}`))
        watch(`src/${blockName}/sass/*.sass`, series(`compile:${blockName}`))
    })
})


// -- Bundle to one --
task('bundle_sass', parallel(blocks.map((name) => 'compile:' + name)))
task('build', series(parallel('bundle_sass')))
