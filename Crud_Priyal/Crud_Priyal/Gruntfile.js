'use strict';
// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'src/app/scss/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'src/build/style.css': 'src/app/scss/style.scss'
                }
            }
        },
        connect: {
            serve: {
                options: {
                    port: 8080,
                    keepalive: true,
                    base: '.',
                    open: {
                        target: 'http://127.0.0.1:8080'
                    },
                    hostname: '*',
                    open: true
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'src/build/*.css',
                        'src/app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './src'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['sass','connect','browserSync', 'watch']);
};         

   