'use strict';

// Include Gulp and other build automation tools and utilities
// See: https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var path = require('path');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var argv = require('minimist')(process.argv.slice(2));

// Settings
var RELEASE = !!argv.release;                 // Minimize and optimize during a build?
var AUTOPREFIXER_BROWSERS = [                 // https://github.com/ai/autoprefixer
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

var src = {};
var watch = false;
var browserSync;

// The default task
gulp.task('default', ['sync']);

// Clean output directory
gulp.task('clean', del.bind(
  null, ['.tmp', 'build/*', '!build/.git'], {dot: true}
));


// Bundle
gulp.task('bundle', function(cb) {
  var started = false;
  var config = require('./webpack.config.js');
  var bundler = webpack(config);

  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    if (argv.verbose) {
      $.util.log('[webpack]', stats.toString({colors: true}));
    }

    if (!started) {
      started = true;
      return cb();
    }
  }

  if (watch) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});

// Build the app from source code
gulp.task('build', ['clean'], function(cb) {
  runSequence(['lib', 'bundle'], cb);
});

// Build and start watching for modifications
gulp.task('build:watch', function(cb) {
  watch = true;
  runSequence('build', function() {
    // gulp.watch(src.assets, ['assets']);
    // gulp.watch(src.styles, ['styles']);
    cb();
  });
});

// Launch a Node.js/Express server
gulp.task('serve', ['build:watch'], function(cb) {
  src.server = [
    'build/server.js'
  ];

  var started = false;
  var cp = require('child_process');
  var assign = require('lodash.assign');

  var server = (function startup() {
    var child = cp.fork('build/server.js', {
      env: assign({}, {
        NODE_ENV: 'development'
      }, process.env)
    });
    child.once('message', function(message) {
      if (message.match(/^online$/)) {
        if (browserSync) {
          browserSync.reload();
        }
        if (!started) {
          started = true;
          gulp.watch(src.server, function() {
            $.util.log('Restarting development server.');
            server.kill('SIGTERM');
            server = startup();
          });
          cb();
        }
      }
    });
    return child;
  })();

  process.on('exit', function() {
    server.kill('SIGTERM');
  });
});

// Launch BrowserSync development server
gulp.task('sync', ['serve'], function(cb) {
  browserSync = require('browser-sync');

  browserSync({
    notify: false,
    // Run as an https by setting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    https: false,
    // Informs browser-sync to proxy our Express app which would run
    // at the following location
    proxy: 'localhost:5000'
  }, cb);

  process.on('exit', function() {
    browserSync.exit();
  });

  gulp.watch(['build/**/*.*'].concat(
    src.server.map(function(file) {return '!' + file;})
  ), function(file) {
    browserSync.reload(path.relative(__dirname, file.path));
  });
});

// Deploy to GitHub Pages
gulp.task('deploy', function() {

  // Remove temp folder
  if (argv.clean) {
    var os = require('os');
    var repoPath = path.join(os.tmpdir(), 'tmpRepo');
    $.util.log('Delete ' + $.util.colors.magenta(repoPath));
    del.sync(repoPath, {force: true});
  }

  return gulp.src('build/**/*')
    .pipe($.if('**/robots.txt', !argv.production ?
      $.replace('Disallow:', 'Disallow: /') : $.util.noop()))
    .pipe($.ghPages({
      remoteUrl: 'https://github.com/{name}/{name}.github.io.git',
      branch: 'master'
    }));
});

// Run PageSpeed Insights
gulp.task('pagespeed', function(cb) {
  var pagespeed = require('psi');
  // Update the below URL to the public URL of your site
  pagespeed.output('example.com', {
    strategy: 'mobile'
    // By default we use the PageSpeed Insights free (no API key) tier.
    // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
    // key: 'YOUR_API_KEY'
  }, cb);
});


// Launch BrowserSync development server
gulp.task('run', ['serve'], function(cb) {
  browserSync = require('browser-sync');

  browserSync({
    notify: false,
    // Run as an https by setting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    https: false,
    // Informs browser-sync to proxy our Express app which would run
    // at the following location
    proxy: 'localhost:5000'
  }, cb);

  process.on('exit', function() {
    browserSync.exit();
  });

  gulp.watch(['build/**/*.*'].concat(
      src.server.map(function(file) {return '!' + file;})
  ), function(file) {
    browserSync.reload(path.relative(__dirname, file.path));
  });
});