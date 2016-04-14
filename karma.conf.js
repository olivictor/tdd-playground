var webpackConfig = require('./webpack.config.js')
    webpack = require('webpack')

module.exports = function(config) {
  config.set({
    basePath: 'spec',
    frameworks: ['jasmine'],
    files: ['./**/*-spec.js'],
    exclude: [],

    preprocessors: {
     '**/*-spec.js': ['webpack'],
    },

    webpack: webpackConfig,
    reporters: ['nyan'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: process.env.CI
  })
}
