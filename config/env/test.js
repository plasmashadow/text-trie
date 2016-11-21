'use strict';

module.exports = {
  karma: {
    browsers: ['Chrome', 'Firefox'], // add more browsers i.e. Firefox, IE...
    preprocessors: {
      'lib/*.js': 'coverage',
      'test/*.html' : ['html2js']
    },
    reporters: ['progress', 'coverage'],
    autoWatch: true,
    singleRun: true,
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    }
  }
};
