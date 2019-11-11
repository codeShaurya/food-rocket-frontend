/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  app.import('node_modules/alertifyjs/build/css/alertify.min.css');
  app.import('node_modules/alertifyjs/build/css/themes/default.min.css');
  app.import('node_modules/alertifyjs/build/alertify.min.js');

  return app.toTree();
};
