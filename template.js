module.exports = {
  description: 'Create a backbone plugin template with grunt-init.',
  notes: 'Create backbone plugin project templates with ease.',

  warnOn: '*',

  template: function(grunt, init, done) {
    init.process({type: 'grunt'}, [
      init.prompt('name'),
      init.prompt('description'),
      init.prompt('version'),
      init.prompt('repository'),
      init.prompt('homepage'),
      init.prompt('bugs'),
      init.prompt('licenses'),
      init.prompt('author_name'),
      init.prompt('author_email'),
      init.prompt('author_url'),
      init.prompt('grunt_version'),
      init.prompt('node_version', grunt['package'].engines.node)
    ], function(error, properties) {
      // Set a few grunt-plugin-specific properties.
      properties.main = 'Gruntfile.js';
      properties.npm_test = 'grunt test';
      properties.keywords = ['backbone', 'plugin'];
      properties.devDependencies = {grunt: '0.4.0rc7'};

      var files = init.filesToCopy(properties);

      init.addLicenseFiles(files, properties.licenses);
      init.copyAndProcess(files, properties);
      init.writePackageJSON('package.json', properties);

      done();
    });
  }
};
