const gulp = require('gulp');

gulp.task('build', () => gulp
    .src('node_modules/simple-blog-ui/css/styles.css')
.pipe(gulp.dest('./public/css')));