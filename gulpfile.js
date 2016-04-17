var gulp = require('gulp');
var gutil = require('gulp-util');
var taskListing = require('gulp-task-listing');
var path = require('canonical-path');

var _ = require('lodash');
var fsExtra = require('fs-extra');
var fs = fsExtra;
var globby = require("globby");
var Minimatch = require("minimatch").Minimatch;
var Q = require("q");

var TOOLS_PATH = './tools';
// var EXAMPLES_PATH = path.join('./', '');
var EXAMPLES_PATH = path.join('./', 'examples');
// var PUBLIC_PATH = './plunker';
// var RESOURCES_PATH = path.join(PUBLIC_PATH, 'resources');
// var LIVE_EXAMPLES_PATH = path.join(RESOURCES_PATH, 'live-examples');
var LIVE_EXAMPLES_PATH = path.join('./', 'live-examples');
// var LIVE_EXAMPLES_PATH = undefined;
var TEMP_PATH = './_temp';

var fsUtils = require(path.resolve(TOOLS_PATH, 'fs-utils/fsUtils'));

// vardocs docShredder = require(path.resolve(TOOLS_PATH, 'doc-shredder/doc-shredder'));
var plunkerBuilder = require(path.resolve(TOOLS_PATH, 'plunker-builder/plunkerBuilder'));

var _exampleBoilerplateFiles = ['package.json', 'tsconfig.json', 'typings.json', 'karma.conf.js', 'karma-test-shim.js' ];

gulp.task('default', ['help']);

gulp.task('help', taskListing.withFilters(function (taskName) {
  var isSubTask = taskName.substr(0, 1) == "_";
  return isSubTask;
}, function (taskName) {
  var shouldRemove = taskName === 'default';
  return shouldRemove;
}));

gulp.task('build-plunkers', function () {
  return plunkerBuilder.buildPlunkers(EXAMPLES_PATH, LIVE_EXAMPLES_PATH, { errFn: gutil.log });
});


// requires admin access
gulp.task('add-example-boilerplate', function () {
  var realPath = path.join(EXAMPLES_PATH, '/node_modules');
  var nodeModulesPaths = getNodeModulesPaths(EXAMPLES_PATH);

  nodeModulesPaths.forEach(function (linkPath) {
    gutil.log("symlinking " + linkPath + ' -> ' + realPath)
    fsUtils.addSymlink(realPath, linkPath);
  });

  realPath = path.join(EXAMPLES_PATH, '/typings');
  var typingsPaths = getTypingsPaths(EXAMPLES_PATH);
  typingsPaths.forEach(function (linkPath) {
    gutil.log("symlinking " + linkPath + ' -> ' + realPath)
    fsUtils.addSymlink(realPath, linkPath);
  });

  copyExampleBoilerplate();
});

gulp.task('remove-example-boilerplate', function () {
  var nodeModulesPaths = getNodeModulesPaths(EXAMPLES_PATH);
  nodeModulesPaths.forEach(function (linkPath) {
    fsUtils.removeSymlink(linkPath);
  });

  var typingsPaths = getTypingsPaths(EXAMPLES_PATH);
  typingsPaths.forEach(function (linkPath) {
    fsUtils.removeSymlink(linkPath);
  });

  var examplePaths = getExamplePaths(EXAMPLES_PATH);
  return deleteFiles(_exampleBoilerplateFiles, examplePaths).then(function () {
    var e2eSpecPaths = getE2eSpecPaths(EXAMPLES_PATH);
    return deleteFiles(['protractor.config.js'], e2eSpecPaths);
  })
});

////////////////////

// TODO: filter out all paths that are subdirs of another
// path in the result.
function getE2eSpecPaths(basePath) {
  var paths = getPaths(basePath, '*e2e-spec.js', true);
  return _.uniq(paths);
}

// copies boilerplate files to locations
// where an example app is found
// also copies protractor.config.js file
function copyExampleBoilerplate() {
  var sourceFiles = _exampleBoilerplateFiles.map(function (fn) {
    return path.join(EXAMPLES_PATH, fn);
  });
  var examplePaths = getExamplePaths(EXAMPLES_PATH);
  // copies protractor.config.js from _examples dir to each subdir that
  // contains a e2e-spec file.
  return copyFiles(sourceFiles, examplePaths).then(function () {
    var sourceFiles = [path.join(EXAMPLES_PATH, 'protractor.config.js')];
    var e2eSpecPaths = getE2eSpecPaths(EXAMPLES_PATH);
    return copyFiles(sourceFiles, e2eSpecPaths);
  });
}

function getNodeModulesPaths(basePath) {
  var paths = getExamplePaths(basePath).map(function(examplePath) {
    return path.join(examplePath, "/node_modules");
  });
  return paths;
}

function getTypingsPaths(basePath) {
  var paths = getExamplePaths(basePath).map(function(examplePath) {
    return path.join(examplePath, "/typings");
  });
  return paths;
}

function getExamplePaths(basePath, includeBase) {
  // includeBase defaults to false
  return getPaths(basePath, "example-config.json", includeBase)
}

function getPaths(basePath, filename, includeBase) {
  var filenames = getFilenames(basePath, filename, includeBase);
  var paths = filenames.map(function(fileName) {
    return path.dirname(fileName);
  });
  return paths;
}

function getFilenames(basePath, filename, includeBase) {
  // includeBase defaults to false
  var includePatterns = [path.join(basePath, "**/" + filename)];
  if (!includeBase) {
    // ignore (skip) the top level version.
    includePatterns.push("!" + path.join(basePath, "/" + filename));
  }
  var nmPattern = path.join(basePath, "**/node_modules/**");
  var filenames = globby.sync(includePatterns, {ignore: [nmPattern]});
  return filenames;
}

// returns a promise
function copyFiles(fileNames, destPaths) {
  var copy = Q.denodeify(fsExtra.copy);
  var copyPromises = [];
  destPaths.forEach(function(destPath) {
    fileNames.forEach(function(fileName) {
      var baseName = path.basename(fileName);
      var destName = path.join(destPath, baseName);
      var p = copy(fileName, destName, { clobber: true});
      copyPromises.push(p);
    });
  });
  return Q.all(copyPromises);
}

function deleteFiles(baseFileNames, destPaths) {
  var remove = Q.denodeify(fsExtra.remove);
  var delPromises = [];
  destPaths.forEach(function(destPath) {
    baseFileNames.forEach(function(baseFileName) {
      var destFileName = path.join(destPath, baseFileName);
      var p = remove(destFileName);
      delPromises.push(p);
    });
  });
  return Q.all(delPromises);
}
