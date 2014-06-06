/* --------------------------------------------------------
 * http://gruntjs.com/getting-started
 * http://gruntjs.com/sample-gruntfile
 *
 * https://www.npmjs.org/package/time-grunt
 * https://www.npmjs.org/package/load-grunt-tasks
 * https://www.npmjs.org/package/grunt-contrib-clean
 * https://www.npmjs.org/package/grunt-contrib-copy
 * https://www.npmjs.org/package/grunt-contrib-concat
 * https://www.npmjs.org/package/grunt-contrib-cssmin
 * https://www.npmjs.org/package/grunt-contrib-uglify
 * https://www.npmjs.org/package/grunt-targethtml
 * https://www.npmjs.org/package/grunt-contrib-htmlmin
 * https://github.com/lheberlie/grunt-manifest
 *
 * --------------------------------------------------------
 */

(function () {
    "use strict";
}());

module.exports = function (grunt) {
    // show elapsed time at the end
    require("time-grunt")(grunt);
    // load all grunt tasks
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dist: {
                files: {
                    "style/style.css" : "sass/style.scss"
                },
                options: {
                    style: "expanded",
                    debugInfo: false,
                    sourcemap: false
                }
            }
        },
        watch: {
            css: {
                files: "**/*.scss",
                tasks: ["sass"]
            }
        }
    });

    grunt.registerTask("default", ["watch"]);
};