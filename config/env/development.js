'use strict';

module.exports = {
  karma: {
    browsers: ['PhantomJS'],
    preprocessors: {
      'test/*.html' : ['html2js']
    },
    reporters: ['progress'],
    autoWatch: false,
    singleRun: true,
    coverageReporter: {
        type: 'lcov',
        dir: 'coverage/'
      }
  }
};
