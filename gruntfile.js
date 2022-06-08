const sass = require('node-sass');

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'compressed',
                implementation: sass,
            },
            dist: {
                files: {
                    'web/style.css': 'web/src/scss/style.scss',
                }
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')
                ]
            },
            dist: {
                src: 'web/style.css'
            }
        },

        uglify: {
            dist: {
                files: {
                    'web/script.js': ['web/src/js/**/*.js']
                }
            },
            options: {
                compress: false,
                mange: false,
                beautify: true
            }
        },

        watch: {
            files: [
                'web/src/scss/**/*.scss',
                'web/src/js/**/*.js',
            ],
            tasks: ['sass', 'postcss', 'uglify'],
            reload: {
                files: [
                    'web/style.css'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};