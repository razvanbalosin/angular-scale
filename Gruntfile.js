'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      app: ['app'],
      assets: ['<%= project.app %>/assets'],
      css: ['<%= project.assets %>/sass/importer.scss']
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false
        },
        files: {
          '<%= project.assets %>/css/main.css':'<%= project.css %>'
        }
      }
    },
    watch: {
      sass: {
        files: ['<%= project.assets %>/sass/{,*/}*.{scss,sass}'],
        tasks: ['sass:dev']
      }
    },
    cssmin: {
       dist: {
          files: {
             '<%= project.assets %>/css/style.min.css': ['<%= project.assets %>/css/main.css']
          }
      }
    },
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        options: {
          beautify: false
        },
        files: [{
          src: ['<%= project.assets %>/js/annotated/**/{,*/}*.js'],
          dest: '<%= project.assets %>/js/scripts.min.js'
        }]
      }
    },
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          src: [
            '<%= project.app %>/app.js',
            '<%= project.app %>/modules/**/{,*/}*.js',
            '<%= project.app %>/components/**/{,*/}*.js',
            '<%= project.app %>/partials/**/{,*/}*.js',
          ],
          ext: '.annotated.js',
          dest: '<%= project.assets %>/js/annotated/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('default', [
    'watch'
  ]);

};
