var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('newerFTP', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: 'Web03.kcc.edu',
    //user: args.user,
    user: args.user,
    //password: args.password,
    password: args.password,
    log: gutil.log
  });
  var globs = [
    '_site/*.*',
    '_site/**/*.*',
    '_site/**/**/*.*',
    '_site/**/**/**/*.*',
    '_site/index.html'
  ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

  return gulp.src( globs, { base: './_site/', buffer: false } )
    .pipe( conn.clean( [ '/**' ], '_site/', { base: '.' } ) )
    .pipe( conn.newer( remotePath ) ) // only upload newer files
    .pipe( conn.dest( remotePath ) );
} );
