var autoprefixer = require('autoprefixer');

module.exports = function tasks(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// SASS task
		sass: {
			options: {
				outputStyle: 'nested',
				sourceMap: true
			},
			dist: {
				files: {
					'build/main.css': 'scss/main.scss'
				}
			}
		},
		// PostCSS task
		postcss: {
			options: {
				map: true,
				processors: [
					autoprefixer
				]
			},
			dist: {
				src: 'build/**/*.css'
			}
		},
		// Concatenation task
		concat: {
			dist: {
				files: {
					'build/main.js': [
						'js/main.js'
					]
				}
			}
		},
		// Watch task
		watch: {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['sass', 'postcss']
			},
			js: {
				files: 'js/**/*.js',
				tasks: ['concat']
			},
			options: {
				livereload: true
			}
		}
	});

	// Node dependencies
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Run all tasks and keep watching when invoking grunt without args
	grunt.registerTask('default', ['concat', 'sass', 'postcss', 'watch']);
};
