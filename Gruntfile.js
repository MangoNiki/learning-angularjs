module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            build: {
                src: ["dest/scripts"]
            }
        },
        uglify: {
            options: {
                banner: '/*\n * This is AngularJS Demos\n * \n * Create Date: <%= grunt.template.today("yyyy-mm-dd") %>\n * \n * Powered By Niki \n */\n'
            },
            build_all: {
                files: [{
                    expand: true,
                    cwd: 'src/scripts',
                    src: '**/*.js',
                    dest: 'dest/scripts'
                }]
            }

        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js','src/scripts/**/*.js']
        },
        cssmin: {
            options: {
                report: 'gzip'
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['**/*.css'],
                    dest: 'dest/styles',
                }]
            }
        },
        imagemin:{
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg,jpeg,gif,webp,svg}'],
                    dest: 'dest/images'
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask("default", ['clean', 'uglify', 'jshint','cssmin','imagemin']);
};