'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        this.source = './CookBook/';
        this.scriptsPath = this.source + '/scripts';
        this.allJavaScript = [this.scriptsPath + '/**/*.js'];
        this.allTypeScript = this.scriptsPath + '/**/*.ts';

        this.typings = './tools/typings/';
        this.libraryTypeScriptDefinitions = './tools/typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'typescriptApp.d.ts';
    }
    return GulpConfig;
})();
module.exports = GulpConfig;
