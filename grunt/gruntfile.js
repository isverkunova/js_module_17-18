module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            dist1: {
                src: ['src/js/*.js'],
                dest: 'dist/js/script.min.js'
            },
            dist2: {
                src: ['src/css/*.css', '!*.min.css'],
                dest: 'dist/css/style.min.css'
            }
        },
        uglify: {
            dist: {
                src: ['dist/js/script.min.js'],
                dest: 'dist/js/script.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['dist/css/style.min.css'],
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);

};