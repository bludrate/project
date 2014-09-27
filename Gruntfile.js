module.exports = function(grunt) {
    var CONFIG = grunt.file.readJSON('config.json');

    grunt.initConfig({
        stylus: {
            compile: {
                files: CONFIG.STYLUS.FILES,
                compress: CONFIG.STYLUS.COMPRESS
            }
        },
        connect: {
            server: {
                options: {
                    port: CONFIG.SERVER_PORT,
                    base: 'app',
                    open: {
                        target: 'http://localhost:' + CONFIG.SERVER_PORT,
                        appName: 'chrome'
                    }
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            stylus: {
                files: CONFIG.WATCH.FILES.STYLUS,
                tasks: ['stylus',"autoprefixer"],
                options: {
                    spawn: false
                }
            },
            reload: {
                files: CONFIG.WATCH.FILES.JUST_RELOAD
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 5 version']
            },
            css: {
                expand: true,
                flatten: true,
                src: CONFIG.AUTOPREFIXER.SRC,
                dest:CONFIG.AUTOPREFIXER.DEST
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('build', ['stylus',"autoprefixer"]);
    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('default', ['connect','watch']);
};