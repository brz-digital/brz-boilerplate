import * as cons from './constants';
import gulp from 'gulp';

gulp.task('vendors', () => {
    return gulp.src([
        `${cons.vendor}/jquery/dist/jquery.js`,

        `${cons.vendor}/bootstrap-sass/assets/javascripts/bootstrap/transition.js`,
        `${cons.vendor}/bootstrap-sass/assets/javascripts/bootstrap/alert.js`,
        `${cons.vendor}/bootstrap-sass/assets/javascripts/bootstrap/button.js`,
        `${cons.vendor}/bootstrap-sass/assets/javascripts/bootstrap/modal.js`,
        `${cons.vendor}/bootstrap-sass/assets/javascripts/bootstrap/affix.js`,
        `${cons.vendor}/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js`,

        `${cons.vendor}/jquery-mask-plugin/dist/jquery.mask.js`,
        `${cons.vendor}/magnific-popup/dist/jquery.magnific-popup.js`,
        `${cons.vendor}/swiper/dist/js/swiper.jquery.js`
    ])
    .pipe(cons.$.newer(`${cons.tmp}/scripts`))
    .pipe(cons.$.sourcemaps.init())
    .pipe(cons.$.sourcemaps.write())
    .pipe(cons.$.concat('vendors.min.js'))
    .pipe(cons.$.uglify({preserveComments: 'some'}))
    .pipe(gulp.dest(`${cons.tmp}/scripts`))
    .pipe(cons.$.size({title: '[vendors]'}));
});
